import React from "react";
import { Helmet } from "react-helmet-async";

export const SITE_ORIGIN = "https://webbuildinfotech.com";
export const SITE_NAME = "WebBuild Infotech";

/** @param {string} pathname e.g. `/contact` */
export function toCanonicalUrl(pathname) {
  if (!pathname || pathname === "/") return `${SITE_ORIGIN}/`;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_ORIGIN}${path}`;
}

const DEFAULT_SHARE_IMAGE = `${SITE_ORIGIN}/logo/icon.png`;

/**
 * Reusable page meta / SEO head component.
 */
export default function PageMeta({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
}) {
  const ogUrl = canonical || SITE_ORIGIN;
  const shareImage = ogImage || DEFAULT_SHARE_IMAGE;
  const robots = noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Gujarat, India" />
      <meta name="theme-color" content="#2563EB" />

      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* Open Graph */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:alt" content={title || SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={shareImage} />
    </Helmet>
  );
}
