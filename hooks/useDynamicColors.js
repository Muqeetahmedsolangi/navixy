import { useMemo } from "react";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";
import themeConfig from "@/configs/themeConfig";

const useDynamicColors = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  const colors = useMemo(() => {
    if (!isTwThemeEnabled) {
      // Return default colors when TW theme is disabled
      return {
        primary: isDark ? "#3b82f6" : "#2563eb",
        secondary: isDark ? "#64748b" : "#475569",
        background: isDark ? "#0f172a" : "#ffffff",
        surface: isDark ? "#1e293b" : "#f8fafc",
        text: {
          primary: isDark ? "#f8fafc" : "#1e293b",
          secondary: isDark ? "#cbd5e1" : "#64748b",
          muted: isDark ? "#94a3b8" : "#9ca3af",
        },
        border: isDark ? "#374151" : "#e5e7eb",
      };
    }

    // Return TW theme colors
    const themeColors = isDark 
      ? themeConfig.twTheme.colors.dark 
      : themeConfig.twTheme.colors.light;

    return {
      primary: themeColors.primary,
      primaryHover: themeColors.primaryHover,
      secondary: themeColors.secondary,
      success: themeColors.success,
      background: themeColors.background,
      backgroundAlt: themeColors.backgroundAlt,
      surface: themeColors.surface,
      text: themeColors.text,
      border: themeColors.border,
    };
  }, [isTwThemeEnabled, isDark]);

  // CSS variable references for dynamic switching
  const cssVars = useMemo(() => ({
    primary: 'var(--tw-primary)',
    primaryHover: 'var(--tw-primary-hover)',
    secondary: 'var(--tw-secondary)',
    success: 'var(--tw-success)',
    background: 'var(--tw-background)',
    backgroundAlt: 'var(--tw-background-alt)',
    surface: 'var(--tw-surface)',
    textPrimary: 'var(--tw-text-primary)',
    textSecondary: 'var(--tw-text-secondary)',
    textMuted: 'var(--tw-text-muted)',
    border: 'var(--tw-border)',
  }), []);

  // Utility classes for dynamic colors
  const classes = useMemo(() => ({
    // Background classes
    bg: isTwThemeEnabled ? 'tw-bg' : (isDark ? 'bg-slate-900' : 'bg-white'),
    bgAlt: isTwThemeEnabled ? 'tw-bg-alt' : (isDark ? 'bg-slate-800' : 'bg-gray-50'),
    surface: isTwThemeEnabled ? 'tw-bg-surface' : (isDark ? 'bg-slate-700' : 'bg-gray-100'),
    
    // Text classes
    textPrimary: isTwThemeEnabled ? 'tw-text-primary' : (isDark ? 'text-white' : 'text-slate-900'),
    textSecondary: isTwThemeEnabled ? 'tw-text-secondary' : (isDark ? 'text-slate-300' : 'text-slate-600'),
    textMuted: isTwThemeEnabled ? 'tw-text-muted' : (isDark ? 'text-slate-400' : 'text-slate-500'),
    
    // Border classes
    border: isTwThemeEnabled ? 'tw-border' : (isDark ? 'border-slate-600' : 'border-gray-200'),
    
    // Button classes
    btnPrimary: isTwThemeEnabled ? 'btn-tw-primary' : (isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'),
    btnSecondary: isTwThemeEnabled ? 'btn-tw-secondary' : (isDark ? 'bg-slate-600 hover:bg-slate-700' : 'bg-slate-500 hover:bg-slate-600'),
    
    // Card classes
    card: isTwThemeEnabled ? 'card-tw' : (isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'),
    cardGhost: isTwThemeEnabled ? 'card-tw-ghost' : (isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-100'),
  }), [isTwThemeEnabled, isDark]);

  return {
    colors,
    cssVars,
    classes,
    isTwThemeEnabled,
    isDark,
  };
};

export default useDynamicColors;
