import React from "react";
import { motion } from "framer-motion";
import { Gauge, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import "./hero-showcase.css";

const floatCards = [
  {
    icon: Gauge,
    label: "Performance",
    value: "99 Lighthouse",
    accent: "hero-visual__card--blue",
    position: "hero-visual__card--top-left",
    delay: 0.5,
  },
  {
    icon: Rocket,
    label: "Delivered",
    value: "250+ Projects",
    accent: "hero-visual__card--teal",
    position: "hero-visual__card--top-right",
    delay: 0.65,
  },
  {
    icon: ShieldCheck,
    label: "Security",
    value: "Enterprise Grade",
    accent: "hero-visual__card--violet",
    position: "hero-visual__card--bottom-left",
    delay: 0.8,
  },
];

const HeroShowcase = () => (
  <div className="hero-visual" aria-hidden>
    <div className="hero-visual__orb hero-visual__orb--blue" />
    <div className="hero-visual__orb hero-visual__orb--teal" />
    <div className="hero-visual__grid" />

    <motion.div
      className="hero-visual__stage"
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src="/images/leptop.png"
        alt=""
        className="hero-visual__laptop"
        width={720}
        height={480}
        loading="eager"
        draggable={false}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-visual__phone"
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-visual__phone-frame">
          <div className="hero-visual__phone-notch" />
          <img
            src="/images/hero-analytics.jpg"
            alt=""
            className="hero-visual__phone-screen"
            loading="lazy"
            draggable={false}
          />
        </div>
      </motion.div>
    </motion.div>

    {floatCards.map(({ icon: Icon, label, value, accent, position, delay }) => (
      <motion.div
        key={label}
        className={`hero-visual__card ${accent} ${position}`}
        initial={{ opacity: 0, scale: 0.85, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex items-center gap-2.5"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.3 }}
        >
          <span className="hero-visual__card-icon">
            <Icon className="h-4 w-4" />
          </span>
          <span className="hero-visual__card-body">
            <span className="hero-visual__card-label">{label}</span>
            <span className="hero-visual__card-value">{value}</span>
          </span>
        </motion.div>
      </motion.div>
    ))}

    <motion.div
      className="hero-visual__pill"
      initial={{ opacity: 0, x: "-50%", y: 12 }}
      animate={{ opacity: 1, x: "-50%", y: [0, -4, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.9 },
        x: { duration: 0 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
      }}
    >
      <Sparkles className="h-3.5 w-3.5 text-teal-400" />
      <span>AI · Web · Mobile · Cloud</span>
    </motion.div>
  </div>
);

export default HeroShowcase;
