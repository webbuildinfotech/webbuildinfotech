import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SocialButtons from './SocialButtons/SocialButtons';
import { CgChevronDoubleDownR, CgChevronDoubleUpR } from "react-icons/cg";
import Chatbot from './Chat/Chat';

const Layout = () => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / totalHeight) * 100;

      setScrollProgress(scrollPercent);

      if (scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(scrollY);
    };

    // Debounce the scroll listener
    let timeout = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 50);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SocialButtons />
      <main className={`flex-grow ${["/", "/contact"].includes(location.pathname) ? "" : "container mx-auto"}`}>
        <Outlet />
      </main>
      <Chatbot />
      <Footer />

      {/* Scroll Button with Circular Progress */}
      {showScrollButton && (
        <div className="fixed bottom-60 right-6 w-20 h-20 flex items-center justify-center z-50">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle className="stroke-gray-300" cx="50" cy="50" r="40" strokeWidth="4" fill="none" />
            <circle
              className="stroke-red-500 transition-all duration-300"
              cx="50"
              cy="50"
              r="40"
              strokeWidth="4"
              fill="none"
              strokeDasharray="251"
              strokeDashoffset={251 - (scrollProgress * 2.51)}
              strokeLinecap="round"
            />
          </svg>
          <button
            onClick={scrollDirection === "down" ? scrollToBottom : scrollToTop}
            className="bg-white text-red-500 rounded-full shadow-lg p-2 flex items-center justify-center z-50"
          >
            {scrollDirection === "down" ? <CgChevronDoubleDownR size={18} /> : <CgChevronDoubleUpR size={18} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
