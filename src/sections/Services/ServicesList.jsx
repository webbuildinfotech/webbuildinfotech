import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServicesList;
