import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection, ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { testimonials } from "@/data/homePageData";

const TestimonialsHome = () => (
  <HomeSection variant="white" eyebrow="Testimonials" title="Client Testimonials">
    <StaggerReveal className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
      {testimonials.map((t) => (
        <StaggerItem key={t.name}>
          <ProCard>
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </div>
            <p className="home-text-body mt-4 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-5 flex items-center gap-3 border-t border-[var(--home-card-border)] pt-4">
              <img src={t.photo} alt="" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="home-text-title font-semibold">{t.name}</p>
                <p className="home-text-muted text-xs">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </ProCard>
        </StaggerItem>
      ))}
    </StaggerReveal>
  </HomeSection>
);

export default TestimonialsHome;
