import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, getBlogBySlug } from "../../data/blogData";
import { RoutePaths } from "../../routes/constant/path";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const gallery = useMemo(() => post?.images?.length ? post.images : [post?.coverImage], [post]);
  const [activeImage, setActiveImage] = useState(0);

  if (!post) {
    return (
      <section className="w-full bg-background-light py-20 dark:bg-background-dark">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-grey-900 dark:text-white">Blog not found</h1>
          <p className="mt-3 text-grey-600 dark:text-grey-300">
            The article you are looking for does not exist.
          </p>
          <Link to={RoutePaths.BLOG} className="mt-6 inline-block text-primary-main hover:text-primary-dark">
            Back to all blogs
          </Link>
        </div>
      </section>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <section className="w-full bg-background-light py-20 dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to={RoutePaths.BLOG} className="text-sm font-semibold text-primary-main hover:text-primary-dark">
            ← Back to all blogs
          </Link>

          <div className="mt-5 space-y-4">
            <span className="inline-flex rounded-full bg-primary-main/10 px-3 py-1 text-xs font-semibold text-primary-main">
              {post.category}
            </span>
            <h1 className="text-3xl font-bold text-grey-900 sm:text-4xl dark:text-white">{post.title}</h1>
            <div className="text-sm text-grey-500 dark:text-grey-400">
              {post.author} • {post.readTime} • {new Date(post.publishedAt).toLocaleDateString()}
            </div>
          </div>

          <img
            src={gallery[activeImage]}
            alt={post.title}
            className="mt-8 h-72 w-full rounded-2xl object-cover sm:h-96"
          />
          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {gallery.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(idx)}
                className={`overflow-hidden rounded-lg border transition ${
                  activeImage === idx
                    ? "border-primary-main ring-2 ring-primary-main/30"
                    : "border-grey-300 hover:border-grey-400 dark:border-grey-700 dark:hover:border-grey-500"
                }`}
              >
                <img src={img} alt={`${post.title} ${idx + 1}`} className="h-20 w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>

          <article className="font-mooli mt-8 space-y-5 text-[15px] leading-7 text-grey-700 dark:text-grey-300">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-grey-300 bg-white px-3 py-1 text-xs text-grey-600 dark:border-grey-700 dark:bg-background-dark-light dark:text-grey-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <h2 className="mb-5 text-2xl font-bold text-grey-900 dark:text-white">Related blogs</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.id}
                to={`${RoutePaths.BLOG}/${item.slug}`}
                className="overflow-hidden rounded-xl border border-grey-300 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-grey-700 dark:bg-background-dark-light"
              >
                <img src={item.coverImage} alt={item.title} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="line-clamp-2 text-base font-semibold text-grey-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-grey-600 dark:text-grey-300">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
