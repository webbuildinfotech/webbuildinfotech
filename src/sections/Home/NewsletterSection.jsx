import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection } from "@/components/home";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <HomeSection
      variant="light"
      noPadding
      className="home-bg-strip py-16"
      eyebrow="Newsletter"
      title="Stay Updated"
      description="Get tips on web development, SEO, and AI — straight to your inbox."
      headerClassName="max-w-xl mx-auto"
    >
      <motion.form
        className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          setEmail("");
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="home-text-title flex-1 rounded-xl border border-[var(--home-card-border)] bg-[var(--home-card-bg)] px-4 py-3 text-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
        <button type="submit" className="btn-brand btn-brand-primary shrink-0">
          Subscribe <Send className="h-4 w-4" />
        </button>
      </motion.form>
    </HomeSection>
  );
};

export default NewsletterSection;
