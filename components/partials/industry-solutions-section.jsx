"use client";

import { Icon } from "@iconify/react";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const IndustrySolutionsSection = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  const industries = [
    {
      id: "logistics",
      title: "Logistics & Transportation",
      description: "Streamline your fleet operations with real-time tracking, route optimization, and fuel management. Monitor delivery performance and ensure on-time arrivals.",
      icon: "heroicons:truck",
      features: [
        "Real-time fleet tracking",
        "Route optimization",
        "Fuel consumption monitoring",
        "Driver behavior analysis"
      ],
      stats: "98% delivery accuracy",
      color: "twBlue"
    },
    {
      id: "construction",
      title: "Construction & Heavy Equipment",
      description: "Track heavy machinery, monitor equipment usage, and prevent theft. Optimize construction site operations with precise location data and usage analytics.",
      icon: "heroicons:wrench-screwdriver",
      features: [
        "Equipment location tracking",
        "Usage time monitoring",
        "Maintenance scheduling",
        "Theft prevention alerts"
      ],
      stats: "30% cost reduction",
      color: "twGreen"
    },
    {
      id: "agriculture",
      title: "Agriculture & Farming",
      description: "Monitor agricultural vehicles and equipment across vast farmlands. Track irrigation systems, harvest operations, and optimize field management.",
      icon: "heroicons:beaker",
      features: [
        "Farm equipment tracking",
        "Irrigation monitoring",
        "Crop field mapping",
        "Weather integration"
      ],
      stats: "25% yield increase",
      color: "twNavy"
    },
    {
      id: "emergency",
      title: "Emergency & Public Safety",
      description: "Ensure rapid response times with precise vehicle tracking. Monitor emergency services, ambulances, and public safety vehicles for optimal coverage.",
      icon: "heroicons:shield-check",
      features: [
        "Emergency vehicle tracking",
        "Response time optimization",
        "Coverage area monitoring",
        "Incident reporting"
      ],
      stats: "40% faster response",
      color: "twBrand"
    }
  ];

  return (
    <section className={`py-12 ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-900' : 'bg-white') : 'bg-white dark:bg-slate-900'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Industry Solutions
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${isTwThemeEnabled ? (isDark ? 'text-twBlue-200' : 'text-twNavy-600') : 'text-slate-600 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            Tailored telematics solutions for every industry. From logistics to agriculture, our platform adapts to your specific needs.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-12">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="lg:w-1/2 space-y-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                  isTwThemeEnabled 
                    ? industry.color === 'twBlue' 
                      ? isDark ? 'bg-twBlue-900/30 text-twBlue-400' : 'bg-twBlue-100 text-twBlue-600'
                      : industry.color === 'twGreen'
                      ? isDark ? 'bg-twGreen-900/30 text-twGreen-400' : 'bg-twGreen-100 text-twGreen-600'
                      : industry.color === 'twNavy'
                      ? isDark ? 'bg-twNavy-700 text-twNavy-300' : 'bg-twNavy-100 text-twNavy-600'
                      : isDark ? 'bg-twBlue-900/30 text-twBlue-400' : 'bg-twBlue-100 text-twBlue-600'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                }`}>
                  <Icon icon={industry.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  {industry.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${isTwThemeEnabled ? (isDark ? 'text-twBlue-100' : 'text-twNavy-600') : 'text-slate-600 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  {industry.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        isTwThemeEnabled 
                          ? industry.color === 'twBlue' ? 'bg-twBlue-500'
                          : industry.color === 'twGreen' ? 'bg-twGreen-500'
                          : industry.color === 'twNavy' ? 'bg-twNavy-500'
                          : 'bg-twBlue-500'
                          : 'bg-blue-500'
                      }`}></div>
                      <span className={`text-xs ${isTwThemeEnabled ? (isDark ? 'text-twBlue-200' : 'text-twNavy-700') : 'text-slate-700 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className={`inline-flex items-center px-3 py-1 rounded-md ${
                  isTwThemeEnabled 
                    ? industry.color === 'twBlue' 
                      ? isDark ? 'bg-twBlue-900/30 text-twBlue-300' : 'bg-twBlue-50 text-twBlue-600'
                      : industry.color === 'twGreen'
                      ? isDark ? 'bg-twGreen-900/30 text-twGreen-300' : 'bg-twGreen-50 text-twGreen-600'
                      : industry.color === 'twNavy'
                      ? isDark ? 'bg-twNavy-700 text-twNavy-200' : 'bg-twNavy-50 text-twNavy-600'
                      : isDark ? 'bg-twBlue-900/30 text-twBlue-300' : 'bg-twBlue-50 text-twBlue-600'
                    : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300'
                }`}>
                  <Icon icon="heroicons:chart-bar" className="w-3 h-3 mr-1" />
                  <span className={`font-semibold text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {industry.stats}
                  </span>
                </div>

                {/* Explore Button */}
                <button className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                  isTwThemeEnabled 
                    ? industry.color === 'twBlue' 
                      ? isDark ? 'bg-twBlue-600 hover:bg-twBlue-500 text-white' : 'bg-twBlue-500 hover:bg-twBlue-600 text-white'
                      : industry.color === 'twGreen'
                      ? isDark ? 'bg-twGreen-600 hover:bg-twGreen-500 text-white' : 'bg-twGreen-500 hover:bg-twGreen-600 text-white'
                      : industry.color === 'twNavy'
                      ? isDark ? 'bg-twNavy-600 hover:bg-twNavy-500 text-white' : 'bg-twNavy-500 hover:bg-twNavy-600 text-white'
                      : isDark ? 'bg-twBlue-600 hover:bg-twBlue-500 text-white' : 'bg-twBlue-500 hover:bg-twBlue-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                } ${isTwThemeEnabled ? 'font-proximaNova' : ''} shadow-lg hover:shadow-xl`}>
                  <span>Explore {industry.title.split(' &')[0]}</span>
                  <Icon icon="heroicons:arrow-right" className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Visual Side */}
              <div className="lg:w-1/2">
                <div className={`relative rounded-xl p-6 h-52 ${isTwThemeEnabled ? (isDark ? 'bg-gray-100 border border-gray-200' : 'bg-gray-50 border border-gray-200') : 'bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700'} shadow-lg overflow-hidden`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`w-full h-full ${
                      isTwThemeEnabled 
                        ? industry.color === 'twBlue' ? 'bg-twBlue-500'
                        : industry.color === 'twGreen' ? 'bg-twGreen-500'
                        : industry.color === 'twNavy' ? 'bg-twNavy-500'
                        : 'bg-twBlue-500'
                        : 'bg-blue-500'
                    }`}></div>
                  </div>

                  {/* Large Industry Icon */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                      isTwThemeEnabled 
                        ? industry.color === 'twBlue' 
                          ? isDark ? 'bg-white text-twBlue-600' : 'bg-white text-twBlue-600'
                          : industry.color === 'twGreen'
                          ? isDark ? 'bg-white text-twGreen-600' : 'bg-white text-twGreen-600'
                          : industry.color === 'twNavy'
                          ? isDark ? 'bg-white text-twNavy-600' : 'bg-white text-twNavy-600'
                          : isDark ? 'bg-white text-twBlue-600' : 'bg-white text-twBlue-600'
                        : 'bg-white text-blue-600'
                    } shadow-lg`}>
                      <Icon icon={industry.icon} className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3">
                    <div className={`w-2 h-2 rounded-full ${
                      isTwThemeEnabled 
                        ? industry.color === 'twBlue' ? 'bg-twBlue-500'
                        : industry.color === 'twGreen' ? 'bg-twGreen-500'
                        : industry.color === 'twNavy' ? 'bg-twNavy-500'
                        : 'bg-twBlue-500'
                        : 'bg-blue-500'
                    } opacity-30`}></div>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-3 h-3 rounded ${
                      isTwThemeEnabled 
                        ? industry.color === 'twBlue' ? 'bg-twBlue-500'
                        : industry.color === 'twGreen' ? 'bg-twGreen-500'
                        : industry.color === 'twNavy' ? 'bg-twNavy-500'
                        : 'bg-twBlue-500'
                        : 'bg-blue-500'
                    } opacity-20`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
