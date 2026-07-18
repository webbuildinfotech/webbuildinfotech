import React from "react";
import { cn } from "@/lib/utils";

const PageHero = ({
  eyebrow,
  title,
  titleHighlight,
  description,
  className = "",
  minHeight = "min-h-[min(16rem,42vh)] md:min-h-[18rem] lg:min-h-[20rem]",
}) => {
  return (
    <section
      className={cn(
        "relative isolate mb-10 w-full overflow-hidden rounded-b-3xl shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]",
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className={cn("relative flex flex-col justify-center", minHeight)}>
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-primary-darker to-secondary-darker"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(34,211,238,0.16),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(79,70,229,0.18),transparent_50%)]"
          aria-hidden
        />
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary-main/20 blur-3xl md:h-96 md:w-96"
          aria-hidden
        />
        <div
          className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-main/15 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
          {eyebrow && (
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-lighter/90 sm:text-xs">
              {eyebrow}
            </p>
          )}
          <h1
            id="page-hero-heading"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {titleHighlight ? (
              <>
                <span className="text-white">{title} </span>
                <span className="bg-gradient-to-r from-primary-light via-cyan-200 to-secondary-light bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              </>
            ) : (
              title
            )}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
              {description}
            </p>
          )}
          <div
            className="mx-auto mt-7 h-1 w-14 rounded-full bg-gradient-to-r from-primary-main via-primary-light to-secondary-main sm:mt-8 sm:w-16"
            aria-hidden
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default PageHero;
