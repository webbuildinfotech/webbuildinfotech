import React from "react";
import { trustedByItems } from "@/data/homePageData";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const HomeTrustedBy = () => {
  const doubled = [...trustedByItems, ...trustedByItems];

  return (
    <AnimatedReveal variant="in">
      <section className="home-bg-strip py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="home-text-muted mb-6 text-center text-xs font-bold uppercase tracking-[0.22em]">
            Helping Businesses Across Industries
          </p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="brand-marquee-track gap-16">
              {doubled.map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="home-text-muted shrink-0 px-4 text-lg font-bold transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedReveal>
  );
};

export default HomeTrustedBy;
