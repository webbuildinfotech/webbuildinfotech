import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import { RoutePaths } from "../../routes/constant/path";
import { PageMeta, toCanonicalUrl } from "@/components/pageMeta";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glassCard";

const Blog = () => {
  const categories = useMemo(() => {
    const unique = [...new Set(blogPosts.map((post) => post.category))];
    return unique.sort((a, b) => a.localeCompare(b));
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="w-full bg-background-light py-20 dark:bg-background-dark">
      <PageMeta
        title="Blog | Web Development, AI & DevOps Insights | WebBuild Infotech"
        description="Articles on full-stack development, cloud, DevOps, AI in business, and modern engineering from the WebBuild Infotech team."
        keywords="web development blog, full stack, DevOps, AI workflows, WebBuild Infotech"
        canonical={toCanonicalUrl(RoutePaths.BLOG)}
      />
      <div className="relative isolate mb-10 w-full overflow-hidden rounded-b-3xl px-6 py-12 text-center shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] sm:px-8 sm:py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-grey-950 via-primary-darker to-secondary-darker" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(91,228,155,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(142,51,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />

        <div className="relative mx-auto w-full max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-lighter/90">Blog</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore our latest{" "}
            <span className="bg-gradient-to-r from-primary-light via-primary-lighter to-secondary-light bg-clip-text text-transparent">
              blogs
            </span>
          </h1>
          <p className="font-mooli mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
            Filter by category and read practical engineering insights from our delivery team.
          </p>
          <div className="mx-auto mt-7 h-1 w-14 rounded-full bg-gradient-to-r from-primary-main via-primary-light to-secondary-main sm:w-16" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          <aside className={cn(glassCard, "h-fit self-start lg:sticky lg:top-24 p-5")}>
            <h2 className="text-base font-semibold text-grey-900 dark:text-white">Categories</h2>
            <div className="mt-4 space-y-1.5">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  activeCategory === "All"
                    ? "bg-primary-main/12 font-semibold text-primary-main"
                    : "text-grey-700 hover:bg-grey-100 dark:text-grey-300 dark:hover:bg-grey-800"
                }`}
              >
                All ({blogPosts.length})
              </button>
              {categories.map((category) => {
                const count = blogPosts.filter((post) => post.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      activeCategory === category
                        ? "bg-primary-main/12 font-semibold text-primary-main"
                        : "text-grey-700 hover:bg-grey-100 dark:text-grey-300 dark:hover:bg-grey-800"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-5 inline-flex rounded-lg border border-grey-300 px-3 py-2 text-xs font-semibold text-grey-700 transition hover:bg-grey-100 dark:border-grey-700 dark:text-grey-300 dark:hover:bg-grey-800"
            >
              Clear Filter
            </button>
          </aside>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className={cn(glassCard, "overflow-hidden transition hover:scale-[1.01] !rounded-[0px] !rounded-tl-[10%] !rounded-br-[10%]")}
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 p-4">
                  <h3 className="text-base font-semibold text-grey-900 dark:text-white">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-grey-500 dark:text-grey-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>{new Date(post.publishedAt).toDateString()}</span>
                  </div>
                  <p className="font-mooli text-sm text-grey-600 dark:text-grey-300">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`${RoutePaths.BLOG}/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary-main hover:text-primary-dark"
                  >
                    See Full Article <span className="ml-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
