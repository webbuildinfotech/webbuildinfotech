import React from "react";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { homeSection, homeSectionWhite, proCard } from "@/lib/homeStyles";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your goals, users, and technical requirements into a clear project roadmap.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Design",
    description: "Wireframes and UI prototypes validated with your team before development begins.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Development",
    description: "Agile sprints with weekly demos, clean code, and rigorous quality assurance.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deployment, monitoring, and ongoing optimization to keep your product performing.",
    icon: Rocket,
  },
];

const ProcessSection = () => {
  return (
    <section className={cn("w-full", homeSection, homeSectionWhite)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our process"
          title="From idea to launch, clearly defined"
          description="A structured approach refined over 7+ years — transparent at every stage."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={item.step} delay={index * 0.1} className="h-full">
                <article className={cn(proCard, "relative h-full overflow-hidden")}>
                  <span className="absolute -right-2 -top-4 text-7xl font-black text-slate-100 dark:text-slate-800">
                    {item.step}
                  </span>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-main text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
