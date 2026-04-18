import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PageMeta, toCanonicalUrl } from "../../components/pageMeta";
import { RoutePaths } from "../../routes/constant/path";
import { technologiesIndexSeo } from "./technologiesIndexSeo";

function normalizePathname(pathname) {
  if (!pathname) return "/";
  let p = pathname.replace(/\/+/g, "/");
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

/**
 * Parent layout for /technologies. Index SEO from `technologiesIndexSeo.js`;
 * each technology *Layout uses local `./seo.js`.
 */
const TechnologyLayout = () => {
  const { pathname } = useLocation();
  const path = normalizePathname(pathname);

  const showIndexSeo = useMemo(() => path === RoutePaths.TECHNOLOGIES, [path]);

  return (
    <>
      {showIndexSeo ? (
        <PageMeta
          title={technologiesIndexSeo.title}
          description={technologiesIndexSeo.description}
          keywords={technologiesIndexSeo.keywords}
          canonical={toCanonicalUrl(technologiesIndexSeo.path)}
        />
      ) : null}
      <Outlet />
    </>
  );
};

export default TechnologyLayout;
