import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HomeSection, ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { caseStudies } from "@/data/homePageData";

const CaseStudiesHome = () => (
  <HomeSection id="case-studies" variant="light" eyebrow="Results" title="Case Studies">
    <StaggerReveal className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
      {caseStudies.map((cs) => (
        <StaggerItem key={cs.title}>
          <ProCard>
            <h3 className="home-link text-lg font-bold">{cs.title}</h3>
            <p className="home-text-title mt-1 text-sm font-medium">Client: {cs.client}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="home-text-title font-semibold">Challenge</dt>
                <dd className="home-text-body">{cs.challenge}</dd>
              </div>
              <div>
                <dt className="home-text-title font-semibold">Solution</dt>
                <dd className="home-text-body">{cs.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-teal-600 dark:text-teal-400">Result</dt>
                <dd className="home-text-body">{cs.result}</dd>
              </div>
            </dl>
            <motion.button type="button" whileHover={{ x: 4 }} className="home-link mt-4 inline-flex items-center gap-1 text-sm">
              Read Case Study <ArrowRight className="h-4 w-4" />
            </motion.button>
          </ProCard>
        </StaggerItem>
      ))}
    </StaggerReveal>
  </HomeSection>
);

export default CaseStudiesHome;
