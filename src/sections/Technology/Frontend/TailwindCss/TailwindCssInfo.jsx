import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://cdn.simpleicons.org/tailwindcss";

const TailwindCssInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="Tailwind CSS Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-[#06b6d4] uppercase tracking-wider">
            Why Choose Tailwind CSS?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Utility-First and Rapid <span className="text-[#06b6d4]">UI Development</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            Tailwind CSS helps build modern interfaces quickly with reusable utility classes and
            consistent design tokens across components.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            We use Tailwind to create responsive, clean, and scalable UI systems that reduce
            custom CSS overhead and speed up product delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TailwindCssInfo;
