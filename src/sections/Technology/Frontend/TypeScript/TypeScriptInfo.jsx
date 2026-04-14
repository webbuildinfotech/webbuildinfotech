import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://cdn.simpleicons.org/typescript";

const TypeScriptInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="TypeScript Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-[#3178c6] uppercase tracking-wider">
            Why Choose TypeScript?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Type-Safe and Scalable <span className="text-[#3178c6]">JavaScript Development</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            TypeScript improves code quality with static typing, better tooling, and predictable interfaces.
            It helps teams build large applications with fewer runtime bugs and better maintainability.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team uses TypeScript across frontend and backend to keep code consistent,
            scalable, and easier to refactor in long-term projects.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            From strict API contracts and reusable utility types to safer state management,
            TypeScript gives your product a strong technical foundation as the team and feature set grow.
          </p>
          <ul className="mt-5 space-y-2 text-grey-700 dark:text-grey-200 text-base">
            <li>• Strict typing for components, APIs, and business logic.</li>
            <li>• Faster onboarding with self-documented interfaces and models.</li>
            <li>• Safer releases through better compile-time validation.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TypeScriptInfo;
