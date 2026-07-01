import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import CountUp from "react-countup";
import { RoutePaths } from "@/routes/constant/path";
import { heroStats, heroFeatures } from "@/data/homePageData";
import { StaggerReveal, StaggerItem } from "@/components/home/StaggerReveal";
import HeroShowcase from "@/components/home/HeroShowcase";
import { easeOut } from "@/lib/motionPresets";
import "./home-sections.css";

function parseStatValue(val) {
  const match = String(val).match(/^(\d+)(.*)$/);
  return match ? { num: parseInt(match[1], 10), suffix: match[2] } : { num: 0, suffix: val };
}

function HomeHero() {
  return (
    <section className="home-hero relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_15%,rgba(37,99,235,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_5%_85%,rgba(13,148,136,0.12),transparent)]" />

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <p className="home-eyebrow home-eyebrow--light">Web Development Agency</p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[3.25rem]">
              We Build Powerful Websites, Web Apps &amp; AI Solutions That{" "}
              <span className="text-gradient-brand">Grow Your Business</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Custom websites, SaaS platforms, AI applications, mobile apps, and enterprise
              software built by experienced developers.
            </p>

            <StaggerReveal className="mt-6 flex flex-wrap gap-2" stagger={0.06}>
              {heroFeatures.map((f) => (
                <StaggerItem key={f}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm">
                    <Check className="h-3.5 w-3.5 text-teal-400" />
                    {f}
                  </span>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link to={RoutePaths.CONTACT} className="btn-brand btn-brand-primary">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={RoutePaths.PROJECTS} className="btn-brand btn-brand-outline">
                View Portfolio
              </Link>
            </motion.div>

            <StaggerReveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" stagger={0.07} delay={0.2}>
              {heroStats.map((s) => {
                const { num, suffix } = parseStatValue(s.value);
                return (
                  <StaggerItem key={s.label}>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3.5 backdrop-blur-sm transition hover:border-blue-500/30 hover:bg-white/8">
                      <p className="text-xl font-bold text-white sm:text-2xl">
                        <CountUp end={num} duration={2.5} suffix={suffix} enableScrollSpy scrollSpyOnce />
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-slate-400 sm:text-xs">{s.label}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
            className="relative mx-auto w-full lg:pl-4"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
