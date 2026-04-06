import React, { useState } from "react";
import LogoHeader from "../LogoHeader/LogoHeader";

const menuItems = [
    { name: "Home", path: "/", icon: null, subMenu: [] },
    {
      name: "Services",
      path: "/services",
      icon: null,
      subMenu: [
      ],
    },
    
    {
      name: "Technologies",
      path: "/technologies",
      icon: null,
      subMenu: [
      {
        title: "Frontend",
        items: [
          { name: "React.js", path: "/technologies/react" },
          { name: "Angular", path: "/technologies/angular" },
          { name: "Vue.js", path: "/technologies/vue" },
          { name: "HTML5", path: "/technologies/html5" },
        ],
      },
      {
        title: "Backend",
        items: [
          { name: "Node.js", path: "/technologies/nodejs" },
          { name: "GraphQL", path: "/technologies/graphql" },
          { name: "Express.js", path: "/technologies/express" },
          { name: "Next.js", path: "/technologies/nextjs" },
        ],
      },
      {
        title: "Database",
        items: [
          { name: "Redis", path: "/technologies/redis" },
          { name: "MongoDB", path: "/technologies/mongodb" },
          { name: "MySQL", path: "/technologies/mysql" },
          { name: "PostgreSQL", path: "/technologies/postgresql" },
          { name: "Firebase", path: "/technologies/firebase" },
        ],
      },
    ],
  },
    { name: "Projects", path: "/project", icon: null, subMenu: [] },
    // { name: "Company", path: "/company", icon: null, subMenu: [] },
    { name: "Contact", path: "/contact", icon: null, subMenu: [] },

  ];



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
       <LogoHeader/>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-cta"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full-cta"
          className={`${menuOpen ? "flex" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subMenu.length > 0 ? (
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {dropdownOpen && (
        <div
          id="mega-menu-full-cta-dropdown"
          className="mt-1 bg-white border-gray-200 shadow-xs border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          {menuItems
            .find((item) => item.name === "Technologies")
            ?.subMenu.map((subItem, subIndex) => (
              <div key={subIndex} className="space-y-4 sm:mb-4 md:mb-0">
                <h4 className="font-semibold mb-2">{subItem.title}</h4>
                <ul>
                  {subItem.items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.path}
                        className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
