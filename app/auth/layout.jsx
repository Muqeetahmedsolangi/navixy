"use client";

import { useEffect } from "react";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const AuthLayout = ({ children }) => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  useEffect(() => {
    // Hide scrollbars on auth pages
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="h-screen flex overflow-hidden relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient */}
        <div className={`absolute inset-0 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twNavy-900 via-twBlue-800 to-twNavy-800' 
          : 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'
        }`}></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/25 to-blue-500/25 rounded-full blur-2xl animate-ping" style={{ animationDuration: '8s' }}></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="w-full h-full">
            <defs>
              <pattern id="tech-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="0" cy="0" r="1" fill="white" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* GPS Satellites */}
          <div className="absolute top-20 left-20 w-8 h-8 text-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.5 7L18 8.5L13.5 10L12 15L10.5 10L6 8.5L10.5 7L12 2Z"/>
            </svg>
          </div>
          
          <div className="absolute top-40 right-32 w-6 h-6 text-white/15 animate-pulse" style={{ animationDuration: '4s' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.5 7L18 8.5L13.5 10L12 15L10.5 10L6 8.5L10.5 7L12 2Z"/>
            </svg>
          </div>
          
          {/* Vehicle Tracking Lines */}
          <div className="absolute top-1/3 left-1/5 w-80 h-40 opacity-20">
            <svg viewBox="0 0 300 150" className="w-full h-full">
              <path d="M20,75 Q75,25 150,75 T280,75" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" values="0;12" dur="3s" repeatCount="indefinite"/>
              </path>
              <circle cx="20" cy="75" r="4" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="280" cy="75" r="4" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          
          {/* Geometric Shapes */}
          <div className={`absolute bottom-1/3 left-1/4 w-16 h-16 border border-white/20 ${isTwThemeEnabled ? 'bg-twBlue-500/10' : 'bg-blue-500/10'} rotate-45 animate-spin`} style={{ animationDuration: '20s' }}></div>
          <div className={`absolute top-2/3 right-1/3 w-12 h-12 border-2 border-white/15 ${isTwThemeEnabled ? 'bg-twGreen-500/10' : 'bg-green-500/10'} rounded-full animate-ping`} style={{ animationDuration: '5s' }}></div>
        </div>
      </div>

      {/* Left Side - Branding & Features (60%) */}
      <div className="w-3/5 relative z-10 flex flex-col justify-center p-6 text-white overflow-y-auto">
        
        {/* Logo & Brand */}
        <div className="mb-6">
          <img
            src="/assets/new-images/LOGO.png"
            alt="GeoTrack Logo"
            className="h-10 w-auto mb-4 drop-shadow-2xl"
          />
          <h1 className={`text-white text-2xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend' : ''} drop-shadow-lg`}>
            Advanced GPS
            <span className={`block ${isTwThemeEnabled ? 'text-twBlue-300' : 'text-blue-300'}`}>
              Tracking Platform
            </span>
          </h1>
          <p className={`text-base text-white/80 max-w-md leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            Enterprise-grade telematics solution for fleet management and real-time monitoring.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-3 max-w-lg mb-6">
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className={`w-8 h-8 ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className={`font-semibold text-sm mb-1 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Real-time Tracking</h3>
            <p className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Live GPS monitoring</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className={`w-8 h-8 ${isTwThemeEnabled ? 'bg-twGreen-500' : 'bg-green-500'} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className={`font-semibold text-sm mb-1 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Fleet Analytics</h3>
            <p className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Smart insights</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className={`w-8 h-8 ${isTwThemeEnabled ? 'bg-twBrand-500' : 'bg-purple-500'} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className={`font-semibold text-sm mb-1 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Geofencing</h3>
            <p className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Smart boundaries</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className={`w-8 h-8 ${isTwThemeEnabled ? 'bg-twNavy-500' : 'bg-indigo-500'} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
            </div>
            <h3 className={`font-semibold text-sm mb-1 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Mobile Access</h3>
            <p className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>iOS & Android</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-sm">
          <div className="text-center">
            <div className={`text-xl font-bold ${isTwThemeEnabled ? 'text-twBlue-300 font-lexend' : 'text-blue-300'}`}>850K+</div>
            <div className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Active Vehicles</div>
          </div>
          <div className="text-center">
            <div className={`text-xl font-bold ${isTwThemeEnabled ? 'text-twGreen-300 font-lexend' : 'text-green-300'}`}>99.9%</div>
            <div className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Uptime</div>
          </div>
          <div className="text-center">
            <div className={`text-xl font-bold ${isTwThemeEnabled ? 'text-twBrand-300 font-lexend' : 'text-purple-300'}`}>130+</div>
            <div className={`text-white/70 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Countries</div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms (40%) */}
      <div className="w-2/5 relative z-10">
        
        {/* Glassmorphism Container */}
        <div className="h-full bg-white/10 backdrop-blur-xl border-l border-white/20 flex items-center justify-center p-4">
          <div className="w-full max-w-sm max-h-full overflow-y-auto">
            
            {/* Inner Glass Card */}
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 rounded-2xl p-6 shadow-2xl">
              {children}
            </div>
            
          </div>
        </div>
        
        {/* Side Accent Line */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${isTwThemeEnabled 
          ? 'bg-gradient-to-b from-twBlue-400 via-twBrand-400 to-twGreen-400' 
          : 'bg-gradient-to-b from-blue-400 via-purple-400 to-green-400'
        }`}></div>
      </div>
    </div>
  );
};

export default AuthLayout;