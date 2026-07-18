import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";
import "@/sections/Home/home-sections.css";

const CTASection = () => (
  <section className="home-hero relative overflow-hidden py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <p className="home-eyebrow home-eyebrow--light mx-auto justify-center">Start today</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Ready to build something great?</h2>
        <p className="mt-4 text-base text-slate-400">
          Tell us about your project. We&apos;ll respond within 24 hours with a clear plan and honest estimate.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to={RoutePaths.CONTACT} className="btn-brand btn-brand-primary">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="mailto:webbuildinfotech@gmail.com" className="btn-brand btn-brand-outline">
            <Mail className="h-4 w-4" />
            webbuildinfotech@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
