import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/jsonData";
import { RoutePaths } from "../../routes/constant/path";
import SectionHeader from "@/components/ui/SectionHeader";
import { homeSection, homeSectionAlt, proCard, proLink } from "@/lib/homeStyles";
import { cn } from "@/lib/utils";

const CompletedProjects = () => {
  return (
    <section className={cn("w-full", homeSection, homeSectionAlt)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="left"
          eyebrow="Portfolio"
          title="Work we're proud of"
          description="Real projects delivered for real clients — each built to perform, scale, and impress."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10">
          <Link to={RoutePaths.PROJECTS} className={cn(proLink, "text-base")}>
            View full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <article
      ref={ref}
      className={cn(
        proCard,
        "overflow-hidden p-0 transition-all duration-700",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
      </div>
    </article>
  );
};

export default CompletedProjects;
