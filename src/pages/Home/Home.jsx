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
  SeoContentHome,
} from '../../sections/Home'
import '@/sections/Home/home-sections.css'
import { PageMeta, JsonLd, toCanonicalUrl } from '@/components/pageMeta'
import { RoutePaths } from '@/routes/constant/path'
import { faqs } from '@/data/homePageData'
import {
  HOME_SEO,
  organizationSchema,
  websiteSchema,
  servicesSchema,
  faqSchema,
  breadcrumbSchema,
  SITE_ORIGIN,
} from '@/data/seoConfig'

const Home = () => {
  return (
    <div className="bg-[var(--home-surface)]">
      <PageMeta
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        keywords={HOME_SEO.keywords}
        canonical={toCanonicalUrl(RoutePaths.HOME)}
      />
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          servicesSchema(),
          faqSchema(faqs),
          breadcrumbSchema([{ name: 'Home', url: `${SITE_ORIGIN}/` }]),
        ]}
      />

      <HomeHero />
      <HomeTrustedBy />
      <WhyChooseUsHome />
      <ServicesOverview />
      <TechStackHome />
      <SeoContentHome />
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
