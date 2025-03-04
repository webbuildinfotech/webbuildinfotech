import React from "react";
import {
  FaShoppingCart, // Retail & Ecommerce
  FaChartLine, // Finance & Marketing
  FaBuilding, // Real Estate & Construction
  FaUtensils, // Food & Hospitality
  FaGraduationCap, // Education & Learning
  FaHeartbeat, // Health & Fitness
  FaRocket, // Startups
  FaPlane, // Travel & Tourism
  FaGamepad, // Gaming & Entertainment
  FaCode, // IT & Software
  FaStethoscope, // Healthcare & Medical
  FaCar, // Automotive
} from "react-icons/fa";

const industries = [
  { name: "Retail & Ecommerce", icon: <FaShoppingCart />, color: "text-indigo-600", bg: "bg-indigo-100" },
  { name: "Finance & Marketing", icon: <FaChartLine />, color: "text-green-600", bg: "bg-green-100" },
  { name: "Real Estate & Construction", icon: <FaBuilding />, color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Food & Hospitality", icon: <FaUtensils />, color: "text-yellow-600", bg: "bg-yellow-100" },
  { name: "Education & Learning", icon: <FaGraduationCap />, color: "text-purple-600", bg: "bg-purple-100" },
  { name: "Health & Fitness", icon: <FaHeartbeat />, color: "text-red-600", bg: "bg-red-100" },
  { name: "Startups", icon: <FaRocket />, color: "text-pink-600", bg: "bg-pink-100" },
  { name: "Travel & Tourism", icon: <FaPlane />, color: "text-teal-600", bg: "bg-teal-100" },
  { name: "Gaming & Entertainment", icon: <FaGamepad />, color: "text-orange-600", bg: "bg-orange-100" },
  { name: "IT & Software", icon: <FaCode />, color: "text-cyan-600", bg: "bg-cyan-100" },
  { name: "Healthcare & Medical", icon: <FaStethoscope />, color: "text-lime-600", bg: "bg-lime-100" },
  { name: "Automotive", icon: <FaCar />, color: "text-amber-600", bg: "bg-amber-100" },
];

const IndustryCards = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-b from-[#453f86] via-gray-700 to-gray-200 flex items-center">
      <div className="container mx-auto px-6 max-sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wide">
            Work for Any Industry
          </h2>
          <p className="text-lg text-gray-300 mt-2">
            Experience Across Multiple Sectors
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl ${industry.bg}`}
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Animated Icon */}
              <div className={`text-5xl lg:text-6xl ${industry.color} animate-bounce`}>
                {industry.icon}
              </div>

              {/* Industry Name */}
              <h4 className="mt-5 text-lg lg:text-xl font-semibold text-gray-800 text-center">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-bounce {
            animation: bounce 3s infinite ease-in-out;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default IndustryCards;
