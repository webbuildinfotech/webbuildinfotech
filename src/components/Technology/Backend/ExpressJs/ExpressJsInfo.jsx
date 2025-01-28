import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://blog.logrocket.com/wp-content/uploads/2020/12/express-middlewares-complete-guide.png"; // Replace with an actual Express.js-related image


const ExpressJsInfo = () => {
  return (
    <div className="bg-gray-100 py-20 px-6">
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
            alt="Express.js Service"
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
          <h3 className="text-lg font-semibold text-gray-700 uppercase tracking-wider">
            Why Choose Express.js?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Fast and Minimalist <span className="text-gray-500">Backend Framework</span>
          </h2>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Express.js</span> is a lightweight and flexible 
            <span className="font-bold"> web application framework</span> for Node.js. It simplifies 
            the process of building <span className="font-bold">scalable APIs, web applications, and microservices</span>.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            With built-in <span className="font-bold">routing, middleware support, and fast request handling</span>, 
            Express.js is a preferred choice for high-performance backend systems.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Express.js API development, real-time applications, 
            authentication solutions, and enterprise-level microservices</span>, ensuring 
            highly optimized backend performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpressJsInfo;
