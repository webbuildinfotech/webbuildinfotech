import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animations
AOS.init();

const projectsData = [
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
    const [selectedCategory, setSelectedCategory] = useState('All');
    const projectsPerPage = 6; // Reduced for better presentation

    // Get unique categories
    const categories = ['All', ...new Set(projectsData.map(project => project.category))];

    // Filter projects based on category
    const filteredProjects = selectedCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    // Pagination Logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

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
        <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Our Featured Projects
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover our portfolio of innovative solutions across various industries
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1);
                        }}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${
                            selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid gap-12">
                {currentProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                            index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                                {project.category}
                            </span>
                            <h3 className="text-3xl font-bold text-gray-900">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {project.description}
                            </p>
                            <div className="space-y-4">
                                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                                <ul className="grid grid-cols-2 gap-3">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                View Project
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced Pagination */}
            <div className="flex justify-center items-center gap-6 mt-16">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                    }`}
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Previous
                </button>
                <span className="text-gray-600 font-medium">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                    }`}
                >
                    Next
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProjectsWithPagination;
