import { chatbotIntents, chatbotProfile } from "../../data/chatbotKnowledge";
import {
  CHATBOT_API_KEY,
  CHATBOT_API_URL,
  CONTACT_FORM_SCRIPT_URL,
  OPENROUTER_BILLING_MESSAGE,
  OPENROUTER_FALLBACK_MODEL,
  OPENROUTER_MODEL,
  OPENROUTER_PRIVACY_MESSAGE,
  OPENROUTER_SYSTEM_PROMPT,
  SHOULD_USE_OPENROUTER,
} from "./chatConfig";
import { toOpenRouterRole } from "./chatUtils";

const normalizeForMatch = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getWordSimilarity = (a, b) => {
  if (!a || !b) return 0;
  if (a === b) return 1;
  // Avoid false positives like "me" matching "meeting".
  if (a.length >= 4 && b.length >= 4 && (a.startsWith(b) || b.startsWith(a))) return 0.85;

  // Simple edit-distance similarity for typo tolerance.
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) dp[i][0] = i;
  for (let j = 0; j < cols; j += 1) dp[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }

  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - dp[a.length][b.length] / maxLen;
};

const hasFuzzyKeywordMatch = (question, keyword) => {
  const q = normalizeForMatch(question);
  const k = normalizeForMatch(keyword);
  if (!q || !k) return false;
  if (q.includes(k)) return true;

  const stopWords = new Set(["i", "me", "my", "to", "for", "a", "an", "the", "is", "am", "are"]);
  const qWords = q
    .split(" ")
    .filter(Boolean)
    .filter((word) => word.length >= 3 && !stopWords.has(word));
  const kWords = k.split(" ").filter(Boolean);

  if (kWords.length === 1) {
    return qWords.some((word) => getWordSimilarity(word, kWords[0]) >= 0.72);
  }

  // Multi-word phrases: compare each keyword word against nearby user words.
  let matchedCount = 0;
  for (const kw of kWords) {
    const best = qWords.reduce((max, qw) => Math.max(max, getWordSimilarity(qw, kw)), 0);
    if (best >= 0.7) matchedCount += 1;
  }
  return matchedCount / kWords.length >= 0.75;
};

const parseOpenRouterError = async (response) => {
  let errorMessage = "";
  try {
    const errorJson = await response.json();
    errorMessage = errorJson?.error?.message ?? "";
  } catch {
    errorMessage = "";
  }

  if (response.status === 402) return OPENROUTER_BILLING_MESSAGE;
  if (
    response.status === 404 &&
    typeof errorMessage === "string" &&
    errorMessage.toLowerCase().includes("privacy")
  ) {
    return OPENROUTER_PRIVACY_MESSAGE;
  }

  return `Chatbot API failed: ${response.status}`;
};

export const getBotReply = (question) => {
  const matchedIntent = chatbotIntents.find((intent) =>
    intent.keywords.some((keyword) => hasFuzzyKeywordMatch(question, keyword))
  );
  return matchedIntent ? matchedIntent.response : chatbotProfile.fallback;
};

export const submitLeadToContactScript = async (lead) => {
  if (!CONTACT_FORM_SCRIPT_URL) {
    throw new Error("Contact endpoint is not configured.");
  }

  const now = new Date();
  const date = now.toLocaleDateString("en-CA");
  const time = now.toLocaleTimeString("en-GB", { hour12: false });
  const body = new URLSearchParams({
    FullName: lead.fullName,
    Email: lead.email,
    Phone: lead.phone,
    Message: lead.project,
    Date: date,
    Time: time,
    Status: "Sent",
  }).toString();

  await fetch(CONTACT_FORM_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
};

export const requestChatbotApiReply = async (question, history, openRouterConversationRef) => {
  if (!CHATBOT_API_URL) return null;

  if (SHOULD_USE_OPENROUTER) {
    const fallbackRecentMessages = history.slice(-8).map((item) => ({
      role: toOpenRouterRole(item.sender),
      content: item.text,
    }));
    const conversationMessages =
      openRouterConversationRef.current.length > 0
        ? openRouterConversationRef.current
        : fallbackRecentMessages;

    const createOpenRouterCompletion = async (modelName, enableReasoning) =>
      fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHATBOT_API_KEY}`,
        },
        body: JSON.stringify({
          model: modelName,
          messages: [{ role: "system", content: OPENROUTER_SYSTEM_PROMPT }, ...conversationMessages],
          reasoning: { enabled: enableReasoning },
        }),
      });

    let response = await createOpenRouterCompletion(OPENROUTER_MODEL, true);
    if (!response.ok && response.status === 404 && OPENROUTER_FALLBACK_MODEL !== OPENROUTER_MODEL) {
      response = await createOpenRouterCompletion(OPENROUTER_FALLBACK_MODEL, false);
    }

    if (!response.ok) {
      throw new Error(await parseOpenRouterError(response));
    }

    const data = await response.json();
    const assistantMessage = data?.choices?.[0]?.message;
    const content = assistantMessage?.content;
    if (typeof content === "string" && content.trim()) {
      openRouterConversationRef.current = [
        ...openRouterConversationRef.current,
        {
          role: "assistant",
          content: content.trim(),
          reasoning_details: assistantMessage?.reasoning_details,
        },
      ];
      return content.trim();
    }
    return null;
  }

  const response = await fetch(CHATBOT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: question, history }),
  });

  if (!response.ok) {
    throw new Error(`Chatbot API failed: ${response.status}`);
  }

  const data = await response.json();
  if (typeof data === "string" && data.trim()) return data.trim();
  if (typeof data?.reply === "string" && data.reply.trim()) return data.reply.trim();
  if (typeof data?.message === "string" && data.message.trim()) return data.message.trim();
  return null;
};
