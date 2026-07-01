const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    { pattern: /(text|bg|ring|from|to|via)-(primary|secondary|info|success|warning|error|grey|background)(-(main|lighter|light|dark|darker|darkLight|50|100|200|300|400|500|600|700|800|900))?/ },
    { pattern: /text-(indigo|emerald|blue|amber|purple|rose|pink|teal|orange|cyan|lime|sky)-600/ },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#0891B2",
          lighter: "#CFFAFE",
          light: "#22D3EE",
          DEFAULT: "#0891B2",
          dark: "#0E7490",
          darker: "#155E75",
        },
        secondary: {
          main: "#4F46E5",
          lighter: "#E0E7FF",
          light: "#818CF8",
          DEFAULT: "#4F46E5",
          dark: "#3730A3",
          darker: "#1E1B4B",
        },
        info: {
          lighter: "#CAFDF5",
          light: "#61F3F3",
          DEFAULT: "#00B8D9",
          dark: "#006C9C",
          darker: "#003768",
        },
        success: {
          lighter: "#D3FCD2",
          light: "#77ED8B",
          DEFAULT: "#22C55E",
          dark: "#118D57",
          darker: "#065E49",
        },
        warning: {
          lighter: "#FFF5CC",
          light: "#FFD666",
          DEFAULT: "#FFAB00",
          dark: "#B76E00",
          darker: "#7A4100",
        },
        error: {
          lighter: "#FFE9D5",
          light: "#FFAC82",
          DEFAULT: "#FF5630",
          dark: "#B71D18",
          darker: "#7A0916",
        },
        grey: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        background: {
          light: "#F8FAFC",
          DEFAULT: "#F8FAFC",
          dark: "#0B1120",
          darkLight: "#131C31",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        ovo: ['"Plus Jakarta Sans"', "serif"],
        mooli: ['"Plus Jakarta Sans"', "sans-serif"],
        monda: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      boxShadow: {
        brand: "0 4px 24px rgba(8, 145, 178, 0.2)",
        "brand-lg": "0 8px 40px rgba(8, 145, 178, 0.25)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
