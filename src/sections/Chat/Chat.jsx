import React, { useEffect, useMemo, useRef, useState } from "react";
import { chatbotIntents, chatbotProfile } from "../../data/chatbotKnowledge";
import { ChatBotMessageIcon, CloseIcon, SendHorizontalIcon } from "../../components/icons";
import {
  LEAD_PROMPT,
  OPENROUTER_BILLING_MESSAGE,
  OPENROUTER_PRIVACY_MESSAGE,
  SHOULD_USE_OPENROUTER,
} from "./chatConfig";
import {
  extractLeadDetails,
  formatMessageTime,
  getMissingLeadFields,
  isLeadConsentIntent,
  isLeadRefusalIntent,
  isLikelyGibberish,
  normalizeAssistantReply,
} from "./chatUtils";
import { getBotReply, requestChatbotApiReply, submitLeadToContactScript } from "./chatService";

const CONTACT_INTENT_RESPONSE =
  chatbotIntents.find((intent) => intent.id === "contact")?.response ?? "";
const API_UNAVAILABLE_MESSAGE =
  "Live AI response is temporarily unavailable. Quick info: We provide website and web app development, backend APIs, e-commerce, SaaS, and AI integrations using React/Next.js, Node/NestJS, and modern databases. Please retry in a moment, or use /contact.";
const getApiFailureFallbackReply = (userText) => {
  const localReply = getBotReply(userText);
  return localReply !== chatbotProfile.fallback ? localReply : API_UNAVAILABLE_MESSAGE;
};

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [leadCapture, setLeadCapture] = useState({
    isActive: false,
    isSubmitted: false,
    hasDeclinedLeadShare: false,
    fullName: "",
    phone: "",
    email: "",
    project: "",
  });
  const [messages, setMessages] = useState(() => [
    {
      id: "welcome",
      sender: "bot",
      text: chatbotProfile.greeting,
      timestamp: Date.now(),
    },
  ]);
  const messagesEndRef = useRef(null);
  const messageInputRef = useRef(null);
  const openRouterConversationRef = useRef([]);

  const hasMessages = useMemo(() => messages.length > 0, [messages.length]);

  useEffect(() => {
    if (!isChatOpen) {
      return;
    }

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isChatOpen]);

  useEffect(() => {
    if (!messageInputRef.current) {
      return;
    }

    messageInputRef.current.style.height = "auto";
    messageInputRef.current.style.height = `${messageInputRef.current.scrollHeight}px`;
  }, [input]);

  const handleSendMessage = async (textFromQuickReply) => {
    const trimmedInput = (textFromQuickReply ?? input).trim();
    if (!trimmedInput) {
      return;
    }

    const currentTime = Date.now();

    const userMessage = {
      id: `user-${currentTime}`,
      sender: "user",
      text: trimmedInput,
      timestamp: currentTime,
    };

    const nextHistory = [...messages, userMessage];
    if (SHOULD_USE_OPENROUTER) {
      openRouterConversationRef.current = [
        ...openRouterConversationRef.current,
        { role: "user", content: trimmedInput },
      ];
    }

    setMessages(nextHistory);
    setInput("");
    setIsBotTyping(true);

    let replyText = chatbotProfile.fallback;
    const hasConsentToShare = isLeadConsentIntent(trimmedInput);
    const normalizedInput = trimmedInput.toLowerCase();
    const isExplicitContactTrigger = normalizedInput === "contact";
    const isNonContactIntentSelection = ["services", "pricing", "timeline"].includes(normalizedInput);
    const wasLeadActive = leadCapture.isActive;

    const nextLeadState = extractLeadDetails(trimmedInput, {
      ...leadCapture,
      hasDeclinedLeadShare: hasConsentToShare ? false : leadCapture.hasDeclinedLeadShare,
      isActive:
        leadCapture.isActive ||
        ((isExplicitContactTrigger || hasConsentToShare) &&
          (!leadCapture.hasDeclinedLeadShare || hasConsentToShare)),
    });

    const hasLeadDataUpdate =
      nextLeadState.fullName !== leadCapture.fullName ||
      nextLeadState.phone !== leadCapture.phone ||
      nextLeadState.email !== leadCapture.email ||
      nextLeadState.project !== leadCapture.project;

    const shouldBypassLeadCapture =
      wasLeadActive &&
      !hasConsentToShare &&
      !hasLeadDataUpdate &&
      (isNonContactIntentSelection || !isExplicitContactTrigger);

    if (isLeadRefusalIntent(trimmedInput)) {
      const cancelledLeadState = {
        isActive: false,
        isSubmitted: false,
        hasDeclinedLeadShare: true,
        fullName: "",
        phone: "",
        email: "",
        project: "",
      };
      setLeadCapture(cancelledLeadState);

      try {
        const apiReply = await requestChatbotApiReply(
          trimmedInput,
          nextHistory,
          openRouterConversationRef
        );
        replyText =
          normalizeAssistantReply(apiReply ?? "", trimmedInput) ||
          "No problem. You can ask about services, timeline, pricing range, or tech stack without sharing personal details.";
      } catch {
        replyText =
          "No problem. You can ask about services, timeline, pricing range, or tech stack without sharing personal details.";
      }

      const botMessage = {
        id: `bot-${currentTime + 1}`,
        sender: "bot",
        text: replyText,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);
      return;
    }

    if (!nextLeadState.isActive && isLikelyGibberish(trimmedInput)) {
      replyText =
        "I could not understand that clearly. Please share your requirement in one line (for example: ecommerce website, pricing, or timeline).";
      const botMessage = {
        id: `bot-${currentTime + 1}`,
        sender: "bot",
        text: replyText,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);
      return;
    }

    if (nextLeadState.isActive) {
      if (shouldBypassLeadCapture) {
        setLeadCapture((prev) => ({ ...prev, isActive: false }));
        try {
          const apiReply = await requestChatbotApiReply(
            trimmedInput,
            nextHistory,
            openRouterConversationRef
          );
          replyText = apiReply
            ? normalizeAssistantReply(apiReply, trimmedInput)
            : API_UNAVAILABLE_MESSAGE;
        } catch (error) {
          if (import.meta.env.DEV) {
            console.error("[Chatbot] API reply failed, using fallback.", error);
          }
          replyText = getApiFailureFallbackReply(trimmedInput);
        }

        const botMessage = {
          id: `bot-${currentTime + 1}`,
          sender: "bot",
          text: replyText,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsBotTyping(false);
        return;
      }

      const missingFields = getMissingLeadFields(nextLeadState);
      if (missingFields.length === 0 && !nextLeadState.isSubmitted) {
        try {
          await submitLeadToContactScript(nextLeadState);
          nextLeadState.isSubmitted = true;
          replyText =
            "Thanks! Your details are submitted successfully. Our team will contact you shortly with next steps.";
        } catch (error) {
          replyText =
            "I captured your details, but auto-submit is unavailable right now. Please also submit the Contact form once.";
          if (import.meta.env.DEV) {
            console.error("[Chatbot] Lead submit failed.", error);
          }
        }
      } else if (missingFields.length > 0) {
        replyText =
          missingFields.length === 4
            ? LEAD_PROMPT
            : `Thanks! Please share your ${missingFields.join(", ")}.`;
      } else if (nextLeadState.isSubmitted) {
        replyText = "Your request is already submitted. Our team will contact you soon.";
      }
      setLeadCapture(nextLeadState);
    } else {
      try {
        const apiReply = await requestChatbotApiReply(
          trimmedInput,
          nextHistory,
          openRouterConversationRef
        );
        replyText = apiReply
          ? normalizeAssistantReply(apiReply, trimmedInput)
          : API_UNAVAILABLE_MESSAGE;
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("[Chatbot] API reply failed, using fallback.", error);
        }
        const readableError = error instanceof Error ? error.message : "";
        if (
          readableError.includes("402") ||
          readableError.includes("privacy/guardrail restrictions")
        ) {
          replyText = readableError;
        } else {
          replyText = getApiFailureFallbackReply(trimmedInput);
        }
      }

      // If user has opted out from sharing details, don't return contact-capture response again.
      if (
        nextLeadState.hasDeclinedLeadShare &&
        CONTACT_INTENT_RESPONSE &&
        replyText.trim() === CONTACT_INTENT_RESPONSE.trim()
      ) {
        replyText =
          "No problem. You can ask service details, tech stack, timeline, or pricing range without sharing personal information.";
      }
    }

    const botMessage = {
      id: `bot-${currentTime + 1}`,
      sender: "bot",
      text: replyText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsBotTyping(false);
  };

  return (
    <div className="fixed bottom-4 right-3 z-[80] sm:bottom-5 sm:right-4 md:bottom-6 md:right-6">
      {!isChatOpen && (
        <button
          type="button"
          onClick={() => setIsChatOpen(true)}
          aria-label="Open chatbot"
          className="group relative inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white shadow-[0_12px_30px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_36px_rgba(37,99,235,0.55)] sm:h-14 sm:w-14"
        >
          <ChatBotMessageIcon className="text-[22px] sm:text-[26px]" />
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
        </button>
      )}

      {isChatOpen && (
        <div className="flex h-[56vh] w-[calc(100vw-1rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur dark:border-white/10 dark:bg-slate-950 sm:h-[70vh] sm:w-[350px] sm:max-w-[350px] lg:h-[640px]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-4 py-3 dark:border-white/10">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {chatbotProfile.brand}
              </p>
              <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Online now
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-base leading-none text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <CloseIcon className="text-[16px]" />
            </button>
          </div>

          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto bg-slate-50/70 px-2.5 py-2.5 dark:bg-slate-900/50 sm:px-3 sm:py-3">
            {hasMessages &&
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[94%] items-end gap-1.5 sm:max-w-[90%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                    <span
                      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold sm:h-7 sm:w-7 ${
                        message.sender === "user"
                          ? "bg-cyan-500 text-white"
                          : "border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {message.sender === "user" ? "You" : <ChatBotMessageIcon className="text-[14px]" />}
                    </span>

                    <div className="min-w-0">
                      <div className={`mb-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                        {message.sender === "user" ? "You" : "Assistant"}
                      </div>
                      <p
                        className={`rounded-xl px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm ${
                          message.sender === "user"
                            ? "rounded-br-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                            : "rounded-bl-sm border border-slate-200 bg-white text-slate-800 shadow-sm dark:border-white/10 dark:bg-slate-800 dark:text-slate-100"
                        }`}
                      >
                        {message.text}
                      </p>
                      <div className={`mt-1 text-[10px] text-slate-500 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                        {formatMessageTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {isBotTyping && (
              <div className="flex justify-start">
                <p className="max-w-[85%] rounded-xl rounded-bl-sm border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-slate-800 dark:text-slate-100">
                  Typing...
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex flex-wrap gap-1 border-t border-slate-200 px-2 py-2 dark:border-white/10 sm:gap-2 sm:px-3 sm:py-3">
            {chatbotProfile.quickReplies.map((quickReply) => (
              <button
                key={quickReply}
                type="button"
                onClick={() => handleSendMessage(quickReply)}
                className="rounded-full border border-cyan-300 bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white dark:border-cyan-900/60 dark:bg-cyan-900/20 dark:text-cyan-300 dark:hover:bg-cyan-600 dark:hover:text-white sm:px-3 sm:py-1 sm:text-xs"
              >
                {quickReply}
              </button>
            ))}
          </div>

          <div className="flex items-end gap-2 border-t border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-slate-950 sm:p-3">
            <textarea
              ref={messageInputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key !== "Enter") {
                  return;
                }

                if (event.ctrlKey || event.metaKey) {
                  event.preventDefault();
                  const { selectionStart, selectionEnd, value } = event.currentTarget;
                  const nextValue =
                    value.slice(0, selectionStart) + "\n" + value.slice(selectionEnd);
                  setInput(nextValue);

                  requestAnimationFrame(() => {
                    if (!messageInputRef.current) {
                      return;
                    }
                    const nextCursorPosition = selectionStart + 1;
                    messageInputRef.current.selectionStart = nextCursorPosition;
                    messageInputRef.current.selectionEnd = nextCursorPosition;
                  });
                  return;
                }

                event.preventDefault();
                handleSendMessage();
              }}
              disabled={isBotTyping}
              rows={1}
              className="min-h-[38px] w-full resize-none overflow-hidden rounded-xl border border-slate-300 bg-slate-50 px-2.5 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-400 sm:px-3 sm:text-sm"
              // placeholder="Ask about service, pricing, timeline... (Ctrl+Enter for new line)"
              placeholder="Ask about service, pricing, timeline..."
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={isBotTyping}
              className="inline-flex h-[38px] min-w-10 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-2.5 text-sm font-semibold text-white transition hover:from-cyan-600 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:h-[42px] sm:min-w-12 sm:px-3"
            >
              {isBotTyping ? "..." : <SendHorizontalIcon className="text-[20px] sm:text-[28px]" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
