import React from "react";
import { FaProjectDiagram, FaRobot, FaCogs, FaPlug, FaBolt, FaChartLine } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Visual AI Workflow Design",
    description: "Build and maintain LLM flows through node-based orchestration architecture.",
    icon: <FaProjectDiagram className="text-blue-500 text-5xl" />,
  },
  {
    title: "Agent and Chain Development",
    description: "Create intelligent agent pipelines with prompt chains and tool calling.",
    icon: <FaRobot className="text-purple-500 text-5xl" />,
  },
  {
    title: "Custom Logic and Automation",
    description: "Embed business rules and custom integrations into AI workflow execution.",
    icon: <FaCogs className="text-green-500 text-5xl" />,
  },
  {
    title: "External API Integrations",
    description: "Connect Flowise with CRMs, databases, and third-party service endpoints.",
    icon: <FaPlug className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Performance and Cost Optimization",
    description: "Tune model usage and runtime behavior for stable production operations.",
    icon: <FaBolt className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Monitoring and Improvement Loops",
    description: "Track workflow quality and continuously refine AI outcome reliability.",
    icon: <FaChartLine className="text-indigo-500 text-5xl" />,
  },
];

const FlowiseService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Flowise AI Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#EA4B71"
              glowColor="#EA4B7180"
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

export default FlowiseService;
