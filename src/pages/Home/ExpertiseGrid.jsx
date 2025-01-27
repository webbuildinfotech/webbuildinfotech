import React from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaCloud, FaPlug, FaMobileAlt, FaTools } from "react-icons/fa";
import { services } from "../../data/jsonData";


const ExpertiseGrid = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-start mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mt-2 uppercase">
            Services
          </h2>
          <h6 className="text-lg font-semibold text-gray-400">
            Result Driven Solutions! What We Provide to Our Valued Customers
          </h6>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white p-6 rounded-lg shadow-md overflow-hidden transform transition duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-90"
      } hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r ${
        service.hoverFrom
      } ${service.hoverTo}`}
      style={{ transitionDelay: `${index * 500}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${service.colors} mb-4 text-4xl sm:text-5xl lg:text-6xl transition-colors duration-300 hover:text-white`}
      >
        {service.icon}
      </div>
      {/* Number */}
      <span className="absolute top-4 right-6 text-3xl font-bold text-gray-500 transition-colors duration-300 hover:text-white">
        {service.id}
      </span>
      {/* Title */}
      <h4 className="text-xl font-semibold transition-colors duration-300 hover:text-white">
        {service.title}
      </h4>
      {/* Description */}
      <p className="mt-2 transition-colors duration-300 hover:text-white">
        {service.description}
      </p>
      {/* Link */}
      <a
        href="#"
        className="text-blue-600 font-semibold hover:underline mt-4 block transition-all duration-300 hover:text-white"
      >
        Know more →
      </a>
    </div>
  );
};

export default ExpertiseGrid;
