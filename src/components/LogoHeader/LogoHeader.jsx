import React, { useState, useEffect } from "react";
const LogoHeader = () => {

  const [key, setKey] = useState(0); // Key to re-trigger the animation

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Update the key to restart animation
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Logo Icon */}
      <img
        src="/logo/logo2.png" // Replace with your logo path in the public folder
        alt="WebBuild Logo"
        className="w-14 lg:w-16 max-w-full h-auto animate-spin-slow"
        style={{
          transformOrigin: "center center",
        }}
      />

      <div className="flex flex-col items-start" key={key}>
      {/* Animated WebBuild Text */}
      <h1
        className="text-lg max-lg:text-base font-bold tracking-wide text-black leading-tight animate-webbuild"
        style={{
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        WEB BUILD
      </h1>

      {/* Animated InfoTech Text */}
      <h2
        className="text-lg max-lg:text-base font-medium tracking-widest text-gray-700 animate-slide-in"
        style={{
          fontFamily: "'Roboto Mono', monospace",
          letterSpacing: "0.2em",
        }}
      >
        INFOTECH
      </h2>
    </div>
    </div>
  );
};

export default LogoHeader;
