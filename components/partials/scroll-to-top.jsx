"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

const ScrollToTop = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isTwThemeEnabled ? 'bg-twNavy-700 hover:bg-twNavy-600' : 'bg-slate-700 hover:bg-slate-600'} hover:shadow-xl`}
      aria-label="Scroll to top"
    >
      <Icon icon="heroicons:chevron-up" className="w-6 h-6 text-white font-bold" />
    </button>
  );
};

export default ScrollToTop;
