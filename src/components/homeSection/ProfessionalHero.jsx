import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";
import { RoutePaths } from "@/routes/constant/path";
import "./professional-hero.css";

const industries = [
  "Healthcare",
  "E-Commerce",
  "Fintech",
  "Real Estate",
  "SaaS",
  "Education",
];

const highlights = [
  "End-to-end web & mobile development",
  "Dedicated project manager on every build",
  "Post-launch support & maintenance",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "7+", label: "Years Experience" },
  { value: "45+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
];

function ProfessionalHero() {
  const [industryIndex, setIndustryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pro-hero" aria-label="Hero">
      <div className="pro-hero__grid" aria-hidden />
      <div className="pro-hero__blob pro-hero__blob--1" aria-hidden />
      <div className="pro-hero__blob pro-hero__blob--2" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-main/20 bg-primary-main/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-main dark:bg-primary-main/10">
              <Star className="h-3.5 w-3.5 fill-primary-main text-primary-main" />
              Award-Winning Development Agency
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] dark:text-white">
              We Build Digital Products for{" "}
              <span
                key={industries[industryIndex]}
                className="pro-hero__industry pro-hero__industry--enter"
              >
                {industries[industryIndex]}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              WebBuild Infotech partners with ambitious businesses to design, develop, and scale
              web applications that drive measurable growth — from MVP to enterprise.
            </p>

            <ul className="mt-6 space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-main" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={RoutePaths.CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-main px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(8,145,178,0.4)] transition hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(8,145,178,0.45)]"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={RoutePaths.PROJECTS}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800/50 dark:text-white dark:hover:bg-slate-800"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pro-hero__visual mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="pro-hero__visual-ring" aria-hidden />
            <img
              src="/images/heroImage.svg"
              alt="Professional web development — modern digital product illustration"
              width={640}
              height={480}
              loading="eager"
            />
            <div className="pro-hero__badge-float pro-hero__badge-float--top">
              <Zap className="h-4 w-4 text-amber-500" />
              Fast Delivery
            </div>
            <div className="pro-hero__badge-float pro-hero__badge-float--bottom">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              50+ Projects Done
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-5 text-center backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/50"
            >
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { ProfessionalHero };
