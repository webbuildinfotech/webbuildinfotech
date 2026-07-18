import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { pricingTiers } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";
import "./pricing-preview.css";

const PricingPreview = () => (
  <HomeSection
    id="pricing"
    variant="mesh"
    eyebrow="Pricing"
    title="Clear Packages. Honest Estimates."
    description="Choose a starting plan — or request a custom quote. Final pricing is confirmed after a free discovery call."
  >
    <StaggerReveal className="pricing-grid" stagger={0.1}>
      {pricingTiers.map((tier) => (
        <StaggerItem key={tier.name} className={tier.featured ? "pricing-card-wrap pricing-card-wrap--featured" : "pricing-card-wrap"}>
          <motion.article
            className={`pricing-card ${tier.featured ? "pricing-card--featured" : ""}`}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: easeOut } }}
          >
            {tier.badge && (
              <span className="pricing-card__badge">
                <Sparkles className="h-3.5 w-3.5" />
                {tier.badge}
              </span>
            )}

            <div className="pricing-card__header">
              <h3 className="pricing-card__name">{tier.name}</h3>
              <p className="pricing-card__desc">{tier.desc}</p>
            </div>

            <div className="pricing-card__price-block">
              <p className="pricing-card__price-note">{tier.priceNote}</p>
              <p className="pricing-card__price">{tier.price}</p>
            </div>

            <ul className="pricing-card__features">
              {tier.features.map((f) => (
                <li key={f}>
                  <Check className="pricing-card__check" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              to={RoutePaths.CONTACT}
              className={tier.featured ? "pricing-card__cta pricing-card__cta--primary" : "pricing-card__cta"}
            >
              {tier.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.article>
        </StaggerItem>
      ))}
    </StaggerReveal>

    <motion.div
      className="pricing-custom"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <div className="pricing-custom__content">
        <div className="pricing-custom__icon">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h4 className="pricing-custom__title">Need something custom?</h4>
          <p className="pricing-custom__text">
            AI features, marketplace builds, or complex SaaS — we&apos;ll scope a plan that fits your timeline and budget.
          </p>
        </div>
      </div>
      <Link to={RoutePaths.CONTACT} className="btn-brand btn-brand-primary shrink-0">
        Request Custom Quote
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>

    <p className="pricing-footnote">
      No hidden fees. You get full source code ownership after project completion.
    </p>
  </HomeSection>
);

export default PricingPreview;
