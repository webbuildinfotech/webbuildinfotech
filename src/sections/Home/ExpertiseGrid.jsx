import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/jsonData";
import { RoutePaths } from "../../routes/constant/path";
import SectionHeader from "@/components/ui/SectionHeader";
import { homeSection, homeSectionAlt, proCard, proLink } from "@/lib/homeStyles";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <section className={cn("w-full", homeSection, homeSectionAlt)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to grow online"
          description="Full-stack development, cloud infrastructure, and ongoing support — one team, one accountable partner."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id || index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to={RoutePaths.SERVICES}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <article className={cn(proCard, "flex h-full flex-col")}>
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl text-white bg-gradient-to-br ${service.hoverFrom} ${service.hoverTo}`}
        >
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {service.description}
        </p>
        <Link to={RoutePaths.SERVICES} className={cn(proLink, "mt-4")}>
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </article>
    </div>
  );
};

export default Services;
