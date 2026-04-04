import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { WeatherSunnyIcon, WeatherNightIcon } from "../icons";

const ThemeToggle = ({ className = "", glass = false }) => {
  const { isDark, toggleTheme } = useTheme();

  const shell = glass
    ? "rounded-xl border border-white/20 bg-white/10 text-white shadow-none hover:bg-white/20 focus-visible:ring-white/50 focus-visible:ring-offset-0"
    : "rounded-xl border border-grey-300 dark:border-grey-600 bg-background-light dark:bg-background-dark shadow-sm focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`group relative inline-flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ease-out cursor-pointer hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 ${shell} ${className}`}
    >
      <span className="pointer-events-none flex h-5 w-5 items-center justify-center">
        {isDark ? (
          <WeatherSunnyIcon
            className={`text-xl transition-transform duration-300 group-hover:rotate-12 ${glass ? "text-amber-200" : "text-warning"}`}
          />
        ) : (
          <WeatherNightIcon
            className={`text-xl transition-transform duration-300 group-hover:-rotate-12 ${glass ? "text-slate-100" : "text-primary"}`}
          />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;

