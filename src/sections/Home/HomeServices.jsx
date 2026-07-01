import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, ShoppingCart, Smartphone, Search } from "lucide-react";
import { RoutePaths } from "@/routes/constant/path";
import SectionHeader from "@/components/ui/SectionHeader";

const featuredServices = [
  {
    title: "Website Development",
    description: "Custom, responsive websites built with modern frameworks that load fast and rank well.",
    icon: Monitor,
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    title: "E-Commerce Solutions",
    description: "Online stores with secure payments, inventory management, and conversion-focused UX.",
    icon: ShoppingCart,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps that extend your business to iOS and Android users.",
    icon: Smartphone,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, content strategy, and performance tuning to grow organic traffic.",
    icon: Search,
    iconBg: "bg-amber-100 text-amber-600",
  },
];

const HomeServices = () => {
  return (
    <section className="bg-white pb-20 pt-8 dark:bg-background-dark sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            className="mb-0"
            eyebrow="What we do"
            title="Our Services"
            description="End-to-end web solutions tailored to your business goals — from concept to launch and beyond."
          />
          <Link
            to={RoutePaths.SERVICES}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50"
              >
                <div className={`dc-icon-box ${service.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
                <Link
                  to={RoutePaths.SERVICES}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition group-hover:gap-2 dark:text-indigo-400"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
