import React from 'react';
import { CgChevronDoubleDownR, CgChevronDoubleUpR } from 'react-icons/cg';

const ScrollButton = ({ showScrollButton, scrollProgress, scrollDirection, scrollToTop, scrollToBottom }) => {
  // Calculate exact scroll percentage
  const percentage = Math.round(scrollProgress * 1);

  return (
    <>
      {showScrollButton && (
        <div className="fixed bottom-30 right-9 z-40 flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center relative">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle className="stroke-grey-200 dark:stroke-grey-600" cx="50" cy="50" r="40" strokeWidth="4" fill="none" />
            <circle
                className="stroke-primary-main transition-all duration-300"
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
              type="button"
              onClick={scrollDirection === "down" ? scrollToBottom : scrollToTop}
              className="relative z-10 flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-main focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark"
            >
              {scrollDirection === "down" ? 
                <CgChevronDoubleDownR size={18} /> : 
                <CgChevronDoubleUpR size={18} />
              }
            </button>
          </div>
          <div className="mt-2 text-sm font-bold text-grey-800 dark:text-grey-200">
            {percentage}%
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollButton;