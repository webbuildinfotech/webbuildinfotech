import React from "react";
import { SiGoogle, SiSlack, SiAirbnb, SiShopify } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const brands = [
  { name: "Google", Icon: SiGoogle },
  { name: "Microsoft", Icon: FaMicrosoft },
  { name: "Slack", Icon: SiSlack },
  { name: "Airbnb", Icon: SiAirbnb },
  { name: "Shopify", Icon: SiShopify },
];

const TrustedByStrip = () => {
  return (
    <div className="dc-pill container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="dc-pill__inner flex flex-col items-center gap-5 px-6 py-5 sm:flex-row sm:justify-between sm:px-10 sm:py-6">
        <p className="shrink-0 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-left sm:text-xs">
          Trusted by businesses of all sizes
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {brands.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
              title={name}
            >
              <Icon className="h-6 w-6 text-slate-600 sm:h-7 sm:w-7" />
              <span className="hidden text-sm font-semibold text-slate-600 lg:inline">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedByStrip;
