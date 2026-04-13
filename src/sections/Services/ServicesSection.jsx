import React from "react";
import ServicesIntro from "./ServicesIntro";
import ServicesList from "./ServicesList";

const ServicesSection = () => {
  return (
    <section className="bg-slate-50 pb-14 pt-24 dark:bg-slate-950 sm:pt-28 sm:pb-16">
      <ServicesIntro />
      <div className="container mx-auto px-4 sm:px-6">
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesSection;
