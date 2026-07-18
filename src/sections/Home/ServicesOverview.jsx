import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Cloud,
  Palette,
  Sparkles,
  Server,
} from "lucide-react";
import { HomeSection, ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { serviceCategories } from "@/data/homePageData";
import { RoutePaths } from "@/routes/constant/path";
import "./services-overview.css";

const serviceIcons = [
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Cloud,
  Palette,
  Sparkles,
  Server,
];

const ServicesOverview = () => (
  <HomeSection
    id="services"
    variant="mesh"
    eyebrow="Services"
    title="End-to-End Digital Solutions"
    description="From websites to AI — clear services, practical delivery, and results your business can measure."
  >
    <StaggerReveal className="services-grid" stagger={0.07}>
      {serviceCategories.map((cat, i) => {
        const Icon = serviceIcons[i] ?? Globe;
        return (
          <StaggerItem key={cat.title}>
            <ProCard className="services-card group">
              <div className="services-card__top">
                <div className="services-card__icon">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="services-card__index">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="services-card__title">{cat.title}</h3>
              <p className="services-card__desc">{cat.desc}</p>

              <ul className="services-card__tags">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link to={RoutePaths.SERVICES} className="services-card__link">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </ProCard>
          </StaggerItem>
        );
      })}
    </StaggerReveal>

    <div className="mt-10 text-center">
      <Link to={RoutePaths.SERVICES} className="btn-brand btn-brand-primary">
        View All Services
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </HomeSection>
);

export default ServicesOverview;
