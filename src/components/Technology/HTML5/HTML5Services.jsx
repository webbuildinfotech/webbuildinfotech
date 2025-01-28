import React from "react";
import { FaHtml5, FaCode, FaMobileAlt, FaPaintBrush, FaDatabase, FaCogs, FaRocket, FaLaptopCode, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const services = [
  {
    title: "Responsive Web Development",
    description:
      "We create modern, fully responsive websites using HTML5, ensuring seamless performance across all devices and screen sizes.",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
  },
  {
    title: "HTML5 & CSS3 UI/UX Design",
    description:
      "Our team specializes in HTML5 and CSS3-based UI/UX design, ensuring interactive and visually appealing user experiences.",
    icon: <FaPaintBrush className="text-yellow-500 text-4xl" />,
  },
  {
    title: "HTML5 API Integration",
    description:
      "We integrate HTML5 APIs like Geolocation, WebSockets, and WebRTC to enhance functionality and create dynamic web applications.",
    icon: <FaSyncAlt className="text-blue-500 text-4xl" />,
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "We develop websites that work seamlessly across all major browsers, ensuring optimal user experience on every platform.",
    icon: <FaLaptopCode className="text-red-500 text-4xl" />,
  },
  {
    title: "Mobile-First Web Design",
    description:
      "Our mobile-first approach ensures your website is optimized for mobile devices, improving performance and accessibility.",
    icon: <FaMobileAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "SEO-Friendly Markup",
    description:
      "We structure HTML5 code to be SEO-friendly, improving search engine rankings and website visibility.",
    icon: <FaCogs className="text-indigo-500 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description:
      "We enhance website speed by optimizing HTML5 code, reducing unnecessary scripts, and improving overall performance.",
    icon: <FaRocket className="text-teal-500 text-4xl" />,
  },
  {
    title: "Security & Compliance",
    description:
      "Our HTML5 solutions follow web security best practices, ensuring compliance with industry standards.",
    icon: <FaShieldAlt className="text-gray-500 text-4xl" />,
  },
  {
    title: "Database Integration",
    description:
      "We connect HTML5-based applications with backend databases like MySQL, Firebase, and MongoDB for dynamic content delivery.",
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
  },
];

const HTML5Services = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          🚀 Our HTML5 Web Development Services
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

export default HTML5Services;
