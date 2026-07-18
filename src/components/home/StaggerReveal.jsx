import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, easeOut } from "@/lib/motionPresets";

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
  once = true,
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer(stagger, delay)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", duration = 0.55 }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
