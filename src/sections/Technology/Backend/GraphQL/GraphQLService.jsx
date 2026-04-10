import React from "react";
import { FaDatabase, FaServer, FaCogs, FaExchangeAlt, FaRocket, FaShieldAlt, FaNetworkWired, FaCloud, FaSyncAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "GraphQL API Development",
    description:
      "We design and develop GraphQL APIs that allow efficient and flexible data retrieval for your applications.",
    icon: <FaNetworkWired className="text-pink-500 text-4xl" />,
  },
  {
    title: "GraphQL Schema Design",
    description:
      "We build structured and scalable GraphQL schemas to define relationships and ensure organized data flow.",
    icon: <FaCogs className="text-blue-500 text-4xl" />,
  },
  {
    title: "Microservices Integration",
    description:
      "We integrate GraphQL with microservices to create highly modular and maintainable architectures.",
    icon: <FaExchangeAlt className="text-red-500 text-4xl" />,
  },
  {
    title: "Real-Time Data with Subscriptions",
    description:
      "We implement GraphQL subscriptions to enable real-time updates and event-driven data flow.",
    icon: <FaSyncAlt className="text-purple-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize GraphQL queries using caching, pagination, and batch requests to improve speed and efficiency.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Authentication & Security",
    description:
      "We implement authentication mechanisms like JWT and OAuth to secure GraphQL APIs.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "GraphQL with Databases",
    description:
      "We connect GraphQL APIs to databases like MongoDB, PostgreSQL, and MySQL to manage structured and unstructured data.",
    icon: <FaDatabase className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Cloud Deployment",
    description:
      "We deploy GraphQL APIs on AWS, Google Cloud, and Azure, ensuring high availability and scalability.",
    icon: <FaCloud className="text-orange-500 text-4xl" />,
  },
  {
    title: "GraphQL Consulting & Support",
    description:
      "We offer consulting and ongoing support for GraphQL API development and performance improvements.",
    icon: <FaServer className="text-yellow-500 text-4xl" />,
  },
];

const GraphQLService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark text-grey-900 dark:text-grey-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-grey-900 dark:text-grey-50">
          🚀 Our GraphQL Development Services
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
              color="#ec4899"
              glowColor="#ec489980"
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

export default GraphQLService;
