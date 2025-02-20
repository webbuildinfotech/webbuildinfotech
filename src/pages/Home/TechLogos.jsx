import React, { useState, useEffect } from "react";
import { techLogos } from "../../data/jsonData";

const TechLogos = () => {
  const [rotatingLogos, setRotatingLogos] = useState(() => {
    return techLogos.reduce((acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    }, {});
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingLogos((prevLogos) => {
        const updatedLogos = { ...prevLogos };
        Object.keys(updatedLogos).forEach((category) => {
          updatedLogos[category] = [
            updatedLogos[category][updatedLogos[category].length - 1],
            ...updatedLogos[category].slice(0, updatedLogos[category].length - 1),
          ];
        });
        return updatedLogos;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-20 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-100 flex items-center">

    {/* //  <div className="w-full py-16 bg-gradient-to-b from-gray-400 to-gray-200">  */}
      <div className="container mx-auto px-6">
        {/* Header Title */}
        <h2 className="text-4xl font-extrabold text-white-900 text-center uppercase mb-10">
          Technologies We Work With
        </h2>

        {Object.keys(rotatingLogos).map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-left">
              <span className="text-blue-600 font-bold">{category}</span> Technologies
            </h3>

            {/* Tech Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {rotatingLogos[category].map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex justify-center items-center p-6 bg-white shadow-lg rounded-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:rotate-2"
                  style={{
                    animation: `fadeInOut 5s ${logoIndex * 0.2}s infinite ease-in-out`,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-700 ease-in-out hover:rotate-6"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.05);
            }
          }

          .rotate-animation {
            animation: rotateImage 6s linear infinite;
          }

          @keyframes rotateImage {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TechLogos;
