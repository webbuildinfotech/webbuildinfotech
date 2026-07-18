import React from "react";
import { motion } from "framer-motion"; // For animations

const serviceImage = "/tech/te.png"

const ReactService = () => {
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
            alt="React Service"
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
          <h3 className="text-lg font-semibold text-blue-600 uppercase tracking-wider">
            Why Choose React JS?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Scalable & Efficient <span className="text-blue-500">Frontend Solutions</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            React JS is a powerful <span className="font-bold">JavaScript library</span> for building 
            <span className="font-bold"> fast, interactive, and scalable</span> applications. With its 
            <span className="font-bold"> component-based architecture</span>, businesses can create reusable components, 
            enhance <span className="font-bold">user experience</span>, and optimize <span className="font-bold">performance</span> effortlessly.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Whether you’re a <span className="font-bold">startup</span> or a <span className="font-bold">large enterprise</span>, 
            React is the <span className="font-bold">#1 choice</span> for interactive UI components and 
            <span className="font-bold"> cross-platform</span> development. 
            Its seamless integration with <span className="font-bold">Redux, GraphQL, and state management</span> 
            ensures a smooth development process.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team delivers <span className="font-bold">custom React solutions</span>, including 
            <span className="font-bold"> SPA development, API integrations, UI/UX enhancements, and React Native apps</span>. 
            We ensure your applications are <span className="font-bold">future-ready</span> with industry best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReactService;
