import React from "react";
import { FaComments, FaPenNib, FaRobot, FaBolt, FaShieldAlt, FaPuzzlePiece } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "AI Chatbot Development",
    description: "Build conversational assistants for support, lead capture, and guidance flows.",
    icon: <FaComments className="text-green-500 text-5xl" />,
  },
  {
    title: "Content and Text Automation",
    description: "Generate summaries, drafts, and structured responses from business data.",
    icon: <FaPenNib className="text-blue-500 text-5xl" />,
  },
  {
    title: "Custom Prompt Engineering",
    description: "Design high-quality prompts and guardrails for consistent AI behavior.",
    icon: <FaRobot className="text-purple-500 text-5xl" />,
  },
  {
    title: "Workflow Integration",
    description: "Connect OpenAI capabilities into existing app features and automation layers.",
    icon: <FaPuzzlePiece className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Performance and Cost Tuning",
    description: "Optimize token usage, response time, and model strategy for production scale.",
    icon: <FaBolt className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Security and Compliance Handling",
    description: "Implement safe input/output processing with robust data handling controls.",
    icon: <FaShieldAlt className="text-indigo-500 text-5xl" />,
  },
];

const OpenAiService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our OpenAI Integration Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#10a37f"
              glowColor="#10a37f80"
              borderRadius="0.75rem"
              width="100%"
              height="100%"
              backgroundColor="transparent"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 text-center">{service.title}</h3>
              <p className="text-grey-600 dark:text-grey-300 text-sm text-center mt-3 font-mooli tracking-wide">
                {service.description}
              </p>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenAiService;
