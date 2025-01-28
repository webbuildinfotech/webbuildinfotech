import React from "react";
import { FaServer, FaCogs, FaDatabase, FaSyncAlt, FaRocket, FaShieldAlt, FaGlobe, FaUsers, FaMicrochip } from "react-icons/fa";

const services = [
  {
    title: "Express.js API Development",
    description:
      "We build robust REST and GraphQL APIs using Express.js to create fast and scalable backend solutions.",
    icon: <FaServer className="text-gray-500 text-4xl" />,
  },
  {
    title: "Real-Time Web Applications",
    description:
      "We develop real-time applications with WebSockets and Express.js to enable instant communication and data updates.",
    icon: <FaSyncAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: "Database Connectivity",
    description:
      "We integrate Express.js with MongoDB, PostgreSQL, MySQL, and Firebase for efficient backend data management.",
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
  },
  {
    title: "Microservices Architecture",
    description:
      "We design scalable microservices using Express.js to ensure modular and efficient backend services.",
    icon: <FaMicrochip className="text-red-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize Express.js applications using caching, clustering, and load balancing techniques.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Authentication & Security",
    description:
      "We implement JWT authentication, OAuth, and security best practices to protect Express.js applications.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "Scalable Web Applications",
    description:
      "We develop scalable web applications using Express.js and ensure optimized backend performance.",
    icon: <FaGlobe className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Enterprise Solutions",
    description:
      "Our team builds enterprise-grade applications with high security, scalability, and robust performance.",
    icon: <FaUsers className="text-orange-500 text-4xl" />,
  },
  {
    title: "Cloud & DevOps Deployment",
    description:
      "We deploy Express.js applications on AWS, Google Cloud, and Azure, ensuring a smooth CI/CD process.",
    icon: <FaCogs className="text-yellow-500 text-4xl" />,
  },
];

const ExpressJsService = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our Express.js Development Services
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

export default ExpressJsService;
