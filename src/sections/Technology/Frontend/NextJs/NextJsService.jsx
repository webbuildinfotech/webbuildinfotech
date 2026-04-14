import React from "react";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";
import {
  RocketIcon,
  CodeIcon,
  SearchIcon,
  CloudIbmIcon,
  CogLoopIcon,
} from "../../../../components/icons";

const services = [
  {
    title: "Next.js Web Development",
    description: "Build fast and scalable web apps using modern Next.js architecture.",
    icon: <CodeIcon className="text-blue-500 text-5xl" />,
  },
  {
    title: "SEO-Focused Pages",
    description: "Improve organic rankings with metadata, SSR, and structured rendering.",
    icon: <SearchIcon className="text-green-500 text-5xl" />,
  },
  {
    title: "Server-Side Rendering",
    description: "Use SSR for dynamic pages that require fast first-load performance.",
    icon: <CloudIbmIcon className="text-purple-500 text-5xl" />,
  },
  {
    title: "Static Site Generation",
    description: "Generate high-speed static pages for content-rich and marketing websites.",
    icon: <CogLoopIcon className="text-yellow-500 text-5xl" />,
  },
  {
    title: "API Routes & Integrations",
    description: "Build backend-powered features directly with Next.js API routes.",
    icon: <CloudIbmIcon className="text-teal-500 text-5xl" />,
  },
  {
    title: "Performance Optimization",
    description: "Optimize caching, images, and bundling for better speed and UX.",
    icon: <RocketIcon className="text-red-500 text-5xl" />,
  },
];

const NextJsService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Next.js Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#6366f1"
              glowColor="#6366f180"
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

export default NextJsService;
