import React from "react";
import { motion } from "framer-motion";

const serviceImage = "/tech/html.png"; // Replace with an actual HTML5-related image

const HTML5Info = () => {
  return (
    <div className="bg-orange-50 py-20 px-6">
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
            alt="HTML5 Service"
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
          <h3 className="text-lg font-semibold text-orange-600 uppercase tracking-wider">
            Why Choose HTML5?
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-tight">
            Modern and Flexible <span className="text-orange-500">Frontend Markup</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            <span className="font-bold">HTML5</span> is the latest evolution of the 
            <span className="font-bold"> HyperText Markup Language</span>, 
            designed to create modern, responsive, and interactive web applications. 
            It includes powerful features like native video, audio, and canvas elements.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            With enhanced support for **SEO-friendly markup, mobile-first design, and API integration**, 
            HTML5 is the foundation of today's modern web applications.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Our team specializes in **HTML5 UI/UX design, API integration, and cross-browser 
            compatibility** to ensure seamless user experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HTML5Info;
