import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";
import "./home-sections.css";

const ContactCTAHome = () => (
  <section className="home-hero relative overflow-hidden py-20 sm:py-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(37,99,235,0.15),transparent)]" />
    <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <p className="home-eyebrow home-eyebrow--light mx-auto justify-center">Get started</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Ready to Build Something Amazing?</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Let&apos;s discuss your project and create a roadmap together.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to={RoutePaths.CONTACT} className="btn-brand btn-brand-primary">
            <Calendar className="h-4 w-4" />
            Book Free Consultation
          </Link>
          <Link to={RoutePaths.CONTACT} className="btn-brand btn-brand-outline">
            Get Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactCTAHome;
