import React from "react";
import { FaNode, FaDatabase, FaServer, FaCloud, FaSyncAlt, FaShieldAlt, FaRocket, FaCog, FaUsers, FaMicrochip } from "react-icons/fa";

const services = [
  {
    title: "Node.js API Development",
    description:
      "We build high-performance REST and GraphQL APIs using Node.js to ensure fast and scalable backend systems.",
    icon: <FaNode className="text-green-500 text-4xl" />,
  },
  {
    title: "Real-Time Applications",
    description:
      "Our developers create real-time applications using WebSockets, ensuring smooth communication between clients and servers.",
    icon: <FaSyncAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: "Database Integration",
    description:
      "We integrate Node.js applications with MongoDB, MySQL, PostgreSQL, and Firebase for seamless data management.",
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
  },
  {
    title: "Serverless & Cloud Integration",
    description:
      "We deploy scalable Node.js applications on AWS Lambda, Google Cloud Functions, and Azure Functions.",
    icon: <FaCloud className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Microservices Architecture",
    description:
      "We design microservices-based architectures using Node.js to enhance scalability and maintainability.",
    icon: <FaMicrochip className="text-red-500 text-4xl" />,
  },
  {
    title: "Authentication & Security",
    description:
      "We implement JWT authentication, OAuth, and security best practices to protect your Node.js applications.",
    icon: <FaShieldAlt className="text-gray-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize Node.js applications using caching, load balancing, and performance tuning techniques.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Enterprise-Grade Applications",
    description:
      "Our team builds robust and enterprise-ready Node.js applications for large-scale businesses.",
    icon: <FaServer className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Consulting & Support",
    description:
      "We provide expert guidance and ongoing support for Node.js development and deployment.",
    icon: <FaUsers className="text-orange-500 text-4xl" />,
  },
];

const NodeJsService = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our Node.js Development Services
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

export default NodeJsService;
