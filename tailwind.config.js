/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#F6F8FF",
          100: "#EDF0FF",
          200: "#D1DAFE",
          300: "#B4C2FD",
          400: "#8092FF",
          500: "#4669fa",
          600: "#3F5EDF",
          700: "#2A3F96",
          800: "#203071",
          900: "#151F49",
        },
        secondary: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#A0AEC0",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        danger: {
          50: "#FFF7F7",
          100: "#FEEFEF",
          200: "#FCD6D7",
          300: "#FABBBD",
          400: "#F68B8D",
          500: "#F1595C",
          600: "#D75052",
          700: "#913638",
          800: "#6D292A",
          900: "#461A1B",
        },
        black: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#111112",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        warning: {
          50: "#FFFAF8",
          100: "#FFF4F1",
          200: "#FEE4DA",
          300: "#FDD2C3",
          400: "#FCB298",
          500: "#FA916B",
          600: "#DF8260",
          700: "#965741",
          800: "#714231",
          900: "#492B20",
        },
        info: {
          50: "#F3FEFF",
          100: "#E7FEFF",
          200: "#C5FDFF",
          300: "#A3FCFF",
          400: "#5FF9FF",
          500: "#0CE7FA",
          600: "#00B8D4",
          700: "#007A8D",
          800: "#005E67",
          900: "#003F42",
        },
        success: {
          50: "#F3FEF8",
          100: "#E7FDF1",
          200: "#C5FBE3",
          300: "#A3F9D5",
          400: "#5FF5B1",
          500: "#50C793",
          600: "#3F9A7A",
          700: "#2E6D61",
          800: "#1F4B47",
          900: "#0F2A2E",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F4F5F7",
          200: "#E5E7EB",
          300: "#D2D6DC",
          400: "#9FA6B2",
          500: "#68768A",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        // === TW CUSTOM COLORS (New Addition) ===
        // TW Navy - #0F2D53 based
        twNavy: {
          50: "#F2F5FB",   // 20% - Lightest shade
          100: "#E6EDF7",  // 30% - Very light
          200: "#C7D9EE",  // 40% - Lighter shade
          300: "#9CBEE0",  // 50% - Light
          400: "#5A93CD",  // 60% - Medium shade
          500: "#0F2D53",  // 100% - Base color (Primary button)
          600: "#0C2548",  // 110% - Slightly darker
          700: "#0A1E3D",  // 80% - Darker shade
          800: "#081832",  // 120% - Very dark
          900: "#051226",  // 140% - Darkest
        },
        
        // TW Blue - #3BAFF3 based  
        twBlue: {
          50: "#F2FAFF",   // 20% - Lightest shade
          100: "#E6F5FE",  // 30% - Very light
          200: "#C7E8FD",  // 40% - Lighter shade
          300: "#9DD6FB",  // 50% - Light
          400: "#6CC5F7",  // 60% - Medium shade
          500: "#3BAFF3",  // 100% - Base color
          600: "#2B8FD3",  // 110% - Slightly darker
          700: "#236FB3",  // 80% - Darker shade
          800: "#1B5493",  // 120% - Very dark
          900: "#133E73",  // 140% - Darkest
        },

        // TW Brand Colors (Direct mapping)
        twBrand: {
          navy: "#0F2D53",      // Primary button
          darkNavy: "#12395E",  // Sub color variant
          hoverBlue: "#3888E1", // Hover state
          lightBlue: "#3BAFF3", // Secondary accent
          green: "#7DCF0F",     // Success/accent
          ghost: "#F4F4FF",     // Light background
          white: "#FFFFFF",     // Pure white
        },

        // TW Green (Success) - #7DCF0F based
        twGreen: {
          50: "#F7FEF0",
          100: "#ECFBD9",
          200: "#D4F6B8",
          300: "#B8EE8B",
          400: "#9CE162",
          500: "#7DCF0F",   // TW green
          600: "#6AB60D",
          700: "#56970B",
          800: "#447809",
          900: "#386308",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        
        // === TW CUSTOM FONTS (New Addition) ===
        // Lexend - Primary font for headings/display
        lexend: [
          "Lexend", 
          "system-ui", 
          "-apple-system", 
          "BlinkMacSystemFont", 
          "Segoe UI", 
          "sans-serif"
        ],
        
        // Proxima Nova - Secondary font for body text
        proximaNova: [
          "Proxima Nova", 
          "system-ui", 
          "-apple-system", 
          "BlinkMacSystemFont", 
          "Segoe UI", 
          "sans-serif"
        ],
      },
      boxShadow: {
        base: "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        base2:
          "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
        base3: "16px 10px 40px rgba(15, 23, 42, 0.22)",
        deep: "-2px 0px 8px rgba(0, 0, 0, 0.16)",
        dropdown: "0px 4px 8px rgba(0, 0, 0, 0.08)",

        testi: "0px 4px 24px rgba(0, 0, 0, 0.06)",
        todo: "rgba(235 233 241, 0.6) 0px 3px 10px 0px",
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1)" },
        },
        tada: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": {
            transform: "scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)",
          },
          "40%, 60%, 80%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        zoom: "zoom 1s ease-in-out infinite",
        tada: "tada 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
