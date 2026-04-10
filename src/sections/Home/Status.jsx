import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { stats } from "../../data/jsonData";
import { BorderBeam } from "@/components/lightswind/border-beam";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glassCard";

const StatsComponent = () => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetKey((prevKey) => prevKey + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-background-light py-12 sm:py-16 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-main">
            By the numbers
          </p>
          <h2 className="mt-2 text-2xl font-bold text-grey-900 sm:text-3xl dark:text-white">
            A track record you can trust
          </h2>
          <p className="font-mooli mt-3 text-sm text-grey-600 sm:text-base dark:text-grey-300">
            Measurable outcomes, consistent delivery, and long-term partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                glassCard,
                "px-4 py-5 transition-all duration-300 hover:ring-primary-main/40 sm:px-5 sm:py-6 dark:hover:ring-primary-main/35"
              )}
              style={{
                animation: `fadeInUp 0.7s ease-out ${index * 0.12}s forwards`,
                opacity: 0,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-3 rounded-xl bg-primary-main/10 p-2.5 text-3xl text-primary-main transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                  {stat.icon}
                </div>

                <h3 className="text-2xl font-semibold text-grey-900 sm:text-3xl dark:text-white">
                  <CountUp
                    key={resetKey + index}
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix || "+"}
                    separator=","
                  />
                </h3>

                <p className="font-mooli mt-1 text-xs text-grey-600 sm:text-sm dark:text-grey-300">
                  {stat.label}
                </p>
              </div>
              <BorderBeam
                size={70}
                duration={12}
                delay={0}
                colorFrom="#06b6d4"
                colorTo="#3b82f6"
                reverse={false}
                initialOffset={30}
                borderThickness={2}
                opacity={0.9}
                glowIntensity={2}
                beamBorderRadius={20}
                pauseOnHover={true}
                speedMultiplier={1.5}
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              transform: translateY(12px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default StatsComponent;
