"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const MegaNavbar = () => {
  const { isTwThemeEnabled, toggleTwTheme } = useTwTheme();
  const [isDark, setDarkMode] = useDarkMode();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover handlers for dropdowns
  const handleMouseEnter = (dropdown) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent flickering
    setHoverTimeout(timeout);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Navigation Menu Data
  const navigationData = {
    platform: {
      title: "Platform",
      sections: [
        {
          title: "Core Features",
          links: [
            { name: "GPS Tracking", href: "/platform/gps-tracking", description: "Real-time vehicle and asset tracking" },
            { name: "Fleet Management", href: "/platform/fleet-management", description: "Comprehensive fleet operations" },
            { name: "Workforce Management", href: "/platform/workforce", description: "Employee tracking and management" },
            { name: "Admin Panel", href: "/platform/admin", description: "Complete control dashboard" },
          ]
        },
        {
          title: "Applications",
          links: [
            { name: "Mobile Apps", href: "/platform/mobile", description: "iOS and Android applications" },
            { name: "Web Dashboard", href: "/platform/dashboard", description: "Browser-based interface" },
            { name: "API Integration", href: "/platform/api", description: "Developer tools and APIs" },
            { name: "White Label", href: "/platform/white-label", description: "Customizable solutions" },
          ]
        },
        {
          title: "Watch Demo",
          type: "video",
          content: {
            title: "See Navixy in Action",
            description: "Watch our 2-minute platform overview",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            thumbnail: "/assets/new-images/hero-image.svg"
          }
        }
      ]
    },
    solutions: {
      title: "Solutions",
      sections: [
        {
          title: "By Industry",
          links: [
            { name: "Logistics & Delivery", href: "/solutions/logistics", description: "Optimize delivery routes" },
            { name: "Public Transportation", href: "/solutions/public-transport", description: "Bus and transit systems" },
            { name: "Emergency Services", href: "/solutions/emergency", description: "First responder tracking" },
            { name: "Construction", href: "/solutions/construction", description: "Equipment and site management" },
          ]
        },
        {
          title: "By Use Case",
          links: [
            { name: "Asset Tracking", href: "/solutions/asset-tracking", description: "Monitor valuable equipment" },
            { name: "Driver Behavior", href: "/solutions/driver-behavior", description: "Safety and compliance" },
            { name: "Fuel Management", href: "/solutions/fuel", description: "Reduce fuel costs" },
            { name: "Maintenance", href: "/solutions/maintenance", description: "Preventive maintenance" },
          ]
        },
        {
          title: "Special Solutions",
          links: [
            { name: "Cold Chain", href: "/solutions/cold-chain", description: "Temperature monitoring" },
            { name: "Personal Tracking", href: "/solutions/personal", description: "Individual safety" },
            { name: "Pet Tracking", href: "/solutions/pets", description: "Animal monitoring" },
            { name: "Cargo Security", href: "/solutions/cargo", description: "Shipment protection" },
          ]
        }
      ]
    },
    resources: {
      title: "Resources",
      sections: [
        {
          title: "Documentation",
          links: [
            { name: "API Documentation", href: "/docs/api", description: "Complete API reference" },
            { name: "User Guides", href: "/docs/guides", description: "Step-by-step tutorials" },
            { name: "Integration Guide", href: "/docs/integration", description: "Setup instructions" },
            { name: "SDK Downloads", href: "/docs/sdk", description: "Development kits" },
          ]
        },
        {
          title: "Support",
          links: [
            { name: "Help Center", href: "/support/help", description: "Knowledge base" },
            { name: "Contact Support", href: "/support/contact", description: "Get technical help" },
            { name: "System Status", href: "/support/status", description: "Service monitoring" },
            { name: "Community Forum", href: "/support/forum", description: "User discussions" },
          ]
        },
        {
          title: "Learn",
          links: [
            { name: "Blog", href: "/blog", description: "Latest news and insights" },
            { name: "Case Studies", href: "/resources/cases", description: "Customer success stories" },
            { name: "Webinars", href: "/resources/webinars", description: "Educational sessions" },
            { name: "White Papers", href: "/resources/papers", description: "Industry research" },
          ]
        }
      ]
    }
  };

  return (
    <nav 
      className={`sticky top-0 z-50 border-b backdrop-blur-sm transition-all duration-300 ${
        isTwThemeEnabled 
          ? 'bg-white/95 border-twNavy-200 text-twNavy-700' 
          : 'bg-white/95 border-gray-200 text-gray-900'
      } dark:bg-slate-900/95 dark:border-slate-700 dark:text-white`}
      ref={dropdownRef}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'
            }`}>
              <Icon icon="heroicons:map" className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold ${
              isTwThemeEnabled ? 'font-lexend text-twNavy-700' : 'text-gray-900'
            } dark:text-white`}>
              Navixy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('platform')}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  activeDropdown === 'platform'
                    ? (isTwThemeEnabled ? 'bg-twBlue-50 text-twNavy-700' : 'bg-blue-50 text-blue-700')
                    : (isTwThemeEnabled ? 'text-twNavy-600 hover:text-twNavy-700 hover:bg-twBlue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')
                } dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700`}
              >
                <span className={`font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Platform</span>
                <Icon 
                  icon="heroicons:chevron-down" 
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'platform' ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  activeDropdown === 'solutions'
                    ? (isTwThemeEnabled ? 'bg-twBlue-50 text-twNavy-700' : 'bg-blue-50 text-blue-700')
                    : (isTwThemeEnabled ? 'text-twNavy-600 hover:text-twNavy-700 hover:bg-twBlue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')
                } dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700`}
              >
                <span className={`font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Solutions</span>
                <Icon 
                  icon="heroicons:chevron-down" 
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  activeDropdown === 'resources'
                    ? (isTwThemeEnabled ? 'bg-twBlue-50 text-twNavy-700' : 'bg-blue-50 text-blue-700')
                    : (isTwThemeEnabled ? 'text-twNavy-600 hover:text-twNavy-700 hover:bg-twBlue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50')
                } dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700`}
              >
                <span className={`font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>Resources</span>
                <Icon 
                  icon="heroicons:chevron-down" 
                  className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>

            {/* Direct Links */}
            <Link 
              href="/pricing" 
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isTwThemeEnabled 
                  ? 'text-twNavy-600 hover:text-twNavy-700 hover:bg-twBlue-50 font-proximaNova' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              } dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700`}
            >
              Pricing
            </Link>
            
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                isTwThemeEnabled 
                  ? 'text-twNavy-600 hover:text-twNavy-700 hover:bg-twBlue-50 font-proximaNova' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              } dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700`}
            >
              About
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!isDark)}
              className={`p-2 rounded-lg transition-colors ${
                isTwThemeEnabled 
                  ? 'text-twNavy-600 hover:bg-twBlue-50' 
                  : 'text-gray-600 hover:bg-gray-100'
              } dark:text-gray-300 dark:hover:bg-slate-700`}
              title="Toggle dark mode"
            >
              <Icon icon={isDark ? "heroicons:sun" : "heroicons:moon"} className="w-5 h-5" />
            </button>

            {/* TW Theme Toggle */}
            <button
              onClick={toggleTwTheme}
              className={`p-2 rounded-lg transition-colors ${
                isTwThemeEnabled 
                  ? 'bg-twBlue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              } dark:text-gray-300 dark:hover:bg-slate-700`}
              title="Toggle TW theme"
            >
              <Icon icon="heroicons:swatch" className="w-5 h-5" />
            </button>

            {/* Login */}
            <Link 
              href="/login"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isTwThemeEnabled 
                  ? 'text-twNavy-600 hover:text-twNavy-700 hover:bg-twBlue-50 font-proximaNova' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              } dark:text-gray-300 dark:hover:text-white`}
            >
              Login
            </Link>

            {/* Get Started Button */}
            <Button
              text="Get started"
              className={`px-6 py-2 font-semibold rounded-lg transition-all ${
                isTwThemeEnabled 
                  ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <Icon icon={isMobileMenuOpen ? "heroicons:x-mark" : "heroicons:bars-3"} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-slate-700">
            <div className="space-y-2">
              <Link href="/platform" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Platform</Link>
              <Link href="/solutions" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Solutions</Link>
              <Link href="/resources" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Resources</Link>
              <Link href="/pricing" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Pricing</Link>
              <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">About</Link>
              <hr className="my-4 border-gray-200 dark:border-slate-700" />
              <Link href="/login" className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Login</Link>
              <Button text="Get started" className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Mega Menu Dropdowns */}
      {activeDropdown && navigationData[activeDropdown] && (
        <div 
          className="absolute left-0 right-0 top-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-xl"
          onMouseEnter={() => {
            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
            }
          }}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {navigationData[activeDropdown].sections.map((section, index) => (
                <div key={index}>
                  {section.type === 'video' ? (
                    // Video Section
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6">
                      <h3 className={`text-sm font-semibold mb-4 ${
                        isTwThemeEnabled 
                          ? 'text-twNavy-700 font-lexend' 
                          : 'text-gray-900'
                      } dark:text-white uppercase tracking-wide`}>
                        {section.title}
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                          <div className="aspect-video bg-gray-900 relative">
                            <img 
                              src={section.content.thumbnail}
                              alt="Video thumbnail"
                              className="w-full h-full object-cover opacity-70"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110 ${
                                isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600' : 'bg-blue-500 hover:bg-blue-600'
                              } text-white shadow-lg`}>
                                <Icon icon="heroicons:play" className="w-6 h-6 ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className={`font-semibold mb-2 ${
                            isTwThemeEnabled 
                              ? 'text-twNavy-700 font-proximaNova' 
                              : 'text-gray-900'
                          } dark:text-white`}>
                            {section.content.title}
                          </h4>
                          <p className={`text-sm ${
                            isTwThemeEnabled 
                              ? 'text-twNavy-500 font-proximaNova' 
                              : 'text-gray-600'
                          } dark:text-gray-400`}>
                            {section.content.description}
                          </p>
                        </div>
                        
                        <button className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                          isTwThemeEnabled 
                            ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' 
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}>
                          Watch Demo
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Regular Links Section
                    <div>
                      <h3 className={`text-sm font-semibold mb-4 ${
                        isTwThemeEnabled 
                          ? 'text-twNavy-700 font-lexend' 
                          : 'text-gray-900'
                      } dark:text-white uppercase tracking-wide`}>
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link 
                              href={link.href}
                              className="block group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className={`font-medium mb-1 group-hover:text-blue-600 transition-colors ${
                                isTwThemeEnabled 
                                  ? 'text-twNavy-700 font-proximaNova' 
                                  : 'text-gray-900'
                              } dark:text-white`}>
                                {link.name}
                              </div>
                              <div className={`text-sm ${
                                isTwThemeEnabled 
                                  ? 'text-twNavy-500 font-proximaNova' 
                                  : 'text-gray-600'
                              } dark:text-gray-400`}>
                                {link.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MegaNavbar;
