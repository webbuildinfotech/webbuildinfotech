import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SocialButtons from './SocialButtons/SocialButtons';
import { CgChevronDoubleDownR } from "react-icons/cg";
import { CgChevronDoubleUpR  } from "react-icons/cg";

const Layout = () => {
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false); // Toggle button visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (currentScrollY > lastScrollY && currentScrollY + windowHeight < documentHeight) {
        setScrollDirection('down'); // User is scrolling down
        setShowScrollButton(true); // Show the button while scrolling
      } else if (currentScrollY < lastScrollY && currentScrollY > 0) {
        setScrollDirection('up'); // User is scrolling up
        setShowScrollButton(true); // Show the button while scrolling
      } else {
        setShowScrollButton(false); // Hide the button when at top or bottom
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Scroll functions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Social Buttons */}
      <SocialButtons />

      {/* Main Content */}
      <main
        className={`flex-grow ${location.pathname === '/' ? '' : 'container mx-auto px-6 py-4'}`}
      >
        {/* Outlet will render content for routes */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Button */}
      {showScrollButton && (
        <button
          onClick={scrollDirection === 'down' ? scrollToBottom : scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          title={scrollDirection === 'down' ? 'Scroll to bottom' : 'Scroll to top'}
        >
          {scrollDirection === 'down' ? (
            // Down Arrow SVG
          <CgChevronDoubleDownR/>
          ) : (
            // Up Arrow SVG
           <CgChevronDoubleUpR />
          )}
        </button>
      )}
    </div>
  );
};

export default Layout;
