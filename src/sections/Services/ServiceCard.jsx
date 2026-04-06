import React from "react";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-12 bg-white dark:bg-background-dark-light p-7 border border-grey-400 dark:border-grey-700 rounded-xl ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } transform transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="lg:w-1/2">
        <h2 className="mb-4 text-2xl font-bold text-grey-900 dark:text-grey-50">
          {service.title}
        </h2>
        <p className="font-mooli mb-6 leading-relaxed text-grey-600 dark:text-grey-300">
          {service.details}
        </p>

        <h3 className="mb-4 text-xl font-semibold text-grey-900 dark:text-grey-100">
          Key Benefits:
        </h3>
        <ul className="font-mooli list-disc list-inside space-y-2 text-grey-600 dark:text-grey-300">
          {service.keyBenefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
