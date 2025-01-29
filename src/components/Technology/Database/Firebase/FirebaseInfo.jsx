import React from "react";
import { motion } from "framer-motion";

const serviceImage = "/tech/firebase.png"; // Replace with an actual Firebase-related image

const FirebaseInfo = () => {
  return (
    <div className="bg-yellow-50 py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
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
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Real-Time and Serverless <span className="text-yellow-500">Backend Platform</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Firebase</span> is a cloud-based platform by Google that provides 
            tools for building real-time and serverless applications. It’s designed for developers to build, 
            improve, and grow their applications efficiently.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">real-time database, authentication, cloud storage, 
            and analytics</span>, Firebase simplifies backend development while enabling seamless app experiences.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Firebase integration, real-time syncing, 
            push notifications, and analytics solutions</span> to ensure modern and scalable applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FirebaseInfo;
