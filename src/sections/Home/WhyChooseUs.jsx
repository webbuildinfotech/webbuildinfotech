import React from "react";
import { ShieldCheck, Gauge, MessageSquareMore, Wrench } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { homeSection, homeSectionAlt, proCard, proCardIcon } from "@/lib/homeStyles";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Reliable Delivery",
    description: "Clear scope, milestone-based execution, and predictable timelines you can plan around.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Focused",
    description: "Fast, scalable architecture built for real traffic, real users, and real business growth.",
    icon: Gauge,
  },
  {
    title: "Transparent Communication",
    description: "Weekly updates, shared dashboards, and direct access to your project team — no black boxes.",
    icon: MessageSquareMore,
  },
  {
    title: "Long-Term Support",
    description: "Post-launch maintenance, security updates, and iterative improvements when you need them.",
    icon: Wrench,
  },
];

const WhyChooseUs = () => {
  return (
    <section className={cn("w-full", homeSection, homeSectionAlt)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why WebBuild"
          title="The partner businesses trust to deliver"
          description="We combine senior engineering, thoughtful design, and accountable project management — so you get results, not excuses."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={item.title} delay={index * 0.08}>
                <article className={cn(proCard, "h-full")}>
                  <div className={proCardIcon}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </article>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
