import React from "react";
import { motion } from "framer-motion"; // For animations

const serviceImage = "/tech/angular.png"; // Replace with an actual Angular image

const AngularService = () => {
  return (
    <div className="bg-red-50 py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src={serviceImage}
            alt="Angular Service"
            className="w-full max-w-lg object-cover"
          />
        </motion.div>

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-red-600 uppercase tracking-wider">
            Why Choose Angular?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Scalable and Enterprise-Ready <span className="text-red-500">Frontend Framework</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            <span className="font-bold">Angular</span> is a powerful and full-featured 
            <span className="font-bold"> JavaScript framework</span> designed for building 
            <span className="font-bold"> scalable and dynamic web applications</span>. 
            Developed by Google, it offers a <span className="font-bold"> robust architecture</span> 
            for complex projects.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            With features like <span className="font-bold">TypeScript support, 
            two-way data binding, dependency injection</span>, and 
            <span className="font-bold"> a modular structure</span>, 
            Angular is perfect for enterprise applications and large-scale projects.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Our team specializes in <span className="font-bold">Angular development, 
            API integrations, UI/UX enhancements, and enterprise solutions</span>, 
            ensuring your applications are <span className="font-bold">secure, scalable, and future-ready</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AngularService;
