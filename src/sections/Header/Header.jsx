import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle
import LogoHeader from "../LogoHeader/LogoHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import {
  HomeContentIcon,
  ServicesIcon,
  CodeIcon,
  ProjectsIcon,
  EnquiriesIcon,
} from "../../components/icons";

import { FaReact, FaAngular, FaVuejs, FaHtml5, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiGraphql, SiExpress, SiNestjs, SiMongodb, SiMysql, SiPostgresql, SiFirebase } from "react-icons/si";
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
    { name: "Home", path: "/", icon: <HomeContentIcon />, subMenu: [] },
    {
      name: "Services",
      path: "/services",
      icon: <ServicesIcon />,
      subMenu: [],
    },
    {
      name: "Technologies",
      path: "/technologies",
      icon: <CodeIcon />,
      subMenu: [
        {
          title: "Frontend",
          items: [
            { name: "React.js", path: RoutePaths.TECHNOLOGY.FRONTEND.REACT, icon: <FaReact />, color: "#61DBFB" }, // React Blue
            { name: "Angular", path: RoutePaths.TECHNOLOGY.FRONTEND.ANGULAR, icon: <FaAngular />, color: "#DD0031" }, // Angular Red
            { name: "Vue.js", path: RoutePaths.TECHNOLOGY.FRONTEND.VUE, icon: <FaVuejs />, color: "#42b883" }, // Vue Green
            { name: "HTML5", path: RoutePaths.TECHNOLOGY.FRONTEND.HTML5, icon: <FaHtml5 />, color: "#E34F26" }, // HTML Orange
          ],
        },
        {
          title: "Backend",
          items: [
            { name: "Node.js", path: RoutePaths.TECHNOLOGY.BACKEND.NODE, icon: <FaNodeJs />, color: "#3C873A" }, // Node Green
            { name: "GraphQL", path: RoutePaths.TECHNOLOGY.BACKEND.GRAPHQL, icon: <SiGraphql />, color: "#E10098" }, // GraphQL Pink
            { name: "Express.js", path: RoutePaths.TECHNOLOGY.BACKEND.EXPRESS, icon: <SiExpress />, color: "#444444" }, // Express Grey
            { name: "Nest.js", path: RoutePaths.TECHNOLOGY.BACKEND.NEST, icon: <SiNestjs />, color: "#E0234E" }, // Next.js Black
          ],
        },
        {
          title: "Database",
          items: [
            { name: "MongoDB", path:  RoutePaths.TECHNOLOGY.DATABASE.MONGO, icon: <SiMongodb />, color: "#4DB33D" }, // MongoDB Green
            { name: "MySQL", path: RoutePaths.TECHNOLOGY.DATABASE.MYSQL, icon: <SiMysql />, color: "#00758F" }, // MySQL Blue
            { name: "PostgreSQL", path: RoutePaths.TECHNOLOGY.DATABASE.POSTGRES, icon: <SiPostgresql />, color: "#336791" }, // PostgreSQL Blue
            { name: "Firebase", path:  RoutePaths.TECHNOLOGY.DATABASE.FIREBASE, icon: <SiFirebase />, color: "#FFCA28" }, // Firebase Yellow
          ],
        },
      ],
   
    },
    { name: "Projects", path: "/project", icon: <ProjectsIcon />, subMenu: [] },
    { name: "Contact", path: "/contact", icon: <EnquiriesIcon />, subMenu: [] },
  ];
// backdrop-blur-[3px]
  const headerBgClass = hasScrolled
    ? "bg-white/25 dark:bg-background-dark/80 border-b border-grey-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto flex h-[78px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <LogoHeader isLight={isDark || (!hasScrolled && isHomeRoute)} />

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <nav className="menu-container hidden items-center gap-4 lg:flex">
            <DesktopMenu
              menuItems={menuItems}
              activeMenu={activeMenu}
              setIsMenuOpen={setIsMenuOpen}
              isHomeRoute={isHomeRoute}
              hasScrolled={hasScrolled}
              isDarkMode={isDark}
            />
          </nav>

          {/* Theme toggle: visible on all breakpoints (between nav and menu on mobile) */}
          <ThemeToggle className="lg:rounded-full" />

          {/* Mobile menu button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-grey-200/80 bg-white/90 text-grey-700 shadow-sm transition hover:bg-white hover:text-secondary-main focus:outline-none focus:ring-2 focus:ring-secondary/30 dark:border-grey-600 dark:bg-grey-800/90 dark:text-grey-100 dark:hover:bg-grey-800 dark:hover:text-secondary-light lg:hidden"
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
