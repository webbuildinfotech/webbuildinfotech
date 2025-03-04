import React from 'react';
import { CgChevronDoubleDownR, CgChevronDoubleUpR } from 'react-icons/cg';

const ScrollButton = ({ showScrollButton, scrollProgress, scrollDirection, scrollToTop, scrollToBottom }) => {
  // Calculate exact scroll percentage
  const percentage = Math.round(scrollProgress * 1);

  return (
    <>
      {showScrollButton && (
        <div className="fixed bottom-30 right-9 flex flex-col items-center z-50">
        <div className="w-16 h-16 flex items-center justify-center relative">
          <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle className="stroke-gray-200" cx="50" cy="50" r="40" strokeWidth="4" fill="none" />
            <circle
                className="stroke-red-400 transition-all duration-300"
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg p-2 flex items-center justify-center z-50 hover:scale-110 transition-all duration-200 hover:shadow-xl"
            >
              {scrollDirection === "down" ? 
                <CgChevronDoubleDownR size={18} /> : 
                <CgChevronDoubleUpR size={18} />
              }
            </button>
          </div>
          <div className="mt-2 text-md font-bold bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent">
            {percentage}%
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollButton;