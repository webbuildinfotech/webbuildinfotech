import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ menuItems, activeMenu }) => {
    const [key, setKey] = useState(0); // Key to re-trigger the animation
  
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
          } relative flex items-center gap-2`}
        >
          <span
            className={`icon-wrapper typing-effect-icon transition-transform duration-300 ease-in-out transform group-hover:rotate-360 ${
              activeMenu === item.path ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {item.icon}
          </span>
          <span className="typing-effect">
            {item.name}
          </span>
        </NavLink>

        <style jsx>{`
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
            opacity: 1; /* Ensure visibility */
          }
        `}</style>


            {/* Submenu */}
               {/* Submenu (Appears only on hover) */}
               {item.subMenu.length > 0 && (
                <div className="absolute left-1/2 top-full max-w-4xl w-2xl bg-white shadow-lg border-t border-gray-200 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 transform -translate-x-1/2 translate-y-4 z-50">
                  <div className="container mx-auto py-6 px-12 grid grid-cols-3 gap-8">
                    {item.subMenu.map((subItem, subIndex) => (
                      <div key={subIndex} className="flex flex-col">
                        <h4 className="font-bold text-black mb-3">{subItem.title}</h4>
                        <ul className="space-y-2">
                          {subItem.items.map((menuItem, itemIndex) => (
                            <li key={itemIndex}>
                              <NavLink
                                to={menuItem.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  window.scrollTo(0, 0); // Scroll to top when navigating
                                }}
                                
                                className="flex items-center gap-x-2 py-2 px-4 text-black hover:bg-gray-800 hover:text-white rounded-md transition"
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
      <style jsx>{`
        .menu-item {
          position: relative;
          padding: 20px 20px;
          font-size: 18px;
          font-weight: bold;
          text-transform: capitalize;
          transition: all 0.3s ease-in-out;
          color: black;
        }

        .menu-item:hover {
          color: white;
        }

        .menu-item:hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #453f86;
          transform: skew(-40deg) translateX(1px);
          z-index: -1;
        }

        .menu-item.active {
          color: white;
        }

        .menu-item.active::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #453f86;
          transform: skew(-40deg) translateX(1px);
          z-index: -1;
        }

        .group:hover .group-hover\:flex {
          display: flex;
        }
      `}</style>
    </React.Fragment>
  );
};

export default DesktopMenu;
