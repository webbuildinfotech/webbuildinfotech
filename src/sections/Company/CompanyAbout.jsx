import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Lightbulb,
  Handshake,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";
import { RoutePaths } from "@/routes/constant/path";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glassCard";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We adopt proven modern stacks and thoughtful architecture — never hype for its own sake.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "Your success is our success. We communicate openly and treat every project as a long-term relationship.",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    description: "Clean code, rigorous testing, and performance budgets are non-negotiable on every delivery.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Enterprise-grade practices with the agility of a focused boutique team — based in India, serving worldwide.",
  },
];

const milestones = [
  { year: "2018", event: "WebBuild Infotech founded in Gujarat, India" },
  { year: "2020", event: "Expanded to full-stack MERN and cloud-native solutions" },
  { year: "2022", event: "50+ projects delivered across healthcare, fintech, and e-commerce" },
  { year: "2024", event: "AI integrations, workflow automation, and SaaS product development" },
];

const CompanyAbout = () => {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building digital products that"
        titleHighlight="drive real growth"
        description="WebBuild Infotech is a full-service web development agency helping startups and enterprises design, build, and scale software that users love."
        minHeight="min-h-[min(18rem,48vh)] md:min-h-[22rem] lg:min-h-[26rem]"
      />

      <section className="bg-background-light py-14 dark:bg-background-dark sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <AnimatedReveal>
              <SectionHeader
                align="left"
                eyebrow="Who we are"
                title="Your technology partner from idea to launch"
                description="For over seven years, we've helped businesses transform ideas into reliable, high-performance web applications. Our team blends product thinking with deep engineering expertise across the MERN stack, cloud infrastructure, and modern AI tooling."
              />
              <p className="mt-4 text-sm leading-relaxed text-grey-600 dark:text-grey-300 sm:text-base">
                Based in Mandvi, Gujarat, we work with clients locally and globally — delivering transparent
                communication, milestone-based delivery, and support that extends well beyond launch day.
              </p>
              <Link
                to={RoutePaths.CONTACT}
                className="mt-6 inline-flex items-center rounded-full bg-primary-main px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Work With Us
              </Link>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "7+", label: "Years Experience" },
                  { value: "45+", label: "Happy Clients" },
                  { value: "12+", label: "Industries Served" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={cn(glassCard, "p-5 text-center sm:p-6")}
                  >
                    <p className="text-3xl font-bold text-primary-main sm:text-4xl">{stat.value}</p>
                    <p className="mt-1 text-sm text-grey-600 dark:text-grey-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="bg-grey-100/60 py-14 dark:bg-background-darkLight sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatedReveal>
              <div className={cn(glassCard, "h-full p-6 sm:p-8")}>
                <div className="mb-4 inline-flex rounded-xl bg-primary-main/10 p-3 text-primary-main">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-grey-900 dark:text-white">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey-600 dark:text-grey-300 sm:text-base">
                  To empower businesses with custom software that is fast, secure, and built to scale — delivered through honest collaboration and engineering excellence.
                </p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <div className={cn(glassCard, "h-full p-6 sm:p-8")}>
                <div className="mb-4 inline-flex rounded-xl bg-secondary-main/10 p-3 text-secondary-main">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-grey-900 dark:text-white">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey-600 dark:text-grey-300 sm:text-base">
                  To be the most trusted web development partner for ambitious companies — known for quality,
                  reliability, and products that make a measurable difference.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-14 dark:bg-background-dark sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our values"
            title="What guides every project we take on"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedReveal key={item.title} delay={index * 0.08}>
                  <article className={cn(glassCard, "h-full p-5 sm:p-6")}>
                    <span className="inline-flex rounded-lg bg-primary-main/10 p-2.5 text-primary-main">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-grey-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-grey-600 dark:text-grey-300">
                      {item.description}
                    </p>
                  </article>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-grey-100/60 py-14 dark:bg-background-darkLight sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our journey" title="Milestones that shaped who we are" />
          <div className="mx-auto max-w-2xl">
            {milestones.map((item, index) => (
              <AnimatedReveal key={item.year} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-8 last:pb-0">
                  {index < milestones.length - 1 && (
                    <div
                      className="absolute left-[1.125rem] top-10 h-full w-px bg-primary-main/30"
                      aria-hidden
                    />
                  )}
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary-main bg-background-light text-xs font-bold text-primary-main dark:bg-background-dark">
                    <Heart className="h-3.5 w-3.5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-main">{item.year}</p>
                    <p className="mt-1 text-sm text-grey-700 dark:text-grey-300 sm:text-base">{item.event}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-14 dark:bg-background-dark sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedReveal>
            <div
              className={cn(
                glassCard,
                "flex flex-col items-center gap-6 p-8 text-center sm:p-10 md:flex-row md:text-left"
              )}
            >
              <div className="inline-flex rounded-2xl bg-primary-main/10 p-4 text-primary-main">
                <Users className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-grey-900 dark:text-white sm:text-2xl">
                  A dedicated team, ready for your next challenge
                </h3>
                <p className="mt-2 text-sm text-grey-600 dark:text-grey-300 sm:text-base">
                  Developers, designers, and project leads who care about craft — and about your business outcomes.
                </p>
              </div>
              <Link
                to={RoutePaths.CONTACT}
                className="shrink-0 rounded-full bg-primary-main px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CompanyAbout;
