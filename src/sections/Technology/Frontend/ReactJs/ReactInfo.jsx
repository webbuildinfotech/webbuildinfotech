import React from "react";
import { motion } from "framer-motion"; // For Animations
import { cn } from "@/lib/utils";
import { glassCardLG, glassCardXL } from "@/lib/glassCard";
import { InteractiveGradientCard } from "../../../../components/card";
import {
  CodeIcon,
  PaintBrushIcon,
  MobileIcon,
  CardExchangeIcon,
  DatabaseIcon,
  CogLoopIcon,
  CloudIbmIcon,
  RocketIcon,
  ShieldAltIcon,
  ChartLineIcon,
} from "../../../../components/icons";

const services = [
  {
    title: "React JS for Web Development",
    description:
      "We specialize in building modern, scalable, and high-performance React JS web applications that are optimized for SEO, performance, and user engagement.",
    icon: <CodeIcon className="text-blue-500 text-5xl" />,
  },
  {
    title: "React JS Dynamic UI/UX Frameworks",
    description:
      "Our team designs and implements user-friendly, interactive UI/UX frameworks with React, ensuring seamless experiences across all devices.",
    icon: <PaintBrushIcon className="text-green-500 text-5xl" />,
  },
  {
    title: "React Native Mobile Development",
    description:
      "We build high-performance cross-platform mobile apps using React Native, reducing development time while maintaining a native experience.",
    icon: <MobileIcon className="text-purple-500 text-5xl" />,
  },
  {
    title: "Redux & Context API for State Management",
    description:
      "We implement Redux and Context API to efficiently manage global state in React applications, ensuring optimized and structured data flow.",
    icon: <CogLoopIcon className="text-yellow-500 text-5xl" />,
  },
  {
    title: "API Integration: REST, GraphQL, Firebase",
    description:
      "We integrate REST APIs, GraphQL, and Firebase with React, ensuring real-time data synchronization and scalable backend communication.",
    icon: <CloudIbmIcon className="text-red-500 text-5xl" />,
  },
  {
    title: "Database & Backend Connectivity",
    description:
      "We connect React applications to databases like MongoDB, MySQL, and PostgreSQL using APIs, ensuring secure and optimized data storage.",
    icon: <DatabaseIcon className="text-indigo-500 text-5xl" />,
  },
  {
    title: "React App Migration & Upgrades",
    description:
      "We help businesses migrate from legacy frameworks to React, upgrading applications to ensure modern UI, security, and maintainability.",
    icon: <CardExchangeIcon className="text-orange-500 text-5xl" />,
  },
  {
    title: "Performance Optimization & Lazy Loading",
    description:
      "We optimize React apps using lazy loading, code splitting, and caching strategies to improve speed and performance.",
    icon: <RocketIcon className="text-teal-500 text-5xl" />,
  },
  {
    title: "Security & Authentication",
    description:
      "We implement JWT authentication, OAuth, and security best practices to protect React applications from vulnerabilities.",
    icon: <ShieldAltIcon className="text-gray-500 text-5xl" />,
  },
];

const whyChooseUs = [
  {
    title: "Experienced React Developers",
    description:
      "Our developers have deep expertise in React, Redux, Context API, and the latest frontend technologies.",
    icon: <CodeIcon className="text-blue-500 text-4xl" />,
  },
  {
    title: "Performance & Scalability",
    description:
      "We build highly scalable applications optimized for speed and seamless user experience.",
    icon: <ChartLineIcon className="text-green-500 text-4xl" />,
  },
  {
    title: "Security & Compliance",
    description:
      "We follow industry-standard security protocols to ensure safe and compliant React applications.",
    icon: <ShieldAltIcon className="text-red-500 text-4xl" />,
  },
];

const ReactInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-screen bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto text-center px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl font-bold text-grey-900 dark:text-grey-50">
            🚀 Our React JS Development Services
          </h2>
          <p className="text-grey-600 dark:text-grey-300 max-w-3xl mx-auto mt-4 text-lg">
            As a top React JS development company, we leverage the power of React to build{" "}
            <strong className="font-semibold text-grey-800 dark:text-grey-100">
              high-performance, scalable, and user-friendly applications
            </strong>
            .
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
            >
              <InteractiveGradientCard
                className={cn(
                  glassCardXL,
                  "flex h-full flex-col items-center p-6 transition-transform duration-300 hover:scale-105"
                )}
                color="#60a5fa"
                glowColor="#60a5fa80"
                borderRadius="0.75rem"
                width="100%"
                height="100%"
                backgroundColor="transparent"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50 text-center">
                  {service.title}
                </h3>
                <p className="text-grey-600 dark:text-grey-300 text-sm text-center mt-3 font-mooli tracking-wide">
                  {service.description}
                </p>
              </InteractiveGradientCard>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section — inside container for same width/padding as grid above */}
        <div className={cn(glassCardLG, "mt-16 p-8")}>
          <h3 className="text-3xl font-semibold text-grey-900 dark:text-grey-50 text-center">
            Why Choose Our React JS Services?
          </h3>
          <p className="text-grey-600 dark:text-grey-300 text-lg text-center mt-4 font-mooli tracking-wide">
            We provide end-to-end React JS development solutions to help businesses achieve digital
            transformation. Here&apos;s why we stand out:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className={cn(glassCardLG, "flex flex-col items-center p-6")}
              >
                <div className="mb-4">{reason.icon}</div>
                <h4 className="text-xl font-semibold text-grey-900 dark:text-grey-50 text-center">
                  {reason.title}
                </h4>
                <p className="text-grey-600 dark:text-grey-300 text-center mt-2 font-mooli tracking-wide">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactInfo;
