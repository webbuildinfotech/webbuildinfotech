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
            {item.subMenu.length > 0 && (
              <div className="absolute right-0 hidden group-hover:flex justify-between bg-white shadow-lg rounded-md p-6">
                <ul className="flex gap-8">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex flex-col">
                      <h4 className="font-semibold mb-2 text-gray-900">
                        {subItem.title}
                      </h4>
                      <ul className="space-y-2">
                        {subItem.items.map((menuItem, itemIndex) => (
                          <li key={itemIndex}>
                            <NavLink
                              to={menuItem.path}
                              className="block py-1 px-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              {menuItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
      
          </li>
        ))}
      </ul>
      <style jsx>{`
        .menu-item {
          position: relative;
          padding: 15px 20px;
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
