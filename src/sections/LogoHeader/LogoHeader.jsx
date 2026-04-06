import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { RoutePaths } from "../../routes/constant/path";

const LogoHeader = ({ isLight }) => {
  const { isDark } = useTheme();
  const logoSrc = isDark ? "/logo/logoLight.png" : "/logo/logoDark.png";

  const [key, setKey] = useState(0); // Key to re-trigger the animation

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Update the key to restart animation
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Link to={RoutePaths.HOME} className="flex cursor-pointer space-x-4">
      {/* Logo Icon */}
      <img
        src={logoSrc}
        alt="WebBuild Logo"
        // className="w-14 lg:w-16 max-w-full h-auto animate-spin-slow"
        className="w-14 lg:w-16 max-w-full h-auto"
        style={{
          transformOrigin: "center center",
        }}
      />

      <div className="flex flex-col items-start" key={key}>
        {/* Animated WebBuild Text */}
        <h1
          // className={`text-lg max-lg:text-base font-bold tracking-wide leading-tight animate-webbuild ${
          className={`text-lg max-lg:text-base font-bold tracking-wide leading-tight ${isLight ? "text-white" : "text-black"
            }`}
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          WEB BUILD
        </h1>

        {/* Animated InfoTech Text */}
        <h2
          // className={`text-lg max-lg:text-base font-medium tracking-widest animate-slide-in ${
          className={`text-lg max-lg:text-base font-medium tracking-widest ${isLight ? "text-white/80" : "text-gray-700"
            }`}
          style={{
            fontFamily: "'Roboto Mono', monospace",
            letterSpacing: "0.2em",
          }}
        >
          INFOTECH
        </h2>
      </div>
    </Link>
  );
};

export default LogoHeader;
