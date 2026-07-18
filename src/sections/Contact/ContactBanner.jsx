import React from "react";
import PageHero from "@/components/ui/PageHero";

const ContactBanner = () => {
  return (
    <PageHero
      eyebrow="Let's talk"
      title="Contact"
      titleHighlight="Us"
      description="Questions, quotes, or a new project — we respond quickly and keep communication clear from day one."
      minHeight="min-h-[min(18rem,48vh)] md:min-h-[22rem] lg:min-h-[26rem]"
    />
  );
};

export default ContactBanner;
