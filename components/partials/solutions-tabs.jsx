"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";

const SolutionsTabs = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [activeTab, setActiveTab] = useState("vehicle-telemetry");

  const tabs = [
    {
      id: "location-tracking",
      title: "Location tracking",
      icon: "heroicons:map-pin",
      content: {
        title: "Advanced GPS Location Tracking",
        description: "Real-time GPS tracking with precise location data, geofencing capabilities, and comprehensive route optimization. Monitor your assets 24/7 with industry-leading accuracy and reliability.",
        features: [
          "Real-time GPS positioning",
          "Geofencing and alerts",
          "Route optimization",
          "Historical tracking data"
        ],
        image: "/assets/images/solutions/location-tracking.png"
      }
    },
    {
      id: "vehicle-telemetry",
      title: "Vehicle telemetry",
      icon: "heroicons:truck",
      content: {
        title: "Leverage advanced telemetry with real-time visualization to optimize fleet performance and reduce risks",
        description: "Improve eco-driving, enhance safety with video telematics and ADAS, streamline maintenance, and prevent fuel fraud.",
        features: [
          "Speeding penalty points",
          "Harsh driving",
          "Excessive idling",
          "How service work"
        ],
        image: "/assets/images/solutions/vehicle-telemetry.png"
      }
    },
    {
      id: "workforce-management",
      title: "Workforce management",
      icon: "heroicons:users",
      content: {
        title: "Complete Workforce Management Solution",
        description: "Optimize your team productivity with advanced workforce tracking, task management, and performance analytics. Streamline operations and improve efficiency across your organization.",
        features: [
          "Employee tracking",
          "Task assignment",
          "Time management",
          "Performance analytics"
        ],
        image: "/assets/images/solutions/workforce.png"
      }
    },
    {
      id: "data-solutions",
      title: "Data solutions",
      icon: "heroicons:chart-bar",
      content: {
        title: "Comprehensive Data Analytics Platform",
        description: "Transform raw telematics data into actionable insights with our advanced analytics platform. Make data-driven decisions to optimize your operations and reduce costs.",
        features: [
          "Advanced analytics",
          "Custom reports",
          "Data visualization",
          "Business intelligence"
        ],
        image: "/assets/images/solutions/data-solutions.png"
      }
    }
  ];

  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className={`py-20 ${isTwThemeEnabled ? 'tw-bg' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
            Build innovative GPS and telematics solutions
          </h2>
          <p className={`text-lg md:text-xl max-w-5xl mx-auto leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
            Navixy simplifies the creation and scaling of high-performance GPS and telematics applications, equipping 
            integrators and developers with powerful solutions and tools to tackle unique business challenges.
          </p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Vertical Tabs - Left Side */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                    activeTab === tab.id
                      ? isTwThemeEnabled 
                        ? 'bg-twBlue-500 text-white' 
                        : 'bg-blue-500 text-white'
                      : isTwThemeEnabled
                        ? 'bg-twBrand-ghost hover:bg-twBlue-100 tw-text-primary hover:tw-text-primary'
                        : 'bg-gray-50 hover:bg-gray-100 text-slate-700 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon 
                    icon={tab.icon} 
                    className={`w-5 h-5 ${
                      activeTab === tab.id 
                        ? 'text-white' 
                        : isTwThemeEnabled 
                          ? 'tw-text-secondary' 
                          : 'text-slate-500'
                    }`} 
                  />
                  <span className={`font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area - Right Side */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className={`text-2xl md:text-3xl font-bold leading-tight ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                  {activeTabContent.content.title}
                </h3>
                
                <p className={`text-lg leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                  {activeTabContent.content.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {activeTabContent.content.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}></div>
                      <span className={`${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="pt-4">
                  <Button 
                    text="Learn more" 
                    className={`px-6 py-3 font-semibold rounded-lg transition-all ${isTwThemeEnabled ? 'text-twBlue-600 hover:text-twBlue-700 bg-transparent border border-twBlue-600 hover:border-twBlue-700 font-proximaNova' : 'text-blue-600 hover:text-blue-700 bg-transparent border border-blue-600 hover:border-blue-700'}`}
                  />
                </div>
              </div>

              {/* Dashboard/Image */}
              <div className="relative">
                {/* Dashboard Mockup */}
                <div className={`rounded-xl shadow-2xl overflow-hidden ${isTwThemeEnabled ? 'bg-white border border-twNavy-100' : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600'}`}>
                  
                  {/* Dashboard Header */}
                  <div className={`p-4 border-b ${isTwThemeEnabled ? 'border-twNavy-100 bg-twBrand-ghost' : 'border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700'}`}>
                    <div className="flex items-center justify-between">
                      <h4 className={`font-semibold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                        {activeTabContent.title} Dashboard
                      </h4>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Main Content Area */}
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg ${isTwThemeEnabled ? 'bg-twBrand-ghost' : 'bg-gray-50 dark:bg-slate-700'}`}>
                        <h5 className={`text-sm font-semibold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                          How careful are your drivers?
                        </h5>
                        <p className={`text-xs ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-400'}`}>
                          Track driver behavior and safety metrics in real-time
                        </p>
                      </div>

                      {/* Feature Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        {activeTabContent.content.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className={`p-3 rounded-lg text-center ${isTwThemeEnabled ? 'bg-twBlue-50' : 'bg-blue-50 dark:bg-slate-700'}`}>
                            <div className={`w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}>
                              <Icon icon="heroicons:chart-bar" className="w-4 h-4 text-white" />
                            </div>
                            <p className={`text-xs font-medium ${isTwThemeEnabled ? 'font-proximaNova tw-text-primary' : 'text-slate-700 dark:text-slate-300'}`}>
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Driving Score */}
                      <div className={`p-4 rounded-lg ${isTwThemeEnabled ? 'bg-twBrand-ghost' : 'bg-gray-50 dark:bg-slate-700'}`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm font-medium ${isTwThemeEnabled ? 'font-proximaNova tw-text-primary' : 'text-slate-700 dark:text-slate-300'}`}>
                            Driving score
                          </span>
                          <span className={`text-lg font-bold ${isTwThemeEnabled ? 'font-lexend text-twGreen-500' : 'text-green-500'}`}>
                            85%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${isTwThemeEnabled ? 'bg-twNavy-100' : 'bg-gray-200 dark:bg-slate-600'}`}>
                          <div className={`h-2 rounded-full w-4/5 ${isTwThemeEnabled ? 'bg-twGreen-500' : 'bg-green-500'}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
