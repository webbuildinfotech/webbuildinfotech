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

      if (scrollY > lastScrollY) {
        setScrollDirection('down');
        setShowScrollButton(true);
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up');
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div className="fixed bottom-8 right-8 w-16 h-16 flex items-center justify-center">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle className="stroke-gray-300" cx="50" cy="50" r="45" strokeWidth="5" fill="none" />
            <circle
              className="stroke-red-500 transition-all duration-300"
              cx="50"
              cy="50"
              r="45"
              strokeWidth="5"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset={283 - (scrollProgress * 2.83)}
              strokeLinecap="round"
            />
          </svg>
          <button
            onClick={scrollDirection === 'down' ? scrollToBottom : scrollToTop}
            className= "bg-white text-red-500 rounded-full shadow-lg"
          >
            {scrollDirection === 'down' ? <CgChevronDoubleDownR size={24} /> : <CgChevronDoubleUpR size={24} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
