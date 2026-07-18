import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeSection } from "@/components/home";
import { faqs } from "@/data/homePageData";
import { easeOut } from "@/lib/motionPresets";

const FAQSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <HomeSection id="faq" variant="white" eyebrow="FAQ" title="Frequently Asked Questions" headerClassName="max-w-3xl mx-auto">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: easeOut }}
            className="home-faq-item"
          >
            <button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="home-faq-trigger">
              {item.q}
              <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="h-5 w-5 shrink-0 text-blue-500 dark:text-blue-400" />
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="overflow-hidden"
                >
                  <div className="home-faq-answer">{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </HomeSection>
  );
};

export default FAQSection;
