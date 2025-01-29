import React from "react";
import { motion } from "framer-motion";

const serviceImage = "/tech/mongo.png"; // Replace with an actual MongoDB-related image

const MongoDBInfo = () => {
  return (
    <div className="bg-green-50 py-20 px-6">
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
            alt="MongoDB Service"
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
          <h3 className="text-lg font-semibold text-green-600 uppercase tracking-wider">
            Why Choose MongoDB?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Scalable and High-Performance <span className="text-green-500">NoSQL Database</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">MongoDB</span> is a document-based NoSQL database 
            designed for **scalability, flexibility, and high-performance applications**.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With support for <span className="font-bold">JSON-like documents, real-time analytics, 
            and distributed clusters</span>, MongoDB is a preferred database for modern web applications.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">MongoDB database design, performance optimization, 
            replication strategies, and security enhancements</span> to ensure a robust and scalable data infrastructure.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MongoDBInfo;
