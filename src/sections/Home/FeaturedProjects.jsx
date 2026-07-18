import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/jsonData";
import { RoutePaths } from "../../routes/constant/path";

const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section className="dc-section-dark pb-28 pt-16 sm:pb-32 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              Our work
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
          </div>
          <Link
            to={RoutePaths.PROJECTS}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:border-violet-500/40"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className="mt-2 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                  Web Development
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
