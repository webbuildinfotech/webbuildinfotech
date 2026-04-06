import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const ServicesList = () => {
  return (
    <div className="space-y-20">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServicesList;
