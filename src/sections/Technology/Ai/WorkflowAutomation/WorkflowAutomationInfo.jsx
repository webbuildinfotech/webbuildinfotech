import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://cdn.simpleicons.org/zapier";

const WorkflowAutomationInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="Workflow Automation Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-[#ff4f00] uppercase tracking-wider">
            Why Choose Workflow Automation?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Smarter and Faster <span className="text-[#ff4f00]">Business Process Execution</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            Workflow automation connects tools, triggers actions, and reduces repetitive manual work
            across operations, sales, support, and internal systems.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            We design dependable automation pipelines with validation, monitoring, and fallback
            strategies to keep business processes efficient and reliable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowAutomationInfo;
