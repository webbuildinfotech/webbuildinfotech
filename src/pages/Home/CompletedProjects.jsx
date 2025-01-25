import React from "react";
import { FaCode, FaMobileAlt, FaCloud, FaBuilding, FaRocket } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Studkz Pro",
    description: "An advanced educational platform for online learning and assessments.",
    icon: <FaCode />,
    color: "text-blue-500 bg-blue-100",
  },
  {
    id: 2,
    title: "RG Techno",
    description: "A technology consulting website with a strong focus on innovation.",
    icon: <MdDesignServices />,
    color: "text-green-500 bg-green-100",
  },
  {
    id: 3,
    title: "5By5Winner",
    description: "A gamified application for tracking personal achievements and goals.",
    icon: <FaRocket />,
    color: "text-purple-500 bg-purple-100",
  },
  {
    id: 4,
    title: "Real Estate App",
    description: "A modern real estate platform for property listings and management.",
    icon: <FaBuilding />,
    color: "text-teal-500 bg-teal-100",
  },
  {
    id: 5,
    title: "Ecommerce Platform",
    description: "A seamless online shopping experience for users.",
    icon: <FaCode />,
    color: "text-orange-500 bg-orange-100",
  },
  {
    id: 6,
    title: "Cloud Migration Tool",
    description: "Migrated legacy systems to modern, scalable cloud platforms.",
    icon: <FaCloud />,
    color: "text-pink-500 bg-pink-100",
  },
  {
    id: 7,
    title: "Task Manager Pro",
    description: "A productivity app for managing daily tasks efficiently.",
    icon: <FaMobileAlt />,
    color: "text-red-500 bg-red-100",
  },
  {
    id: 8,
    title: "Creative Design Agency",
    description: "A portfolio site showcasing design projects and creative work.",
    icon: <MdDesignServices />,
    color: "text-blue-400 bg-blue-200",
  },
  {
    id: 9,
    title: "Finance Tracker App",
    description: "A mobile app for tracking expenses and managing budgets.",
    icon: <FaMobileAlt />,
    color: "text-yellow-500 bg-yellow-100",
  },
];

const CompletedProjects = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-start mb-10">
          <h2 className="text-3xl font-bold text-blue-800 uppercase">
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
    triggerOnce: false, // Allow animation every time the card enters the viewport
    threshold: 0.2, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white p-6 rounded-lg shadow-md overflow-hidden transform transition duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700`}
      style={{ transitionDelay: `${index * 150}ms` }} // Stagger animation
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${project.color} mb-4 text-4xl`}
      >
        {project.icon}
      </div>
      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-white">
        {project.title}
      </h4>
      {/* Description */}
      <p className="mt-2 text-gray-600 transition-colors duration-300 hover:text-white">
        {project.description}
      </p>
      {/* Know More */}
      <a
        href="#"
        className="text-blue-600 font-semibold hover:underline mt-4 block transition-all duration-300 hover:text-white"
      >
        Know more →
      </a>
    </div>
  );
};

export default CompletedProjects;
