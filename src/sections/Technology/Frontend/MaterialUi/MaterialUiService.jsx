import React from "react";
import { FaLayerGroup, FaPaintBrush, FaUniversalAccess, FaTachometerAlt, FaMobileAlt, FaCogs } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Reusable UI Component Systems",
    description: "Build scalable design systems with ready-to-use and custom MUI components.",
    icon: <FaLayerGroup className="text-blue-500 text-5xl" />,
  },
  {
    title: "Theme and Brand Customization",
    description: "Apply brand colors, typography, and spacing through centralized theme configuration.",
    icon: <FaPaintBrush className="text-indigo-500 text-5xl" />,
  },
  {
    title: "Accessible Interface Development",
    description: "Deliver keyboard-friendly and accessible experiences using MUI best practices.",
    icon: <FaUniversalAccess className="text-green-500 text-5xl" />,
  },
  {
    title: "Admin Panel and Dashboard UI",
    description: "Create clean data-heavy interfaces with responsive layouts and polished interactions.",
    icon: <FaTachometerAlt className="text-purple-500 text-5xl" />,
  },
  {
    title: "Responsive Product Screens",
    description: "Ensure smooth cross-device UI behavior for mobile-first and desktop-first products.",
    icon: <FaMobileAlt className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Performance and UI Refinement",
    description: "Optimize rendering and component structure for maintainable production apps.",
    icon: <FaCogs className="text-pink-500 text-5xl" />,
  },
];

const MaterialUiService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Material UI Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#007fff"
              glowColor="#007fff80"
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

export default MaterialUiService;
