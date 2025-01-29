import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTimes,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import LogoHeader from "../LogoHeader/LogoHeader";

const MobileMenu = ({ menuItems, setIsMenuOpen }) => {
  const location = useLocation(); // Get active route path
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  // Keep only the active submenu open
  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.subMenu.length > 0) {
        item.subMenu.forEach((subCategory, subIndex) => {
          const isSubMenuActive = subCategory.items.some(subItem => location.pathname === subItem.path);
          if (isSubMenuActive) {
            setOpenSubMenu(index); // Open "Technologies" if an item inside it is active
            setOpenSubCategory(subIndex); // Open the specific category (Frontend, Backend, etc.)
          }
        });
      }
    });
  }, [location.pathname, menuItems]);

  const toggleSubMenu = (index, event) => {
    event.preventDefault(); // Prevent navigation for "Technologies"
    setOpenSubMenu(openSubMenu === index ? null : index);
    setOpenSubCategory(null); // Reset category selection on toggle
  };

  const toggleSubCategory = (subIndex) => {
    setOpenSubCategory(openSubCategory === subIndex ? null : subIndex);
  };

  return (
    <div className="lg:hidden fixed inset-0 bg-opacity-50 z-50 flex justify-end">
      {/* Menu Container */}
      <div className="w-80 bg-white shadow-lg h-full transform transition-transform duration-300 ease-in-out overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-500 to-purple-500 text-black">
          <h2 className="text-xl font-bold"><LogoHeader/></h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className= "transition duration-200" size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 px-6 py-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const hasSubMenu = item.subMenu.length > 0;

            return (
              <div key={index} className="border-b border-gray-300 last:border-none">
                {/* Main Menu Item - Navigates for normal items, opens submenu for Technologies */}
                {hasSubMenu ? (
                  <div
                    className={`flex items-center justify-between py-3 text-lg font-semibold rounded-md cursor-pointer 
                      transition-all transform hover:scale-105
                      ${isActive ? "text-blue-600 font-bold" : "text-gray-800"}
                    `}
                    onClick={(e) => toggleSubMenu(index, e)}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xl ${isActive ? "text-blue-500" : ""}`}>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>

                    {/* Show arrow icon */}
                    <button type="button" className="ml-auto pr-2 focus:outline-none">
                      {openSubMenu === index ? (
                        <FaChevronUp className="text-blue-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between py-3 text-lg font-semibold rounded-md 
                      transition-all transform hover:scale-105
                      ${isActive ? "text-blue-600 font-bold" : "text-gray-800"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xl ${isActive ? "text-blue-500" : ""}`}>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                )}

                {/* Submenu Items (Visible if Open) */}
                {hasSubMenu && openSubMenu === index && (
                  <div className="pl-4 py-2">
                    {item.subMenu.map((subMenuCategory, subIndex) => {
                      const isCategoryActive = openSubCategory === subIndex;

                      return (
                        <div key={subIndex}>
                          {/* Submenu Category Header */}
                          <div
                            className="bg-blue-100 rounded-md p-2 my-2 shadow-md cursor-pointer"
                            onClick={() => toggleSubCategory(subIndex)}
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-blue-700 font-semibold">
                                {subMenuCategory.title}
                              </span>
                              {isCategoryActive ? (
                                <FaChevronUp className="text-blue-500" />
                              ) : (
                                <FaChevronDown className="text-gray-500" />
                              )}
                            </div>
                          </div>

                          {/* Submenu Items (Visible if the category is open) */}
                          {isCategoryActive && (
                            <ul className="pl-4 py-1 space-y-2">
                              {subMenuCategory.items.map((subItem, subItemIndex) => {
                                const isSubActive = location.pathname === subItem.path;

                                return (
                                  <li key={subItemIndex}>
                                    <Link
                                      to={subItem.path}
                                      onClick={() => setIsMenuOpen(false)}
                                      className={`flex items-center gap-3 py-2 text-md 
                                        transition-all transform hover:scale-105 rounded-md
                                        ${isSubActive ? "text-blue-700 font-bold" : "text-gray-700"}
                                      `}
                                    >
                                      <span className={`text-lg ${isSubActive ? "text-blue-500" : ""}`}>
                                        {subItem.icon}
                                      </span>
                                      {subItem.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
