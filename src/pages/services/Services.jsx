import React from "react";
import { ServicesSection, servicesListingSeo } from "../../sections/Services";
import { PageMeta, toCanonicalUrl } from "@/components/pageMeta";

const ServicePage = () => {
  return (
    <>
      <PageMeta
        title={servicesListingSeo.title}
        description={servicesListingSeo.description}
        keywords={servicesListingSeo.keywords}
        canonical={toCanonicalUrl(servicesListingSeo.path)}
      />
      <ServicesSection />
    </>
  );
};

export default ServicePage;
