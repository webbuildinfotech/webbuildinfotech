import React from "react";
import { FaLink, FaSyncAlt, FaClock, FaDatabase, FaBell, FaChartLine } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "System-to-System Integrations",
    description: "Connect apps and platforms to automate cross-tool data movement.",
    icon: <FaLink className="text-blue-500 text-5xl" />,
  },
  {
    title: "Trigger-Based Process Flows",
    description: "Set up event-driven automations for instant and accurate task execution.",
    icon: <FaSyncAlt className="text-green-500 text-5xl" />,
  },
  {
    title: "Task and Time Optimization",
    description: "Reduce manual effort with scheduled and condition-based automation logic.",
    icon: <FaClock className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Data Sync and Validation Pipelines",
    description: "Keep business data aligned with controlled syncing and error-safe handling.",
    icon: <FaDatabase className="text-purple-500 text-5xl" />,
  },
  {
    title: "Alerting and Notification Automation",
    description: "Send automatic alerts for approvals, failures, and status transitions.",
    icon: <FaBell className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Workflow Analytics and Improvement",
    description: "Monitor automation performance and continuously optimize process outcomes.",
    icon: <FaChartLine className="text-indigo-500 text-5xl" />,
  },
];

const WorkflowAutomationService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Workflow Automation Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#ff4f00"
              glowColor="#ff4f0080"
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

export default WorkflowAutomationService;
