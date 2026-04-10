import React, { useEffect, useState } from "react";
import "./parallax-cosmic-background.css";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { glassCard, glassHeroRow } from "@/lib/glassCard";

const CosmicParallaxBg = ({ head, text, loop = true, className = "" }) => {
  const [smallStars, setSmallStars] = useState("");
  const [mediumStars, setMediumStars] = useState("");
  const [bigStars, setBigStars] = useState("");
  const [industryIndex, setIndustryIndex] = useState(0);

  const textParts = text.split(",").map((part) => part.trim());
  const highlights = [
    "SaaS Development",
    "Workflow Automation",
    "50+ Successful Projects",
  ];
  const industries = ["Travel", "Health Care", "Fintech", "E Commerce", "Real Estate", "Insurance"];

  const generateStarBoxShadow = (count) => {
    const shadows = [];

    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}px ${y}px #FFF`);
    }

    return shadows.join(", ");
  };

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(700));
    setMediumStars(generateStarBoxShadow(200));
    setBigStars(generateStarBoxShadow(100));

    document.documentElement.style.setProperty(
      "--animation-iteration",
      loop ? "infinite" : "1"
    );
  }, [loop]);

  useEffect(() => {
    if (!loop) return undefined;
    const timer = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2700);
    return () => clearInterval(timer);
  }, [loop, industries.length]);

  return (
    <div className={`cosmic-parallax-container ${className}`}>
      <div id="stars" style={{ boxShadow: smallStars }} className="cosmic-stars"></div>
      <div id="stars2" style={{ boxShadow: mediumStars }} className="cosmic-stars-medium"></div>
      <div id="stars3" style={{ boxShadow: bigStars }} className="cosmic-stars-large"></div>

      <div id="horizon">
        <div className="glow"></div>
      </div>
      <div id="earth"></div>

      {/* <div id="title">{head.toUpperCase()}</div>
      <div id="subtitle">
        {textParts.map((part, index) => (
          <React.Fragment key={index}>
            <span className={`subtitle-part-${index + 1}`}>{part.toUpperCase()}</span>
            {index < textParts.length - 1 && " "}
          </React.Fragment>
        ))}
      </div> */}

      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/20 via-transparent to-black/45" />

      <div className="relative z-30 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 pt-24 sm:px-6 sm:pb-12 lg:px-8">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-3xl lg:max-w-none">
            <span className="inline-flex rounded-full border border-violet-300/40 bg-violet-500/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200 shadow-[0_0_18px_rgba(124,58,237,0.32)]">
              Web Build Infotech
            </span>
            <h2 data-aos="fade-up" 
                data-aos-duration="1500" 
                className="mt-5 text-3xl font-bold leading-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)] sm:text-5xl">
            Top Global Partner for Custom Software
            <br />
            <span data-aos="fade-up" 
                data-aos-duration="1500" 
                className="md:inline-flex items-baseline gap-2 whitespace-nowrap">
              <span>Development in</span> <br />
              <span
              data-aos="fade-up" 
                data-aos-duration="1500" 
                
                key={industries[industryIndex]}
                className="industry-word industry-word-typing"
                style={{ "--chars": industries[industryIndex].length }}
              >
                {industries[industryIndex]}.
              </span>
            </span>
            </h2>
            <p data-aos="fade-up" 
                data-aos-duration="1500" 
                 className="font-mooli mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg">
              We build scalable web applications and automate workflows using the MERN stack
              (MongoDB, Express, React, Node.js)
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="font-mooli inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(124,58,237,0.5)] transition hover:brightness-110 hover:shadow-[0_0_38px_rgba(124,58,237,0.62)]"
              >
                Get Free Consultation
              </a>
              <a
                href="/project"
                className="font-mooli inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                View Portfolio
              </a>
            </div>

            <ul className="mt-7 grid max-w-xl gap-2 text-white/90 sm:gap-y-3">
              {highlights.map((item) => (
                <li data-aos="fade-up" 
                    data-aos-duration="1500" 
                    key={item}
                    className={cn(glassHeroRow, "font-mooli flex items-center gap-2")}
                  >
                  <Check className="h-4 w-4 shrink-0 text-violet-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="relative flex w-full justify-center lg:justify-end"
          >
            <img
              src="/images/rightSide.png"
              alt="Custom software development illustration"
              className="h-auto w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:max-w-lg lg:max-w-none lg:max-h-[min(72vh,560px)]"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {[
            { value: "50+", label: "Projects" },
            { value: "7+", label: "Years Experience" },
            { value: "45+", label: "Clients" },
          ].map((card) => (
            <div
              key={card.label}
              className={cn(
                glassCard,
                "px-5 py-5 text-white border-white/25 ring-white/10 shadow-[0_10px_30px_rgba(24,30,70,0.28)] before:via-white/65 hover:border-white/45 hover:ring-white/20"
              )}
            >
              <p className="text-4xl font-bold leading-none tracking-tight font-mooli">{card.value}</p>
              <p className="mt-1 text-xl text-white/80 sm:text-2xl font-mooli">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CosmicParallaxBg };
