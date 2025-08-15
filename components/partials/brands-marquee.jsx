"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

const BrandsMarquee = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isPaused, setIsPaused] = useState(false);

  // Professional brand data - representing major companies using telematics
  const brands = [
    { name: "Foxconn", icon: "heroicons:building-office-2" },
    { name: "Claro", icon: "heroicons:signal" },
    { name: "Shopee", icon: "heroicons:shopping-bag" },
    { name: "Nestlé", icon: "heroicons:home-modern" },
    { name: "Amazon", icon: "heroicons:cube" },
    { name: "DHL Express", icon: "heroicons:truck" },
    { name: "Toyota", icon: "heroicons:truck" },
    { name: "Xerox", icon: "heroicons:printer" },
    { name: "British Airways", icon: "heroicons:paper-airplane" },
    { name: "Unilever", icon: "heroicons:beaker" },
    { name: "FedEx", icon: "heroicons:truck" },
    { name: "BMW", icon: "heroicons:truck" },
    { name: "Siemens", icon: "heroicons:cog-6-tooth" },
    { name: "Coca-Cola", icon: "heroicons:building-storefront" },
    { name: "UPS", icon: "heroicons:truck" },
    { name: "Volkswagen", icon: "heroicons:truck" },
  ];

  // Duplicate brands for seamless infinite scroll (4 sets for smooth loop)
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className={`py-8 overflow-hidden border-t border-b w-full ${isTwThemeEnabled ? 'tw-bg-alt border-twNavy-200 dark:bg-twNavy-900 dark:border-twNavy-700' : 'bg-gray-100 border-gray-200 dark:bg-slate-800 dark:border-slate-700'}`}>
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-6 px-6">
          <p className={`text-xs font-medium uppercase tracking-wider ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500'} dark:text-gray-400`}>
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Gradient Overlays - Full edge to edge */}
          <div className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r z-20 pointer-events-none ${isTwThemeEnabled ? 'from-twBrand-ghost via-twBrand-ghost/60 to-transparent dark:from-twNavy-900 dark:via-twNavy-900/60' : 'from-gray-100 via-gray-100/60 to-transparent dark:from-slate-800 dark:via-slate-800/60'}`}></div>
          <div className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l z-20 pointer-events-none ${isTwThemeEnabled ? 'from-twBrand-ghost via-twBrand-ghost/60 to-transparent dark:from-twNavy-900 dark:via-twNavy-900/60' : 'from-gray-100 via-gray-100/60 to-transparent dark:from-slate-800 dark:via-slate-800/60'}`}></div>

          {/* Scrolling Brands */}
          <div 
            className={`flex items-center space-x-12 ${isPaused ? 'pause-animation' : 'animate-marquee'}`}
          >
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className={`flex items-center space-x-3 flex-shrink-0 px-4 py-3 transition-all duration-300 cursor-pointer rounded-lg group ${isTwThemeEnabled ? 'hover:bg-white/60 dark:hover:bg-twNavy-800' : 'hover:bg-white/50 dark:hover:bg-slate-700'}`}
              >
                {/* Brand Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm transition-all ${isTwThemeEnabled ? 'bg-white group-hover:bg-white dark:bg-twNavy-700 dark:group-hover:bg-twNavy-600' : 'bg-white/80 group-hover:bg-white dark:bg-slate-600 dark:group-hover:bg-slate-500'}`}>
                  <Icon 
                    icon={brand.icon} 
                    className={`w-6 h-6 ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-twBlue-300' : 'text-gray-600 dark:text-gray-300'}`} 
                  />
                </div>
                
                {/* Brand Name */}
                <span className={`text-base font-medium whitespace-nowrap transition-opacity ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova dark:text-twBlue-100' : 'text-gray-700 dark:text-gray-200'} group-hover:opacity-100 opacity-80`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        
        /* Pause animation but keep position */
        .pause-animation {
          animation: marquee 30s linear infinite;
          animation-play-state: paused;
          will-change: transform;
        }
        
        /* Smooth transitions */
        .animate-marquee, .pause-animation {
          transition: none;
        }
        
        /* Ensure seamless loop */
        .animate-marquee {
          display: flex;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsMarquee;