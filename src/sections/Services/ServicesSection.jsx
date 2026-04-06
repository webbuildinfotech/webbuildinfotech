import React from "react";
import ServicesIntro from "./ServicesIntro";
import ServicesList from "./ServicesList";

const ServicesSection = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto px-6 lg:px-6 p-2">
        <ServicesIntro />
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesSection;
