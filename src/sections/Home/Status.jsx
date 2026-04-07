import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { stats } from "../../data/jsonData";
import { BorderBeam } from "@/components/lightswind/border-beam";

const StatsComponent = () => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetKey((prevKey) => prevKey + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-background-light dark:bg-background-dark py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-main">
            By the numbers
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-grey-900 dark:text-white">
            A track record you can trust
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-2xl bg-white/90 dark:bg-background-dark-light px-4 py-5 sm:px-5 sm:py-6 shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-grey-400 dark:ring-grey-700/80 transition-transform duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.7s ease-out ${index * 0.12}s forwards`,
                opacity: 0,
              }}
            >
              <div className="mb-3 text-3xl sm:text-4xl text-primary-main">{stat.icon}</div>

              <h3 className="text-xl sm:text-2xl font-semibold text-grey-900 dark:text-white">
                <CountUp
                  key={resetKey + index}
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix || "+"}
                  separator=","
                />
              </h3>

              <p className="font-mooli mt-1 text-xs sm:text-sm text-grey-600 dark:text-grey-300 text-center">
                {stat.label}
              </p>
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
