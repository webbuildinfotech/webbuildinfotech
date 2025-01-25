import React from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaCloud, FaPlug, FaMobileAlt, FaTools } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "We specialize in crafting responsive, dynamic, and visually stunning web interfaces using cutting-edge frontend technologies.",
    icon: <FaCode />,
    colors: "text-purple-500 bg-purple-100",
    hoverFrom: "from-purple-500",
    hoverTo: "to-purple-700",
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Our backend services ensure robust, scalable, and efficient server-side solutions tailored to your business needs.",
    icon: <FaServer />,
    colors: "text-teal-500 bg-teal-100",
    hoverFrom: "from-teal-500",
    hoverTo: "to-teal-700",
  },
  {
    id: "03",
    title: "JavaScript Technologies",
    description:
      "Expertise in modern JavaScript frameworks like React, Angular, and Vue for building fast and interactive applications.",
    icon: <FaTools />,
    colors: "text-blue-500 bg-blue-100",
    hoverFrom: "from-blue-500",
    hoverTo: "to-blue-700",
  },
  {
    id: "04",
    title: "API Development",
    description:
      "We design and implement secure, high-performance APIs to ensure seamless integration across platforms.",
    icon: <FaPlug />,
    colors: "text-green-500 bg-green-100",
    hoverFrom: "from-green-500",
    hoverTo: "to-green-700",
  },
  {
    id: "05",
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile apps with React Native, Flutter, and more to extend your business to mobile platforms.",
    icon: <FaMobileAlt />,
    colors: "text-orange-500 bg-orange-100",
    hoverFrom: "from-orange-500",
    hoverTo: "to-orange-700",
  },
  {
    id: "06",
    title: "Cloud Solutions",
    description:
      "Providing scalable cloud services with AWS, Azure, and Google Cloud to power your web applications.",
    icon: <FaCloud />,
    colors: "text-blue-400 bg-blue-200",
    hoverFrom: "from-blue-400",
    hoverTo: "to-blue-600",
  },
];

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
