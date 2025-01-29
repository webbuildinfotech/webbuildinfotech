import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle
import { GrServices } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import LogoHeader from "../LogoHeader/LogoHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { FaHome, FaCode, FaEnvelope } from "react-icons/fa"; // Example icons
import { GiFilmProjector } from "react-icons/gi";

import { FaReact, FaAngular, FaVuejs, FaHtml5, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiGraphql, SiExpress, SiNextdotjs, SiMongodb, SiMysql, SiPostgresql, SiFirebase } from "react-icons/si";
import { RoutePaths } from "../../routes/constant/path";


const Header = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    setActiveMenu(location.pathname);
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome />, subMenu: [] },
    {
      name: "Services",
      path: "/services",
      icon: <GrServices />,
      subMenu: [],
    },
    {
      name: "Technologies",
      path: "/technologies",
      icon: <FaComputer />,
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
            { name: "Next.js", path: RoutePaths.TECHNOLOGY.BACKEND.NEST, icon: <SiNextdotjs />, color: "#000000" }, // Next.js Black
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
    { name: "Projects", path: "/project", icon: <GiFilmProjector />, subMenu: [] },
    { name: "Contact", path: "/contact", icon: <FaEnvelope />, subMenu: [] },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <LogoHeader />
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`hidden lg:flex menu-container items-center gap-4`}>
          <DesktopMenu menuItems={menuItems} activeMenu={activeMenu} />
        </nav>
      </div>
      {isMenuOpen && (
        <MobileMenu
          menuItems={menuItems}
          activeMenu={activeMenu}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
      <style jsx>{`
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
