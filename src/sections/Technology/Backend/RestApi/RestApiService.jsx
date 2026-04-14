import React from "react";
import { FaLink, FaShieldAlt, FaDatabase, FaTachometerAlt, FaCodeBranch, FaCogs } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Endpoint Architecture Design",
    description: "Plan clean, resource-based endpoint structures for long-term API growth.",
    icon: <FaLink className="text-blue-500 text-5xl" />,
  },
  {
    title: "Authentication and Authorization",
    description: "Implement secure access layers using JWT, role permissions, and middleware.",
    icon: <FaShieldAlt className="text-green-500 text-5xl" />,
  },
  {
    title: "Database and Data Mapping",
    description: "Create efficient query and serialization layers for consistent API responses.",
    icon: <FaDatabase className="text-purple-500 text-5xl" />,
  },
  {
    title: "Performance Optimization",
    description: "Improve API speed with caching, pagination, and optimized request handling.",
    icon: <FaTachometerAlt className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Versioning and Compatibility",
    description: "Manage safe API evolution with versioning strategies and backward compatibility.",
    icon: <FaCodeBranch className="text-pink-500 text-5xl" />,
  },
  {
    title: "Testing and Documentation",
    description: "Deliver production-ready APIs with automated tests and clear endpoint docs.",
    icon: <FaCogs className="text-indigo-500 text-5xl" />,
  },
];

const RestApiService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50 mb-10">
          🚀 Our REST API Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 transition-all duration-300 hover:scale-105"
              )}
              color="#f97316"
              glowColor="#f9731680"
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

export default RestApiService;
