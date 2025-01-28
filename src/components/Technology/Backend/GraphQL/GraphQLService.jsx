import React from "react";
import { FaDatabase, FaServer, FaCogs, FaExchangeAlt, FaRocket, FaShieldAlt, FaNetworkWired, FaCloud, FaSyncAlt } from "react-icons/fa";

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
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our GraphQL Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-800"
            >
              {/* Service Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-400 text-sm mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphQLService;
