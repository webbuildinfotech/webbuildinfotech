import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";
import { glassCard, glassCardXL } from "@/lib/glassCard";
import { PageMeta, toCanonicalUrl } from "@/components/pageMeta";
import { RoutePaths } from "@/routes/constant/path";

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
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [activeProject, setActiveProject] = useState(null);
    const [activeCardIndex, setActiveCardIndex] = useState(null);
    const projectsPerPage = 6; // Reduced for better presentation

    // Get unique categories
    const categories = ['All', ...new Set(projectsData.map(project => project.category))];

    // Filter projects based on category
    const filteredProjects = selectedCategories.length === 0
        ? projectsData
        : projectsData.filter(project => selectedCategories.includes(project.category));

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
        <section className="bg-gradient-to-b from-background-light via-background-light/80 to-background-light pb-16 pt-24 dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark sm:pb-20 sm:pt-28">
            <PageMeta
                title="Portfolio & Case Studies | WebBuild Infotech Projects"
                description="Explore featured web applications, platforms, and product work delivered by WebBuild Infotech across marketing, SaaS, healthcare, and more."
                keywords="web development portfolio, case studies, React projects, WebBuild Infotech"
                canonical={toCanonicalUrl(RoutePaths.PROJECTS)}
            />
            <div className="relative isolate mb-10 w-full overflow-hidden rounded-b-3xl px-6 py-12 text-center shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] sm:px-8 sm:py-14">
                <div className="absolute inset-0 bg-gradient-to-br from-grey-950 via-primary-darker to-secondary-darker" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(91,228,155,0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(142,51,255,0.2),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
                <div className="relative mx-auto w-full max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-lighter/90">
                        Portfolio
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Our Featured{" "}
                        <span className="bg-gradient-to-r from-primary-light via-primary-lighter to-secondary-light bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
                        Discover our portfolio of innovative solutions across various industries.
                    </p>
                    <div className="mx-auto mt-7 h-1 w-14 rounded-full bg-gradient-to-r from-primary-main via-primary-light to-secondary-main sm:w-16" />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
                    {/* Category Filter */}
                    <div className={cn(glassCardXL, "h-fit p-5 lg:sticky lg:top-24")}>
                        <h3 className="text-base font-semibold text-grey-900 dark:text-white">Categories</h3>
                        <div className="mt-4 space-y-1.5">
                            {categories.map((category) => {
                                const count = projectsData.filter((project) =>
                                    category === "All" ? true : project.category === category
                                ).length;
                            const isAll = category === "All";
                            const isChecked = isAll
                                ? selectedCategories.length === 0
                                : selectedCategories.includes(category);
                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => {
                                        if (isAll) {
                                            setSelectedCategories([]);
                                            setCurrentPage(1);
                                            return;
                                        }

                                        setSelectedCategories((prev) =>
                                            prev.includes(category)
                                                ? prev.filter((item) => item !== category)
                                                : [...prev, category]
                                        );
                                            setCurrentPage(1);
                                        }}
                                        className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                                        isChecked
                                                ? "bg-primary-main/12 font-semibold text-primary-main"
                                                : "text-grey-700 hover:bg-grey-100 dark:text-grey-300 dark:hover:bg-grey-800"
                                        }`}
                                    >
                                    <span className="flex items-center justify-between gap-3">
                                        <span className="flex items-center gap-2">
                                            <span
                                                className={`inline-flex h-4 w-4 items-center justify-center rounded-[4px] border text-[10px] ${
                                                    isChecked
                                                        ? "border-primary-main bg-primary-main text-white"
                                                        : "border-grey-400 text-transparent dark:border-grey-600"
                                                }`}
                                            >
                                                ✓
                                            </span>
                                            {category}
                                        </span>
                                        <span className="text-xs opacity-80">({count})</span>
                                    </span>
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                            setSelectedCategories([]);
                                setCurrentPage(1);
                            }}
                            className="mt-5 inline-flex rounded-lg border border-grey-300 px-3 py-2 text-xs font-semibold text-grey-700 transition hover:bg-grey-100 dark:border-grey-700 dark:text-grey-300 dark:hover:bg-grey-800"
                        >
                            Clear Filter
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {currentProjects.map((project, index) => (
                            <article
                                key={index}
                                onClick={() => {
                                    if (typeof window !== "undefined" && window.innerWidth < 1024) {
                                        setActiveCardIndex((prev) => (prev === index ? null : index));
                                    }
                                }}
                                className={cn(
                                    glassCard,
                                    "group relative cursor-pointer overflow-hidden rounded-xl border border-grey-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-grey-700/80 dark:bg-grey-900"
                                )}
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
                                />

                                <div
                                    className={cn(
                                        "absolute inset-0 bg-gradient-to-t from-blue-900/90 via-indigo-800/70 to-transparent opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100",
                                        activeCardIndex === index && "opacity-100 lg:opacity-0"
                                    )}
                                />
                                <div
                                    className={cn(
                                        "absolute inset-x-0 bottom-0 translate-y-6 p-5 opacity-0 transition-all duration-300 lg:group-hover:translate-y-0 lg:group-hover:opacity-100",
                                        activeCardIndex === index && "translate-y-0 opacity-100 lg:translate-y-6 lg:opacity-0"
                                    )}
                                >
                                    <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold text-white/95 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                    <h3 className="mt-3 text-2xl font-bold text-white">
                                        {project.title}
                                    </h3>
                                    <div
                                        className={cn(
                                            "mt-3 grid grid-cols-2 gap-2 pointer-events-none lg:pointer-events-auto sm:mt-4 sm:flex sm:items-center",
                                            activeCardIndex === index && "pointer-events-auto"
                                        )}
                                    >
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 sm:px-4 sm:text-sm"
                                        >
                                            Visit Project
                                            <svg className="ml-1.5 h-3.5 w-3.5 sm:ml-2 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7h-10m10 0v10m0-10L7 17" />
                                            </svg>
                                        </a>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveProject(project);
                                            }}
                                            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-white/20 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 sm:px-4 sm:text-sm"
                                        >
                                            Project Details
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Enhanced Pagination */}
                <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`flex w-full max-w-[220px] items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:w-auto sm:px-6 ${
                            currentPage === 1
                                ? "bg-grey-100 text-grey-400 cursor-not-allowed dark:bg-grey-800 dark:text-grey-500"
                                : "bg-primary-main text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
                        }`}
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Previous
                    </button>
                    <span className="text-sm font-medium text-grey-600 dark:text-grey-300 sm:text-base">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`flex w-full max-w-[220px] items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:w-auto sm:px-6 ${
                            currentPage === totalPages
                                ? "bg-grey-100 text-grey-400 cursor-not-allowed dark:bg-grey-800 dark:text-grey-500"
                                : "bg-primary-main text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
                        }`}
                    >
                        Next
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>

            {activeProject && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
                        onClick={() => setActiveProject(null)}
                        aria-hidden="true"
                    />
                    <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-grey-200 bg-white p-6 shadow-2xl dark:border-grey-700 dark:bg-grey-900">
                        <div className="mb-5 flex items-start justify-between gap-4">
                            <h3 className="text-2xl font-bold text-grey-900 dark:text-grey-50">
                                {activeProject.title}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setActiveProject(null)}
                                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-grey-300 text-grey-700 transition hover:bg-grey-100 dark:border-grey-700 dark:text-grey-300 dark:hover:bg-grey-800"
                                aria-label="Close project details"
                            >
                                ×
                            </button>
                        </div>

                        <img
                            src={activeProject.image}
                            alt={activeProject.title}
                            className="mb-5 h-48 w-full rounded-xl object-cover"
                        />

                        <span className="inline-flex rounded-full bg-primary-main/10 px-3 py-1 text-xs font-semibold text-primary-main">
                            {activeProject.category}
                        </span>

                        <p className="mt-4 text-sm leading-7 text-grey-600 dark:text-grey-300">
                            {activeProject.description}
                        </p>

                        <div className="mt-6">
                            <h4 className="mb-3 font-semibold text-grey-900 dark:text-grey-100">Key Features</h4>
                            <ul className="space-y-2">
                                {activeProject.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="rounded-lg border border-grey-200/80 bg-grey-50 px-3 py-2 text-sm text-grey-700 dark:border-grey-700 dark:bg-grey-800/40 dark:text-grey-300"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={activeProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex cursor-pointer items-center rounded-xl bg-primary-main px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                        >
                            Visit Project
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7h-10m10 0v10m0-10L7 17" />
                            </svg>
                        </a>
                    </aside>
                </>
            )}
        </section>
    );
};

export default ProjectsWithPagination;
