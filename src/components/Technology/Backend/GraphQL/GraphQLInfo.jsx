import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://images.cdn-files-a.com/uploads/4430217/800_627958487663f.png"; // Replace with an actual GraphQL-related image

const GraphQLInfo = () => {
  return (
    <div className="bg-pink-50 py-20 px-6">
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
            alt="GraphQL Service"
            className="w-96 max-w-lg object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-pink-600 uppercase tracking-wider">
            Why Choose GraphQL?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Flexible and Efficient <span className="text-pink-500">Data Query Language</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">GraphQL</span> is a powerful data query language that 
            allows clients to request only the data they need, improving efficiency and performance.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">real-time subscriptions, schema-based APIs, 
            and precise data fetching</span>, GraphQL enables optimized data communication between frontend and backend systems.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">GraphQL API development, 
            microservices integration, caching, and security</span>, ensuring high-performance and scalable applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GraphQLInfo;
