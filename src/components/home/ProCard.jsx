import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover, easeOut } from "@/lib/motionPresets";

const ProCard = ({ children, className = "", dark = false, as = "article" }) => {
  const Component = motion[as] ?? motion.article;

  return (
    <Component
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      transition={{ duration: 0.35, ease: easeOut }}
      className={cn(
        dark ? "home-card-dark" : "home-card",
        "h-full",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ProCard;
