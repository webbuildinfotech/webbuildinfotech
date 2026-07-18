import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RoutePaths } from "@/routes/constant/path";
import "./devcraft-hero.css";

const clientAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
];

function DevCraftHero() {
  return (
    <section className="dc-hero" aria-label="Hero">
      <div className="dc-hero__glow dc-hero__glow--purple" aria-hidden />
      <div className="dc-hero__glow dc-hero__glow--blue" aria-hidden />
      <div className="dc-hero__glow dc-hero__glow--center" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Web Development Agency
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              We Build Websites
              <br />
              That{" "}
              <span className="dc-hero__gradient-text">Drive Growth</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              From stunning designs to powerful functionality, we create websites that convert
              visitors into customers and help your business scale online.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={RoutePaths.CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={RoutePaths.PROJECTS}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex pl-1">
                {clientAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="dc-hero__avatar"
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-white">45+ Happy Clients</span>
                <br />
                From around the world
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="dc-hero__visual mx-auto w-full max-w-xl lg:max-w-none"
          >
            <img
              src="/images/heroImage.svg"
              alt="Web development showcase — laptop and mobile device mockups"
              width={700}
              height={520}
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { DevCraftHero };
