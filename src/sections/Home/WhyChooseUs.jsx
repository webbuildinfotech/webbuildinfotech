import React from "react";
import { ShieldCheck, Gauge, MessageSquareMore, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glassCard";

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
  const handleCardMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
  };

  const handleCardLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

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
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{ "--mx": "50%", "--my": "50%", "--rx": "0deg", "--ry": "0deg" }}
                className={cn(
                  glassCard,
                  "group p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1 [transform:perspective(900px)_rotateX(var(--rx))_rotateY(var(--ry))]"
                )}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(220px_circle_at_var(--mx)_var(--my),rgba(56,189,248,0.22),transparent_60%)]" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-main/15 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
                <div className="relative z-[1] mb-4 flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-xl border border-primary-main/25 bg-primary-main/10 p-2.5 text-primary-main ring-1 ring-primary-main/20 transition duration-300 group-hover:scale-105 group-hover:bg-primary-main/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.16em] text-grey-500/80 dark:text-grey-400/80">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="relative z-[1] text-base font-semibold text-grey-900 dark:text-white">
                  {item.title}
                </h3>
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
