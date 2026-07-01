import {
  HomeHero,
  HomeTrustedBy,
  WhyChooseUsHome,
  ServicesOverview,
  TechStackHome,
  ProcessTimeline,
  FeaturedProjectsHome,
  IndustriesHome,
  CaseStudiesHome,
  TestimonialsHome,
  CompanyStats,
  PricingPreview,
  FAQSection,
  BlogPreview,
  AwardsSection,
  PremiumExtras,
  ContactCTAHome,
  ContactHomeSection,
  NewsletterSection,
  FloatingContact,
} from '../../sections/Home'
import '@/sections/Home/home-sections.css'
import { PageMeta, toCanonicalUrl } from '@/components/pageMeta'
import { RoutePaths } from '@/routes/constant/path'

const Home = () => {
  return (
    <div className="bg-[var(--home-surface)]">
      <PageMeta
        title="WebBuild Infotech | Web Development, Web Apps & AI Solutions"
        description="Custom websites, SaaS platforms, AI applications, and mobile apps built by WebBuild Infotech. 250+ projects, 150+ clients, 7+ years experience."
        keywords="web development, SaaS, AI solutions, mobile apps, React, Node.js, WebBuild Infotech"
        canonical={toCanonicalUrl(RoutePaths.HOME)}
      />
      <HomeHero />
      <HomeTrustedBy />
      <WhyChooseUsHome />
      <ServicesOverview />
      <TechStackHome />
      <ProcessTimeline />
      <FeaturedProjectsHome />
      <IndustriesHome />
      <CaseStudiesHome />
      <TestimonialsHome />
      <CompanyStats />
      <PricingPreview />
      <FAQSection />
      <BlogPreview />
      <AwardsSection />
      <PremiumExtras />
      <ContactCTAHome />
      <ContactHomeSection />
      <NewsletterSection />
      <FloatingContact />
    </div>
  )
}

export default Home
