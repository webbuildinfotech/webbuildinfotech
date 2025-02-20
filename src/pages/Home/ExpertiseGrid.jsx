import React from "react";
import { useInView } from "react-intersection-observer";
import { services } from "../../data/jsonData";

const Services = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#bcb8ea6b] via-[#eee] to-[#453f86]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black uppercase tracking-wide">
            Services
          </h2>
          <p className="text-lg text-gray-900 mt-2">
            Result-Driven Solutions! What We Provide to Our Valued Customers
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white p-8 rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-90"
      } hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r ${service.hoverFrom} ${service.hoverTo}`}
      style={{ transitionDelay: `${index * 300}ms` }}
    >
      {/* Animated Icon */}
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${service.colors} text-4xl sm:text-5xl lg:text-6xl transition-all duration-500 hover:text-white`}
      >
        {service.icon}
      </div>

      {/* Animated Number */}
      <span className="absolute top-4 right-6 text-3xl font-bold text-gray-500 transition-all duration-500 hover:text-white">
        {service.id}
      </span>

      {/* Title */}
      <h4 className="mt-6 text-2xl font-semibold transition-all duration-500 hover:text-white">
        {service.title}
      </h4>

      {/* Description */}
      <p className="mt-3 text-gray-600 transition-all duration-500 hover:text-white">
        {service.description}
      </p>

      {/* Know More Link */}
      <a
        href="/services"
        className="text-blue-600 font-semibold hover:underline mt-4 block transition-all duration-500 hover:text-white"
      >
        Know more →
      </a>
    </div>
  );
};

export default Services;
