import React from "react";
import {
  FaShoppingCart,
  FaChartLine,
  FaBuilding,
  FaUtensils,
  FaGraduationCap,
  FaHeartbeat,
  FaRocket,
  FaPlane,
  FaGamepad,
  FaCode,
  FaStethoscope,
  FaCar,
} from "react-icons/fa";

const industries = [
  { name: "Retail & Ecommerce", icon: <FaShoppingCart />, color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "Finance & Marketing", icon: <FaChartLine />, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "Real Estate & Construction", icon: <FaBuilding />, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Food & Hospitality", icon: <FaUtensils />, color: "text-amber-600", bg: "bg-amber-50" },
  { name: "Education & Learning", icon: <FaGraduationCap />, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "Health & Fitness", icon: <FaHeartbeat />, color: "text-rose-600", bg: "bg-rose-50" },
  { name: "Startups", icon: <FaRocket />, color: "text-pink-600", bg: "bg-pink-50" },
  { name: "Travel & Tourism", icon: <FaPlane />, color: "text-teal-600", bg: "bg-teal-50" },
  { name: "Gaming & Entertainment", icon: <FaGamepad />, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "IT & Software", icon: <FaCode />, color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "Healthcare & Medical", icon: <FaStethoscope />, color: "text-lime-600", bg: "bg-lime-50" },
  { name: "Automotive", icon: <FaCar />, color: "text-sky-600", bg: "bg-sky-50" },
];

const IndustryCards = () => {
  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-main/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-main">
            Industries we serve
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-grey-900 dark:text-white">
            Work for any industry
          </h2>
          <p className="font-mooli mt-3 max-w-2xl mx-auto text-sm sm:text-base text-grey-700 dark:text-grey-300">
            We collaborate with companies across domains – from retail and healthcare to SaaS startups
            and enterprise software.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <article
              key={industry.name}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/95 dark:bg-background-dark-light px-4 py-6 sm:px-5 sm:py-7 shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-grey-400 dark:ring-grey-700/80 transition-transform transition-opacity duration-200 hover:-translate-y-1 hover:scale-[1.01]"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
            >
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${industry.bg} ${industry.color} text-2xl`}>
                {industry.icon}
              </div>

              <h3 className="font-mooli text-xs sm:text-sm lg:text-base font-semibold text-grey-900 dark:text-white text-center">
                {industry.name}
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(16px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default IndustryCards;
