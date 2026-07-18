import React from "react";
import {
  Zap, Search, Smartphone, Shield, TrendingUp, Code2, Headphones, BadgeDollarSign,
} from "lucide-react";
import { HomeSection, ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { whyChooseUs } from "@/data/homePageData";

const icons = [Zap, Search, Smartphone, Shield, TrendingUp, Code2, Headphones, BadgeDollarSign];

const WhyChooseUsHome = () => (
  <HomeSection variant="mesh" eyebrow="Why us" title="Why Businesses Choose Us">
    <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
      {whyChooseUs.map((item, i) => {
        const Icon = icons[i];
        return (
          <StaggerItem key={item.title}>
            <ProCard>
              <div className="home-icon-box">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="home-text-title mt-4 font-semibold">{item.title}</h3>
              <p className="home-text-body mt-2 text-sm leading-relaxed">{item.desc}</p>
            </ProCard>
          </StaggerItem>
        );
      })}
    </StaggerReveal>
  </HomeSection>
);

export default WhyChooseUsHome;
