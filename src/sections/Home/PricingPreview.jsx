import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { pricingTiers } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";

const PricingPreview = () => (
  <HomeSection
    id="pricing"
    variant="light"
    eyebrow="Pricing"
    title="Plans for Every Stage"
    description="Transparent packages — or a custom quote for unique requirements."
  >
    <StaggerReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
      {pricingTiers.map((tier) => (
        <StaggerItem key={tier.name}>
          <motion.article
            className={`h-full rounded-2xl border p-6 ${
              tier.featured
                ? "border-blue-500 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-600/25"
                : "home-card"
            }`}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: easeOut } }}
          >
            <h3 className={`text-lg font-bold ${tier.featured ? "text-white" : "home-text-title"}`}>{tier.name}</h3>
            <p className={`mt-2 text-sm ${tier.featured ? "text-blue-100" : "home-text-body"}`}>{tier.desc}</p>
            <ul className="mt-4 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-blue-200" : "text-blue-500 dark:text-blue-400"}`} />
                  <span className={tier.featured ? "text-blue-50" : "home-text-body"}>{f}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </StaggerItem>
      ))}
    </StaggerReveal>

    <motion.div className="mt-10 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Link to={RoutePaths.CONTACT} className="btn-brand btn-brand-primary">
        Get Pricing
      </Link>
    </motion.div>
  </HomeSection>
);

export default PricingPreview;
