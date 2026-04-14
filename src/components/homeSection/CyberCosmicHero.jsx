import React, { useEffect, useState } from "react";
import { BriefcaseBusiness, Check, FolderKanban, Users } from "lucide-react";
import "./cyber-cosmic-hero.css";
import { cn } from "@/lib/utils";
import { glassCard, glassHeroRow } from "@/lib/glassCard";
import {
  AngularIcon,
  CursorIcon,
  Css3Icon,
  ExpoIcon,
  ExpressJsIcon,
  GitIcon,
  GithubLightIcon,
  GitlabIcon,
  HtmlIcon,
  JavascriptIcon,
  MaterialUiIcon,
  MongoDbIcon,
  MysqlWordmarkIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgresqlIcon,
  PostmanIcon,
  ReactLogoIcon,
  SwaggerIcon,
  TailwindCssIcon,
  VercelIcon,
  VueIcon,
} from "@/components/icons/Icon";

// const RIGHT_IMAGE = "/images/rightSide.webp";
const RIGHT_IMAGE = "/images/heroImage.svg";
// const RIGHT_IMAGE = "/svg/ui-ux-lottie.svg";
// const IFRAME_IMAGE = "https://lottie.host/embed/ca4e4617-d51a-4912-87ad-550a61deea9f/F0v6wgTLL6.lottie";
// const IFRAME_IMAGE = "https://lottie.host/embed/46e4919f-01f1-48cf-833f-a913bcdc7c2d/IqXWlR1cTc.lottie";
const IFRAME_IMAGE = "https://lottie.host/embed/134d5909-676e-487a-9158-af43eb3bbceb/wBUyrzH5Un.lottie";

const generateStarBoxShadow = (count) => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    const hue = Math.random() > 0.88 ? "rgba(186,230,253,0.95)" : "#fff";
    shadows.push(`${x}px ${y}px ${hue}`);
  }
  return shadows.join(", ");
};

const highlights = [
  "SaaS Development",
  "Workflow Automation",
  "50+ Successful Projects",
];

const industries = [
  "Travel",
  "Health Care",
  "Fintech",
  "E Commerce",
  "Real Estate",
  "Insurance",
];

const floatingTechIcons = [
  { Icon: HtmlIcon, className: "cyber-cosmic-hero__tech--1" },
  { Icon: Css3Icon, className: "cyber-cosmic-hero__tech--2" },
  { Icon: JavascriptIcon, className: "cyber-cosmic-hero__tech--3" },
  { Icon: ReactLogoIcon, className: "cyber-cosmic-hero__tech--4" },
  { Icon: TailwindCssIcon, className: "cyber-cosmic-hero__tech--5" },
  { Icon: NodeJsIcon, className: "cyber-cosmic-hero__tech--6" },
  { Icon: ExpressJsIcon, className: "cyber-cosmic-hero__tech--7" },
  { Icon: MongoDbIcon, className: "cyber-cosmic-hero__tech--8" },
  { Icon: MysqlWordmarkIcon, className: "cyber-cosmic-hero__tech--9" },
  { Icon: PostgresqlIcon, className: "cyber-cosmic-hero__tech--10" },
  { Icon: SwaggerIcon, className: "cyber-cosmic-hero__tech--11" },
  { Icon: PostmanIcon, className: "cyber-cosmic-hero__tech--12" },
  { Icon: VueIcon, className: "cyber-cosmic-hero__tech--13" },
  { Icon: AngularIcon, className: "cyber-cosmic-hero__tech--14" },
  { Icon: NextJsIcon, className: "cyber-cosmic-hero__tech--15" },
  { Icon: NestJsIcon, className: "cyber-cosmic-hero__tech--16" },
  { Icon: VercelIcon, className: "cyber-cosmic-hero__tech--17" },
  { Icon: CursorIcon, className: "cyber-cosmic-hero__tech--18" },
  { Icon: GitlabIcon, className: "cyber-cosmic-hero__tech--19" },
  { Icon: GitIcon, className: "cyber-cosmic-hero__tech--20" },
  { Icon: GithubLightIcon, className: "cyber-cosmic-hero__tech--21" },
  { Icon: MaterialUiIcon, className: "cyber-cosmic-hero__tech--22" },
  { Icon: ExpoIcon, className: "cyber-cosmic-hero__tech--23" },
];

function CyberCosmicHero({ className = "" }) {
  const [smallStars, setSmallStars] = useState("");
  const [mediumStars, setMediumStars] = useState("");
  const [bigStars, setBigStars] = useState("");
  const [industryIndex, setIndustryIndex] = useState(0);

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(520));
    setMediumStars(generateStarBoxShadow(160));
    setBigStars(generateStarBoxShadow(72));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2700);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`cyber-cosmic-hero ${className}`} aria-label="Hero">
      <div className="cyber-cosmic-hero__bg" aria-hidden="true">
        <div className="cyber-cosmic-hero__base" />
        <div className="cyber-cosmic-hero__glow cyber-cosmic-hero__glow--cyan" />
        <div className="cyber-cosmic-hero__glow cyber-cosmic-hero__glow--green" />
        <div className="cyber-cosmic-hero__glow cyber-cosmic-hero__glow--blue" />
        <div className="cyber-cosmic-hero__grid" />
        <div
          className="cyber-cosmic-hero__stars"
          style={{ boxShadow: smallStars }}
        />
        <div
          className="cyber-cosmic-hero__stars-mid"
          style={{ boxShadow: mediumStars }}
        />
        <div
          className="cyber-cosmic-hero__stars-lg"
          style={{ boxShadow: bigStars }}
        />
        <div className="cyber-cosmic-hero__vignette" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/50" />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col px-4 pb-10 pt-24 sm:px-6 sm:pb-12 lg:px-8">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 max-w-3xl lg:order-1 lg:max-w-none">
            <span className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.28)]">
              Web Build Infotech
            </span>
            <h2
              data-aos="fade-up"
              data-aos-duration="1500"
              className="mt-5 md:text-4xl text-3xl font-bold leading-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
            >
              Top Global Partner for Custom Software
              <br />
              <span
                data-aos="fade-up"
                data-aos-duration="1500"
                className="md:inline-flex items-baseline gap-2 whitespace-nowrap"
              >
                <span>Development in</span> <br />
                <span
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  key={industries[industryIndex]}
                  className="cyber-industry-word cyber-industry-word--typing"
                  style={{ "--chars": industries[industryIndex].length }}
                >
                  {industries[industryIndex]}.
                </span>
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-mooli mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg"
            >
              We build scalable web applications and automate workflows using the MERN stack
              (MongoDB, Express, React, Node.js)
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="font-mooli inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(34,211,238,0.4)] transition hover:brightness-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              >
                Get Free Consultation
              </a>
              <a
                href="/project"
                className="font-mooli inline-flex items-center justify-center rounded-full border border-white/30 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                View Portfolio
              </a>
            </div>

            <ul className="mt-7 grid max-w-xl gap-2 text-white/90 sm:gap-y-3">
              {highlights.map((item) => (
                <li
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  key={item}
                  className={cn(glassHeroRow, "font-mooli flex items-center gap-2")}
                >
                  <Check className="h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="cyber-cosmic-hero__img-wrap order-1 lg:order-2"
          >
            <div className="cyber-cosmic-hero__img-ring" aria-hidden="true" />
            <img
              src={RIGHT_IMAGE}
              alt="MERN stack development — laptop, neural network visualization, and connected technology icons"
              className="cyber-cosmic-hero__img"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
            />
            <div className="cyber-cosmic-hero__tech-orbit" aria-hidden="true">
              {floatingTechIcons.map(({ Icon, className }, index) => (
                <span
                  key={index}
                  className={cn("cyber-cosmic-hero__floating-tech", className)}
                >
                  <Icon className="cyber-cosmic-hero__floating-tech-icon" />
                </span>
              ))}
            </div>
            {/* <iframe
              src="/svg/ui-ux-lottie.html"
              title="MERN stack development — animated technology visualization"
              className="cyber-cosmic-hero__img-frame"
              loading="eager"
            /> */}
            {/* <iframe src={IFRAME_IMAGE} 
              title="MERN stack development — laptop, neural network visualization, and connected technology icons"
              className="cyber-cosmic-hero__img w-full h-full object-cover"
             ></iframe> */}
             {/* <iframe src="/svg/ui-ux-lottie.html"></iframe> */}
          </div>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {[
            { value: "50+", label: "Projects", icon: FolderKanban },
            { value: "7+", label: "Years Experience", icon: BriefcaseBusiness },
            { value: "45+", label: "Clients", icon: Users },
          ].map((card) => {
            const StatIcon = card.icon;

            return (
              <div
                key={card.label}
                className={cn(
                  glassCard,
                  "px-5 py-5 text-white border-white/25 ring-white/10 shadow-[0_10px_30px_rgba(24,30,70,0.28)] before:via-white/65 hover:border-white/45 hover:ring-white/20"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mooli text-4xl font-bold leading-none tracking-tight">{card.value}</p>
                    <p className="font-mooli mt-1 text-xl text-white/80 sm:text-2xl">{card.label}</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-transparent text-cyan-200/90 ring-1 ring-white/10">
                    <StatIcon className="h-5 w-5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { CyberCosmicHero };
