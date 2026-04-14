import React from "react";
import { FaServer, FaRandom, FaLock, FaBolt, FaGlobe, FaWrench } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Reverse Proxy Configuration",
    description: "Set up Nginx as a secure proxy layer for backend services and APIs.",
    icon: <FaServer className="text-green-500 text-5xl" />,
  },
  {
    title: "Load Balancing Setup",
    description: "Distribute incoming traffic efficiently across multiple app instances.",
    icon: <FaRandom className="text-blue-500 text-5xl" />,
  },
  {
    title: "SSL and Security Hardening",
    description: "Enable HTTPS, headers, and security best practices for safer deployments.",
    icon: <FaLock className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Performance Optimization",
    description: "Improve response speed with caching, compression, and static asset tuning.",
    icon: <FaBolt className="text-orange-500 text-5xl" />,
  },
  {
    title: "Domain and Routing Rules",
    description: "Configure domains, subdomains, and route handling for multi-service apps.",
    icon: <FaGlobe className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Maintenance and Monitoring",
    description: "Maintain stable server behavior with logs, diagnostics, and updates.",
    icon: <FaWrench className="text-indigo-500 text-5xl" />,
  },
];

const NginxService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Nginx DevOps Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#009639"
              glowColor="#00963980"
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

export default NginxService;
