import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

import LogoHeader from "../LogoHeader/LogoHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    setActiveMenu(location.pathname);
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/", icon: null, subMenu: [] },
    {
      name: "Services",
      path: "/services",
      icon: null,
      subMenu: [
        { name: "Consulting", path: "/services/consulting" },
        { name: "Development", path: "/services/development" },
        { name: "Design", path: "/services/design" },
      ],
    },
    {
      name: "Industries",
      path: "/industries",
      icon: null,
      subMenu: [
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Finance", path: "/industries/finance" },
        { name: "Retail", path: "/industries/retail" },
      ],
    },
    {
      name: "Technologies",
      path: "/technologies",
      icon: null,
      subMenu: [
        { name: "AI", path: "/technologies/ai" },
        { name: "Blockchain", path: "/technologies/blockchain" },
        { name: "Cloud", path: "/technologies/cloud" },
      ],
    },
    { name: "Career", path: "/career", icon: null, subMenu: [] },
    { name: "Company", path: "/company", icon: null, subMenu: [] },
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
          <DesktopMenu menuItems={menuItems}
            activeMenu={activeMenu} />
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