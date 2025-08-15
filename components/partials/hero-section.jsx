"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const HeroSection = () => {
  const { isTwThemeEnabled, twButton } = useTwTheme();
  const [isDark] = useDarkMode();

  return (
    <section 
      className={`relative ${isTwThemeEnabled ? 'bg-gradient-to-br from-twNavy-900 via-twNavy-800 to-twBlue-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900'}`} 
      style={{ height: '130vh' }}
    >
      {/* Very Subtle Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Vertical Lines - Very Subtle Grid */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div 
              key={`v-${i}`} 
              className={`absolute h-full border-l ${isTwThemeEnabled ? 'border-twBlue-500/15' : 'border-blue-400/5'}`}
              style={{ 
                left: `${(i / 30) * 100}%`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Horizontal Lines - Very Subtle Grid */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={`h-${i}`} 
              className={`absolute w-full border-t ${isTwThemeEnabled ? 'border-twBlue-500/5' : 'border-blue-400/5'}`}
              style={{ 
                top: `${(i / 20) * 100}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Minimal overlay for text contrast */}
      <div className="absolute inset-0 bg-black/10 z-5"></div>

      {/* Tech/GPS Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Subtle gradient bar for maps/tech feel */}
        <div className={`w-full h-16 ${isTwThemeEnabled ? 'bg-gradient-to-r from-twNavy-800 via-twBlue-500 to-twNavy-800' : 'bg-gradient-to-r from-slate-800 via-blue-500 to-slate-800'} opacity-60`}>
          {/* Optional tech dots pattern */}
          <div className="w-full h-full flex items-center justify-center space-x-2 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1 h-1 rounded-full ${isTwThemeEnabled ? 'bg-twBlue-300' : 'bg-blue-300'}`}
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 3s ease-in-out infinite'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Image SVG - Dashboard Mockups at Bottom */}
      <div className="absolute bottom-[-60px] left-0 right-0 z-15">
        <div className="w-full" style={{ height: '150vh' }}>
          <img 
            src="/assets/new-images/hero-image.svg" 
            alt="Telematics Dashboard"
            className="w-full h-full object-contain object-bottom opacity-85"
            style={{ transform: 'translateY(0)', bottom: '0' }}
          />
        </div>
      </div>

      {/* Content - Centered in Screen */}
      <div className="relative z-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Main Heading - Smaller Text */}
            <div className="space-y-4">
              <h1 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight ${isTwThemeEnabled ? 'font-lexend' : ''} drop-shadow-2xl`}>
                Unlock telematics.{" "}
                <span className={`${isTwThemeEnabled ? 'text-twBlue-400' : 'text-blue-400'} underline decoration-2 underline-offset-4`}>
                  Keep moving
                </span>
              </h1>
            </div>

            {/* Subtitle - Smaller Text */}
            <p className={`text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova' : ''} drop-shadow-lg`}>
              Empowering developers and enterprises to rapidly build, customize,
              and scale GPS and telematics applications.
            </p>

            {/* CTA Button - Smaller */}
            <div className="pt-6">
              <Button 
                text="Get started" 
                link="/get-started"
                className={`px-8 py-3 text-base font-semibold rounded-lg transition-all shadow-xl ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-400 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-400 text-white'}`}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
