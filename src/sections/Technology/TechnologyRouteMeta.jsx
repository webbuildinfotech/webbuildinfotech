import React from "react";
import { PageMeta, toCanonicalUrl } from "../../components/pageMeta";

/**
 * Head SEO for a technology page. Copy lives next to each layout in `./seo.js`.
 * @param {string} path - Canonical pathname, e.g. RoutePaths.TECHNOLOGY.TOOLS.FIGMA
 * @param {string} title - Document title (unique per page)
 * @param {string} description - Meta description (~150–160 chars)
 * @param {string} keywords - Comma-separated keywords
 */
export default function TechnologyRouteMeta({ path, title, description, keywords }) {
  if (!path || !title || !description || !keywords) return null;

  return (
    <PageMeta
      title={title}
      description={description}
      keywords={keywords}
      canonical={toCanonicalUrl(path)}
    />
  );
}
