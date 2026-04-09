import React from "react";
import { Link } from "react-router-dom";
import { Check, Shield, BarChart3 } from "lucide-react";
import { RoutePaths } from "../../routes/constant/path";

const highlights = [
  "SaaS Development",
  "Workflow Automation",
  "50+ Successful Projects",
];

const stats = [
  {
    value: "50+",
    label: "Projects",
    icon: Check,
    iconClass: "text-sky-400",
    borderAccent: "from-sky-400/80 via-sky-500/40 to-transparent",
  },
  {
    value: "7+",
    label: "Years Experience",
    icon: Shield,
    iconClass: "text-amber-400",
    borderAccent: "from-amber-400/80 via-amber-500/40 to-transparent",
  },
  {
    value: "45+",
    label: "Clients",
    icon: BarChart3,
    iconClass: "text-violet-400",
    borderAccent: "from-violet-400/80 via-fuchsia-500/40 to-transparent",
  },
];

export default function CosmicHero() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#0a0518] text-white"
      style={{
        backgroundImage: "url('/images/heroBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0518]/20 via-transparent to-[#0a0518]/85" />

      <div className="relative z-10 container mx-auto flex min-h-[min(100vh,920px)] flex-col px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="grid w-full flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <div className="order-2 max-w-xl lg:order-1 lg:max-w-none">
            <h1 className="font-monda text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem] xl:text-5xl xl:leading-[1.15]">
              Automation-Driven SaaS Development Company in India
            </h1>
            <p className="font-mooli mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              We build scalable web applications and automate workflows using the MERN stack
              (MongoDB, Express, React, Node.js)
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to={RoutePaths.CONTACT}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.45)] ring-1 ring-white/15 transition hover:brightness-110 hover:shadow-[0_0_36px_rgba(139,92,246,0.55)]"
              >
                Get Free Consultation
              </Link>
              <Link
                to={RoutePaths.PROJECTS}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-violet-400/60 bg-white/5 px-8 py-3 text-sm font-semibold text-white/95 backdrop-blur-sm transition hover:border-violet-300/80 hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>

            <ul className="mt-10 space-y-3">
              {highlights.map((line) => (
                <li key={line} className="flex items-start gap-3 text-[15px] text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-violet-300 ring-1 ring-violet-400/40">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Laptop */}
          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              className="cosmic-hero-laptop-wrap pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/15 to-blue-500/20 blur-3xl"
              aria-hidden
            />
            <div className="cosmic-hero-float relative w-full max-w-[min(100%,520px)]">
              <img
                src="/images/leptop.png"
                alt="Dashboard preview on laptop"
                className="relative z-[1] h-auto w-full drop-shadow-[0_20px_50px_rgba(139,92,246,0.35)]"
                width={1040}
                height={780}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Glass stats */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-14">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-white/18 hover:bg-white/[0.11] sm:py-6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${s.borderAccent}`}
                  aria-hidden
                />
                <p className="text-center text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </p>
                <div className="mt-4 flex justify-center">
                  <span
                    className={`inline-flex rounded-xl border border-white/10 bg-black/20 p-2.5 ${s.iconClass} ring-1 ring-white/5`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes cosmic-hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .cosmic-hero-float {
          animation: cosmic-hero-float 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .cosmic-hero-float { animation: none; }
        }
      `}</style>
    </section>
  );
}
