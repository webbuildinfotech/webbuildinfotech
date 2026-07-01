import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AnnouncementBar from './AnnouncementBar/AnnouncementBar';
import ScrollButton from './SocialButtons/ScrollButton';
import Chatbot from './Chat/Chat';

const Layout = () => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / totalHeight) * 100);
      setShowScrollButton(scrollY > 100);
      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
      <div className="fixed top-0 left-0 z-50 w-full">
        <AnnouncementBar />
        <Header />
      </div>
      <main className="flex-1 pt-[7.25rem]">
        <Outlet />
      </main>
      <Chatbot />
      <Footer />
      <ScrollButton
        showScrollButton={showScrollButton}
        scrollProgress={scrollProgress}
        scrollDirection={scrollDirection}
        scrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        scrollToBottom={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      />
    </div>
  );
};

export default Layout;
