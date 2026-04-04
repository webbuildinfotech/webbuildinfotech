import React from "react";
import heroImage from "/images/hero.png";
import { EmblaCarousel } from "../../components/carousel";

const propertyTypes = [
  { name: "Houses", count: "22 Properties" },
  { name: "Apartments", count: "22 Properties" },
  { name: "Office", count: "22 Properties" },
  { name: "Villa", count: "22 Properties" },
  { name: "Townhome", count: "22 Properties" },
  { name: "Bungalow", count: "22 Properties" },
];

function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col relative bg-background-light">
      <div className="flex-[6] bg-grey-900 w-full" />
      <div className="flex-[4] bg-white w-full" />

      {/* Center hero image */}
      <img
        src={heroImage}
        alt="hero"
        className="md:w-[60%] md:max-w-5xl md:h-[650px] h-full object-cover absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl"
      />

      {/* Bottom floating cards, like reference */}
      <div className="absolute left-1/2 bottom-20 -translate-x-1/2 w-full max-w-6xl px-4">
        <EmblaCarousel
          slides={propertyTypes}
          options={{ align: "start", dragFree: true, loop: false }}
          wheelGestures={false}
          showArrows={false}
          showDots={false}
          autoPlay={true}
          autoPlayInterval={3000}
          slideClassName="pr-4 flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%]"
          renderSlide={(item) => (
            <div
              key={item.name}
              className="flex w-full flex-col items-center rounded-2xl bg-white/95 px-4 py-4 text-center shadow-[0_12px_35px_rgba(15,23,42,0.12)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-lighter text-primary-main">
                <span className="text-lg">🏠</span>
              </div>
              <h3 className="text-sm font-semibold text-grey-800">{item.name}</h3>
              <p className="mt-1 text-xs text-grey-500">{item.count}</p>
            </div>
          )}
        />
      </div>
    </section>
  );
}

export default HeroSection;