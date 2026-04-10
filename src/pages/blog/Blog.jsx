import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import { RoutePaths } from "../../routes/constant/path";
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-main">Blog</p>
          <h1 className="mt-2 text-3xl font-bold text-grey-900 sm:text-4xl dark:text-white">
            Explore our latest blogs
          </h1>
          <p className="font-mooli mt-3 text-sm text-grey-600 sm:text-base dark:text-grey-300">
            Filter by category and read practical engineering insights from our delivery team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          <aside className={cn(glassCard, "h-fit p-5")}>
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
                className={cn(glassCard, "overflow-hidden transition hover:scale-[1.01]")}
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
