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
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { homeSection, homeSectionWhite, proCard } from "@/lib/homeStyles";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Retail & E-Commerce", icon: FaShoppingCart },
  { name: "Finance & Marketing", icon: FaChartLine },
  { name: "Real Estate", icon: FaBuilding },
  { name: "Food & Hospitality", icon: FaUtensils },
  { name: "Education", icon: FaGraduationCap },
  { name: "Health & Fitness", icon: FaHeartbeat },
  { name: "Startups", icon: FaRocket },
  { name: "Travel & Tourism", icon: FaPlane },
  { name: "Gaming & Media", icon: FaGamepad },
  { name: "IT & Software", icon: FaCode },
  { name: "Healthcare", icon: FaStethoscope },
  { name: "Automotive", icon: FaCar },
];

const IndustryCards = () => {
  return (
    <section className={cn("w-full", homeSection, homeSectionWhite)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Expertise across every sector"
          description="Whether you're in healthcare, fintech, or retail — we bring domain-aware engineering to your project."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedReveal key={industry.name} delay={index * 0.04}>
                <article
                  className={cn(
                    proCard,
                    "flex flex-col items-center justify-center py-6 text-center"
                  )}
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-primary-main dark:bg-slate-800">
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {industry.name}
                  </p>
                </article>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;
