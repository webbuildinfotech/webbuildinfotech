import React from "react";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";
import {
  CodeIcon,
  ApiIcon,
  DatabaseIcon,
  ShieldAltIcon,
  RocketIcon,
  BugBoldDuotoneIcon,
} from "../../../../components/icons";

const services = [
  {
    title: "Type-Safe App Architecture",
    description: "Build robust application structure with strict typing and clear contracts.",
    icon: <CodeIcon className="text-blue-500 text-5xl" />,
  },
  {
    title: "API Type Integration",
    description: "Create strongly typed API layers for safer frontend-backend communication.",
    icon: <ApiIcon className="text-green-500 text-5xl" />,
  },
  {
    title: "Runtime Error Reduction",
    description: "Catch common issues during development before they reach production.",
    icon: <BugBoldDuotoneIcon className="text-red-500 text-5xl" />,
  },
  {
    title: "Scalable Codebase Maintenance",
    description: "Keep large codebases easier to understand, refactor, and extend.",
    icon: <DatabaseIcon className="text-indigo-500 text-5xl" />,
  },
  {
    title: "Security Through Predictability",
    description: "Reduce risky edge cases with strongly typed data and validation patterns.",
    icon: <ShieldAltIcon className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Faster Team Development",
    description: "Improve developer velocity with better editor support and safer refactors.",
    icon: <RocketIcon className="text-purple-500 text-5xl" />,
  },
];

const TypeScriptService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our TypeScript Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#3178c6"
              glowColor="#3178c680"
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

export default TypeScriptService;
