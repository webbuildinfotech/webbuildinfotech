import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HomeSection } from "@/components/home";
import { serviceCategories } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";

const ServicesOverview = () => {
  const [active, setActive] = useState(0);
  const category = serviceCategories[active];

  return (
    <HomeSection
      id="services"
      variant="white"
      eyebrow="Services"
      title="End-to-End Digital Solutions"
      description="From websites to AI — everything your business needs to succeed online."
    >
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:w-72 lg:flex-col lg:overflow-visible">
          {serviceCategories.map((cat, i) => (
            <motion.button
              key={cat.title}
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`shrink-0 rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                active === i
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "home-pill !rounded-xl !px-4 !py-3.5"
              }`}
            >
              {cat.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="home-card flex-1 lg:p-8"
          >
            <h3 className="home-text-title text-xl font-bold">{category.title}</h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {category.items.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="home-text-body flex items-center gap-2 text-sm"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Link to={RoutePaths.SERVICES} className="home-link mt-6 inline-flex items-center gap-1 text-sm">
              Explore {category.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </HomeSection>
  );
};

export default ServicesOverview;
