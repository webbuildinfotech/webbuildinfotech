import React, { useMemo } from "react";
import { techLogos } from "../../data/jsonData";
import TextScrollMarquee from "@/components/ui/TextScrollMarquee";
import SectionHeader from "@/components/ui/SectionHeader";
import { homeSection, homeSectionWhite } from "@/lib/homeStyles";
import { cn } from "@/lib/utils";

const TechLogos = () => {
  const groupedLogos = useMemo(() => {
    return techLogos.reduce((acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    }, {});
  }, []);

  return (
    <section className={cn("w-full", homeSection, homeSectionWhite)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology"
          title="Built with modern, proven tools"
          description="We choose technologies for long-term maintainability — not trends."
        />

        {Object.keys(groupedLogos).map((category, index) => (
          <div key={category} className="mb-10 last:mb-0">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {category}
            </h3>
            <TextScrollMarquee
              baseVelocity={1.5}
              direction={index % 2 === 0 ? "left" : "right"}
              className="pr-4"
            >
              {groupedLogos[category].map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white sm:h-24 sm:w-24 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </div>
              ))}
            </TextScrollMarquee>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechLogos;
