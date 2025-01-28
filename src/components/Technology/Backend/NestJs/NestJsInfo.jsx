import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://think360studio-media.s3.ap-south-1.amazonaws.com/photo/plugin/article/2022/nestjs-17102022.jpg"; // Replace with an actual NestJS-related image

const NestJsInfo = () => {
  return (
    <div className="bg-red-50 py-20 px-6">
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
            alt="NestJS Service"
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
          <h3 className="text-lg font-semibold text-red-600 uppercase tracking-wider">
            Why Choose NestJS?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Scalable and TypeScript-Powered <span className="text-red-500">Backend Framework</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">NestJS</span> is a progressive and TypeScript-based 
            <span className="font-bold"> Node.js framework</span> built on Express.js. It provides a 
            structured and scalable architecture for building high-performance backend applications.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With built-in support for <span className="font-bold">microservices, GraphQL, 
            WebSockets, and dependency injection</span>, NestJS is an ideal choice for 
            enterprise-grade applications.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">NestJS API development, 
            authentication systems, database integration, and cloud deployment</span>, ensuring 
            highly optimized and scalable applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NestJsInfo;
