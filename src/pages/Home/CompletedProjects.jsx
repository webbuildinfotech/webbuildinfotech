import React from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../../data/jsonData";


const CompletedProjects = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-start mb-10">
          <h2 className="text-lg lg:text-3xl font-bold text-blue-800 uppercase">
            Completed Projects
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            We've delivered high-quality solutions across various industries.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white p-6 rounded-lg shadow-md overflow-hidden transform transition duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } hover:scale-105 hover:shadow-lg`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
    
      {/* Image */}
      <div className="w-full overflow-hidden rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
      {/* Title */}
      <h4 className="mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
        {project.title}
      </h4>
      {/* Description */}
      <p className="mt-2 text-gray-600 transition-colors duration-300">
        {project.description}
      </p>
      {/* Know More */}
      <a
        href="/project"
        className="text-blue-600 font-semibold hover:underline mt-4 block transition-all duration-300"
      >
        Know more →
      </a>
    </div>
  );
};

export default CompletedProjects;
