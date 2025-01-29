import React from "react";
import { motion } from "framer-motion"; // For Animations
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaPlug,
  FaExchangeAlt,
  FaTools,
  FaDatabase,
  FaCogs,
  FaCloud,
  FaRocket,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const services = [
  {
    title: "React JS for Web Development",
    description:
      "We specialize in building modern, scalable, and high-performance React JS web applications that are optimized for SEO, performance, and user engagement.",
    icon: <FaCode className="text-blue-500 text-5xl" />,
  },
  {
    title: "React JS Dynamic UI/UX Frameworks",
    description:
      "Our team designs and implements user-friendly, interactive UI/UX frameworks with React, ensuring seamless experiences across all devices.",
    icon: <FaPaintBrush className="text-green-500 text-5xl" />,
  },
  {
    title: "React Native Mobile Development",
    description:
      "We build high-performance cross-platform mobile apps using React Native, reducing development time while maintaining a native experience.",
    icon: <FaMobileAlt className="text-purple-500 text-5xl" />,
  },
  {
    title: "Redux & Context API for State Management",
    description:
      "We implement Redux and Context API to efficiently manage global state in React applications, ensuring optimized and structured data flow.",
    icon: <FaCogs className="text-yellow-500 text-5xl" />,
  },
  {
    title: "API Integration: REST, GraphQL, Firebase",
    description:
      "We integrate REST APIs, GraphQL, and Firebase with React, ensuring real-time data synchronization and scalable backend communication.",
    icon: <FaCloud className="text-red-500 text-5xl" />,
  },
  {
    title: "Database & Backend Connectivity",
    description:
      "We connect React applications to databases like MongoDB, MySQL, and PostgreSQL using APIs, ensuring secure and optimized data storage.",
    icon: <FaDatabase className="text-indigo-500 text-5xl" />,
  },
  {
    title: "React App Migration & Upgrades",
    description:
      "We help businesses migrate from legacy frameworks to React, upgrading applications to ensure modern UI, security, and maintainability.",
    icon: <FaExchangeAlt className="text-orange-500 text-5xl" />,
  },
  {
    title: "Performance Optimization & Lazy Loading",
    description:
      "We optimize React apps using lazy loading, code splitting, and caching strategies to improve speed and performance.",
    icon: <FaRocket className="text-teal-500 text-5xl" />,
  },
  {
    title: "Security & Authentication",
    description:
      "We implement JWT authentication, OAuth, and security best practices to protect React applications from vulnerabilities.",
    icon: <FaShieldAlt className="text-gray-500 text-5xl" />,
  },
];

const whyChooseUs = [
  {
    title: "Experienced React Developers",
    description:
      "Our developers have deep expertise in React, Redux, Context API, and the latest frontend technologies.",
    icon: <FaCode className="text-blue-500 text-4xl" />,
  },
  {
    title: "Performance & Scalability",
    description:
      "We build highly scalable applications optimized for speed and seamless user experience.",
    icon: <FaChartLine className="text-green-500 text-4xl" />,
  },
  {
    title: "Security & Compliance",
    description:
      "We follow industry-standard security protocols to ensure safe and compliant React applications.",
    icon: <FaShieldAlt className="text-red-500 text-4xl" />,
  },
];

const ReactInfo = () => {
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
            🚀 Our React JS Development Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            As a top React JS development company, we leverage the power of React
            to build **high-performance, scalable, and user-friendly applications**.
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

         {/* Why Choose Us Section */}
         <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
         <h3 className="text-3xl font-semibold text-gray-800 text-center">
           Why Choose Our React JS Services?
         </h3>
         <p className="text-gray-600 text-lg text-center mt-4">
           We provide end-to-end React JS development solutions to help
           businesses achieve digital transformation. Here’s why we stand out:
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
           {whyChooseUs.map((reason, index) => (
             <div
               key={index}
               className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
             >
               <div className="mb-4">{reason.icon}</div>
               <h4 className="text-xl font-semibold text-gray-800 text-center">
                 {reason.title}
               </h4>
               <p className="text-gray-600 text-center mt-2">{reason.description}</p>
             </div>
           ))}
         </div>
       </div>
    </div>
  );
};

export default ReactInfo;
