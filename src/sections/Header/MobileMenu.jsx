import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import LogoHeader from "../LogoHeader/LogoHeader";
import { ThemeToggle } from "../../components/themeToggle";
import { useTheme } from "../../context/ThemeContext";

const MobileMenu = ({ menuItems, setIsMenuOpen }) => {
  const { isDark } = useTheme();
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollbarW = window.innerWidth - html.clientWidth;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarW > 0) {
      body.style.paddingRight = `${scrollbarW}px`;
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };
  }, []);

  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.subMenu.length > 0) {
        item.subMenu.forEach((subCategory, subIndex) => {
          const isSubMenuActive = subCategory.items.some(
            (subItem) => location.pathname === subItem.path
          );
          if (isSubMenuActive) {
            setOpenSubMenu(index);
            setOpenSubCategory(subIndex);
          }
        });
      }
    });
  }, [location.pathname, menuItems]);

  const toggleSubMenu = (index, event) => {
    event.preventDefault();
    setOpenSubMenu(openSubMenu === index ? null : index);
    setOpenSubCategory(null);
  };

  const toggleSubCategory = (subIndex) => {
    setOpenSubCategory(openSubCategory === subIndex ? null : subIndex);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex h-screen w-screen justify-start bg-grey-900/50 backdrop-blur-md lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Click outside to close */}
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default border-0 bg-transparent"
        aria-label="Close menu overlay"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className="relative z-10 flex h-full min-h-screen w-full min-w-0 flex-col bg-background-light dark:bg-background-dark max-sm:shadow-none shadow-[0_0_0_1px_rgba(0,0,0,0.05),24px_0_48px_rgba(15,23,42,0.18)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),24px_0_48px_rgba(0,0,0,0.45)] sm:w-80 sm:flex-none"
      >
        {/* Header */}
        <div className="shrink-0 border-b border-grey-200/90 bg-background-light px-5 py-4 dark:border-grey-700 dark:bg-background-dark">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="min-w-0 flex-1">
              <LogoHeader isLight={isDark} />
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-grey-300 bg-grey-100 text-grey-700 transition duration-200 hover:bg-grey-200 active:scale-95 dark:border-grey-600 dark:bg-grey-800 dark:text-grey-100 dark:hover:bg-grey-700"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-5 py-4">
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-grey-400 dark:text-grey-500">
            Menu
          </p>
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasSubMenu = item.subMenu.length > 0;

              return (
                <div key={index} className="rounded-xl">
                  {hasSubMenu ? (
                    <button
                      type="button"
                      className={`group flex w-full items-center justify-between gap-2 rounded-xl px-3 py-3 text-left text-[0.9375rem] font-medium transition duration-200 active:scale-[0.99] ${
                        openSubMenu === index
                          ? "bg-secondary-main/12 text-secondary-dark ring-1 ring-secondary-main/25 dark:bg-secondary-main/20 dark:text-secondary-lighter dark:ring-secondary-main/30"
                          : "text-grey-800 hover:bg-grey-100 hover:text-grey-900 dark:text-grey-100 dark:hover:!bg-grey-800 dark:hover:!text-grey-50"
                      }`}
                      onClick={(e) => toggleSubMenu(index, e)}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-colors ${
                            openSubMenu === index
                              ? "bg-secondary-main/20 text-secondary-dark dark:bg-secondary-main/30 dark:text-secondary-lighter"
                              : "bg-grey-100 text-secondary-main group-hover:bg-grey-200 dark:bg-grey-800 dark:text-secondary-light dark:group-hover:bg-grey-700 dark:group-hover:text-secondary-lighter"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="truncate tracking-wide">{item.name}</span>
                      </span>
                      <span className="shrink-0 text-grey-400 group-hover:text-grey-600 dark:text-grey-500 dark:group-hover:text-grey-300">
                        {openSubMenu === index ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center justify-between gap-2 rounded-xl px-3 py-3 text-[0.9375rem] font-medium transition duration-200 active:scale-[0.99] ${
                        isActive
                          ? "bg-primary-main/10 text-primary-dark ring-1 ring-primary-main/20 dark:bg-primary-main/15 dark:text-primary-light dark:ring-primary-main/25"
                          : "text-grey-800 hover:bg-grey-100 hover:text-grey-900 dark:text-grey-100 dark:hover:!bg-grey-800 dark:hover:!text-grey-50"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-colors ${
                            isActive
                              ? "bg-primary-main/20 text-primary-dark dark:bg-primary-main/25 dark:text-primary-light"
                              : "bg-grey-100 text-primary-main group-hover:bg-grey-200 dark:bg-grey-800 dark:text-primary-light dark:group-hover:bg-grey-700 dark:group-hover:text-primary-light"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="truncate tracking-wide">{item.name}</span>
                      </span>
                    </Link>
                  )}

                  {hasSubMenu && openSubMenu === index && (
                    <div className="mt-3 space-y-3 border-l-2 border-primary-main/25 pl-3 ml-4 pb-2">
                      {item.subMenu.map((subMenuCategory, subIndex) => {
                        const isCategoryActive = openSubCategory === subIndex;

                        return (
                          <div key={subIndex} className="space-y-2">
                            <button
                              type="button"
                              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide transition duration-200 ${
                                isCategoryActive
                                  ? "bg-secondary-main text-white shadow-sm"
                                  : "bg-grey-100 text-grey-800 hover:bg-grey-200 hover:text-grey-900 dark:bg-grey-800/90 dark:text-grey-100 dark:hover:bg-grey-700 dark:hover:text-white"
                              }`}
                              onClick={() => toggleSubCategory(subIndex)}
                            >
                              <span>{subMenuCategory.title}</span>
                              {isCategoryActive ? (
                                <FaChevronUp className="text-xs opacity-90" />
                              ) : (
                                <FaChevronDown className="text-xs opacity-70" />
                              )}
                            </button>

                            {isCategoryActive && (
                              <ul className="space-y-1.5 pt-1 pl-1">
                                {subMenuCategory.items.map((subItem, subItemIndex) => {
                                  const isSubActive = location.pathname === subItem.path;

                                  return (
                                    <li key={subItemIndex}>
                                      <Link
                                        to={subItem.path}
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          window.scrollTo(0, 0);
                                        }}
                                        className={`group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.8125rem] font-medium transition duration-200 ${
                                          isSubActive
                                            ? "bg-primary-main/12 text-primary-dark dark:bg-primary-main/20 dark:text-primary-light"
                                            : "text-grey-700 hover:bg-grey-100 hover:text-grey-900 dark:text-grey-300 dark:hover:!bg-grey-800 dark:hover:!text-grey-50"
                                        }`}
                                      >
                                        <span
                                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm transition-colors ${
                                            isSubActive
                                              ? "bg-primary-main/20 text-primary-dark dark:text-primary-light"
                                              : "bg-grey-100 text-primary-main group-hover:bg-grey-200 dark:bg-grey-800 dark:text-primary-light dark:group-hover:bg-grey-700"
                                          }`}
                                        >
                                          {subItem.icon}
                                        </span>
                                        <span className="truncate">{subItem.name}</span>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
