export const chatbotProfile = {
  brand: "Web Build Infotech Assistant",
  greeting:
    "Hi! I can help with services, pricing, timeline, and project discussions. Ask anything.",
  fallback:
    "Got it. Please share your requirement in one line (for example: business website, ecommerce app, pricing, or timeline) and I will guide you quickly.",
  quickReplies: ["Services", "Pricing", "Timeline", "Contact"],
};

export const chatbotIntents = [
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "what do you do",
      "offer",
      "development",
      "web",
      "app",
    ],
    response:
      "We build business websites, web apps, e-commerce platforms, SaaS products, backend APIs, dashboards, and AI-integrated solutions. Our team has hands-on delivery experience across startup and business projects.",
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "budget", "charge", "quotation", "quote"],
    response:
      "Pricing depends on scope and timeline. Share your requirement and we can suggest a suitable package with an estimate.",
  },
  {
    id: "timeline",
    keywords: ["timeline", "time", "duration", "how long", "delivery", "start"],
    response:
      "Typical delivery ranges from 2-12 weeks based on project complexity. MVPs are usually faster.",
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "email", "call", "meeting", "talk", "whatsapp"],
    response:
      "You can connect with us on the Contact page: /contact. You can also share your name, phone, and email here, and our team will reach out shortly.",
  },
  {
    id: "hello",
    keywords: ["hello", "hi", "hey", "hii", "helo", "hy"],
    response: "Hello! Great to connect with you. How can I help with your project today?",
  },
  {
    id: "good_morning",
    keywords: ["good morning", "gud morning", "morning", "gm"],
    response: "Good morning! What are you planning to build today?",
  },
  {
    id: "good_afternoon",
    keywords: ["good afternoon", "gud afternoon", "afternoon"],
    response: "Good afternoon! What do you need help with right now?",
  },
  {
    id: "good_evening",
    keywords: [
      "good evening",
      "gud evening",
      "evening",
      "good evenong",
      "good evenig",
      "good evning",
      "eve",
    ],
    response: "Good evening! What is on your mind today?",
  },
  {
    id: "acknowledgement",
    keywords: [
      "ok",
      "okay",
      "okk",
      "k",
      "fine",
      "great",
      "good",
      "thanks",
      "thank you",
      "thx",
      "done",
    ],
    response:
      "Perfect. You can ask me about services, pricing range, project timeline, or preferred tech stack.",
  },
  {
    id: "help",
    keywords: [
      "help",
      "need help",
      "i need help",
      "want help",
      "i want help",
      "i what help",
      "support",
      "assist",
      "guidance",
      "can you help",
    ],
    response:
      "Sure, I can help. You can ask about services, pricing, timeline, contact, or your project requirement.",
  },
  {
    id: "technology",
    keywords: [
      "react",
      "react js",
      "next js",
      "node",
      "node js",
      "nestjs",
      "angular",
      "vue",
      "mongodb",
      "postgresql",
      "mysql",
      "api",
      "tech stack",
      "technology",
      "react info",
      "react service",
      "technology info",
      "stack",
      "frontend",
      "backend",
      "web build infotech",
      "website and services",
      "service technology",
    ],
    response:
      "Our core stack includes React/Next.js for frontend, Node.js/NestJS for backend, and MongoDB/MySQL/PostgreSQL for data. We have practical implementation experience in scalable web apps, APIs, and SaaS systems.",
  },
];

