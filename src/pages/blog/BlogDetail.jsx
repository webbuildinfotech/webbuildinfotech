import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, getBlogBySlug } from "../../data/blogData";
import { RoutePaths } from "../../routes/constant/path";
import { ChevronLeftIcon, PlusIcon } from "@/components/icons/Icon";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const gallery = useMemo(() => post?.images?.length ? post.images : [post?.coverImage], [post]);
  const [activeImage, setActiveImage] = useState(0);

  if (!post) {
    return (
      <section className="bg-slate-50 pb-14 pt-24 dark:bg-slate-950 sm:pb-16 sm:pt-28">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Blog not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            The article you are looking for does not exist.
          </p>
          <Link to={RoutePaths.BLOG} className="mt-6 inline-block text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
            Back to all blogs
          </Link>
        </div>
      </section>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <section className="relative isolate overflow-hidden bg-slate-50 pb-14 pt-24 dark:bg-slate-950 sm:pb-16 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-400/15" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl dark:bg-fuchsia-400/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <Link
          to={RoutePaths.BLOG}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white dark:border-indigo-400/20 dark:bg-slate-900/70 dark:text-indigo-300 dark:hover:border-indigo-400/40 dark:hover:bg-slate-900"
        >
          <ChevronLeftIcon className="text-lg" />
          Back to all blogs
        </Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-white/80 shadow-[0_20px_60px_-25px_rgba(79,70,229,0.45)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
            <div className="relative">
              <img
                src={gallery[activeImage]}
                alt={post.title}
                className="h-64 w-full object-cover md:h-[22rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="mb-3 inline-flex rounded-full border border-white/35 bg-slate-900/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm">
                  {post.category}
                </p>
                <h1 className="text-3xl font-bold text-white md:text-4xl">
                  {post.title}
                </h1>
                <p className="font-mooli mt-3 text-sm text-white/80">
                  {post.author} • {post.readTime} • {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-5 md:gap-10 md:p-10">
              <div className="space-y-5 md:col-span-3">
                {gallery.length > 1 && (
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                    <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
                      Gallery
                    </h2>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {gallery.map((img, idx) => (
                        <button
                          key={img}
                          type="button"
                          onClick={() => setActiveImage(idx)}
                          className={`overflow-hidden rounded-lg border transition ${
                            activeImage === idx
                              ? "border-indigo-500 ring-2 ring-indigo-500/30"
                              : "border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
                          }`}
                        >
                          <img src={img} alt={`${post.title} ${idx + 1}`} className="h-20 w-full object-cover" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Article Overview
                  </h2>
                  <div className="font-mooli space-y-5 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                    {post.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </div>

              <aside className="space-y-6 md:col-span-2">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Tags
                  </h2>
                  <ul className="space-y-3">
                    {post.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mooli flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <PlusIcon className="mt-1 text-lg text-indigo-600 dark:text-indigo-400" />
                        <span>#{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/80">
                  <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                    Related blogs
                  </h2>
                  <div className="space-y-3">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item.id}
                        to={`${RoutePaths.BLOG}/${item.slug}`}
                        className="block rounded-xl border border-slate-200 p-3 transition hover:-translate-y-0.5 hover:border-indigo-300 dark:border-slate-700 dark:hover:border-indigo-400/50"
                      >
                        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {item.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-xs text-slate-600 dark:text-slate-300">
                          {item.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
