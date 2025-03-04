import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SocialButtons from './SocialButtons/SocialButtons';
import { CgChevronDoubleDownR, CgChevronDoubleUpR } from "react-icons/cg";
import ScrollButton from './SocialButtons/ScrollButton';
// import Chatbot from './Chat/Chat';

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
      <div className="hidden md:block">
        <SocialButtons />
      </div>
      <main>
        <Outlet />
      </main>
      {/* <Chatbot /> */}
      <Footer />

      <ScrollButton 
        showScrollButton={showScrollButton}
        scrollProgress={scrollProgress}
        scrollDirection={scrollDirection}
        scrollToTop={scrollToTop}
        scrollToBottom={scrollToBottom}
      />
    </div>
  );
};

export default Layout;
