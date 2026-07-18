import React from "react";
import { PageMeta, toCanonicalUrl } from "@/components/pageMeta";
import { RoutePaths } from "@/routes/constant/path";
import IndustriesContent from "@/sections/Industries/IndustriesContent";

const Industries = () => (
  <div className="min-h-screen bg-[var(--home-surface,#f8fafc)] dark:bg-background-dark">
    <PageMeta
      title="Industries We Serve | Web & Software Solutions | WebBuild Infotech"
      description="WebBuild Infotech delivers tailored web and software solutions across healthcare, education, real estate, retail, startups, and more."
      keywords="industry solutions, business web development, digital transformation, WebBuild Infotech"
      canonical={toCanonicalUrl(RoutePaths.INDUSTRIES)}
    />
    <IndustriesContent />
  </div>
);

export default Industries;
