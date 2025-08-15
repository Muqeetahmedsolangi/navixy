"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const AssetMonitoringSlider = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [activeOption, setActiveOption] = useState(0);

  // Auto-loop through options
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOption((prev) => (prev + 1) % options.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const options = [
    {
      id: "online-tracking",
      title: "Online tracking",
      description: "Real-time GPS location tracking with live updates and historical route data.",
      icon: "heroicons:map-pin",
      mockup: {
        title: "Live Vehicle Tracking",
        features: [
          "Real-time GPS positioning",
          "Live route monitoring", 
          "Historical track playback",
          "Multi-device tracking"
        ]
      }
    },
    {
      id: "advanced-telemetry",
      title: "Advanced telemetry",
      description: "Comprehensive vehicle data monitoring including fuel, temperature, and engine diagnostics.",
      icon: "heroicons:chart-bar",
      mockup: {
        title: "Telemetry Dashboard",
        features: [
          "Fuel consumption monitoring",
          "Engine temperature tracking",
          "RPM and speed analytics",
          "Diagnostic alerts"
        ]
      }
    },
    {
      id: "geofencing",
      title: "Geofencing and POI",
      description: "Create virtual boundaries and points of interest with intelligent alerts.",
      icon: "heroicons:map",
      mockup: {
        title: "Geofence Management",
        features: [
          "Custom boundary creation",
          "Entry/exit notifications",
          "POI management",
          "Zone-based reports"
        ]
      }
    },
    {
      id: "alerts-reports",
      title: "Alerts and reports", 
      description: "Automated notifications and comprehensive reporting for fleet management.",
      icon: "heroicons:bell",
      mockup: {
        title: "Alert System",
        features: [
          "Real-time notifications",
          "Custom report generation",
          "Scheduled alerts",
          "Data export options"
        ]
      }
    },
  ];

  return (
    <section className={`py-12 ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-900' : 'bg-twBrand-ghost') : 'bg-gray-50 dark:bg-slate-900'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Asset monitoring: more than GPS location
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${isTwThemeEnabled ? (isDark ? 'text-twBlue-200' : 'text-twNavy-600') : 'text-slate-600 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            Enjoy profound visibility. Protect vehicles, cargo and equipment from theft or unauthorized use.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left Side - Mockup */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className={`relative rounded-xl p-6 h-80 ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-800 border border-twBlue-500/20' : 'bg-white border border-twNavy-200') : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'} shadow-lg`}>
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  {options[activeOption].mockup.title}
                </h3>
                <div className={`w-2 h-2 rounded-full ${isTwThemeEnabled ? 'bg-twGreen-500' : 'bg-green-500'}`}></div>
              </div>

              {/* Mockup Content */}
              <div className="space-y-3 mb-4">
                {options[activeOption].mockup.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}></div>
                    <span className={`text-sm ${isTwThemeEnabled ? (isDark ? 'text-twBlue-100' : 'text-twNavy-700') : 'text-slate-700 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mock Chart/Graph */}
              <div className="space-y-2">
                <div className={`h-1.5 rounded-full ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-700' : 'bg-twNavy-100') : 'bg-blue-200'} relative overflow-hidden`}>
                  <div 
                    className={`h-full rounded-full ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} transition-all duration-1000`}
                    style={{ width: `${70 + (activeOption * 5)}%` }}
                  ></div>
                </div>
                <div className={`h-1.5 rounded-full ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-700' : 'bg-twNavy-100') : 'bg-green-200'} relative overflow-hidden`}>
                  <div 
                    className={`h-full rounded-full ${isTwThemeEnabled ? 'bg-twGreen-500' : 'bg-green-500'} transition-all duration-1000`}
                    style={{ width: `${50 + (activeOption * 8)}%` }}
                  ></div>
                </div>
                <div className={`h-1.5 rounded-full ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-700' : 'bg-twNavy-100') : 'bg-yellow-200'} relative overflow-hidden`}>
                  <div 
                    className={`h-full rounded-full ${isTwThemeEnabled ? 'bg-twBrand-hoverBlue' : 'bg-yellow-500'} transition-all duration-1000`}
                    style={{ width: `${60 + (activeOption * 6)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Options */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-3">
            {options.map((option, index) => (
              <div
                key={option.id}
                onClick={() => setActiveOption(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeOption === index
                    ? isTwThemeEnabled 
                      ? isDark 
                        ? 'bg-twNavy-700 border border-twBlue-500' 
                        : 'bg-twBlue-50 border border-twBlue-500'
                      : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-500'
                    : isTwThemeEnabled
                      ? isDark
                        ? 'bg-twNavy-800/30 border border-transparent hover:border-twBlue-500/30'
                        : 'bg-white border border-twNavy-100 hover:border-twBlue-200'
                      : 'bg-white dark:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-600'
                } shadow-sm hover:shadow-md`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center ${
                    activeOption === index
                      ? isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'
                      : isTwThemeEnabled 
                        ? isDark ? 'bg-twNavy-600' : 'bg-twNavy-100'
                        : 'bg-slate-100 dark:bg-slate-700'
                  }`}>
                    <Icon 
                      icon={option.icon} 
                      className={`w-4 h-4 ${
                        activeOption === index 
                          ? 'text-white' 
                          : isTwThemeEnabled 
                            ? isDark ? 'text-twBlue-400' : 'text-twNavy-600'
                            : 'text-slate-600 dark:text-slate-300'
                      }`} 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm font-semibold mb-1 ${
                      activeOption === index
                        ? isTwThemeEnabled 
                          ? isDark ? 'text-white' : 'text-twNavy-800'
                          : 'text-slate-900 dark:text-white'
                        : isTwThemeEnabled
                          ? isDark ? 'text-twBlue-200' : 'text-twNavy-700'
                          : 'text-slate-700 dark:text-slate-300'
                    } ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                      {option.title}
                    </h3>
                    <p className={`text-xs leading-tight ${
                      activeOption === index
                        ? isTwThemeEnabled
                          ? isDark ? 'text-twBlue-100' : 'text-twNavy-600'
                          : 'text-slate-600 dark:text-slate-300'
                        : isTwThemeEnabled
                          ? isDark ? 'text-twBlue-300' : 'text-twNavy-500'
                          : 'text-slate-500 dark:text-slate-400'
                    } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetMonitoringSlider;
