import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/jsonData";
import { RoutePaths } from "@/routes/constant/path";
import { HomeSection, StaggerReveal, StaggerItem } from "@/components/home";
import { easeOut } from "@/lib/motionPresets";
import "./home-sections.css";

const FeaturedProjectsHome = () => {
  const featured = projects.slice(0, 8);

  return (
    <HomeSection
      id="portfolio"
      variant="dark"
      light
      eyebrow="Portfolio"
      title="Featured Projects"
      description="Real work for real clients — explore our latest deliveries."
    >
      <StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        {featured.map((project) => (
          <StaggerItem key={project.id}>
            <motion.article
              className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm"
              whileHover={{ y: -6, borderColor: "rgba(96,165,250,0.4)" }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-blue-400">Healthcare · React · AWS</span>
                <h3 className="mt-1 font-semibold text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs text-slate-400">{project.description}</p>
                <div className="mt-3 flex gap-3">
                  <Link
                    to={RoutePaths.PROJECTS}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 transition hover:gap-2 hover:text-blue-300"
                  >
                    View Project <ArrowRight className="h-3 w-3" />
                  </Link>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    Case Study <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerReveal>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <Link to={RoutePaths.PROJECTS} className="btn-brand btn-brand-outline">
          View All Projects <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </HomeSection>
  );
};

export default FeaturedProjectsHome;
