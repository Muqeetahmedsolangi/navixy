"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

// Pre-computed static data - moved outside for maximum performance
const CATEGORIES = [
  "All extensions",
  "GPS asset tracking", 
  "Fleet management",
  "Field service",
  "Administration"
];

// Static extensions data with TW colors hardcoded
const EXTENSIONS = [
    {
      id: "2checkout",
      name: "2Checkout",
      description: "Allow your customers to pay for telematics services with a credit card.",
      icon: "heroicons:credit-card",
      iconBg: "#3BAFF3",
      category: "Administration",
      developer: "GeoTrack",
      configLevel: "Platform",
      price: "Paid",
      tags: ["Payments"]
    },
    {
      id: "access-rights",
      name: "Access rights", 
      description: "Manage access rights to your GPS tracking platform for employees and departments.",
      icon: "heroicons:user-group",
      iconBg: "#7DCF0F",
      category: "Administration",
      developer: "GeoTrack",
      configLevel: "Platform", 
      price: "Free",
      tags: ["Security"]
    },
    {
      id: "activity-log",
      name: "Activity log",
      description: "Keep track of your users' activity on the platform.",
      icon: "heroicons:clipboard-document-list",
      iconBg: "#7DCF0F", 
      category: "Administration",
      developer: "GeoTrack",
      configLevel: "Platform",
      price: "Free",
      tags: ["Monitoring"]
    },
    {
      id: "altotrack",
      name: "Altotrack",
      description: "Stream data from GPS tracking devices to any external server in real-time.",
      icon: "heroicons:signal",
      iconBg: "#0F2D53",
      category: "GPS asset tracking",
      developer: "GeoTrack", 
      configLevel: "Platform",
      price: "Paid",
      tags: ["Integration"]
    },
    {
      id: "armcargo",
      name: "ArmCargo",
      description: "Stream data from GPS tracking devices to any external server in real-time.",
      icon: "heroicons:truck",
      iconBg: "#7DCF0F",
      category: "Fleet management",
      developer: "GeoTrack",
      configLevel: "Platform", 
      price: "Free",
      tags: ["Logistics"]
    },
    {
      id: "axle-load",
      name: "Axle load",
      description: "Improve fleet maintenance by monitoring axle loads of your vehicles",
      icon: "heroicons:scale",
      iconBg: "#0F2D53",
      category: "Fleet management",
      developer: "GeoTrack",
      configLevel: "Platform",
      price: "Paid", 
      tags: ["Maintenance"]
    },
    {
      id: "advanced-tracking",
      name: "Advanced Tracking",
      description: "Enhanced GPS tracking with geofencing and route optimization capabilities.",
      icon: "heroicons:map",
      iconBg: "#3BAFF3",
      category: "GPS asset tracking",
      developer: "GeoTrack",
      configLevel: "Platform",
      price: "Paid",
      tags: ["GPS", "Geofencing"]
    },
    {
      id: "fuel-monitoring",
      name: "Fuel Monitoring",
      description: "Real-time fuel consumption tracking and theft prevention for fleet vehicles.",
      icon: "heroicons:fire",
      iconBg: "#0F2D53",
      category: "Fleet management",
      developer: "GeoTrack",
      configLevel: "Platform",
      price: "Paid",
      tags: ["Fuel", "Monitoring"]
    }
];

const MarketplacePage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All extensions");

  // Optimized filtering with useMemo for performance
  const filteredExtensions = useMemo(() => {
    if (!searchQuery && selectedCategory === "All extensions") {
      return EXTENSIONS; // Return full array immediately
    }
    
    return EXTENSIONS.filter(ext => {
      const matchesSearch = !searchQuery || 
        ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All extensions" || ext.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} transition-colors duration-300`}>
      
      {/* Hero Section */}
      <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} py-16`}>
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
              All extensions
            </h1>
            <p className={`text-xl mb-8 opacity-90 max-w-4xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              Enhance your experience with advanced GPS and telematics tools. Forward data to any third-party software online.
              Leverage ready-to-use plugins to attract more customers and increase their loyalty.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Icon 
                  icon="heroicons:magnifying-glass" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                />
                <input
                  type="text"
                  placeholder="Search extensions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 rounded-xl border-0 shadow-lg text-gray-800 placeholder-gray-400 focus:ring-4 ${isTwThemeEnabled ? 'focus:ring-twBlue-200' : 'focus:ring-blue-200'} focus:outline-none text-lg ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                Categories
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category
                        ? isTwThemeEnabled 
                          ? 'bg-twBlue-500 text-white font-semibold shadow-md' 
                          : 'bg-blue-500 text-white font-semibold shadow-md'
                        : isTwThemeEnabled 
                          ? 'tw-text-secondary hover:bg-twNavy-50 dark:hover:bg-twNavy-700' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                    } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Featured Video Section */}
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-8 mb-8`}>
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className={`text-2xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                      THE GEOTRACK MARKETPLACE
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mt-4 cursor-pointer hover:bg-white/30 transition-colors">
                      <Icon icon="heroicons:play" className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                {/* Mock video timeline */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <span>02:59</span>
                    <div className="flex-1 mx-4 h-1 bg-white/30 rounded-full">
                      <div className="w-1/3 h-full bg-white rounded-full"></div>
                    </div>
                    <div className="flex space-x-2">
                      <Icon icon="heroicons:speaker-wave" className="w-4 h-4" />
                      <Icon icon="heroicons:arrows-pointing-out" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extensions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredExtensions.map((extension) => (
                <Link
                  key={extension.id}
                  href={`/marketplace/${extension.id}`}
                  className="group"
                >
                  <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 hover:bg-twNavy-50 dark:hover:bg-twNavy-700' : 'bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6 transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02]`}>
                    
                    <div className="flex items-start space-x-4">
                      {/* Extension Icon */}
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                        style={{ backgroundColor: extension.iconBg }}
                      >
                        <Icon 
                          icon={extension.icon} 
                          className="w-8 h-8 text-white"
                        />
                      </div>

                      {/* Extension Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`text-xl font-semibold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'} group-hover:${isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600'} transition-colors`}>
                            {extension.name}
                          </h3>
                          <Icon 
                            icon="heroicons:arrow-top-right-on-square" 
                            className={`w-5 h-5 ${isTwThemeEnabled ? 'text-twBlue-400' : 'text-blue-400'} opacity-0 group-hover:opacity-100 transition-opacity`}
                          />
                        </div>
                        
                        <p className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-300'} text-sm leading-relaxed mb-4`}>
                          {extension.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {extension.tags.map((tag) => (
                            <span 
                              key={tag}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-700 dark:bg-twBlue-900 dark:text-twBlue-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Extension Meta */}
                        <div className={`text-xs ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'} space-y-1`}>
                          <div className="flex justify-between">
                            <span>Developer:</span>
                            <span className="font-medium">{extension.developer}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Configuration:</span>
                            <span className="font-medium">{extension.configLevel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price:</span>
                            <span className={`font-medium ${extension.price === 'Free' ? (isTwThemeEnabled ? 'text-twGreen-600' : 'text-green-600') : (isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600')}`}>
                              {extension.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredExtensions.length === 0 && (
              <div className="text-center py-12">
                <Icon 
                  icon="heroicons:magnifying-glass" 
                  className={`w-16 h-16 mx-auto mb-4 ${isTwThemeEnabled ? 'text-twNavy-300' : 'text-gray-300'}`}
                />
                <h3 className={`text-xl font-semibold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  No extensions found
                </h3>
                <p className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
