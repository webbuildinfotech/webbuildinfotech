import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeftIcon, PlusIcon } from "@/components/icons/Icon";
import { getServiceBySlug, getServiceSeoMeta } from "@/sections/Services/servicesData";
import { PageMeta, toCanonicalUrl } from "@/components/pageMeta";
import { RoutePaths } from "@/routes/constant/path";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const canonical = toCanonicalUrl(`${RoutePaths.SERVICES}/${service.slug}`);
  const seo = getServiceSeoMeta(service);

  return (
    <section className="relative isolate overflow-hidden bg-slate-50 pb-14 pt-24 dark:bg-slate-950 sm:pb-16 sm:pt-28">
      <PageMeta
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={canonical}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-400/15" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl dark:bg-fuchsia-400/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <Link
          to="/services"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white dark:border-indigo-400/20 dark:bg-slate-900/70 dark:text-indigo-300 dark:hover:border-indigo-400/40 dark:hover:bg-slate-900"
        >
          <ChevronLeftIcon className="text-lg" />
          Back to Services
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/80 shadow-[0_20px_60px_-25px_rgba(79,70,229,0.45)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="h-64 w-full object-cover md:h-[22rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="mb-3 inline-flex rounded-full border border-white/35 bg-slate-900/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm">
                Service Details
              </p>
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {service.title}
              </h1>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-5 md:gap-10 md:p-10">
            <div className="space-y-5 md:col-span-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Overview
                </h2>
                <p className="font-mooli text-base leading-7 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <p className="font-mooli mt-3 whitespace-pre-line text-base leading-7 text-slate-600 dark:text-slate-300">
                  {service.details?.trim()}
                </p>
              </div>

              {service.deliverables?.length > 0 && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    What You Will Get
                  </h2>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="font-mooli flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <PlusIcon className="mt-1 text-base text-indigo-600 dark:text-indigo-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6 md:col-span-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {service.keyBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="font-mooli flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                    >
                      <PlusIcon className="mt-1 text-lg text-indigo-600 dark:text-indigo-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.process?.length > 0 && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Our Process
                  </h2>
                  <ul className="space-y-3">
                    {service.process.map((step) => (
                      <li
                        key={step}
                        className="font-mooli flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <PlusIcon className="mt-1 text-lg text-indigo-600 dark:text-indigo-400" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.bestFor?.length > 0 && (
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Best For
                  </h2>
                  <ul className="space-y-3">
                    {service.bestFor.map((item) => (
                      <li
                        key={item}
                        className="font-mooli flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <PlusIcon className="mt-1 text-lg text-indigo-600 dark:text-indigo-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
