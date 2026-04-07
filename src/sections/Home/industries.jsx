import React from "react";
import { MagicCard } from "../../components/lightswind/magic-card";
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
  { name: "Retail & Ecommerce", icon: <FaShoppingCart />, color: "text-indigo-600" },
  { name: "Finance & Marketing", icon: <FaChartLine />, color: "text-emerald-600" },
  { name: "Real Estate & Construction", icon: <FaBuilding />, color: "text-blue-600" },
  { name: "Food & Hospitality", icon: <FaUtensils />, color: "text-amber-600" },
  { name: "Education & Learning", icon: <FaGraduationCap />, color: "text-purple-600" },
  { name: "Health & Fitness", icon: <FaHeartbeat />, color: "text-rose-600" },
  { name: "Startups", icon: <FaRocket />, color: "text-pink-600" },
  { name: "Travel & Tourism", icon: <FaPlane />, color: "text-teal-600" },
  { name: "Gaming & Entertainment", icon: <FaGamepad />, color: "text-orange-600" },
  { name: "IT & Software", icon: <FaCode />, color: "text-cyan-600" },
  { name: "Healthcare & Medical", icon: <FaStethoscope />, color: "text-lime-600" },
  { name: "Automotive", icon: <FaCar />, color: "text-sky-600" },
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
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold !text-grey-900 dark:!text-white">
            Work for any industry
          </h2>
          <p className="font-mooli mt-3 max-w-2xl mx-auto text-sm sm:text-base text-grey-700 dark:text-grey-300">
            We collaborate with companies across domains – from retail and healthcare to SaaS startups
            and enterprise software.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {industries.map((industry, index) => (
            <article
              key={industry.name}
            >
              <MagicCard
                title={industry.name}
                icon={<span className={industry.color}>{industry.icon}</span>}
                className="w-full max-w-[220px] mx-auto aspect-square rounded-xl hover:-translate-y-1 hover:scale-[1.01]"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
              />
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
