import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { stats } from "../../data/jsonData";


const StatsComponent = () => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetKey((prevKey) => prevKey + 1);
    }, 10000); // Every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="w-full py-12 bg-gradient-to-b from-[#f9fafb] via-[#eee] to-[#bcb8ea6b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${stat.bgColor} p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105`}
              style={{
                animation: `fadeInUp 0.7s ease-in-out ${index * 0.2}s forwards`,
                opacity: 0,
              }}
            >
              {/* Icon */}
              <div className="text-5xl sm:text-6xl lg:text-7xl mb-4">{stat.icon}</div>
              {/* CountUp Animation */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
                <CountUp
                  key={resetKey + index}
                  start={0}
                  end={stat.value}
                  duration={5}
                  suffix={stat.suffix || "+"}
                  separator=","
                />
              </h3>
              {/* Label */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium mt-2 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              transform: translateY(20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          .rotate-icon {
            animation: rotate 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default StatsComponent;
