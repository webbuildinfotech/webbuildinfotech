import React from "react";
import { FaCodeBranch, FaGithub, FaGitAlt, FaCheckCircle, FaTags, FaUsers } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Branching Strategy Design",
    description: "Define branching models for feature, release, and hotfix development flows.",
    icon: <FaCodeBranch className="text-blue-500 text-5xl" />,
  },
  {
    title: "Repository Setup and Standards",
    description: "Configure repository structure, permissions, and code ownership policies.",
    icon: <FaGithub className="text-grey-700 text-5xl" />,
  },
  {
    title: "Commit and Version Management",
    description: "Apply clean commit conventions and semantic release tagging practices.",
    icon: <FaGitAlt className="text-orange-500 text-5xl" />,
  },
  {
    title: "Pull Request Review Workflows",
    description: "Implement review checklists and approvals for consistent code quality.",
    icon: <FaCheckCircle className="text-green-500 text-5xl" />,
  },
  {
    title: "Release Tagging and Changelogs",
    description: "Track versions clearly with release notes and deployment history.",
    icon: <FaTags className="text-purple-500 text-5xl" />,
  },
  {
    title: "Team Collaboration Enablement",
    description: "Improve collaboration with issue templates, discussions, and project boards.",
    icon: <FaUsers className="text-cyan-500 text-5xl" />,
  },
];

const GitGithubService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our Git and GitHub Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#10a37f"
              glowColor="#10a37f80"
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

export default GitGithubService;
