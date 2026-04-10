import React from "react";
import { FaDatabase, FaCloud, FaBell, FaSyncAlt, FaRocket, FaShieldAlt, FaUserAlt, FaChartLine, FaCogs } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";

const services = [
  {
    title: "Real-Time Database",
    description:
      "We leverage Firebase's real-time database to build dynamic apps that sync data across users instantly.",
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Authentication Solutions",
    description:
      "We implement Firebase Authentication for secure sign-ins with email, social media, and custom providers.",
    icon: <FaUserAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: "Cloud Firestore Integration",
    description:
      "We use Firebase Firestore to build scalable and flexible database solutions for modern apps.",
    icon: <FaCloud className="text-purple-500 text-4xl" />,
  },
  {
    title: "Push Notifications",
    description:
      "We enable push notifications using Firebase Cloud Messaging (FCM) to enhance user engagement.",
    icon: <FaBell className="text-red-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize Firebase apps using caching, data rules, and serverless functions for improved performance.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Security & Access Control",
    description:
      "We implement Firebase rules and security layers to protect your app's data from unauthorized access.",
    icon: <FaShieldAlt className="text-gray-600 text-4xl" />,
  },
  {
    title: "Real-Time Syncing",
    description:
      "We enable seamless real-time syncing across devices using Firebase’s robust infrastructure.",
    icon: <FaSyncAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Analytics & Insights",
    description:
      "We configure Firebase Analytics to track user interactions and gather actionable insights for your app.",
    icon: <FaChartLine className="text-orange-500 text-4xl" />,
  },
  {
    title: "Custom Backend Logic",
    description:
      "We use Firebase Cloud Functions to create serverless backend logic for scalable applications.",
    icon: <FaCogs className="text-indigo-500 text-4xl" />,
  },
];

const FirebaseService = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark text-grey-900 dark:text-grey-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-grey-900 dark:text-grey-50">
          🚀 Our Firebase Development Services
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
              color="#f59e0b"
              glowColor="#f59e0b80"
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

export default FirebaseService;
