import React from "react";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const testimonials = [
  {
    quote:
      "WebBuild Infotech delivered our platform ahead of schedule. Sales increased significantly within the first quarter.",
    name: "Rajesh Patel",
    role: "Founder, Retail Solutions",
  },
  {
    quote:
      "They transformed our outdated site into a modern, mobile-first experience our patients love.",
    name: "Dr. Priya Sharma",
    role: "Director, HealthFirst Clinic",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in our success. They nailed our SaaS dashboard.",
    name: "Amit Desai",
    role: "CEO, FinFlow Technologies",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-slate-50 pb-20 pt-12 dark:bg-slate-900/30 sm:pb-24 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What our clients say"
          description="Real feedback from businesses we've helped grow online."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedReveal key={item.name} delay={index * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
                <Quote className="mb-3 h-6 w-6 text-indigo-400/50" aria-hidden />
                <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-700">
                  <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
