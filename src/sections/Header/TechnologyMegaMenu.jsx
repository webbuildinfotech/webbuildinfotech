import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RoutePaths } from "@/routes/constant/path";
import "./mega-menu.css";

const TechnologyMegaMenu = ({ subMenu, onNavigate }) => (
  <div className="mega-menu-shell" role="menu" aria-label="Technologies menu">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mega-menu-panel">
        <div className="mega-menu-inner">
          <div className="mega-menu-grid">
            {subMenu.map((subItem) => (
              <div key={subItem.title} className="min-w-0">
                <div className="mega-menu-col-header">
                  <span className="mega-menu-col-accent" aria-hidden />
                  <h4 className="mega-menu-col-title">{subItem.title}</h4>
                </div>
                <ul className="mega-menu-list">
                  {subItem.items.map((menuItem) => (
                    <li key={menuItem.name}>
                      <NavLink
                        to={menuItem.path}
                        role="menuitem"
                        onClick={onNavigate}
                        className="mega-menu-link"
                      >
                        <span
                          className="mega-menu-icon"
                          style={{
                            color: menuItem.color,
                            background: `${menuItem.color}18`,
                            borderColor: `${menuItem.color}30`,
                          }}
                        >
                          {menuItem.icon}
                        </span>
                        <span className="mega-menu-label">{menuItem.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mega-menu-footer">
          <p className="mega-menu-footer-text">
            Modern, battle-tested stack for scalable web &amp; AI products
          </p>
          <Link to={RoutePaths.TECHNOLOGIES} onClick={onNavigate} className="mega-menu-footer-cta">
            View all technologies
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default TechnologyMegaMenu;
