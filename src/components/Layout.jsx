import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SocialButtons from './SocialButtons/SocialButtons';
import { CgChevronDoubleDownR } from "react-icons/cg";
import { CgChevronDoubleUpR } from "react-icons/cg";
import { FaPrayingHands } from "react-icons/fa"; // Namaste Icon
import Chatbot from './Chat/Chat';

const Layout = () => {
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false); // Toggle button visibility
  const [showWelcomeIcon, setShowWelcomeIcon] = useState(true); // Show namaste icon on load

  useEffect(() => {
    // Hide the welcome icon after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcomeIcon(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
    <div className="flex flex-col min-h-screen relative">
      {/* Header */}
      {!showWelcomeIcon && <Header />}

      {/* Social Buttons */}
      {!showWelcomeIcon && <SocialButtons />}

      {/* Welcome Icon with Background Overlay */}
      {showWelcomeIcon && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <div
            className="flex flex-col items-center justify-center animate-grow-and-fade"
            style={{ animation: 'grow-and-fade 5s ease-in-out forwards' }}
          >
            <img src='/logo/logo.png' alt='WebBuild InfoTech'/>
            <h1 className="text-white text-4xl font-bold text-center">Welcome</h1>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main
        className={`flex-grow ${["/", "/", "/contact"].includes(location.pathname) ? "" : "container mx-auto px-6 py-4"
          }`}
      >
        {/* Outlet will render content for routes */}
        <Outlet />
      </main>
      {!showWelcomeIcon && <Chatbot />}
      {/* Footer */}
      {!showWelcomeIcon && <Footer />}

      {/* Scroll Button */}
      {showScrollButton && (
        <button
          onClick={scrollDirection === 'down' ? scrollToBottom : scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          title={scrollDirection === 'down' ? 'Scroll to bottom' : 'Scroll to top'}
        >
          {scrollDirection === 'down' ? (
            // Down Arrow SVG
            <CgChevronDoubleDownR />
          ) : (
            // Up Arrow SVG
            <CgChevronDoubleUpR />
          )}
        </button>
      )}

      <style jsx>{`
        @keyframes grow-and-fade {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
