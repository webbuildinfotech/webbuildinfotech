import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { industries } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";

const IndustriesHome = () => (
  <HomeSection variant="white" eyebrow="Industries" title="Industries We Serve">
    <StaggerReveal className="flex flex-wrap justify-center gap-3" stagger={0.04}>
      {industries.map((name) => (
        <StaggerItem key={name}>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link to={RoutePaths.INDUSTRIES} className="home-pill">
              {name}
            </Link>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerReveal>
  </HomeSection>
);

export default IndustriesHome;
