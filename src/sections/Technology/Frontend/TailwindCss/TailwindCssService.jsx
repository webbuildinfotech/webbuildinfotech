import React from "react";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";
import {
  PaintBrushIcon,
  MobileIcon,
  LayerGroupIcon,
  RocketIcon,
  FigmaDevIcon,
  CodeIcon,
} from "../../../../components/icons";

const services = [
  {
    title: "Custom UI Design Systems",
    description: "Build consistent component styling with reusable utility-first patterns.",
    icon: <PaintBrushIcon className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Responsive Layout Development",
    description: "Create pixel-perfect experiences for mobile, tablet, and desktop screens.",
    icon: <MobileIcon className="text-blue-500 text-5xl" />,
  },
  {
    title: "Reusable Component Styling",
    description: "Standardize spacing, typography, and states across your full product UI.",
    icon: <LayerGroupIcon className="text-purple-500 text-5xl" />,
  },
  {
    title: "Fast Prototyping to Production",
    description: "Move from wireframe to production-ready interface in less time.",
    icon: <RocketIcon className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Figma to Tailwind Conversion",
    description: "Translate design files into clean and maintainable utility class structures.",
    icon: <FigmaDevIcon className="text-pink-500 text-5xl" />,
  },
  {
    title: "Clean Frontend Codebase",
    description: "Reduce CSS complexity with organized utility usage and component abstraction.",
    icon: <CodeIcon className="text-indigo-500 text-5xl" />,
  },
];

const TailwindCssService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Tailwind CSS Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#06b6d4"
              glowColor="#06b6d480"
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

export default TailwindCssService;
