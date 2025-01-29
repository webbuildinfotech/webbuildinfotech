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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="container mx-auto px-6">
        <h2 className="text-xl lg:text-3xl font-bold text-blue-800 mb-6 uppercase text-start">
          Technologies We Work With
        </h2>

        {Object.keys(rotatingLogos).map((category, index) => (
        
          <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-start relative group">
          <span className="text-lg lg:text-xl bg-gradient-to-r from-blue-400">
            {category} Technologies
          </span>
          </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rotatingLogos[category].map((logo, logoIndex) => (
                <div
                  key={logoIndex}
                  className="flex justify-center items-center p-6 bg-white shadow-md rounded-lg transition-all duration-1000 ease-in-out transform hover:scale-110 hover:rotate-3"
                  style={{
                    animation: `fadeInOut 4s ${logoIndex * 0.2}s infinite`,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-20 h-20 object-contain transform rotate-animation"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 999;
         
            }
            50% {
              opacity: 999;
              transform: scale(1);
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
