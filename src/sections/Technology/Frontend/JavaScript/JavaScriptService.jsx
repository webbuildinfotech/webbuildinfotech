import React from "react";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";
import {
  CodeIcon,
  AppsIcon,
  CloudIbmIcon,
  RocketIcon,
  ApiIcon,
  CogLoopIcon,
} from "../../../../components/icons";

const services = [
  {
    title: "ES6+ Application Development",
    description: "Build modern web applications using latest JavaScript standards and best practices.",
    icon: <CodeIcon className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Component-Based Frontend Logic",
    description: "Develop reusable and maintainable UI modules with robust JavaScript patterns.",
    icon: <AppsIcon className="text-blue-500 text-5xl" />,
  },
  {
    title: "Backend JavaScript Services",
    description: "Create scalable server-side logic and APIs using JavaScript-powered runtimes.",
    icon: <CloudIbmIcon className="text-green-500 text-5xl" />,
  },
  {
    title: "Performance and Optimization",
    description: "Improve app speed with efficient rendering, bundling, and runtime strategies.",
    icon: <RocketIcon className="text-red-500 text-5xl" />,
  },
  {
    title: "Third-Party Integrations",
    description: "Connect payment, analytics, messaging, and external APIs into web workflows.",
    icon: <ApiIcon className="text-purple-500 text-5xl" />,
  },
  {
    title: "Maintenance and Refactoring",
    description: "Enhance legacy JavaScript codebases for reliability and long-term scalability.",
    icon: <CogLoopIcon className="text-indigo-500 text-5xl" />,
  },
];

const JavaScriptService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our JavaScript Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#f7df1e"
              glowColor="#f7df1e80"
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

export default JavaScriptService;
