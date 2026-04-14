import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://cdn.simpleicons.org/postman";

const RestApiInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="REST API Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-[#f97316] uppercase tracking-wider">
            Why Choose REST API Development?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Reliable and Scalable <span className="text-[#f97316]">Backend Communication</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            We design REST APIs with clear endpoint contracts, secure authentication,
            and consistent response structures for frontend and third-party integrations.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our API architecture focuses on performance, maintainability, and long-term
            scalability for SaaS products, admin systems, and enterprise platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RestApiInfo;
