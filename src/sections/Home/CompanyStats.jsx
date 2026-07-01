import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { companyNumbers } from "@/data/homePageData";
import { StaggerReveal, StaggerItem } from "@/components/home/StaggerReveal";
import "./home-sections.css";

function parseStatValue(val) {
  const match = String(val).match(/^(\d+)(.*)$/);
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: val };
}

const CompanyStats = () => (
  <section className="home-stats-bar py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerReveal className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" stagger={0.08}>
        {companyNumbers.map((s) => {
          const { num, suffix } = parseStatValue(s.value);
          return (
            <StaggerItem key={s.label}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  <CountUp end={num} duration={2.5} suffix={suffix} enableScrollSpy scrollSpyOnce />
                </p>
                <p className="mt-1 text-sm text-blue-100">{s.label}</p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerReveal>
    </div>
  </section>
);

export default CompanyStats;
