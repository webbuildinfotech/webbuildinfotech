import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { techStack } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";

const TechStackHome = () => {
  const categories = Object.keys(techStack);
  const [active, setActive] = useState(categories[0]);

  return (
    <HomeSection
      variant="light"
      eyebrow="Technologies"
      title="Modern Tech Stack"
      description="Interactive stack we use to build fast, secure, and scalable products."
    >
      <StaggerReveal className="mb-6 flex flex-wrap justify-center gap-2" stagger={0.05}>
        {categories.map((cat) => (
          <StaggerItem key={cat}>
            <motion.button
              type="button"
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "home-pill !py-2"
              }`}
            >
              {cat}
            </motion.button>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: easeOut }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack[active].map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ y: -4 }}
              className="home-card home-text-title !px-5 !py-3 text-sm font-semibold shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.p className="mt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Link to={RoutePaths.TECHNOLOGIES} className="home-link text-sm">
          View all technologies →
        </Link>
      </motion.p>
    </HomeSection>
  );
};

export default TechStackHome;
