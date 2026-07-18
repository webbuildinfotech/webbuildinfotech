import React from "react";
import { PageMeta, toCanonicalUrl } from "@/components/pageMeta";
import { RoutePaths } from "@/routes/constant/path";
import IndustriesContent from "@/sections/Industries/IndustriesContent";

const Industries = () => (
  <div className="min-h-screen bg-[var(--home-surface,#f8fafc)] dark:bg-background-dark">
      <PageMeta
        title="Industries We Serve | Website & Web App Development | WebBuild Infotech"
        description="WebBuild Infotech delivers website development and full stack web apps for healthcare, education, real estate, retail, startups, and more industries."
        keywords="website development for business, industry web solutions, healthcare website development, e-commerce website development, startup web development"
        canonical={toCanonicalUrl(RoutePaths.INDUSTRIES)}
      />
    <IndustriesContent />
  </div>
);

export default Industries;
