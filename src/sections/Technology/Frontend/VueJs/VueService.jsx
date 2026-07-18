import React from "react";
import { motion } from "framer-motion"; // For animations

const serviceImage = "/tech/vuee.png"; // Replace with an actual Vue image

const VueService = () => {
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
            alt="Vue Service"
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
          <h3 className="text-lg font-semibold text-green-600 uppercase tracking-wider">
            Why Choose Vue.js?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Modern and Flexible <span className="text-green-500">Frontend Framework</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Vue.js</span> is a lightweight and progressive 
            <span className="font-bold"> JavaScript framework</span> used to build 
            <span className="font-bold"> high-performance and interactive user interfaces</span>. 
            It is simple to learn yet <span className="font-bold">powerful enough</span> 
            to handle complex web applications.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">Vuex for state management, 
            Vue Router for navigation</span>, and <span className="font-bold">server-side rendering</span>, 
            Vue.js provides a <span className="font-bold">scalable and efficient</span> solution 
            for modern web development.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Vue.js application development, 
            API integrations, UI/UX improvements, and enterprise solutions</span>, ensuring 
            your business benefits from <span className="font-bold">cutting-edge technology</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VueService;
