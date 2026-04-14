import React from "react";
import { FaLink, FaExchangeAlt, FaShieldAlt, FaDatabase, FaSyncAlt, FaChartLine } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Third-Party API Integration",
    description: "Connect payment, CRM, messaging, and external service providers securely.",
    icon: <FaLink className="text-blue-500 text-5xl" />,
  },
  {
    title: "Bidirectional Data Sync",
    description: "Enable reliable two-way data movement between connected platforms.",
    icon: <FaExchangeAlt className="text-green-500 text-5xl" />,
  },
  {
    title: "Secure Authentication Flows",
    description: "Implement OAuth, token handling, and request validation best practices.",
    icon: <FaShieldAlt className="text-purple-500 text-5xl" />,
  },
  {
    title: "Data Mapping and Transformation",
    description: "Normalize payloads and transform data structures across integrated systems.",
    icon: <FaDatabase className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Automation Through Integrations",
    description: "Trigger automated workflows based on events from external APIs.",
    icon: <FaSyncAlt className="text-orange-500 text-5xl" />,
  },
  {
    title: "Integration Monitoring and Analytics",
    description: "Track integration health, failures, and throughput for ongoing optimization.",
    icon: <FaChartLine className="text-indigo-500 text-5xl" />,
  },
];

const ApiIntegrationsService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our API Integration Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#2b7fff"
              glowColor="#2b7fff80"
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

export default ApiIntegrationsService;
