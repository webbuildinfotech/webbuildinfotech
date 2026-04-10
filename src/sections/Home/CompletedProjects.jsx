import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/jsonData";
import { RoutePaths } from "../../routes/constant/path";
import { BorderBeam } from "@/components/lightswind/border-beam";
import { cn } from "@/lib/utils";
import { glassCard } from "@/lib/glassCard";

const CompletedProjects = () => {
  return (
    <section className="w-full py-14 sm:py-16 bg-gradient-to-b from-background-light via-background-light/80 to-background-light dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-start">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-grey-900 dark:text-grey-50 lg:text-3xl">
            Completed Projects
          </h2>
          <p className="font-mooli mt-3 max-w-2xl text-base leading-relaxed text-grey-800 dark:text-grey-300 sm:text-lg">
            We&apos;ve delivered high-quality solutions across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <article
      ref={ref}
      className={cn(
        glassCard,
        "flex flex-col p-5 duration-700 ease-out sm:p-6",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "hover:border-primary-main/40 dark:hover:border-primary-main/35"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-grey-200 dark:ring-grey-700">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold text-grey-900 transition-colors duration-300 group-hover:text-primary-dark dark:text-grey-50 dark:group-hover:text-primary-light">
        {project.title}
      </h3>
      <p className="font-mooli mt-2 flex-1 text-sm leading-relaxed text-grey-700 dark:text-grey-300 sm:text-base">
        {project.description}
      </p>
      <Link
        to={RoutePaths.PROJECTS}
        className="mt-5 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-primary-dark transition-all duration-300 hover:gap-2 hover:underline dark:text-primary-light"
      >
        Know more
        <span aria-hidden>→</span>
      </Link>
      <BorderBeam
        size={70}
        duration={12}
        delay={0}
        colorFrom="#06b6d4"
        colorTo="#3b82f6"
        reverse={false}
        initialOffset={30}
        borderThickness={2}
        opacity={0.9}
        glowIntensity={2}
        beamBorderRadius={20}
        pauseOnHover={true}
        speedMultiplier={1.5}
      />
    </article>
  );
};

export default CompletedProjects;
