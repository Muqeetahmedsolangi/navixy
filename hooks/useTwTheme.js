import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import themeConfig from "@/configs/themeConfig";

const useTwTheme = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.layout.darkMode);
  const [twTheme, setTwTheme] = useState({
    enabled: themeConfig.twTheme.enabled,
    variant: themeConfig.twTheme.variant,
    colors: isDark ? themeConfig.twTheme.colors.dark : themeConfig.twTheme.colors.light,
    typography: themeConfig.twTheme.typography,
    components: themeConfig.twTheme.components,
  });

  // Update TW theme when dark mode changes
  useEffect(() => {
    setTwTheme(prev => ({
      ...prev,
      colors: isDark ? themeConfig.twTheme.colors.dark : themeConfig.twTheme.colors.light,
    }));
  }, [isDark]);

  // Get TW theme classes for components
  const getTwClasses = (component, variant = 'primary', fallback = '') => {
    if (!twTheme.enabled) return fallback;
    
    const componentConfig = twTheme.components[component];
    if (!componentConfig) return fallback;

    const modeClasses = isDark ? 'dark' : 'light';
    
    if (typeof componentConfig === 'string') {
      return componentConfig;
    }
    
    if (componentConfig[variant] && componentConfig[variant][modeClasses]) {
      return componentConfig[variant][modeClasses];
    }
    
    if (componentConfig[modeClasses]) {
      return componentConfig[modeClasses];
    }
    
    return fallback;
  };

  // Get TW color
  const getTwColor = (colorName) => {
    if (!twTheme.enabled) return null;
    return twTheme.colors[colorName];
  };

  // Get TW typography class
  const getTwFont = (fontType = 'secondary') => {
    if (!twTheme.enabled) return '';
    return twTheme.typography[fontType]?.class || '';
  };

  // Enable/disable TW theme
  const toggleTwTheme = (enabled = null) => {
    const newEnabled = enabled !== null ? enabled : !twTheme.enabled;
    setTwTheme(prev => ({ ...prev, enabled: newEnabled }));
    
    // Save to localStorage
    if (typeof window !== "undefined") {
      window?.localStorage.setItem("twThemeEnabled", JSON.stringify(newEnabled));
    }
  };

  // Load TW theme preference from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEnabled = localStorage.getItem("twThemeEnabled");
      if (storedEnabled !== null) {
        setTwTheme(prev => ({ 
          ...prev, 
          enabled: JSON.parse(storedEnabled) 
        }));
      }
    }
  }, []);

  return {
    // TW theme state
    twTheme,
    isTwThemeEnabled: twTheme.enabled,
    
    // Helper functions
    getTwClasses,
    getTwColor,
    getTwFont,
    toggleTwTheme,
    
    // Direct access to current colors
    twColors: twTheme.colors,
    twTypography: twTheme.typography,
    
    // Predefined component classes
    twButton: {
      primary: getTwClasses('button', 'primary', 'bg-primary-500 hover:bg-primary-600 text-white'),
      secondary: getTwClasses('button', 'secondary', 'bg-secondary-500 hover:bg-secondary-600 text-white'),
      success: getTwClasses('button', 'success', 'bg-success-500 hover:bg-success-600 text-white'),
      ghost: getTwClasses('button', 'ghost', 'bg-gray-100 text-gray-700 hover:bg-gray-200'),
    },
    
    twCard: {
      default: getTwClasses('card', 'default', 'bg-white border border-gray-200'),
      ghost: getTwClasses('card', 'ghost', 'bg-gray-50 border border-gray-100'),
    },
    
    twHeader: getTwClasses('header', 'default', 'bg-white text-gray-700'),
    twSidebar: getTwClasses('sidebar', 'default', 'bg-white text-gray-600'),
  };
};

export default useTwTheme;
