import { LEAD_PROMPT } from "./chatConfig";
import { chatbotIntents, chatbotProfile } from "../../data/chatbotKnowledge";

export const toOpenRouterRole = (sender) => (sender === "user" ? "user" : "assistant");

export const formatMessageTime = (timestamp = Date.now()) =>
  new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
export const isValidPhone = (value) => /^\d{10}$/.test(value.trim());
export const cleanPhone = (value) => value.replace(/\D/g, "").slice(-10);

export const isLeadIntent = (text) => {
  const normalized = text.toLowerCase();
  return [
    "pricing",
    "price",
    "quote",
    "quotation",
    "contact",
    "call",
    "project",
    "start",
    "budget",
  ].some((keyword) => normalized.includes(keyword));
};

export const isLeadRefusalIntent = (text) => {
  const normalized = text.toLowerCase().trim();
  const compact = normalized.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const words = compact.split(" ").filter(Boolean);

  const strictMatches = [
    "don't share",
    "dont share",
    "do not share",
    "not share",
    "no personal info",
    "no info",
    "no details",
    "can't share",
    "cant share",
    "skip info",
    "without info",
    "without details",
    "privacy",
    "nahi share",
    "nai share",
    "nhi share",
    "mat pucho",
    "info mat lo",
    "detail mat lo",
    "personal mat pucho",
  ];

  if (strictMatches.some((keyword) => compact.includes(keyword))) {
    return true;
  }

  // Typo/partial tolerant checks (e.g. "i dont shar", "dont shre", "i dont waana share info")
  const hasDontIntent = /\b(dont|don't|do not|cant|can't|not)\b/.test(compact);
  const hasShareStem = /\b(sha|shar|share|shre|info|detail)\w*\b/.test(compact);
  if (hasDontIntent && hasShareStem) {
    return true;
  }

  // Hinglish/Hindi intent support with typo tolerance.
  const hasHindiNoIntent =
    /\b(nahi|nhi|nai|na|mat|mt|mana|avoid)\b/.test(compact) ||
    compact.includes("nahi") ||
    compact.includes("nhi") ||
    compact.includes("nai");
  if (hasHindiNoIntent && hasShareStem) {
    return true;
  }

  // Short refusals while lead flow is active, e.g. "not", "nahi", "no", "mt"
  if (/^(no|not|na|nahi|nhi|nai|mat|mt|dont|don't|cant|can't)$/i.test(compact)) {
    return true;
  }

  // Very common misspelling patterns explicitly.
  if (compact.includes("not sher") || compact.includes("dont sher") || compact.includes("nahi sher")) {
    return true;
  }

  // Fuzzy typo support for words like "sahere", "shere", etc.
  const negativeWordsExact = new Set([
    "dont",
    "don't",
    "not",
    "cant",
    "can't",
    "nahi",
    "nhi",
    "nai",
    "mat",
    "no",
    "na",
    "mt",
  ]);
  const negativeWordsFuzzy = ["dont", "cant", "nahi", "nhi", "nai"];
  const shareWords = ["share", "shere", "sahere", "sher", "info", "detail", "details"];
  const isNear = (a, b) => {
    if (!a || !b) return false;
    if (a === b) return true;
    const maxLen = Math.max(a.length, b.length);
    if (maxLen <= 2) return false;
    let diff = 0;
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) {
        i += 1;
        j += 1;
      } else {
        diff += 1;
        if (diff > 2) return false;
        if (a.length > b.length) i += 1;
        else if (b.length > a.length) j += 1;
        else {
          i += 1;
          j += 1;
        }
      }
    }
    diff += (a.length - i) + (b.length - j);
    return diff <= 2;
  };

  const hasNegativeWord =
    words.some((word) => negativeWordsExact.has(word)) ||
    words.some(
      (word) =>
        word.length >= 3 &&
        negativeWordsFuzzy.some((nw) => isNear(word, nw))
    );
  const hasShareLikeWord = words.some((word) => shareWords.some((sw) => isNear(word, sw)));
  if (hasNegativeWord && hasShareLikeWord) {
    return true;
  }

  return false;
};

export const isLeadConsentIntent = (text) => {
  const normalized = text.toLowerCase().trim();
  const compact = normalized.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  return [
    "i want to share",
    "i can share",
    "i will share",
    "contact me",
    "call me",
    "connect me",
    "connect with you",
    "connect with your team",
    "how can i connect",
    "how to connect",
    "how can i reach",
    "how to reach",
    "reach you",
    "reach your team",
    "can i reach",
    "can we connect",
    "you can contact me",
    "share details",
  ].some((keyword) => compact.includes(keyword));
};

export const isLikelyGibberish = (text) => {
  const cleaned = text.toLowerCase().replace(/[^a-z]/g, "");
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (words.length >= 2) return false;
  if (cleaned.length < 6) return false;
  const uniqueChars = new Set(cleaned).size;
  const hasNoVowels = !/[aeiou]/.test(cleaned);
  return uniqueChars <= 4 || hasNoVowels;
};

const normalizeForIntent = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getWordSimilarity = (a, b) => {
  if (!a || !b) return 0;
  if (a === b) return 1;
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

  return 1 - dp[a.length][b.length] / Math.max(a.length, b.length);
};

const getBestIntentResponse = (userText = "") => {
  const normalizedInput = normalizeForIntent(userText);
  if (!normalizedInput) return null;

  const inputWords = normalizedInput.split(" ").filter((word) => word.length >= 3);
  let bestIntent = null;
  let bestScore = 0;

  for (const intent of chatbotIntents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const normalizedKeyword = normalizeForIntent(keyword);
      if (!normalizedKeyword) continue;
      if (normalizedInput.includes(normalizedKeyword)) {
        score = Math.max(score, 1);
        continue;
      }
      const keywordWords = normalizedKeyword.split(" ").filter((word) => word.length >= 3);
      if (!keywordWords.length || !inputWords.length) continue;
      const wordMatches = keywordWords.filter((kw) =>
        inputWords.some((iw) => getWordSimilarity(iw, kw) >= 0.75)
      ).length;
      score = Math.max(score, wordMatches / keywordWords.length);
    }

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestScore >= 0.6 ? bestIntent?.response ?? null : null;
};

const enforceReplyLanguage = (reply, userText = "") => {
  const user = (userText || "").toLowerCase();
  const assistant = (reply || "").toLowerCase();

  const userLooksEnglishOrHinglish = /[a-z]/.test(user);
  if (!userLooksEnglishOrHinglish) {
    return reply;
  }

  const looksSpanish =
    /[¡¿]/.test(reply) ||
    /\b(de nada|gracias|si necesitas|av[ií]same|estoy aqu[ií]|hola|puedo ayudarte)\b/i.test(
      assistant
    );

  if (looksSpanish) {
    return "You're welcome! If you need any help, I am here. You can also ask about services, pricing, timeline, or contact.";
  }

  return reply;
};

export const normalizeAssistantReply = (reply, userText = "") => {
  if (!reply || typeof reply !== "string") {
    return getBestIntentResponse(userText) ?? chatbotProfile.fallback;
  }

  const compact = enforceReplyLanguage(reply, userText).replace(/\s+/g, " ").trim();
  const badPatterns = [
    "let's break down",
    "step by step",
    "we can use the following formula",
    "first, let's understand",
  ];

  if (badPatterns.some((pattern) => compact.toLowerCase().includes(pattern))) {
    return (
      getBestIntentResponse(userText) ??
      "I can help with services, pricing, timeline, and tech stack. Share your requirement in one line."
    );
  }

  if (compact) return compact;
  return getBestIntentResponse(userText) ?? chatbotProfile.fallback;
};

export const extractLeadDetails = (text, currentLead) => {
  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();
  const nextLead = { ...currentLead };

  const emailMatch = trimmed.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
  if (emailMatch && isValidEmail(emailMatch[0])) {
    nextLead.email = emailMatch[0];
  }

  const numeric = cleanPhone(trimmed);
  if (isValidPhone(numeric)) {
    nextLead.phone = numeric;
  }

  const namePatterns = [/^name\s*[:\-]\s*(.+)$/i, /^my name is\s+(.+)$/i, /^i am\s+(.+)$/i];
  for (const pattern of namePatterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]?.trim()) {
      nextLead.fullName = match[1].trim();
      break;
    }
  }

  const projectPatterns = [
    /^project\s*[:\-]\s*(.+)$/i,
    /^requirement\s*[:\-]\s*(.+)$/i,
    /^idea\s*[:\-]\s*(.+)$/i,
  ];
  for (const pattern of projectPatterns) {
    const match = trimmed.match(pattern);
    if (match?.[1]?.trim()) {
      nextLead.project = match[1].trim();
      break;
    }
  }

  if (!nextLead.project) {
    const likelyProjectText =
      trimmed.length >= 10 &&
      !emailMatch &&
      !isValidPhone(numeric) &&
      !lower.startsWith("name:") &&
      !lower.startsWith("my name is");
    if (likelyProjectText) {
      nextLead.project = trimmed;
    }
  }

  return nextLead;
};

export const getMissingLeadFields = (lead) => {
  const missing = [];
  if (!lead.fullName) missing.push("name");
  if (!lead.phone) missing.push("phone number");
  if (!lead.email) missing.push("email");
  if (!lead.project) missing.push("project summary");
  return missing;
};
