import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://d1uxiwmpc9j4yg.cloudfront.net/images/all/71302-express.js-chrome-javascript-system-node.js-v8-runtime_1687631713.png"; // Replace with an actual Node.js-related image

const NodeJsInfo = () => {
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
            alt="Node.js Service"
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
            Why Choose Node.js?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            High-Performance <span className="text-green-500">Backend Framework</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Node.js</span> is a lightweight and fast runtime 
            for executing JavaScript on the server-side. Its event-driven and non-blocking 
            architecture ensures <span className="font-bold">high performance and scalability</span>.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">real-time data processing, API development, and microservices</span>, 
            Node.js is ideal for building modern applications that need speed and efficiency.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Node.js API development, database integrations, 
            authentication systems, and enterprise solutions</span>, ensuring <span className="font-bold">secure and scalable backend</span> systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NodeJsInfo;
