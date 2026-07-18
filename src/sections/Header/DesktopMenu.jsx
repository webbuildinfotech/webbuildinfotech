import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Calendar, ChevronDown } from "lucide-react";
import { RoutePaths } from "@/routes/constant/path";
import TechnologyMegaMenu from "./TechnologyMegaMenu";
import "./mega-menu.css";

const DesktopMenu = ({
  menuItems,
  activeMenu,
  setIsMenuOpen,
  heroChrome,
}) => {
  const linkClass = (isActive, hasMega = false) =>
    `menu-item ${hasMega ? "has-mega" : ""} ${isActive ? "active" : ""} ${
      heroChrome ? "!text-white" : "!text-grey-800 dark:!text-slate-200"
    }`;

  const labelClass = heroChrome ? "text-white/90" : "text-grey-800 dark:text-slate-200";

  const handleNavigate = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ul className="relative hidden items-center xl:flex">
        {menuItems?.map((item) => {
          const hasMega = item.subMenu?.length > 0;

          return (
            <li key={item.name} className={hasMega ? "mega-menu-trigger static" : "group"}>
              {item.hash ? (
                <a href={`/#${item.hash}`} className={linkClass(false)}>
                  <span className={`text-[13px] font-medium ${labelClass}`}>{item.name}</span>
                </a>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => linkClass(isActive || activeMenu === item.path, hasMega)}
                >
                  <span className={`inline-flex items-center gap-0.5 text-[13px] font-medium ${labelClass}`}>
                    {item.name}
                    {hasMega && <ChevronDown className="mega-menu-chevron h-3.5 w-3.5" aria-hidden />}
                  </span>
                </NavLink>
              )}

              {hasMega && (
                <>
                  <span className="mega-menu-bridge" aria-hidden />
                  <TechnologyMegaMenu subMenu={item.subMenu} onNavigate={handleNavigate} />
                </>
              )}
            </li>
          );
        })}
      </ul>

      <div className="ml-2 hidden items-center gap-2 lg:flex">
        <Link
          to={RoutePaths.CONTACT}
          className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-xs font-semibold transition ${
            heroChrome
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-blue-500/50 text-blue-600 hover:bg-blue-50 dark:border-blue-400/40 dark:text-blue-400 dark:hover:bg-blue-950/40"
          }`}
        >
          Get Quote
        </Link>
        <Link
          to={RoutePaths.CONTACT}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/25 transition hover:bg-blue-500"
        >
          <Calendar className="h-3.5 w-3.5" />
          Schedule Meeting
        </Link>
      </div>

      <style>{`
        .menu-item {
          position: relative;
          padding: 10px 10px;
          transition: all 0.25s ease;
        }
        .menu-item:hover { color: #60a5fa; }
        .menu-item::after {
          content: "";
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 4px;
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #2563eb, #0d9488);
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .menu-item:hover::after,
        .menu-item.active::after { transform: scaleX(1); }
        .menu-item.active { color: #60a5fa; }
        .mega-menu-trigger:hover .menu-item::after,
        .mega-menu-trigger:focus-within .menu-item::after {
          transform: scaleX(1);
        }
      `}</style>
    </>
  );
};

export default DesktopMenu;
