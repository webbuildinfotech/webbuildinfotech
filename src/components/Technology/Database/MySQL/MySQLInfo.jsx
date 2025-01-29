import React from "react";
import { motion } from "framer-motion";

const serviceImage = "/tech/mysql.png"; // Replace with an actual MySQL-related image

const MySQLInfo = () => {
  return (
    <div className="bg-blue-50 py-20 px-6">
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
            alt="MySQL Service"
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
          <h3 className="text-lg font-semibold text-blue-600 uppercase tracking-wider">
            Why Choose MySQL?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Reliable and High-Performance <span className="text-blue-500">Relational Database</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">MySQL</span> is a powerful and widely used relational database 
            management system designed for **high performance and reliability**. It is an ideal choice 
            for structured data storage and efficient querying.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">ACID compliance, scalability, and cross-platform support</span>, 
            MySQL powers millions of websites and applications worldwide.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">MySQL database design, optimization, replication, 
            and migration</span>, ensuring your data is secure, accessible, and scalable.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MySQLInfo;
