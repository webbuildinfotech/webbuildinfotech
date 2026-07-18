import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { awards } from "@/data/homePageData";

const AwardsSection = () => (
  <HomeSection variant="white" eyebrow="Recognition" title="Awards & Certifications">
    <StaggerReveal className="flex flex-wrap justify-center gap-4" stagger={0.06}>
      {awards.map((name) => (
        <StaggerItem key={name}>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} className="home-pill inline-flex items-center gap-2 font-semibold">
            <Award className="h-4 w-4 text-amber-500" />
            {name}
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerReveal>
  </HomeSection>
);

export default AwardsSection;
