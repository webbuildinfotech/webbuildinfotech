import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { services } from "../../data/jsonData";
import { RoutePaths } from "../../routes/constant/path";
import { cn } from "@/lib/utils";
import { InteractiveCard } from "@/components/card";

const Services = () => {
  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-main/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-main">
            Our expertise
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-grey-900 dark:text-white">
            Services that move your product forward
          </h2>
          <p className="font-mooli mt-3 max-w-2xl mx-auto text-sm sm:text-base text-grey-700 dark:text-grey-300">
            From front-end experiences to scalable back-end APIs, we cover the full stack so
            you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id || index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const hoverFromToInteractiveColor = {
  "from-purple-500": "rgba(168,85,247,0.45)",
  "from-teal-500": "rgba(20,184,166,0.45)",
  "from-blue-500": "rgba(59,130,246,0.45)",
  "from-green-500": "rgba(34,197,94,0.45)",
  "from-orange-500": "rgba(249,115,22,0.45)",
  "from-blue-400": "rgba(96,165,250,0.45)",
  "from-red-500": "rgba(239,68,68,0.45)",
  "from-yellow-500": "rgba(234,179,8,0.45)",
  "from-indigo-500": "rgba(99,102,241,0.45)",
  "from-pink-500": "rgba(236,72,153,0.45)",
  "from-gray-600": "rgba(75,85,99,0.45)",
  "from-emerald-500": "rgba(16,185,129,0.45)",
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const interactiveColor = hoverFromToInteractiveColor[service.hoverFrom] || "rgba(34,211,238,0.45)";

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-150",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
    <InteractiveCard
      containerClassName={cn(
        "flex h-full flex-col transition-transform duration-150 hover:scale-[1.01]"
      )}
      className="flex h-full flex-col p-6 sm:p-7"
      tailwindBgClass="bg-transparent"
      InteractiveColor={interactiveColor}
      borderRadius="1rem"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl bg-gradient-to-br ${service.hoverFrom} ${service.hoverTo} text-white`}
      >
        {service.icon}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-grey-900 dark:text-white">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm text-grey-600 sm:text-base dark:text-grey-300 font-mooli">
        {service.description}
      </p>

      <Link
        to={RoutePaths.SERVICES}
        className="mt-4 inline-flex items-center rounded-sm text-sm font-semibold text-primary-main transition-colors hover:text-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main/40 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark"
      >
        Know more
        <span className="ml-1" aria-hidden>
          →
        </span>
      </Link>
    </InteractiveCard>
    </div>
  );
};

export default Services;
