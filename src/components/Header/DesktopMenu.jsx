import React from "react";
import { NavLink } from "react-router-dom";

const DesktopMenu = ({ menuItems, activeMenu }) => {
  return (
    <React.Fragment>
      {menuItems?.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={`menu-item ${
            activeMenu === item.path ? "active" : ""
          } relative`}
        >
          {item.name}
        </NavLink>
      ))}
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
          background: #453F86;
          transform: skew(-20deg) translateX(1px);
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
          background: #453F86;
          transform: skew(-20deg) translateX(1px);
          z-index: -1;
        }
      `}</style>
    </React.Fragment>
  );
};

export default DesktopMenu;
