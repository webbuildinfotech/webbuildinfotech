import React from "react";
import { motion } from "framer-motion";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import { HomeSection, ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { integrations, lighthouseScores, securityBadges } from "@/data/homePageData";

const PremiumExtras = () => (
  <>
    <AnimatedReveal variant="in">
      <section className="home-bg-strip py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="home-text-muted mb-6 text-center text-xs font-bold uppercase tracking-widest">
            Featured Integrations
          </p>
          <StaggerReveal className="flex flex-wrap justify-center gap-4" stagger={0.04}>
            {integrations.map((name) => (
              <StaggerItem key={name}>
                <motion.span whileHover={{ y: -3 }} className="home-pill inline-block text-sm font-semibold">
                  {name}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </AnimatedReveal>

    <HomeSection variant="light" eyebrow="Quality" title="Performance & Security">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <p className="home-text-title mb-4 text-sm font-semibold">Google Lighthouse Scores</p>
          <StaggerReveal className="grid grid-cols-2 gap-3" stagger={0.08}>
            {lighthouseScores.map((s) => (
              <StaggerItem key={s.label}>
                <ProCard className="text-center">
                  <motion.p
                    className="text-3xl font-bold text-teal-600 dark:text-teal-400"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {s.score}
                  </motion.p>
                  <p className="home-text-muted text-xs">{s.label}</p>
                </ProCard>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        <AnimatedReveal variant="left">
          <p className="home-text-title mb-4 text-sm font-semibold">Security & Compliance</p>
          <StaggerReveal className="flex flex-wrap gap-3" stagger={0.05}>
            {securityBadges.map((b) => (
              <StaggerItem key={b}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-800 dark:bg-teal-900/50 dark:text-teal-300"
                >
                  {b}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <p className="home-text-body mt-6 text-sm">
            Free website audit available — request a performance &amp; security review with your consultation.
          </p>
        </AnimatedReveal>
      </div>
    </HomeSection>
  </>
);

export default PremiumExtras;
