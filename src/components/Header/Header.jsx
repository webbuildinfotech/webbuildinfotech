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
            { name: "React.js", path: "/technologies/react", icon: <FaCode /> },
            { name: "Angular", path: "/technologies/angular", icon: <FaCode /> },
            { name: "Vue.js", path: "/technologies/vue", icon: <FaCode /> },
            { name: "HTML5", path: "/technologies/html5", icon: <FaCode /> },
          ],
        },
        {
          title: "Backend",
          items: [
            { name: "Node.js", path: "/technologies/nodejs", icon: <FaCode /> },
            { name: "GraphQL", path: "/technologies/graphql", icon: <FaCode /> },
            { name: "Express.js", path: "/technologies/express", icon: <FaCode /> },
            { name: "Next.js", path: "/technologies/nextjs", icon: <FaCode /> },
          ],
        },
        {
          title: "Database",
          items: [
            { name: "Redis", path: "/technologies/redis", icon: <FaCode /> },
            { name: "MongoDB", path: "/technologies/mongodb", icon: <FaCode /> },
            { name: "MySQL", path: "/technologies/mysql", icon: <FaCode /> },
            { name: "PostgreSQL", path: "/technologies/postgresql", icon: <FaCode /> },
            { name: "Firebase", path: "/technologies/firebase", icon: <FaCode /> },
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
