import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://cdn.simpleicons.org/javascript";

const JavaScriptInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="JavaScript Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-[#f7df1e] uppercase tracking-wider">
            Why Choose Modern JavaScript?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Flexible and Powerful <span className="text-[#f7df1e]">Web Engineering</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            Modern JavaScript (ES6+) enables clean syntax, modular architecture, and faster development
            across frontend and backend applications.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            We build production-grade JavaScript solutions with maintainable code patterns,
            efficient performance, and scalable app structure.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            From interactive user interfaces to API-driven features, JavaScript allows rapid iteration
            without compromising long-term maintainability and team collaboration.
          </p>
          <ul className="mt-5 space-y-2 text-grey-700 dark:text-grey-200 text-base">
            <li>• Reusable modules and clean ES6+ architecture.</li>
            <li>• Faster feature delivery with modern tooling ecosystem.</li>
            <li>• Scalable code patterns for growing products.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default JavaScriptInfo;
