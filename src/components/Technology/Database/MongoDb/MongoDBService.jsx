import React from "react";
import { FaDatabase, FaServer, FaCogs, FaSyncAlt, FaRocket, FaShieldAlt, FaCloud, FaNetworkWired, FaObjectGroup } from "react-icons/fa";

const services = [
  {
    title: "MongoDB Database Design",
    description:
      "We design optimized database schemas for high-performance MongoDB applications, ensuring efficient data storage and retrieval.",
    icon: <FaObjectGroup className="text-green-500 text-4xl" />,
  },
  {
    title: "MongoDB Query Optimization",
    description:
      "We improve database query performance by implementing indexing, aggregation pipelines, and query optimization techniques.",
    icon: <FaCogs className="text-blue-500 text-4xl" />,
  },
  {
    title: "Scalable NoSQL Solutions",
    description:
      "We architect scalable NoSQL databases using MongoDB to support high-traffic applications and distributed systems.",
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
  },
  {
    title: "Real-Time Data Processing",
    description:
      "We implement MongoDB Change Streams and event-driven architectures to handle real-time data updates and synchronization.",
    icon: <FaSyncAlt className="text-red-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We enhance MongoDB performance through caching, indexing, and replication strategies.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Security & Access Control",
    description:
      "We implement authentication, role-based access control (RBAC), and encryption to secure MongoDB databases.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "MongoDB with Cloud Platforms",
    description:
      "We deploy and manage MongoDB databases on AWS, Google Cloud, and Azure for maximum scalability and reliability.",
    icon: <FaCloud className="text-orange-500 text-4xl" />,
  },
  {
    title: "Replication & Backup Strategies",
    description:
      "We configure MongoDB replication, sharding, and automated backup solutions to ensure data availability and redundancy.",
    icon: <FaNetworkWired className="text-indigo-500 text-4xl" />,
  },
  {
    title: "MongoDB Consulting & Support",
    description:
      "We provide expert consulting and ongoing support for MongoDB performance tuning, database management, and best practices.",
    icon: <FaServer className="text-yellow-500 text-4xl" />,
  },
];

const MongoDBService = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our MongoDB Development Services
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

export default MongoDBService;
