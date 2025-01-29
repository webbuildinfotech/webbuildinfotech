import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://miro.medium.com/v2/resize:fit:1220/0*epnKnkKuLx2RAajt"; // Replace with an actual PostgreSQL-related image

const PostgreSQLInfo = () => {
  return (
    <div className="bg-indigo-50 py-20 px-6">
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
            alt="PostgreSQL Service"
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
          <h3 className="text-lg font-semibold text-indigo-600 uppercase tracking-wider">
            Why Choose PostgreSQL?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Advanced and Reliable <span className="text-indigo-500">Relational Database</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">PostgreSQL</span> is an open-source relational database 
            management system known for its **robustness, extensibility, and SQL compliance**. 
            It’s ideal for complex queries and large-scale applications.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">JSON/JSONB support, advanced indexing, 
            and ACID compliance</span>, PostgreSQL is the preferred choice for modern applications.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">PostgreSQL database design, 
            optimization, replication, and migration</span> to help you leverage its full potential.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PostgreSQLInfo;
