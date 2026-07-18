import React from "react";
import { Link } from "react-router-dom";
import { HomeSection } from "@/components/home";
import { RoutePaths } from "@/routes/constant/path";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

/**
 * Keyword-rich SEO content block for crawlers + human readers.
 * Visible, natural copy targeting web development / MERN / full stack queries.
 */
const SeoContentHome = () => (
  <HomeSection
    variant="white"
    eyebrow="Expertise"
    title="Professional Web Development Company for Modern Businesses"
    description="Looking for a reliable website development partner? WebBuild Infotech delivers SEO-friendly websites, MERN stack applications, and full stack solutions that help brands grow online."
  >
    <AnimatedReveal>
      <div className="mx-auto max-w-4xl space-y-5 text-base leading-relaxed">
        <p className="home-text-body">
          <strong className="home-text-title">WebBuild Infotech</strong> is a{" "}
          <strong className="home-text-title">web development company</strong> focused on{" "}
          <strong className="home-text-title">custom website development</strong>,{" "}
          <strong className="home-text-title">full stack web development</strong>, and{" "}
          <strong className="home-text-title">MERN stack development</strong> (MongoDB, Express.js,
          React.js, Node.js). We build fast, secure, and search-engine-friendly digital products for
          startups, SMEs, and growing enterprises.
        </p>
        <p className="home-text-body">
          Whether you need a business website, e-commerce store, SaaS platform, CRM dashboard, or
          API-driven web application, our team handles design, frontend, backend, cloud deployment,
          and ongoing support — so your product is launch-ready and easy to rank on Google.
        </p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "Custom website & landing page development",
            "MERN & full stack application development",
            "React.js / Next.js frontend engineering",
            "Node.js / Express API & backend systems",
            "SEO-optimized, high-performance websites",
            "E-commerce & admin panel development",
          ].map((item) => (
            <li key={item} className="home-text-body flex items-start gap-2 text-sm">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-teal-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="home-text-body">
          Ready to start?{" "}
          <Link to={RoutePaths.SERVICES} className="home-link">
            Explore our web development services
          </Link>{" "}
          or{" "}
          <Link to={RoutePaths.CONTACT} className="home-link">
            contact us
          </Link>{" "}
          for a free project consultation.
        </p>
      </div>
    </AnimatedReveal>
  </HomeSection>
);

export default SeoContentHome;
