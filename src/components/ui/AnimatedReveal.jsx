import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { easeOut, fadeUp, fadeIn, scaleIn, slideLeft, slideRight } from "@/lib/motionPresets";

const variantMap = {
  up: fadeUp,
  in: fadeIn,
  scale: scaleIn,
  left: slideLeft,
  right: slideRight,
};

const AnimatedReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  variant = "up",
}) => {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1 });
  const variants = variantMap[variant] ?? fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedReveal;
