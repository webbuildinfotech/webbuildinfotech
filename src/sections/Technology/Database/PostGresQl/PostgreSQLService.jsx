import React from "react";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";
import { FaDatabase, FaCogs, FaSyncAlt, FaServer, FaRocket, FaShieldAlt, FaTools, FaCloud, FaChartBar } from "react-icons/fa";

const services = [
  {
    title: "Database Design & Optimization",
    description:
      "We create efficient and scalable PostgreSQL database schemas tailored to your application’s needs.",
    icon: <FaDatabase className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Query Optimization",
    description:
      "We enhance query performance using advanced indexing, partitioning, and optimization techniques.",
    icon: <FaCogs className="text-blue-500 text-4xl" />,
  },
  {
    title: "Replication & High Availability",
    description:
      "We configure PostgreSQL replication and clustering to ensure high availability and data consistency.",
    icon: <FaSyncAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Database Migration",
    description:
      "We help migrate data from other databases to PostgreSQL with minimal downtime and no data loss.",
    icon: <FaServer className="text-red-500 text-4xl" />,
  },
  {
    title: "Cloud Database Solutions",
    description:
      "We deploy and manage PostgreSQL databases on AWS RDS, Google Cloud, and Azure for maximum scalability.",
    icon: <FaCloud className="text-teal-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We improve database performance using caching, connection pooling, and query tuning.",
    icon: <FaRocket className="text-purple-500 text-4xl" />,
  },
  {
    title: "Database Security & Encryption",
    description:
      "We implement advanced security features, role-based access, and encryption to secure PostgreSQL databases.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "PostgreSQL Support & Maintenance",
    description:
      "We provide ongoing support and maintenance to ensure your PostgreSQL database runs smoothly.",
    icon: <FaTools className="text-orange-500 text-4xl" />,
  },
  {
    title: "Analytics & Business Intelligence",
    description:
      "We integrate PostgreSQL with BI tools to provide real-time analytics and actionable insights.",
    icon: <FaChartBar className="text-yellow-500 text-4xl" />,
  },
];

const PostgreSQLService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark text-grey-900 dark:text-grey-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-grey-900 dark:text-grey-50">
          🚀 Our PostgreSQL Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <InteractiveGradientCard
              key={index}
              className={cn(
                glassCardXL,
                "flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:scale-105"
              )}
              color="#6366f1"
              glowColor="#6366f180"
              borderRadius="0.75rem"
              width="100%"
              height="100%"
              backgroundColor="transparent"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50">{service.title}</h3>
              <p className="text-sm mt-3 text-grey-600 dark:text-grey-300 font-mooli tracking-wide">{service.description}</p>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostgreSQLService;
