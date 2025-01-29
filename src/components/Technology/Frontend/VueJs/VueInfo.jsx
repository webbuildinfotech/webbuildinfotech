import React from "react";
import { motion } from "framer-motion";
import { FaVuejs, FaCode, FaDatabase, FaCogs, FaCloud, FaRocket, FaSyncAlt, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "Vue.js Web Development",
    description:
      "We build highly interactive, scalable, and efficient Vue.js applications tailored for businesses of all sizes.",
    icon: <FaVuejs className="text-green-500 text-5xl" />,
  },
  {
    title: "Dynamic UI/UX Frameworks",
    description:
      "Our Vue.js solutions are designed with interactive UI/UX principles, ensuring smooth user experiences.",
    icon: <FaCode className="text-blue-500 text-5xl" />,
  },
  {
    title: "Vue.js State Management (Vuex & Pinia)",
    description:
      "We implement Vuex and Pinia for global state management, optimizing data flow in your applications.",
    icon: <FaCogs className="text-yellow-500 text-5xl" />,
  },
  {
    title: "API Integration: REST, GraphQL, Firebase",
    description:
      "We integrate APIs, GraphQL, and Firebase to provide real-time data synchronization and dynamic content updates.",
    icon: <FaCloud className="text-red-500 text-5xl" />,
  },
  {
    title: "Database Connectivity & Backend",
    description:
      "We connect Vue.js applications with databases like MongoDB, MySQL, and PostgreSQL for seamless data management.",
    icon: <FaDatabase className="text-indigo-500 text-5xl" />,
  },
  {
    title: "Performance Optimization & Lazy Loading",
    description:
      "Our team optimizes Vue.js applications using lazy loading, caching strategies, and SSR for speed and efficiency.",
    icon: <FaRocket className="text-teal-500 text-5xl" />,
  },
  {
    title: "Vue.js App Migration & Upgrades",
    description:
      "We help businesses migrate from legacy frameworks to Vue.js, ensuring enhanced UI, security, and maintainability.",
    icon: <FaSyncAlt className="text-orange-500 text-5xl" />,
  },
  {
    title: "Security & Authentication",
    description:
      "We implement OAuth, JWT authentication, and security best practices to protect Vue.js applications.",
    icon: <FaShieldAlt className="text-gray-500 text-5xl" />,
  },
];

const VueInfo = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            🚀 Our Vue.js Development Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            As a top Vue.js development company, we offer **scalable, high-performance, 
            and user-friendly applications** built with Vue.js.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Service Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 text-sm text-center mt-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VueInfo;
