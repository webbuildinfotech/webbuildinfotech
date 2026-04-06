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
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-grey-900 dark:text-grey-50">
          🚀 Our Angular Development Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-background-dark/90 shadow-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-grey-400 dark:border-grey-700"
            >
              {/* Service Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-grey-900 dark:text-grey-50">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm mt-3 text-grey-600 dark:text-grey-300 font-mooli tracking-wide">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AngularInfo;
