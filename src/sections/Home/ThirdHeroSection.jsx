import React from "react";
import { Link } from "react-router-dom";
import { Check, Shield, BarChart3 } from "lucide-react";
import { GridScan } from "../../components/reactBits/GridScan";
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

const ThirdHeroSection = ({ onToggleSection }) => {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-[#06040f] text-white">
      <button
        type="button"
        onClick={onToggleSection}
        className="absolute bottom-6 right-6 z-40 rounded-full border border-white/40 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white/20"
      >
        Show Image Hero
      </button>
      <div className="pointer-events-none absolute inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="relative z-10 min-h-screen w-full bg-gradient-to-b from-black/35 via-black/15 to-black/50">
        <div className="container mx-auto flex min-h-screen flex-col px-4 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="grid w-full flex-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
            <div className="order-2 max-w-xl text-center lg:order-1 lg:max-w-none lg:text-left">
              <h1 className="font-monda text-3xl font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.35rem] xl:text-5xl xl:leading-[1.15]">
                Automation-Driven SaaS Development Company in India
              </h1>
              <p className="font-mooli mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                We build scalable web applications and automate workflows using the MERN stack
                (MongoDB, Express, React, Node.js)
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
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

              <ul className="mx-auto mt-10 max-w-md space-y-3 text-left lg:mx-0">
                {highlights.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[15px] text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-violet-300 ring-1 ring-violet-400/40">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
              <div
                className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-violet-600/25 via-fuchsia-500/15 to-blue-500/20 blur-3xl"
                aria-hidden
              />
              <div className="third-hero-float relative w-full max-w-[min(100%,520px)]">
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

          <div className="relative z-10 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-12">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/25 bg-transparent px-5 py-5 shadow-[0_10px_30px_rgba(24,30,70,0.28)] backdrop-blur-md ring-1 ring-white/10 transition hover:-translate-y-1 hover:border-white/45 hover:ring-white/20 sm:py-6"
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
                      className={`inline-flex rounded-xl border border-white/20 bg-transparent p-2.5 backdrop-blur-sm ${s.iconClass} ring-1 ring-white/10`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes third-hero-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .third-hero-float {
          animation: third-hero-float 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .third-hero-float { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default ThirdHeroSection;
