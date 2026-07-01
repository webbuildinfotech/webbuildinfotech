import React from "react";
import { cn } from "@/lib/utils";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const bgMap = {
  white: "home-bg-white",
  light: "home-bg-light",
  dark: "home-bg-dark",
  mesh: "home-bg-mesh",
};

export function HomeSection({
  id,
  variant = "white",
  className = "",
  children,
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  headerClassName = "",
  noPadding = false,
}) {
  return (
    <section
      id={id}
      className={cn(
        !noPadding && "home-section",
        bgMap[variant] ?? bgMap.white,
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <AnimatedReveal>
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              description={description}
              align={align}
              light={light}
              className={headerClassName}
            />
          </AnimatedReveal>
        )}
        {children}
      </div>
    </section>
  );
}

export default HomeSection;
