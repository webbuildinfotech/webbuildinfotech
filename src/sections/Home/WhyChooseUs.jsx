import React from "react";
import { ShieldCheck, Gauge, MessageSquareMore, Wrench } from "lucide-react";

const reasons = [
  {
    title: "Reliable Delivery",
    description: "Clear scope, milestone-based execution, and predictable timelines.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Focused",
    description: "Fast, scalable architecture built for real business growth.",
    icon: Gauge,
  },
  {
    title: "Transparent Communication",
    description: "Weekly updates, clear progress visibility, and no hidden surprises.",
    icon: MessageSquareMore,
  },
  {
    title: "Long-Term Support",
    description: "Post-launch maintenance, optimization, and iterative improvements.",
    icon: Wrench,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-background-light py-14 sm:py-16 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-main">
            Why choose us
          </p>
          <h2 className="mt-2 text-2xl font-bold text-grey-900 sm:text-3xl dark:text-white">
            Built for outcomes, not just output
          </h2>
          <p className="font-mooli mt-3 text-sm text-grey-600 sm:text-base dark:text-grey-300">
            We combine product thinking, engineering excellence, and consistent support to help
            your business ship with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-grey-300/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-grey-700/80 dark:bg-background-dark-light"
              >
                <div className="mb-3 inline-flex rounded-xl bg-primary-main/10 p-2.5 text-primary-main">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-grey-900 dark:text-white">{item.title}</h3>
                <p className="font-mooli mt-2 text-sm text-grey-600 dark:text-grey-300">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
