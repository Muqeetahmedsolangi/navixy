import { v4 as uuidv4 } from "uuid";
const themeConfig = {
  app: {
    name: "Dashcode React",
  },
  // layout
  layout: {
    isRTL: false,
    darkMode: false,
    semiDarkMode: false,
    skin: "default",
    contentWidth: "full",
    type: "vertical",
    navBarType: "sticky",
    footerType: "static",
    isMonochrome: false,
    menu: {
      isCollapsed: false,
      isHidden: false,
    },
    mobileMenu: false,
    customizer: false,
  },

  // === TW CUSTOM THEME CONFIG (New Addition) ===
  twTheme: {
    // TW theme selection
    enabled: true, // Set to true to use TW theme
    variant: "default", // default | dark | auto
    
    // TW colors for light mode
    colors: {
      light: {
        primary: "#0F2D53",        // TW navy (Primary button)
        primaryHover: "#3888E1",   // TW hover blue
        secondary: "#3BAFF3",      // TW light blue
        success: "#7DCF0F",        // TW green
        background: "#FFFFFF",     // White background
        backgroundAlt: "#F4F4FF",  // Ghost background
        surface: "#F8FAFC",        // Light surface
        text: {
          primary: "#0F2D53",      // Navy text
          secondary: "#475569",    // Gray text
          muted: "#64748B",        // Muted text
        },
        border: "#E2E8F0",         // Light borders
      },
      
      // TW colors for dark mode
      dark: {
        primary: "#3BAFF3",        // Lighter blue for dark mode
        primaryHover: "#6CC5F7",   // Lighter hover
        secondary: "#0F2D53",      // Navy as secondary in dark
        success: "#7DCF0F",        // Same green
        background: "#0F172A",     // Dark background
        backgroundAlt: "#1E293B",  // Dark surface
        surface: "#334155",        // Card background
        text: {
          primary: "#F8FAFC",      // Light text
          secondary: "#CBD5E1",    // Secondary light text
          muted: "#94A3B8",        // Muted light text
        },
        border: "#475569",         // Dark borders
      },
    },

    // TW typography
    typography: {
      primary: {
        name: "Lexend",
        class: "font-lexend",
        usage: "headings, display, branding",
        weights: ["thin", "normal", "semibold", "extrabold", "black"],
      },
      secondary: {
        name: "Proxima Nova", 
        class: "font-proximaNova",
        usage: "body, forms, UI text",
        weights: ["thin", "normal", "semibold", "bold", "extrabold", "black"],
      },
    },

    // Component overrides for TW theme
    components: {
      button: {
        primary: {
          light: "bg-twNavy-500 hover:bg-twBrand-hoverBlue text-white",
          dark: "bg-twBlue-500 hover:bg-twBlue-400 text-white",
        },
        secondary: {
          light: "bg-twBlue-500 hover:bg-twBlue-600 text-white",
          dark: "bg-twNavy-500 hover:bg-twNavy-400 text-white",
        },
        success: {
          light: "bg-twGreen-500 hover:bg-twGreen-600 text-white",
          dark: "bg-twGreen-500 hover:bg-twGreen-400 text-white",
        },
        ghost: {
          light: "bg-twBrand-ghost text-twNavy-500 hover:bg-twNavy-500 hover:text-white",
          dark: "bg-gray-800 text-twBlue-400 hover:bg-twBlue-500 hover:text-white",
        },
      },
      
      card: {
        light: "bg-white border-twNavy-200",
        dark: "bg-slate-800 border-gray-700",
        ghost: {
          light: "bg-twBrand-ghost border-twNavy-100",
          dark: "bg-slate-700 border-gray-600",
        },
      },

      header: {
        light: "bg-white text-twNavy-500 border-twNavy-200",
        dark: "bg-slate-800 text-twBlue-400 border-gray-700",
      },

      sidebar: {
        light: "bg-white text-twNavy-600 border-twNavy-200",
        dark: "bg-slate-800 text-twBlue-300 border-gray-700",
      },
    },

    // Breakpoints for responsive TW theme
    breakpoints: {
      mobile: "640px",
      tablet: "768px", 
      desktop: "1024px",
      wide: "1280px",
    },
  },
};

export default themeConfig;
