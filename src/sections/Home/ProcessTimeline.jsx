import React from "react";
import { motion } from "framer-motion";
import { HomeSection } from "@/components/home";
import { processSteps } from "@/data/homePageData";
import { easeOut } from "@/lib/motionPresets";
import "./home-sections.css";

const RING_CIRCUMFERENCE = 163.36;

const ProcessTimeline = () => (
  <HomeSection variant="white" eyebrow="Process" title="Our Development Process">
    <div className="process-timeline">
      {/* Horizontal progress bar — desktop */}
      <div className="process-timeline__track process-timeline__track--horizontal" aria-hidden>
        <div className="process-timeline__track-bg" />
        <motion.div
          className="process-timeline__track-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 2.4, ease: easeOut }}
        />
        <motion.div
          className="process-timeline__pulse"
          initial={{ left: "0%", opacity: 0 }}
          whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 2.4, ease: easeOut }}
        />
      </div>

      {/* Vertical progress bar — mobile */}
      <div className="process-timeline__track process-timeline__track--vertical" aria-hidden>
        <div className="process-timeline__track-bg" />
        <motion.div
          className="process-timeline__track-fill process-timeline__track-fill--vertical"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 2.4, ease: easeOut }}
        />
      </div>

      <div className="process-timeline__steps">
        {processSteps.map((step, i) => (
          <motion.div
            key={step}
            className="process-step"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: easeOut }}
          >
            <div className="process-step__node-wrap">
              <svg className="process-step__ring" viewBox="0 0 56 56" aria-hidden>
                <circle className="process-step__ring-bg" cx="28" cy="28" r="26" />
                <motion.circle
                  className="process-step__ring-fill"
                  cx="28"
                  cy="28"
                  r="26"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.3, ease: easeOut }}
                />
              </svg>

              <motion.div
                className="process-step__circle"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 220, damping: 18 }}
                whileHover={{ scale: 1.08 }}
              >
                {i + 1}
              </motion.div>
            </div>

            <p className="process-step__label home-text-title">{step}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </HomeSection>
);

export default ProcessTimeline;
