import React from "react";
import { motion } from "framer-motion"; // For animations

const serviceImage = "/tech/angular.png"; // Replace with an actual Angular image

const AngularService = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-28 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src={serviceImage}
            alt="Angular Service"
            className="w-full max-w-lg object-cover"
          />
        </motion.div>

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-red-600 uppercase tracking-wider">
            Why Choose Angular?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Scalable and Enterprise-Ready <span className="text-red-500">Frontend Framework</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Angular</span> is a powerful and full-featured 
            <span className="font-bold"> JavaScript framework</span> designed for building 
            <span className="font-bold"> scalable and dynamic web applications</span>. 
            Developed by Google, it offers a <span className="font-bold"> robust architecture</span> 
            for complex projects.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">TypeScript support, 
            two-way data binding, dependency injection</span>, and 
            <span className="font-bold"> a modular structure</span>, 
            Angular is perfect for enterprise applications and large-scale projects.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Angular development, 
            API integrations, UI/UX enhancements, and enterprise solutions</span>, 
            ensuring your applications are <span className="font-bold">secure, scalable, and future-ready</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AngularService;
