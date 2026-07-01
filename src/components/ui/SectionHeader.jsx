import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/motionPresets";

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  light = false,
}) => {
  const alignClass =
    align === "left"
      ? "text-left mx-0"
      : align === "right"
        ? "text-right ml-auto"
        : "text-center mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: easeOut }}
      className={cn("mb-12 max-w-3xl", alignClass, className)}
    >
      {eyebrow && (
        <p className={cn("home-eyebrow", light && "home-eyebrow--light")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight",
          light ? "text-white" : "home-text-title"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-slate-400" : "home-text-body")}>
          {description}
        </p>
      )}
      {!light && <div className={cn("home-section-accent mt-5", align === "center" && "mx-auto", align === "right" && "ml-auto")} />}
    </motion.div>
  );
};

export default SectionHeader;
