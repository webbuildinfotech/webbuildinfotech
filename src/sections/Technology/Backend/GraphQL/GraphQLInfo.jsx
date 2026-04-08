import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg";
const serviceImageFallback = "https://graphql.org/img/logo.svg";

const GraphQLInfo = () => {
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
            alt="GraphQL Service"
            onError={(e) => {
              if (e.currentTarget.src !== serviceImageFallback) {
                e.currentTarget.src = serviceImageFallback;
              }
            }}
            className="w-96 max-w-lg object-contain"
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
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            Flexible and Efficient <span className="text-pink-500">Data Query Language</span>
          </h2>
          <p className="text-grey-700 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            <span className="font-bold">GraphQL</span> is a powerful data query language that 
            allows clients to request only the data they need, improving efficiency and performance.
          </p>
          <p className="text-grey-700 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">real-time subscriptions, schema-based APIs, 
            and precise data fetching</span>, GraphQL enables optimized data communication between frontend and backend systems.
          </p>
          <p className="text-grey-700 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">GraphQL API development, 
            microservices integration, caching, and security</span>, ensuring high-performance and scalable applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphQLInfo;
