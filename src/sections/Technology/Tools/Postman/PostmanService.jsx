import React from "react";
import { FaPlug, FaVial, FaBook, FaLayerGroup, FaBug, FaUsers } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "API Request Collection Design",
    description: "Create reusable API collections for development, testing, and QA flows.",
    icon: <FaPlug className="text-orange-500 text-5xl" />,
  },
  {
    title: "Automated API Testing",
    description: "Write Postman test scripts for response validation and contract checks.",
    icon: <FaVial className="text-blue-500 text-5xl" />,
  },
  {
    title: "API Documentation Workspaces",
    description: "Publish clear API documentation for frontend and external consumers.",
    icon: <FaBook className="text-green-500 text-5xl" />,
  },
  {
    title: "Environment and Variable Management",
    description: "Set up secure environment variables for local, staging, and production APIs.",
    icon: <FaLayerGroup className="text-purple-500 text-5xl" />,
  },
  {
    title: "Error Debugging and Validation",
    description: "Diagnose endpoint issues and data mismatches through structured test runs.",
    icon: <FaBug className="text-red-500 text-5xl" />,
  },
  {
    title: "Team Collaboration Workflows",
    description: "Enable shared API governance and faster onboarding through synced collections.",
    icon: <FaUsers className="text-cyan-500 text-5xl" />,
  },
];

const PostmanService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Postman API Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#ff6c37"
              glowColor="#ff6c3780"
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

export default PostmanService;
