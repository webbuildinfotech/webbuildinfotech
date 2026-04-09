import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  // Revert option:
  // const stored = window.localStorage.getItem('theme');
  // if (stored === 'dark' || stored === 'light') return stored;
  // return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  return 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    // Revert option:
    // if (theme === 'dark') root.classList.add('dark');
    // else root.classList.remove('dark');
    // localStorage.setItem('theme', theme);
    root.classList.add('dark');
    if (theme !== 'dark') {
      setThemeState('dark');
      return;
    }
    localStorage.setItem('theme', 'dark');
  }, [theme]);

  const setTheme = useCallback((next) => {
    // Revert option:
    // setThemeState((prev) => (typeof next === 'function' ? next(prev) : next));
    setThemeState(() => {
      const requested = typeof next === 'function' ? next('dark') : next;
      return requested === 'dark' ? 'dark' : 'dark';
    });
  }, []);

  const toggleTheme = useCallback(() => {
    // Revert option:
    // setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));
    setThemeState('dark');
  }, []);

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
