import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/constant/path";
import { DarkLogoIcon, LightLogoIcon } from "../../components/icons";

const LogoHeader = ({ isLight }) => {
  return (
    <Link to={RoutePaths.HOME} className="flex cursor-pointer space-x-2">
      {isLight ? (
        <LightLogoIcon className="w-12 h-12 text-white" />
      ) : (
        <LightLogoIcon className="h-12 w-12 text-slate-900 dark:text-white" />
      )}

      <div className="flex flex-col items-start">
        {/* Animated WebBuild Text */}
        <h1
          // className={`text-lg max-lg:text-base font-bold tracking-wide leading-tight animate-webbuild ${
          className={`text-lg max-lg:text-base font-bold tracking-wide leading-tight ${
            isLight ? "text-white" : "text-slate-900 dark:text-white"
          }`}
          style={{
            // fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          WEB BUILD
        </h1>

        {/* Animated InfoTech Text */}
        <h2
          // className={`text-lg max-lg:text-base font-medium tracking-widest animate-slide-in ${
          className={`text-lg max-lg:text-base font-medium tracking-widest ${
            isLight ? "text-white/80" : "text-slate-600 dark:text-slate-300"
          }`}
          style={{
            // fontFamily: "'Roboto Mono', monospace",
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
