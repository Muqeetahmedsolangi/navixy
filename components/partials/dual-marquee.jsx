"use client";

import React, { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

const DualMarquee = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isPaused, setIsPaused] = useState(false);

  // Top row - Integration services (from your image)
  const topRowServices = [
    { name: "TraceReports", icon: "heroicons:chart-bar", color: "#E53E3E" },
    { name: "Stripe", icon: "heroicons:credit-card", color: "#635BFF" },
    { name: "Howen Video Monitor", icon: "heroicons:video-camera", color: "#E53E3E" },
    { name: "Scheduled reports", icon: "heroicons:calendar", color: "#805AD5" },
    { name: "WirelessLinks (ELD)", icon: "heroicons:signal", color: "#3182CE" },
  ];

  // Bottom row - Additional services
  const bottomRowServices = [
    { name: "EGTS", icon: "heroicons:map", color: "#38A169" },
    { name: "SVG map layer", icon: "heroicons:map-pin", color: "#3182CE" },
    { name: "Geofence visits report", icon: "heroicons:chart-pie", color: "#3182CE" },
    { name: "Places", icon: "heroicons:building-office", color: "#48BB78" },
    { name: "Social distancing", icon: "heroicons:user-group", color: "#3182CE" },
    { name: "iLSP", icon: "heroicons:cog-6-tooth", color: "#4A5568" },
  ];

  // Duplicate for seamless loop
  const topRowDuplicated = [...topRowServices, ...topRowServices, ...topRowServices, ...topRowServices];
  const bottomRowDuplicated = [...bottomRowServices, ...bottomRowServices, ...bottomRowServices, ...bottomRowServices];

  return (
    <section className={`py-12 overflow-hidden w-full ${isTwThemeEnabled ? 'tw-bg border-twNavy-200 dark:bg-twNavy-800 dark:border-twNavy-700' : 'bg-white border-gray-200 dark:bg-slate-900 dark:border-slate-700'}`}>
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-8 px-6">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
            Marketplace & Integrations
          </h2>
          <p className={`text-base ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
            Explore our extensive ecosystem of plugins and integrations
          </p>
        </div>

        <div 
          className="space-y-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Row - Left to Right */}
          <div className="relative w-full">
            {/* Enhanced Gradient Overlays */}
            <div className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r z-20 pointer-events-none ${isTwThemeEnabled ? 'from-white via-white/60 to-transparent dark:from-twNavy-800 dark:via-twNavy-800/60' : 'from-white via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/60'}`}></div>
            <div className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l z-20 pointer-events-none ${isTwThemeEnabled ? 'from-white via-white/60 to-transparent dark:from-twNavy-800 dark:via-twNavy-800/60' : 'from-white via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/60'}`}></div>

            {/* Scrolling Services - Left to Right */}
            <div className={`flex items-center space-x-8 ${isPaused ? 'pause-animation-ltr' : 'animate-marquee-ltr'}`}>
              {topRowDuplicated.map((service, index) => (
                <Link
                  key={`top-${service.name}-${index}`}
                  href={`/marketplace/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  className={`flex items-center space-x-4 flex-shrink-0 px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer group ${isTwThemeEnabled ? 'bg-white hover:bg-white/90 shadow-md hover:shadow-lg dark:bg-twNavy-700 dark:hover:bg-twNavy-600' : 'bg-gray-50 hover:bg-white shadow-md hover:shadow-lg dark:bg-slate-800 dark:hover:bg-slate-700'} border border-gray-200 dark:border-slate-600`}
                >
                  {/* Service Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon 
                      icon={service.icon} 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  
                  {/* Service Name */}
                  <span className={`text-sm font-medium whitespace-nowrap transition-opacity ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova dark:text-twBlue-100' : 'text-gray-800 dark:text-gray-200'} group-hover:opacity-100 opacity-90`}>
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="relative w-full">
            {/* Enhanced Gradient Overlays */}
            <div className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r z-20 pointer-events-none ${isTwThemeEnabled ? 'from-white via-white/60 to-transparent dark:from-twNavy-800 dark:via-twNavy-800/60' : 'from-white via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/60'}`}></div>
            <div className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l z-20 pointer-events-none ${isTwThemeEnabled ? 'from-white via-white/60 to-transparent dark:from-twNavy-800 dark:via-twNavy-800/60' : 'from-white via-white/60 to-transparent dark:from-slate-900 dark:via-slate-900/60'}`}></div>

            {/* Scrolling Services - Right to Left */}
            <div className={`flex items-center space-x-8 ${isPaused ? 'pause-animation-rtl' : 'animate-marquee-rtl'}`}>
              {bottomRowDuplicated.map((service, index) => (
                <Link
                  key={`bottom-${service.name}-${index}`}
                  href={`/marketplace/${service.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  className={`flex items-center space-x-4 flex-shrink-0 px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer group ${isTwThemeEnabled ? 'bg-white hover:bg-white/90 shadow-md hover:shadow-lg dark:bg-twNavy-700 dark:hover:bg-twNavy-600' : 'bg-gray-50 hover:bg-white shadow-md hover:shadow-lg dark:bg-slate-800 dark:hover:bg-slate-700'} border border-gray-200 dark:border-slate-600`}
                >
                  {/* Service Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon 
                      icon={service.icon} 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  
                  {/* Service Name */}
                  <span className={`text-sm font-medium whitespace-nowrap transition-opacity ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova dark:text-twBlue-100' : 'text-gray-800 dark:text-gray-200'} group-hover:opacity-100 opacity-90`}>
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Visit Marketplace Button */}
        <div className="text-center mt-8 px-6">
          <Link href="/marketplace">
            <button className={`px-8 py-3 rounded-lg font-semibold transition-all ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'} shadow-md hover:shadow-lg`}>
              Visit Marketplace
            </button>
          </Link>
        </div>
      </div>

      {/* Custom CSS for Dual Marquee Animation */}
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        @keyframes marquee-rtl {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-marquee-ltr {
          animation: marquee-ltr 35s linear infinite;
          will-change: transform;
        }
        
        .animate-marquee-rtl {
          animation: marquee-rtl 35s linear infinite;
          will-change: transform;
        }
        
        /* Pause animations but keep position */
        .pause-animation-ltr {
          animation: marquee-ltr 35s linear infinite;
          animation-play-state: paused;
          will-change: transform;
        }
        
        .pause-animation-rtl {
          animation: marquee-rtl 35s linear infinite;
          animation-play-state: paused;
          will-change: transform;
        }
        
        /* Smooth transitions */
        .animate-marquee-ltr, .pause-animation-ltr,
        .animate-marquee-rtl, .pause-animation-rtl {
          transition: none;
          display: flex;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default DualMarquee;
