import React from "react";
import { FaCode, FaCogs, FaDatabase, FaLaptopCode, FaRocket, FaSyncAlt, FaToolbox, FaUserCog, FaGlobe, FaMobileAlt, FaMagic } from "react-icons/fa";

const services = [
  {
    title: "Custom App Development",
    description:
      "Looking for unique features in your app? We specialize in developing cutting-edge Angular solutions, incorporating the latest technologies for a seamless user experience.",
    icon: <FaCode className="text-red-500 text-4xl" />,
  },
  {
    title: "Angular UI/UX Development",
    description:
      "Our team excels in designing intuitive and responsive UI/UX for both mobile and desktop applications using Angular Material components.",
    icon: <FaLaptopCode className="text-yellow-500 text-4xl" />,
  },
  {
    title: "API Development and Migration",
    description:
      "Looking to enhance speed and efficiency? Trust us to handle API development and migration to Angular for increased performance and user accessibility.",
    icon: <FaSyncAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Progressive Web Applications",
    description:
      "Seeking a seamless mobile experience? We develop secure, mobile-friendly PWAs using the Angular framework to deliver fast and engaging applications.",
    icon: <FaGlobe className="text-blue-500 text-4xl" />,
  },

  {
    title: "Angular Support & Maintenance",
    description:
      "Our team provides regular testing and maintenance for Angular applications to ensure uninterrupted performance and security.",
    icon: <FaToolbox className="text-orange-500 text-4xl" />,
  },
  {
    title: "Angular Consulting",
    description:
      "Our experienced consultants guide you through every step of your Angular development journey to help you maximize potential.",
    icon: <FaUserCog className="text-teal-500 text-4xl" />,
  },
  {
    title: "AJAX Development",
    description:
      "Our developers specialize in AJAX integration, enabling seamless data exchange without requiring full page reloads.",
    icon: <FaDatabase className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Angular Upgradation",
    description:
      "We provide upgrade services to transition Angular applications to the latest versions, ensuring a smooth and secure migration.",
    icon: <FaCogs className="text-gray-500 text-4xl" />,
  },
  {
    title: "Angular Performance Optimization",
    description:
      "We fine-tune Angular applications for optimal performance using caching, lazy loading, and efficient rendering strategies.",
    icon: <FaRocket className="text-red-400 text-4xl" />,
  },
];

const AngularInfo = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our Angular Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-800"
            >
              {/* Service Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-400 text-sm mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngularInfo;
