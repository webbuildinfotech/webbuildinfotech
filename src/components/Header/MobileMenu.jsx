import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp, FaDatabase, FaReact, FaAngular, FaHtml5, FaCode } from "react-icons/fa";

const MobileMenu = ({ menuItems, activeMenu, setIsMenuOpen }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className="lg:hidden fixed inset-0 bg-opacity-50 z-50 flex justify-end">
      {/* Menu Container */}
      <div className="w-80 bg-white shadow-lg h-full transform translate-x-0 transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-gray-600 hover:text-red-500 transition duration-200" size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 px-6 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-amber-200 last:border-none">
              {/* Main Menu Item */}
              <div
                className="flex items-center justify-between py-3 text-gray-800 text-lg font-semibold rounded-md transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => (item.subMenu ? toggleSubMenu(index) : setIsMenuOpen(false))}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </div>

                {/* Show arrow icon only if there is a submenu */}
                {item.subMenu && (
                  <button className="focus:outline-none">
                    {openSubMenu === index ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </button>
                )}
              </div>

              {/* Submenu Items (Visible if Open) */}
              {item.subMenu && openSubMenu === index && (
                <ul className="pl-8 py-2 space-y-2 transition-all duration-300">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 py-2 text-gray-700 text-md hover:text-blue-600 transition"
                      >
                        <span className="text-lg">{subItem.icon}</span>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
