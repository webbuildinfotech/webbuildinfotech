import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const MobileMenu = ({ menuItems, activeMenu, setIsMenuOpen }) => {
  return (
    <div className="lg:hidden bg-white shadow-md">
      <nav className="flex flex-col space-y-4 px-6 py-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center font-serif font-bold text-black hover:text-blue-600 transition-transform transform hover:scale-110 ${activeMenu === item.name ? 'text-yellow-600 font-semibold' : ''}`}
            >
              <span className="mr-2 text-lg transition-transform transform hover:rotate-12">{item.icon}</span>
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
