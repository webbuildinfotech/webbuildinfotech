import React from "react";
import { Helmet } from "react-helmet-async";

export const SITE_ORIGIN = "https://webbuildinfotech.com";

/** @param {string} pathname e.g. `/contact` */
export function toCanonicalUrl(pathname) {
  if (!pathname || pathname === "/") return `${SITE_ORIGIN}/`;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_ORIGIN}${path}`;
}

/**
 * Reusable page meta / SEO head component.
 * @param {string} title - Page title
 * @param {string} [description] - Meta description
 * @param {string} [keywords] - Meta keywords (optional)
 * @param {string} [canonical] - Full canonical URL (optional; use toCanonicalUrl)
 */
const DEFAULT_SHARE_IMAGE = `${SITE_ORIGIN}/logo/icon.png`;

export default function PageMeta({ title, description, keywords, canonical, ogImage }) {
  const ogUrl = canonical || undefined;
  const shareImage = ogImage || DEFAULT_SHARE_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
      <meta property="og:type" content="website" />
      {title ? <meta property="og:image" content={shareImage} /> : null}
      {title ? <meta name="twitter:card" content="summary_large_image" /> : null}
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {title ? <meta name="twitter:image" content={shareImage} /> : null}
    </Helmet>
  );
}
