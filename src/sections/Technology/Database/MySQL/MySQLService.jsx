import React from "react";
import { FaDatabase, FaCogs, FaSyncAlt, FaServer, FaRocket, FaShieldAlt, FaTools, FaCloud, FaExchangeAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Database Design & Architecture",
    description:
      "We create optimized MySQL database schemas to ensure efficient data storage, retrieval, and performance.",
    icon: <FaDatabase className="text-blue-500 text-4xl" />,
  },
  {
    title: "Database Optimization",
    description:
      "We fine-tune MySQL databases by optimizing queries, indexing, and storage strategies to improve speed.",
    icon: <FaCogs className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Replication & High Availability",
    description:
      "We set up MySQL replication and clustering to ensure high availability and disaster recovery.",
    icon: <FaSyncAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Database Migration",
    description:
      "We seamlessly migrate data from other databases to MySQL, ensuring no data loss or downtime.",
    icon: <FaExchangeAlt className="text-red-500 text-4xl" />,
  },
  {
    title: "Cloud Database Solutions",
    description:
      "We deploy and manage MySQL databases on cloud platforms like AWS RDS, Google Cloud, and Azure.",
    icon: <FaCloud className="text-teal-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We enhance database performance through caching, indexing, and query optimization.",
    icon: <FaRocket className="text-purple-500 text-4xl" />,
  },
  {
    title: "Database Security & Backup",
    description:
      "We implement role-based access control, encryption, and automated backup strategies to secure MySQL databases.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "MySQL Support & Maintenance",
    description:
      "We provide ongoing support and maintenance for MySQL databases to ensure optimal performance and reliability.",
    icon: <FaTools className="text-orange-500 text-4xl" />,
  },
  {
    title: "Enterprise Solutions",
    description:
      "We build and manage large-scale enterprise-grade MySQL databases with complex data requirements.",
    icon: <FaServer className="text-indigo-500 text-4xl" />,
  },
];

const MySQLService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark text-grey-900 dark:text-grey-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-grey-900 dark:text-grey-50">
          🚀 Our MySQL Development Services
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
              color="#3b82f6"
              glowColor="#3b82f680"
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

export default MySQLService;
