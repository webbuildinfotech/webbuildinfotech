import React from "react";
import { motion } from "framer-motion";

const serviceImage = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png";

const NextJsInfo = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img src={serviceImage} alt="Next.js Service" className="w-full max-w-md object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full"
        >
          <h3 className="text-lg font-semibold text-grey-700 dark:text-primary-main uppercase tracking-wider">
            Why Choose Next.js?
          </h3>
          <h2 className="text-3xl font-bold text-grey-900 dark:text-grey-50 mt-3 leading-tight">
            SEO-Friendly and Fast <span className="text-primary-main">React Framework</span>
          </h2>
          <p className="text-grey-600 dark:text-grey-300 mt-6 text-lg leading-relaxed">
            Next.js helps build modern web apps with SSR, SSG, and API routes. It is ideal for
            high-performance websites, SaaS platforms, and scalable frontend architecture.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            Our team uses Next.js to deliver better SEO, faster page loads, and structured
            codebases that support long-term product growth.
          </p>
          <p className="text-grey-600 dark:text-grey-300 mt-4 text-lg leading-relaxed">
            We also leverage dynamic routing, image optimization, and performance-focused rendering
            strategies to improve user experience and conversion on both marketing and product pages.
          </p>
          <ul className="mt-5 space-y-2 text-grey-700 dark:text-grey-200 text-base">
            <li>• Server-side rendering and static generation where each fits best.</li>
            <li>• SEO-ready architecture with metadata and structured page strategy.</li>
            <li>• Clean, scalable code organization for growing products and teams.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default NextJsInfo;
