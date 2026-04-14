import React from "react";
import { FaTasks, FaProjectDiagram, FaUsers, FaClock, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Project Board Setup",
    description: "Configure Scrum or Kanban boards tailored to team workflows and delivery style.",
    icon: <FaTasks className="text-blue-500 text-5xl" />,
  },
  {
    title: "Workflow and Status Design",
    description: "Define task states, issue types, and transitions for process clarity.",
    icon: <FaProjectDiagram className="text-purple-500 text-5xl" />,
  },
  {
    title: "Team Collaboration Management",
    description: "Enable smoother planning and coordination through role-based task ownership.",
    icon: <FaUsers className="text-green-500 text-5xl" />,
  },
  {
    title: "Sprint and Timeline Tracking",
    description: "Track sprint progress, deadlines, and cycle time with actionable visibility.",
    icon: <FaClock className="text-orange-500 text-5xl" />,
  },
  {
    title: "Reporting and Performance Insights",
    description: "Use dashboards and metrics to improve planning and execution consistency.",
    icon: <FaChartLine className="text-cyan-500 text-5xl" />,
  },
  {
    title: "Delivery Quality Governance",
    description: "Introduce checkpoints and acceptance criteria for reliable release outcomes.",
    icon: <FaCheckCircle className="text-indigo-500 text-5xl" />,
  },
];

const JiraTrelloService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Jira / Trello Management Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#0052cc"
              glowColor="#0052cc80"
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

export default JiraTrelloService;
