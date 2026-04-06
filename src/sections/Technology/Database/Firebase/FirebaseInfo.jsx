import React from "react";
import { motion } from "framer-motion";

const serviceImage = "/tech/firebase.png"; // Replace with an actual Firebase-related image

const FirebaseInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src={serviceImage}
            alt="Firebase Service"
            className="w-full max-w-lg object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-yellow-600 uppercase tracking-wider">
            Why Choose Firebase?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Real-Time and Serverless <span className="text-yellow-500">Backend Platform</span>
          </h2>
          <p className="text-grey-700 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Firebase</span> is a cloud-based platform by Google that provides 
            tools for building real-time and serverless applications. It’s designed for developers to build, 
            improve, and grow their applications efficiently.
          </p>
          <p className="text-grey-700 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">real-time database, authentication, cloud storage, 
            and analytics</span>, Firebase simplifies backend development while enabling seamless app experiences.
          </p>
          <p className="text-grey-700 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Firebase integration, real-time syncing, 
            push notifications, and analytics solutions</span> to ensure modern and scalable applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FirebaseInfo;
