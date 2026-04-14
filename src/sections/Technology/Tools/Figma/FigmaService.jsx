import React from "react";
import { FaDraftingCompass, FaPalette, FaMobileAlt, FaLayerGroup, FaUsers, FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "UI Design System Setup",
    description: "Create scalable design systems with reusable components and variants.",
    icon: <FaDraftingCompass className="text-purple-500 text-5xl" />,
  },
  {
    title: "Brand and Visual Consistency",
    description: "Standardize typography, color, spacing, and visual hierarchy across screens.",
    icon: <FaPalette className="text-pink-500 text-5xl" />,
  },
  {
    title: "Responsive Screen Planning",
    description: "Design adaptive layouts for mobile, tablet, and desktop experiences.",
    icon: <FaMobileAlt className="text-blue-500 text-5xl" />,
  },
  {
    title: "Component Handoff Readiness",
    description: "Prepare clean design specs and tokens for efficient frontend implementation.",
    icon: <FaLayerGroup className="text-green-500 text-5xl" />,
  },
  {
    title: "Real-Time Team Collaboration",
    description: "Enable designers and developers to work together with shared files and comments.",
    icon: <FaUsers className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Design QA and Validation",
    description: "Perform UI quality checks to ensure precise implementation against designs.",
    icon: <FaCheckCircle className="text-orange-500 text-5xl" />,
  },
];

const FigmaService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Figma Collaboration Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#a259ff"
              glowColor="#a259ff80"
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

export default FigmaService;
