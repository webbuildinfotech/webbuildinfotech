import React, { useMemo } from "react";
import { techLogos } from "../../data/jsonData";
import TextScrollMarquee from "@/components/ui/TextScrollMarquee";
import { cn } from "@/lib/utils";
import { glassCardXL } from "@/lib/glassCard";

const TechLogos = () => {
  const groupedLogos = useMemo(() => {
    return techLogos.reduce((acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    }, {});
  }, []);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark flex items-center">

    {/* //  <div className="w-full py-16 bg-gradient-to-b from-gray-400 to-gray-200">  */}
      <div className="container mx-auto px-6">
        {/* Header Title */}
        <h2 className="text-4xl font-extrabold text-grey-900 dark:text-grey-50 text-center uppercase mb-10">
          Technologies We Work With
        </h2>

        {Object.keys(groupedLogos).map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-grey-800 dark:text-grey-100 text-left">
              <span className="text-primary-main font-bold">{category}</span>{" "}
              <span className="text-grey-500 dark:text-grey-400 font-mooli">Technologies</span>
            </h3>

            <TextScrollMarquee
              baseVelocity={2}
              direction={index % 2 === 0 ? "left" : "right"}
              className="pr-4"
            >
              {groupedLogos[category].map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className={cn(
                    glassCardXL,
                    "flex h-[108px] w-[108px] shrink-0 items-center justify-center sm:h-[116px] sm:w-[116px]"
                  )}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
              ))}
            </TextScrollMarquee>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechLogos;
