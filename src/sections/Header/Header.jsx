import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import LogoHeader from "../LogoHeader/LogoHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import {
  ReactLogoIcon,
  VueIcon,
  AngularIcon,
  HtmlIcon,
  JavascriptIcon,
  TailwindCssIcon,
  NodeJsIcon,
  ExpressJsIcon,
  PostmanIcon,
  NestJsIcon,
  MongoDbIcon,
  MysqlWordmarkIcon,
  PostgresqlIcon,
  DockerIcon,
  NginxIcon,
  OpenAiIcon,
  GithubLightIcon,
  WorkflowSquareIcon,
  InfinityDuotoneIcon,
  WorkflowSquareTenIcon,
  ApiIcon,
  FigmaDevIcon,
  JiraLogoIcon,
} from "../../components/icons";
import { SiGraphql, SiFirebase, SiNextdotjs, SiTypescript, SiMui, SiAmazonwebservices } from "react-icons/si";
import { RoutePaths } from "../../routes/constant/path";
import { ThemeToggle } from "../../components/themeToggle";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const { isDark } = useTheme();
  const [activeMenu, setActiveMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setActiveMenu(location.pathname);
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  // Track scroll to update header background on home route
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setHasScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: RoutePaths.HOME, subMenu: [] },
    { name: "Services", path: RoutePaths.SERVICES, subMenu: [] },
    {
      name: "Technologies",
      path: RoutePaths.TECHNOLOGIES,
      subMenu: [
        {
          title: "Frontend",
          items: [
            { name: "React.js", path: RoutePaths.TECHNOLOGY.FRONTEND.REACT, icon: <ReactLogoIcon />, color: "#61DBFB" }, // React Blue
            { name: "Next.js", path: RoutePaths.TECHNOLOGY.FRONTEND.NEXT, icon: <SiNextdotjs />, color: "#ffffff" }, // Next Black
            { name: "TypeScript", path: RoutePaths.TECHNOLOGY.FRONTEND.TYPESCRIPT, icon: <SiTypescript />, color: "#3178C6" }, // TypeScript Blue
            { name: "JavaScript", path: RoutePaths.TECHNOLOGY.FRONTEND.JAVASCRIPT, icon: <JavascriptIcon />, color: "#F7DF1E" }, // JavaScript Yellow
            { name: "Tailwind CSS", path: RoutePaths.TECHNOLOGY.FRONTEND.TAILWIND, icon: <TailwindCssIcon />, color: "#06B6D4" }, // Tailwind Cyan
            { name: "Material UI", path: RoutePaths.TECHNOLOGY.FRONTEND.MATERIAL_UI, icon: <SiMui />, color: "#007FFF" }, // Material UI Blue
            { name: "Angular", path: RoutePaths.TECHNOLOGY.FRONTEND.ANGULAR, icon: <AngularIcon />, color: "#DD0031" }, // Angular Red
            { name: "Vue.js", path: RoutePaths.TECHNOLOGY.FRONTEND.VUE, icon: <VueIcon />, color: "#42b883" }, // Vue Green
            { name: "HTML5", path: RoutePaths.TECHNOLOGY.FRONTEND.HTML5, icon: <HtmlIcon />, color: "#E34F26" }, // HTML Orange
          ],
        },
        {
          title: "Backend",
          items: [
            { name: "Node.js", path: RoutePaths.TECHNOLOGY.BACKEND.NODE, icon: <NodeJsIcon />, color: "#3C873A" }, // Node Green
            { name: "GraphQL", path: RoutePaths.TECHNOLOGY.BACKEND.GRAPHQL, icon: <SiGraphql />, color: "#E10098" }, // GraphQL Pink
            { name: "Express.js", path: RoutePaths.TECHNOLOGY.BACKEND.EXPRESS, icon: <ExpressJsIcon />, color: "#444444" }, // Express Grey
            { name: "REST API", path: RoutePaths.TECHNOLOGY.BACKEND.REST_API, icon: <PostmanIcon />, color: "#FF6C37" }, // REST API Orange
            { name: "Nest.js", path: RoutePaths.TECHNOLOGY.BACKEND.NEST, icon: <NestJsIcon />, color: "#E0234E" }, // Nest Red
          ],
        },
        {
          title: "Database",
          items: [
            { name: "MongoDB", path:  RoutePaths.TECHNOLOGY.DATABASE.MONGO, icon: <MongoDbIcon />, color: "#4DB33D" }, // MongoDB Green
            { name: "MySQL", path: RoutePaths.TECHNOLOGY.DATABASE.MYSQL, icon: <MysqlWordmarkIcon />, color: "#00758F" }, // MySQL Blue
            { name: "PostgreSQL", path: RoutePaths.TECHNOLOGY.DATABASE.POSTGRES, icon: <PostgresqlIcon />, color: "#336791" }, // PostgreSQL Blue
            { name: "Firebase", path:  RoutePaths.TECHNOLOGY.DATABASE.FIREBASE, icon: <SiFirebase />, color: "#FFCA28" }, // Firebase Yellow
          ],
        },
        {
          title: "DevOps",
          items: [
            { name: "AWS", path: RoutePaths.TECHNOLOGY.DEVOPS.AWS, icon: <SiAmazonwebservices />, color: "#FF9900" }, // AWS Orange
            { name: "Docker", path: RoutePaths.TECHNOLOGY.DEVOPS.DOCKER, icon: <DockerIcon className="text-3xl" />, color: "#2496ED" }, // Docker Blue
            { name: "CI/CD", path: RoutePaths.TECHNOLOGY.DEVOPS.CI_CD, icon: <InfinityDuotoneIcon />, color: "#2088FF" }, // CI/CD Blue
            { name: "Nginx", path: RoutePaths.TECHNOLOGY.DEVOPS.NGINX, icon: <NginxIcon />, color: "#009639" }, // Nginx Green
          ],
        },
        {
          title: "AI",
          items: [
            { name: "OpenAI", path: RoutePaths.TECHNOLOGY.AI.OPENAI, icon: <OpenAiIcon />, color: "#10A37F" }, // OpenAI Green
            { name: "Flowise AI", path: RoutePaths.TECHNOLOGY.AI.FLOWISE, icon: <WorkflowSquareIcon />, color: "#EF6C00" }, // Flowise Orange
            { name: "Workflow Automation", path: RoutePaths.TECHNOLOGY.AI.WORKFLOW_AUTOMATION, icon: <WorkflowSquareTenIcon />, color: "#FF4F00" }, // Workflow Orange
            { name: "API Integrations", path: RoutePaths.TECHNOLOGY.AI.API_INTEGRATIONS, icon: <ApiIcon />, color: "#2B7FFF" }, // API Blue
          ],
        },
        {
          title: "Tools",
          items: [
            { name: "Git & GitHub", path: RoutePaths.TECHNOLOGY.TOOLS.GIT_GITHUB, icon: <GithubLightIcon />, color: "#181717" }, // GitHub Black
            { name: "Postman", path: RoutePaths.TECHNOLOGY.TOOLS.POSTMAN, icon: <PostmanIcon />, color: "#FF6C37" }, // Postman Orange
            { name: "Figma", path: RoutePaths.TECHNOLOGY.TOOLS.FIGMA, icon: <FigmaDevIcon />, color: "#A259FF" }, // Figma Purple
            { name: "Jira / Trello", path: RoutePaths.TECHNOLOGY.TOOLS.JIRA_TRELLO, icon: <JiraLogoIcon />, color: "#0052CC" }, // Jira Blue
          ],
        },
      ],
   
    },
    { name: "Portfolio", path: RoutePaths.PROJECTS, subMenu: [] },
    { name: "Case Studies", path: RoutePaths.CASE_STUDIES, hash: "case-studies", subMenu: [] },
    { name: "Industries", path: RoutePaths.INDUSTRIES, subMenu: [] },
    { name: "Pricing", path: RoutePaths.PRICING, hash: "pricing", subMenu: [] },
    { name: "Blog", path: RoutePaths.BLOG, subMenu: [] },
    { name: "About", path: RoutePaths.COMPANY, subMenu: [] },
    { name: "Contact", path: RoutePaths.CONTACT, subMenu: [] },
  ];
// backdrop-blur-[3px]
  const heroChrome = isHomeRoute && !hasScrolled && !isDark;

  const headerBgClass = hasScrolled
    ? "bg-white/90 dark:bg-background-dark/95 border-b border-slate-200/80 shadow-sm backdrop-blur-xl dark:border-slate-800"
    : "bg-transparent";

  return (
    <header
      className={`w-full transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto flex h-[78px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <LogoHeader isLight={heroChrome} />

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <nav className="menu-container hidden items-center gap-2 lg:flex">
            <DesktopMenu
              menuItems={menuItems}
              activeMenu={activeMenu}
              setIsMenuOpen={setIsMenuOpen}
              isHomeRoute={isHomeRoute}
              hasScrolled={hasScrolled}
              heroChrome={heroChrome}
            />
          </nav>

          <ThemeToggle
            glass={heroChrome}
            className="hidden sm:inline-flex"
          />

          {/* Mobile menu button */}
          <button
            className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border shadow-sm transition focus:outline-none focus:ring-2 lg:hidden ${
              heroChrome
                ? "border-white/25 bg-white/10 text-white hover:bg-white/20 focus:ring-white/30"
                : "border-grey-200/80 bg-white/90 text-grey-700 hover:bg-white focus:ring-secondary/30 dark:border-grey-600 dark:bg-grey-800/90 dark:text-grey-100"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <MobileMenu
          menuItems={menuItems}
          activeMenu={activeMenu}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
      <style>{`
        @media (max-width: 1024px) {
          .menu-container {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
