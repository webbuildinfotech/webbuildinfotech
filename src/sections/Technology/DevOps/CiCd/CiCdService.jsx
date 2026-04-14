import React from "react";
import { FaCodeBranch, FaVial, FaRocket, FaBell, FaSyncAlt, FaClipboardCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Pipeline Architecture Setup",
    description: "Design CI/CD workflows for build, test, and deployment across environments.",
    icon: <FaCodeBranch className="text-blue-500 text-5xl" />,
  },
  {
    title: "Automated Testing Integration",
    description: "Integrate unit, integration, and lint checks into every pipeline run.",
    icon: <FaVial className="text-green-500 text-5xl" />,
  },
  {
    title: "Continuous Deployment Automation",
    description: "Automate releases with safe rollout strategies and environment controls.",
    icon: <FaRocket className="text-purple-500 text-5xl" />,
  },
  {
    title: "Build Monitoring and Alerts",
    description: "Track pipeline health with notifications for failures and release events.",
    icon: <FaBell className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Versioning and Rollback Flows",
    description: "Implement reliable version tagging and rollback mechanisms for stability.",
    icon: <FaSyncAlt className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Quality Gates and Approvals",
    description: "Add policy checks and approval stages before production deployment.",
    icon: <FaClipboardCheck className="text-indigo-500 text-5xl" />,
  },
];

const CiCdService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our CI/CD Pipeline Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#2088ff"
              glowColor="#2088ff80"
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

export default CiCdService;
