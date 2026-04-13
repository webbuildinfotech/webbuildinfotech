import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  HtmlIcon,
  DataConfigurationIcon,
  MobileIcon,
  CloudIbmIcon,
  JavascriptIcon,
  RocketIcon,
} from "@/components/icons/Icon";

const serviceIcons = [HtmlIcon, DataConfigurationIcon, JavascriptIcon, RocketIcon, MobileIcon, CloudIbmIcon];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });
  const CardIcon = serviceIcons[index % serviceIcons.length];

  return (
    <div
      ref={ref}
      className={cn(
        "group overflow-hidden rounded-tl-[10%] rounded-br-[10%] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900",
        "transform transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
          <CardIcon className="text-2xl" />
        </div>
      </div>

      <div className="relative space-y-3 p-6 pt-8">
        <img
          src="/images/dotes.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 object-cover opacity-95"
        />
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">
          {service.title}
        </h2>
        <p className="font-mooli line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {service.description}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="font-mooli inline-flex items-center gap-2 pt-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
