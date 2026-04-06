const { addDynamicIconSelectors } = require("@iconify/tailwind");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"], // Adjust paths to your files
  theme: {
    extend: {
      // Define CSS variables for Tailwind v4 theme tokens
      // so bg-background-light / bg-background-dark are generated.

              // primary: "#000000",
        // secondary: "#150050",
        // accent: "#3F0071",
        // highlight: "#610094",
        
      colors: {
        primary: {
          main: "#00A76F",
          lighter: "#C8FAD6",
          light: "#5BE49B",
          DEFAULT: "#00A76F",
          dark: "#007867",
          darker: "#004B50",
        },
        secondary: {
          lighter: "#EFD6FF",
          light: "#C684FF",
          DEFAULT: "#8E33FF",
          dark: "#5119B7",
          darker: "#27097A",
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
          50: "#FCFDFD",
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#1C252E",
          900: "#141A21",
        },
        background: {
          light: "#F4F6F8",
          DEFAULT: "#F4F6F8",
          dark: "#141A20",
          darkLight: "#1C252E",
        },
      },
      fontFamily: {
        ovo: ['"Ovo"', "serif"],
        mooli: ['"Mooli"', "sans-serif"],
        monda: ['"Monda"', "sans-serif"],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};