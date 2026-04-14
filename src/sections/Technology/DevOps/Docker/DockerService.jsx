import React from "react";
import { FaCube, FaCloudUploadAlt, FaCogs, FaShieldAlt, FaSyncAlt, FaServer } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Containerized Application Setup",
    description: "Package app services into reliable containers for consistent execution.",
    icon: <FaCube className="text-blue-500 text-5xl" />,
  },
  {
    title: "Image Build and Registry Management",
    description: "Create optimized Docker images and manage secure registry workflows.",
    icon: <FaCloudUploadAlt className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Service Orchestration Foundations",
    description: "Design compose-based service architecture for local and server deployment.",
    icon: <FaCogs className="text-purple-500 text-5xl" />,
  },
  {
    title: "Security and Isolation Practices",
    description: "Harden containers with minimal images, env isolation, and runtime controls.",
    icon: <FaShieldAlt className="text-green-500 text-5xl" />,
  },
  {
    title: "CI/CD Container Workflows",
    description: "Integrate Docker builds into automated pipelines for faster releases.",
    icon: <FaSyncAlt className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Production Deployment Strategy",
    description: "Run containerized workloads with scalable and maintainable deployment patterns.",
    icon: <FaServer className="text-indigo-500 text-5xl" />,
  },
];

const DockerService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Docker DevOps Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#2496ed"
              glowColor="#2496ed80"
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

export default DockerService;
