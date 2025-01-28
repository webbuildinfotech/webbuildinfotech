import React from "react";
import { FaServer, FaCogs, FaDatabase, FaSyncAlt, FaRocket, FaShieldAlt, FaCloud, FaNetworkWired, FaMicrochip } from "react-icons/fa";

const services = [
  {
    title: "NestJS API Development",
    description:
      "We build robust and scalable REST and GraphQL APIs using NestJS, leveraging TypeScript for maintainability.",
    icon: <FaServer className="text-red-500 text-4xl" />,
  },
  {
    title: "Microservices Architecture",
    description:
      "We design and implement microservices-based architectures using NestJS to enhance modularity and scalability.",
    icon: <FaMicrochip className="text-blue-500 text-4xl" />,
  },
  {
    title: "NestJS with Databases",
    description:
      "We integrate NestJS applications with MongoDB, PostgreSQL, MySQL, and Firebase for optimized data handling.",
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
  },
  {
    title: "GraphQL Integration",
    description:
      "We implement GraphQL APIs in NestJS, allowing flexible and precise data fetching for modern applications.",
    icon: <FaNetworkWired className="text-green-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize NestJS applications using caching, background jobs, and efficient request handling techniques.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Authentication & Security",
    description:
      "We integrate JWT, OAuth, and best security practices to protect NestJS applications from vulnerabilities.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "Real-Time Communication",
    description:
      "We build real-time applications using NestJS WebSockets for chat applications, live updates, and notifications.",
    icon: <FaSyncAlt className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Cloud Deployment",
    description:
      "We deploy NestJS applications on AWS, Google Cloud, and Azure, ensuring high availability and scalability.",
    icon: <FaCloud className="text-orange-500 text-4xl" />,
  },
  {
    title: "NestJS Consulting & Support",
    description:
      "We provide expert consulting and support for NestJS development, deployment, and performance improvements.",
    icon: <FaCogs className="text-yellow-500 text-4xl" />,
  },
];

const NestJsService = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our NestJS Development Services
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

export default NestJsService;
