import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

/**
 * Demo wrapper for the geometric hero — use on a route or embed in Home as needed.
 * Optional props: badge, headline, description.
 */
export function DemoHeroGeometric() {
  return (
    <HeroGeometric
      badge="Web Build Infotech"
      headline="Building your digital future"
      description="We design and develop high-quality web applications, modern frontends, and scalable backends that grow with your business."
    />
  );
}

export default DemoHeroGeometric;
