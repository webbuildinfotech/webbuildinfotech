import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animations
AOS.init();

const projectsData = [
    {
        title: "RG Techno",
        category: "Technology Solutions",
        description:
            "RG Techno provides end-to-end technology solutions for businesses, including hardware integration, software development, and IT consulting.",
        features: [
            "Custom Software Solutions",
            "Hardware Integration Services",
            "Technical Support",
            "Business IT Consulting",
        ],
        image: "WebSites/rg.png",
        link: "http://rg-techno.com/",
    },
    {
        title: "Autopilot",
        category: "Marketing Automation",
        description:
            "A cutting-edge marketing automation tool that enables businesses to automate workflows, manage customer journeys, and increase engagement effortlessly.",
        features: [
            "Visual Customer Journeys",
            "Multi-Channel Engagement",
            "Integration with Popular CRMs",
            "Real-Time Analytics",
        ],
        image: "WebSites/Autopilot.png",
        link: "https://autopilot.io/",
    },
    {
        title: "Empact",
        category: "Community Engagement",
        description:
            "A platform for building strong communities with tools for collaboration, event management, and social engagement.",
        features: [
            "Event Management Tools",
            "Social Media Integration",
            "Real-Time Communication",
            "Customizable Dashboards",
        ],
        image: "WebSites/Impact.png",
        link: "https://empact.online/",
    },
    {
        title: "EmployHer",
        category: "Job Platform",
        description:
            "Empowering women in the workforce with job opportunities, mentorship programs, and resources to excel in their careers.",
        features: [
            "Mentorship Programs",
            "Diverse Job Listings",
            "Resource Libraries",
            "Networking Opportunities",
        ],
        image: "WebSites/empher.png",
        link: "https://www.employher.com/",
    },
    {
        title: "Eminence IT",
        category: "IT Solutions",
        description:
            "Providing innovative IT solutions, software development, and technical expertise for businesses of all sizes.",
        features: [
            "Custom Software Development",
            "Cloud Computing Solutions",
            "IT Consultancy",
            "Managed Services",
        ],
        image: "WebSites/empower.png",
        link: "https://www.eminenceit.com/",
    },
    {
        title: "VegKing",
        category: "Agriculture Marketplace",
        description:
            "Connecting buyers and sellers in the agriculture industry with an intuitive marketplace for fresh produce trading.",
        features: [
            "Fresh Produce Listings",
            "Secure Payment Gateways",
            "Real-Time Market Pricing",
            "Global Buyer-Seller Network",
        ],
        image: "WebSites/vegking.png",
        link: "https://vegking.com/",
    },
    {
        title: "Out The Line",
        category: "Creative Agency",
        description:
            "A creative agency delivering exceptional designs, branding solutions, and marketing strategies for businesses.",
        features: [
            "Creative Branding",
            "Marketing Strategies",
            "Web Design and Development",
            "Social Media Campaigns",
        ],
        image: "WebSites/otl.png",
        link: "https://outthelineinc.com/",
    },
    {
        title: "Cherry Menu",
        category: "Restaurant Solutions",
        description:
            "Digitizing restaurant menus for a seamless dining experience, with tools for online ordering and customer management.",
        features: [
            "Digital Menus",
            "Online Ordering System",
            "Customer Management Tools",
            "Integration with POS Systems",
        ],
        image: "WebSites/cherry.png",
        link: "https://cherrymenu.com/",
    },
    {
        title: "Render Health",
        category: "Healthcare Solutions",
        description:
            "A healthcare platform enabling seamless communication between patients and providers with advanced features.",
        features: [
            "Telemedicine Integration",
            "Appointment Scheduling",
            "Secure Communication",
            "Data Analytics for Healthcare",
        ],
        image: "WebSites/render.png",
        link: "https://renderhealth.com/",
    },
    {
        title: "Stud.kz",
        category: "Educational Portal",
        description:
            "An educational platform providing resources, tools, and courses for students and teachers to excel.",
        features: [
            "Interactive Courses",
            "Progress Tracking",
            "Collaboration Tools",
            "Educational Resources",
        ],
        image: "WebSites/std.png",
        link: "https://studkz.pro/",
    },
    {
        title: "HIPAA Mart",
        category: "Healthcare Marketplace",
        description:
            "A marketplace for HIPAA-compliant healthcare products and services, ensuring quality and security.",
        features: [
            "HIPAA-Compliant Products",
            "Verified Suppliers",
            "Secure Transactions",
            "Customizable Order Options",
        ],
        image: "WebSites/hipp.png",
        link: "https://www.hipaamart.com/",
    },
    {
        title: "Velomärkte",
        category: "Marketplace",
        description:
          "An intuitive platform connecting bicycle buyers and sellers, featuring advanced tools for listing and secure transactions.",
        features: [
          "Bike Listings",
          "User-Friendly Search",
          "Secure Payment Integration",
          "Dynamic Pricing Models",
        ],
        image: "WebSites/velo.png",
        link: "https://velomaerkte.ch/",
      },
];

const ProjectsWithPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 8;

    // Pagination Logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projectsData.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const totalPages = Math.ceil(projectsData.length / projectsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-10">Our Projects</h2>
            <div className="grid gap-16">
                {currentProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="w-full lg:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg shadow-lg lg:h-4/6 object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full inline-block mb-4">
                                {project.category}
                            </span>
                            <h3 className="text:2xl lg:text-3xl font-bold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-4">{project.description}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-600">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block text-blue-600 hover:text-blue-800 font-semibold"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-semibold ${currentPage === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-semibold ${currentPage === totalPages
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectsWithPagination;
