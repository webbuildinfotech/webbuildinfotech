export const SITE_ORIGIN = "https://webbuildinfotech.com";
export const SITE_NAME = "WebBuild Infotech";
export const SITE_EMAIL = "webbuildinfotech@gmail.com";

/** Primary target keywords for web development SEO */
export const PRIMARY_KEYWORDS = [
  "web development",
  "website development",
  "web development company",
  "web development agency",
  "MERN stack development",
  "full stack developer",
  "full stack web development",
  "React.js development",
  "Node.js development",
  "custom website development",
  "SEO friendly website",
  "e-commerce website development",
  "web application development",
  "hire web developers",
  "website design company India",
].join(", ");

export const HOME_SEO = {
  title:
    "Web Development Company | MERN Stack & Full Stack Website Development | WebBuild Infotech",
  description:
    "WebBuild Infotech is a professional web development company specializing in custom websites, MERN stack & full stack development, React.js, Node.js, MongoDB, e-commerce, and SEO-friendly web applications. Get a free consultation.",
  keywords: PRIMARY_KEYWORDS,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    name: SITE_NAME,
    alternateName: ["WebBuild InfoTech", "Web Build Infotech"],
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/logo/icon.png`,
    image: `${SITE_ORIGIN}/logo/icon.png`,
    email: SITE_EMAIL,
    description:
      "Professional web development company offering MERN stack, full stack, React.js, Node.js, and custom website development services.",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Mox Mall, Mandvi, near Bus Station",
      addressLocality: "Mandvi",
      addressRegion: "Gujarat",
      postalCode: "394160",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.257399,
      longitude: 73.299432,
    },
    areaServed: ["IN", "Global"],
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/webbuildinfotech/",
      "https://www.linkedin.com/company/webbuildinfotech/",
      "https://www.instagram.com/webbuildinfotech/",
    ],
    knowsAbout: [
      "Web Development",
      "Website Development",
      "MERN Stack",
      "Full Stack Development",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "SEO",
      "E-commerce Development",
      "SaaS Development",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    description: HOME_SEO.description,
    publisher: { "@type": "Organization", name: SITE_NAME },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_ORIGIN}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function servicesSchema() {
  const services = [
    {
      name: "Custom Website Development",
      description:
        "SEO-friendly corporate websites, business websites, landing pages, and portfolio sites.",
    },
    {
      name: "MERN Stack Development",
      description:
        "Full stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      name: "Full Stack Web Development",
      description:
        "End-to-end frontend and backend development for scalable web applications.",
    },
    {
      name: "E-Commerce Website Development",
      description:
        "Online stores with Shopify, WooCommerce, and custom e-commerce platforms.",
    },
    {
      name: "Web Application Development",
      description: "CRM, ERP, dashboards, admin panels, and SaaS platforms.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        provider: { "@type": "Organization", name: SITE_NAME },
        areaServed: "Worldwide",
      },
    })),
  };
}

export function faqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
