"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";
import {
  EnquiriesIcon,
  MicrosoftTeamsIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";

const HERO_CONTACT_EMAIL = "simalchaudhari20496@gmail.com";
const HERO_EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  HERO_CONTACT_EMAIL
)}`;
const HERO_TEAMS_HREF =
  "https://teams.microsoft.com/l/team/19%3A_k3b5xB_3nI0tC8GnC7N3h_kLqYQkN92J05195GZw3Zw1%40thread.tacv2/conversations?groupId=787b23a2-435e-47b6-a024-c7d01b78072d&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const DEFAULT_HIGHLIGHTS = [
  "End-to-end delivery — discovery, UI/UX, build, deploy",
  "Modern stack — React, Node, cloud & DevOps-ready",
  "Clear communication — milestones you can track",
];

/**
 * Full-screen geometric hero: shapes + open layout (no card box).
 * Pass `highlights`, `techLine`, `metrics` to customise.
 * Set `embedded` when placing inside another hero (e.g. GridScan) — skips full-page bg and floating shapes.
 */
export function HeroGeometric({
  embedded = false,
  badge = "Web Build Infotech",
  headline = "Building your digital future",
  description = "We design and develop high-quality web applications, modern frontends, and scalable backends that grow with your business.",
  highlights = DEFAULT_HIGHLIGHTS,
  techLine = "React · TypeScript · Node.js · MongoDB · PostgreSQL · AWS · Docker · CI/CD",
  metrics = [
    { label: "Projects", value: "50+", sub: "delivered" },
    { label: "Experience", value: "7+", sub: "years" },
    { label: "Clients", value: "45+", sub: "satisfied" },
  ],
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.35 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const mainColumn = (
      <div
        className={cn(
          "container relative z-10 mx-auto flex min-h-0 w-full items-start justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:items-center lg:justify-center lg:px-8 lg:pb-0 lg:pt-0",
          embedded && "h-full pb-12 pt-28 sm:pb-16 sm:pt-32 lg:py-0"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.08em] text-white/55">
              <Circle className="h-1.5 w-1.5 shrink-0 fill-primary-main" aria-hidden />
              {badge}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-0">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="relative space-y-6 text-center lg:col-span-7 lg:text-left"
            >
              <h1 className="text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[2.85rem]">
                {headline}
              </h1>

              <p className="font-mooli mx-auto max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-base md:text-lg lg:mx-0">
                {description}
              </p>

              <div className="flex flex-col items-center gap-8 pt-2 lg:items-start">
                <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href="#services"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-primary-main px-8 text-sm font-semibold text-white transition hover:bg-primary-dark sm:flex-initial sm:min-w-[168px]"
                  >
                    View services
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full px-8 text-sm font-semibold text-white/95 ring-1 ring-white/25 transition hover:bg-white/10 hover:ring-white/40 sm:flex-initial sm:min-w-[168px]"
                  >
                    Let&apos;s talk
                  </a>
                </div>

                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center lg:items-start">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Get in touch
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-1 sm:divide-x sm:divide-white/15 lg:justify-start">
                    <a
                      href="https://wa.me/919265128409"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 w-14 items-center justify-center text-white/90 transition hover:text-white sm:h-[3.75rem] sm:w-[3.75rem] sm:px-3"
                      aria-label="WhatsApp"
                    >
                      <WhatsappIcon className="h-9 w-9 sm:h-10 sm:w-10" />
                    </a>
                    <a
                      href="tel:+919265128409"
                      className="flex h-14 w-14 items-center justify-center text-white/90 transition hover:text-white sm:h-[3.75rem] sm:w-[3.75rem] sm:px-3"
                      aria-label="Phone"
                    >
                      <PhoneIcon className="h-9 w-9 sm:h-10 sm:w-10" />
                    </a>
                    <a
                      href={HERO_EMAIL_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Email ${HERO_CONTACT_EMAIL}`}
                      className="flex h-14 w-14 items-center justify-center text-white/90 transition hover:text-white sm:h-[3.75rem] sm:w-[3.75rem] sm:px-3"
                    >
                      <EnquiriesIcon className="h-9 w-9 sm:h-10 sm:w-10" />
                    </a>
                    <a
                      href={HERO_TEAMS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open in Microsoft Teams"
                      className="flex h-14 w-14 items-center justify-center text-white/90 transition hover:text-white sm:h-[3.75rem] sm:w-[3.75rem] sm:px-3"
                    >
                      <MicrosoftTeamsIcon className="h-9 w-9 sm:h-10 sm:w-10" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8 border-t border-white/[0.08] pt-8 text-center lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:text-left">
              <motion.ul
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto grid max-w-md gap-4 sm:max-w-lg md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-3"
              >
                {highlights.map((line) => (
                  <li
                    key={line}
                    className="flex items-start justify-center gap-3 text-left text-[14px] leading-snug text-white/55 md:justify-start md:text-[15px]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-main"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.p
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="font-mooli mx-auto max-w-md border-t border-white/[0.08] pt-6 text-[12px] leading-relaxed tracking-wide text-white/40 sm:text-[13px] md:max-w-lg lg:mx-0 lg:max-w-none"
              >
                <span className="font-semibold uppercase tracking-[0.14em] text-white/45">
                  Technologies & platforms
                </span>
                <span className="mt-2 block text-white/35">{techLine}</span>
              </motion.p>
            </div>
          </div>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-1 gap-8 border-t border-white/[0.08] pt-10 sm:grid-cols-3 sm:gap-6"
          >
            {metrics.map((m) => (
              <div key={m.label} className="text-center lg:text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">
                  {m.label}
                </p>
                <p className="font-mooli mt-2 text-xl font-semibold tabular-nums text-white sm:text-2xl">
                  {m.value}{" "}
                  <span className="text-base font-normal text-white/50 sm:text-lg">{m.sub}</span>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
  );

  if (embedded) {
    return (
      <div className="relative flex h-full min-h-0 w-full flex-1 items-center justify-center overflow-hidden">
        {mainColumn}
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.28]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.28]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.28]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.28]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.28]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      {mainColumn}
    </div>
  );
}
