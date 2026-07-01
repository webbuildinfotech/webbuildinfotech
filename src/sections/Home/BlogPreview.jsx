import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection, ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { blogPosts } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";
import { easeOut } from "@/lib/motionPresets";

const BlogPreview = () => (
  <HomeSection variant="light" eyebrow="Blog" title="Latest Articles">
    <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
      {blogPosts.map((post) => (
        <StaggerItem key={post.slug}>
          <Link to={RoutePaths.BLOG} className="block h-full">
            <ProCard className="group h-full">
              <span className="home-link text-xs font-semibold uppercase tracking-wide">{post.category}</span>
              <h3 className="home-text-title mt-2 font-semibold transition group-hover:text-[var(--home-link)]">
                {post.title}
              </h3>
              <motion.span
                className="home-link mt-3 inline-flex items-center gap-1 text-sm"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: easeOut }}
              >
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </motion.span>
            </ProCard>
          </Link>
        </StaggerItem>
      ))}
    </StaggerReveal>
  </HomeSection>
);

export default BlogPreview;
