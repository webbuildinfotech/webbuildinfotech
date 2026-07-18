import React from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Building2,
  Plane,
  HardHat,
  ShoppingBag,
  Factory,
  Truck,
  UtensilsCrossed,
  Car,
  Rocket,
  Scale,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import CTASection from "@/components/ui/CTASection";
import { ProCard, StaggerReveal, StaggerItem } from "@/components/home";
import { RoutePaths } from "@/routes/constant/path";
import "@/sections/Home/home-sections.css";

const industryList = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    desc: "Patient portals, clinic websites, appointment systems, and secure health dashboards.",
    solutions: ["Clinic websites", "Booking systems", "Admin panels"],
  },
  {
    name: "Finance & Fintech",
    icon: Landmark,
    desc: "Secure web apps, dashboards, and digital products for finance-focused businesses.",
    solutions: ["Client portals", "Reporting dashboards", "Secure APIs"],
  },
  {
    name: "Education",
    icon: GraduationCap,
    desc: "Learning platforms, institute websites, and student management experiences.",
    solutions: ["LMS websites", "Course portals", "Enrollment flows"],
  },
  {
    name: "Real Estate",
    icon: Building2,
    desc: "Property listing sites, inquiry CRM, and modern marketing websites for agencies.",
    solutions: ["Listing portals", "Lead forms", "Virtual tours UI"],
  },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    desc: "Booking-ready websites and apps for travel agencies, hotels, and tour operators.",
    solutions: ["Booking UX", "Package pages", "Payment flows"],
  },
  {
    name: "Construction",
    icon: HardHat,
    desc: "Project showcase sites and tools that help construction brands win more clients.",
    solutions: ["Project galleries", "Quotation forms", "Company sites"],
  },
  {
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    desc: "Online stores and catalogs that convert browsers into buyers.",
    solutions: ["Shopify / Woo", "Custom stores", "Inventory UI"],
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "B2B websites, product catalogs, and internal process dashboards.",
    solutions: ["Product catalogs", "Dealer portals", "Inquiry CRM"],
  },
  {
    name: "Logistics",
    icon: Truck,
    desc: "Tracking-friendly web apps and operational dashboards for delivery businesses.",
    solutions: ["Tracking pages", "Ops dashboards", "Partner portals"],
  },
  {
    name: "Restaurants & Food",
    icon: UtensilsCrossed,
    desc: "Menus, online ordering, and brand websites for restaurants and cafes.",
    solutions: ["Online menus", "Ordering UX", "Reservation forms"],
  },
  {
    name: "Automotive",
    icon: Car,
    desc: "Dealer websites, service booking, and vehicle showcase experiences.",
    solutions: ["Showroom sites", "Service booking", "Lead capture"],
  },
  {
    name: "Startups",
    icon: Rocket,
    desc: "MVP websites, SaaS landing pages, and product UIs built for fast launch.",
    solutions: ["MVP builds", "SaaS landing", "Admin panels"],
  },
  {
    name: "Government & Public",
    icon: Scale,
    desc: "Accessible, reliable websites and portals with clear information architecture.",
    solutions: ["Info portals", "Forms & workflows", "Accessible UI"],
  },
  {
    name: "Insurance",
    icon: Shield,
    desc: "Policy inquiry flows, agent portals, and trust-focused digital experiences.",
    solutions: ["Quote forms", "Agent dashboards", "Claim status UI"],
  },
];

const highlights = [
  "Domain-aware UI and content structure",
  "Mobile-first, SEO-friendly builds",
  "Secure, maintainable architecture",
  "Clear timelines and communication",
];

const IndustriesContent = () => (
  <>
    <PageHero
      eyebrow="Industries"
      title="Industries"
      titleHighlight="We Serve"
      description="We help businesses across sectors launch modern websites, web apps, and digital products — tailored to how your industry actually works."
    />

    <section className="home-section home-bg-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we deliver"
          title="Digital solutions for every sector"
          description="Pick your industry — we bring practical product thinking, clean design, and reliable engineering."
        />

        <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.05}>
          {industryList.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.name}>
                <ProCard className="flex h-full flex-col">
                  <div className="home-icon-box mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="home-text-title text-lg font-bold">{item.name}</h3>
                  <p className="home-text-body mt-2 flex-1 text-sm leading-relaxed">{item.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {item.solutions.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-[var(--home-card-border)] bg-[var(--home-surface-alt)] px-2.5 py-1 text-[11px] font-semibold text-[var(--home-text-muted)] dark:bg-white/5"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </ProCard>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>

    <section className="home-section home-bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimatedReveal>
            <SectionHeader
              align="left"
              eyebrow="Our approach"
              title="Built around your business, not generic templates"
              description="Every industry has different users, compliance needs, and conversion goals. We design and develop with that context from day one."
              className="mb-0"
            />
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="home-card space-y-3">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" />
                  <p className="home-text-body text-sm font-medium">{point}</p>
                </div>
              ))}
              <Link
                to={RoutePaths.CONTACT}
                className="btn-brand btn-brand-primary mt-4 !w-full sm:!w-auto"
              >
                Discuss your industry project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default IndustriesContent;
