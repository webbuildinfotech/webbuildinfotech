import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { services } from "../../data/jsonData";
import { RoutePaths } from "../../routes/constant/path";

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

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <article
      ref={ref}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white/95 dark:bg-background-dark-light p-[1px] shadow-[0_10px_30px_rgba(15,23,42,0.2)] transition-transform transition-opacity duration-150 hover:-translate-y-1 hover:scale-[1.01] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex h-full flex-col rounded-2xl bg-white/95 dark:bg-background-dark-light p-6 sm:p-7 ring-1 ring-grey-400 dark:ring-grey-700/80">
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl bg-gradient-to-br ${service.hoverFrom} ${service.hoverTo} text-white`}
        >
          {service.icon}
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-grey-900 dark:text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-grey-600 dark:text-grey-300 flex-1 font-mooli">
          {service.description}
        </p>

        <Link
          to={RoutePaths.SERVICES}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary-main transition-colors hover:text-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main/40 focus-visible:ring-offset-2 rounded-sm dark:focus-visible:ring-offset-background-dark"
        >
          Know more
          <span className="ml-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default Services;
