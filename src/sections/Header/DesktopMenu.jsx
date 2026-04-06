import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ menuItems, activeMenu, setIsMenuOpen, isHomeRoute, hasScrolled, isDarkMode }) => {
    const [key, setKey] = useState(0); // Key to re-trigger the animation
    const useLightText = isDarkMode || (isHomeRoute && !hasScrolled);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setKey((prevKey) => prevKey + 1); // Update the key to restart animation
      }, 20000); // 5 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
  return (
    <React.Fragment>
      <ul className="flex items-center gap-1" key={key}>
        {menuItems?.map((item) => (
          <li key={item.name} className="relative group">
          <NavLink
          to={item.path}
          className={`menu-item ${
            activeMenu === item.path ? "active" : ""
          } ${useLightText ? "!text-white" : "!text-black"} relative flex items-center justify-center gap-2`}
        >
          <span
            className={`icon-wrapper typing-effect-icon transition-transform duration-300 ease-in-out text-xl ${
              activeMenu === item.path
                ? "text-blue-500"
                : useLightText
                ? "text-gray-50"
                : "text-gray-700"
            }`}
          >
            {item.icon}
          </span>
          <span className={`typing-effect mb-2 ${useLightText ? "text-white" : "text-black"}`}>
            {item.name}
          </span>
        </NavLink>

            {/* Submenu */}
               {/* Submenu (Appears only on hover) */}
               {item.subMenu?.length > 0 && (
                <div className="absolute left-1/2 top-full z-50 w-2xl max-w-4xl -translate-x-1/2 translate-y-4 rounded-b-xl border border-grey-200 border-t-2 border-t-primary-main/80 bg-white opacity-0 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.2)] ring-1 ring-grey-200/60 transition-all duration-300 transform invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-grey-700 dark:border-t-primary-light/60 dark:bg-background-dark dark:ring-grey-700/80 dark:shadow-[0_24px_56px_-12px_rgba(0,0,0,0.55)]">
                  <div className="container mx-auto grid grid-cols-3 gap-8 px-8 py-6 lg:px-12">
                    {item.subMenu.map((subItem, subIndex) => (
                      <div key={subIndex} className="flex flex-col">
                        <h4 className="mb-3 border-b border-grey-200 pb-2 text-sm font-bold uppercase tracking-wide text-grey-900 dark:border-grey-700 dark:text-grey-50">
                          {subItem.title}
                        </h4>
                        <ul className="space-y-1">
                          {subItem.items.map((menuItem, itemIndex) => (
                            <li key={itemIndex}>
                              <NavLink
                                to={menuItem.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  window.scrollTo(0, 0); // Scroll to top when navigating
                                }}
                                className="flex items-center gap-x-2 rounded-lg px-3 py-2 text-grey-800 transition-colors hover:bg-grey-100 hover:text-grey-950 dark:text-grey-200 dark:hover:bg-grey-800/90 dark:hover:text-white"
                              >
                                <span className="text-xl" style={{ color: menuItem.color }}>
                                  {menuItem.icon}
                                </span>
                                <span>{menuItem.name}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
      </ul>
      <style>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typing-effect {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          animation: typing 2s steps(20) forwards;
        }

        @keyframes typing-icon {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .typing-effect-icon {
          display: inline-block;
          animation: typing-icon 2s steps(20) forwards;
        }

        .menu-item {
          position: relative;
          padding: 20px 20px;
          font-size: 18px;
          font-weight: bold;
          text-transform: capitalize;
          transition: all 0.3s ease-in-out;
          color: black;
          opacity: 1;
        }

        .menu-item:hover {
          color: #453f86;
        }

        .menu-item::after {
          content: "";
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 10px;
          height: 2px;
          border-radius: 9999px;
          background: #453f86;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .menu-item:hover::after {
          transform: scaleX(1);
        }

        .menu-item.active {
          color: #453f86;
        }

        .menu-item.active::after {
          transform: scaleX(1);
        }

        .group:hover .group-hover\:flex {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default DesktopMenu;
