"use client";

import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

// Pre-computed static data for maximum performance
const EXTENSION_DATA = {
      "2checkout": {
        name: "2Checkout",
        description: "Allow your customers to pay for telematics services with a credit card.",
        fullDescription: "GeoTrack integrated with 2Checkout, a leading global eCommerce and Payment processor, to allow your customers to pay for telematics services online using a credit/debit card. All the transactions can be performed right in your telematics service account in the Balance mode.",
        icon: "heroicons:credit-card",
        iconBg: "#3BAFF3",
        category: "Administration",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Paid",
        tags: ["Payments"],
        features: [
          "Speed up payments",
          "Exclude the entry error when accepting and crediting payments",
          "Turn on one-time payments",
          "Turn on auto payments"
        ],
        gettingStarted: [
          "Install the 2Checkout extension from the marketplace",
          "Configure your merchant account settings",
          "Set up payment options for your customers",
          "Test the payment flow in sandbox mode",
          "Go live with real transactions"
        ]
      },
      "access-rights": {
        name: "Access rights",
        description: "Manage access rights to your GPS tracking platform for employees and departments.",
        fullDescription: "Comprehensive access control system that allows you to manage user permissions across your GPS tracking platform. Control what features and data each user can access based on their role and department.",
        icon: "heroicons:user-group",
        iconBg: "#7DCF0F",
        category: "Administration",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Free",
        tags: ["Security"],
        features: [
          "Role-based access control",
          "Department-level permissions",
          "Feature-specific restrictions",
          "User activity monitoring"
        ],
        gettingStarted: [
          "Enable the Access Rights extension",
          "Define user roles and permissions",
          "Assign users to departments",
          "Configure feature access levels",
          "Monitor user activities"
        ]
      },
      "activity-log": {
        name: "Activity log",
        description: "Keep track of your users' activity on the platform.",
        fullDescription: "Comprehensive activity logging system that tracks all user actions on your GPS tracking platform. Monitor user behavior, detect suspicious activities, and maintain audit trails for compliance.",
        icon: "heroicons:clipboard-document-list",
        iconBg: "#7DCF0F",
        category: "Administration",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Free",
        tags: ["Monitoring"],
        features: [
          "Real-time activity tracking",
          "Detailed audit logs",
          "User behavior analytics",
          "Security monitoring"
        ],
        gettingStarted: [
          "Enable activity logging",
          "Configure logging levels",
          "Set up monitoring alerts",
          "Review activity reports",
          "Export logs for compliance"
        ]
      },
      "altotrack": {
        name: "Altotrack",
        description: "Stream data from GPS tracking devices to any external server in real-time.",
        fullDescription: "Advanced data streaming solution that allows real-time transmission of GPS tracking data to external servers. Perfect for integration with third-party systems and custom applications.",
        icon: "heroicons:signal",
        iconBg: "#0F2D53",
        category: "GPS asset tracking",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Paid",
        tags: ["Integration"],
        features: [
          "Real-time data streaming",
          "Custom API endpoints",
          "Data transformation",
          "Error handling and retry logic"
        ],
        gettingStarted: [
          "Configure external server endpoints",
          "Set up data mapping",
          "Test connection and data flow",
          "Monitor streaming performance",
          "Handle errors and retries"
        ]
      },
      "armcargo": {
        name: "ArmCargo",
        description: "Stream data from GPS tracking devices to any external server in real-time.",
        fullDescription: "Specialized cargo tracking and logistics management system. Designed for transportation companies to optimize their cargo operations and improve delivery efficiency.",
        icon: "heroicons:truck",
        iconBg: "#7DCF0F",
        category: "Fleet management",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Free",
        tags: ["Logistics"],
        features: [
          "Cargo tracking",
          "Route optimization",
          "Delivery management",
          "Performance analytics"
        ],
        gettingStarted: [
          "Set up cargo tracking",
          "Configure delivery routes",
          "Monitor cargo status",
          "Generate delivery reports",
          "Optimize logistics operations"
        ]
      },
      "axle-load": {
        name: "Axle load",
        description: "Improve fleet maintenance by monitoring axle loads of your vehicles",
        fullDescription: "Advanced axle load monitoring system that helps prevent vehicle overloading and improves fleet maintenance. Monitor weight distribution and ensure compliance with road regulations.",
        icon: "heroicons:scale",
        iconBg: "#0F2D53",
        category: "Fleet management",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Paid",
        tags: ["Maintenance"],
        features: [
          "Real-time weight monitoring",
          "Overload prevention alerts",
          "Compliance reporting",
          "Maintenance scheduling"
        ],
        gettingStarted: [
          "Install weight sensors",
          "Configure load limits",
          "Set up alert thresholds",
          "Monitor vehicle loads",
          "Generate compliance reports"
        ]
      },
      // Add support for dash-separated names
      "tracereports": {
        name: "TraceReports",
        description: "Generate comprehensive tracking reports for your fleet.",
        fullDescription: "Advanced reporting system for comprehensive fleet tracking analysis. Generate detailed reports on vehicle performance, route efficiency, and driver behavior.",
        icon: "heroicons:chart-bar",
        iconBg: "#E53E3E",
        category: "Fleet management",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Paid",
        tags: ["Reporting"],
        features: [
          "Detailed fleet reports",
          "Performance analytics",
          "Custom report templates",
          "Automated scheduling"
        ],
        gettingStarted: [
          "Set up report templates",
          "Configure data sources",
          "Schedule automated reports",
          "Customize report formats",
          "Share reports with stakeholders"
        ]
      },
      "stripe": {
        name: "Stripe",
        description: "Accept payments from customers using Stripe payment gateway.",
        fullDescription: "Integrate Stripe payment processing for seamless customer payment experience. Accept credit cards, digital wallets, and other payment methods securely.",
        icon: "heroicons:credit-card",
        iconBg: "#635BFF",
        category: "Administration",
        developer: "GeoTrack",
        configLevel: "Platform",
        price: "Paid",
        tags: ["Payments"],
        features: [
          "Secure payment processing",
          "Multiple payment methods",
          "Subscription billing",
          "Fraud protection"
        ],
        gettingStarted: [
          "Set up Stripe account",
          "Configure payment methods",
          "Test payment flow",
          "Enable fraud protection",
          "Go live with payments"
        ]
      }
};

const RELATED_PRODUCTS = [
    {
      name: "Welcome-screen",
      description: "The Welcome screen gives you an easy access to your fleet key performance metrics.",
      icon: "heroicons:chart-bar",
      iconBg: "#8B5CF6"
    },
    {
      name: "Textlocal SMS Gateway",
      description: "Use the Textlocal SMS Gateway to remotely configure GPS trackers and send SMS notifications.",
      icon: "heroicons:chat-bubble-left-ellipsis",
      iconBg: "#3BAFF3"
    }
];

const ExtensionDetailPage = ({ params }) => {
  const { isTwThemeEnabled } = useTwTheme();
  
  // Ensure params is available before proceeding
  if (!params?.id) {
    return null; // Return null instead of loading state for faster rendering
  }
  
  // Get extension data instantly - direct access for maximum performance
  const extension = EXTENSION_DATA[params.id];
  const activeTab = "OVERVIEW"; // Static tab for performance

  // Error state (extension not found)
  if (!extension) {
    return (
      <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} transition-colors duration-300`}>
        {/* Header */}
        <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} py-8`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/marketplace"
                className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors"
              >
                <Icon icon="heroicons:arrow-left" className="w-5 h-5" />
                <span className={isTwThemeEnabled ? 'font-proximaNova' : ''}>Back to Marketplace</span>
              </Link>
              
              <div className="text-center text-white">
                <h1 className={`text-3xl md:text-4xl font-bold ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  Extension Not Found
                </h1>
              </div>
              
              <div className="w-24"></div>
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center max-w-md">
              <Icon 
                icon="heroicons:exclamation-triangle" 
                className={`w-24 h-24 mx-auto mb-6 ${isTwThemeEnabled ? 'text-twNavy-300' : 'text-gray-300'}`}
              />
              <h3 className={`text-2xl font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                Extension Not Found
              </h3>
              <p className={`mb-6 ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                The extension you're looking for doesn't exist or has been removed from the marketplace.
              </p>
              <Link href="/marketplace">
                <button className={`px-6 py-3 rounded-lg font-semibold transition-all ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'} shadow-md hover:shadow-lg`}>
                  Browse All Extensions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} transition-colors duration-300`}>
      
      {/* Header */}
      <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} py-8`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/marketplace"
              className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors"
            >
              <Icon icon="heroicons:arrow-left" className="w-5 h-5" />
              <span className={isTwThemeEnabled ? 'font-proximaNova' : ''}>Back to Marketplace</span>
            </Link>
            
            <div className="text-center text-white">
              <h1 className={`text-3xl md:text-4xl font-bold ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                {extension.name}
              </h1>
            </div>
            
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6 sticky top-8`}>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  Categories
                </h3>
                <div className="space-y-2">
                  {["GPS asset tracking", "Fleet management", "Field service", "Administration"].map((category) => (
                    <Link
                      key={category}
                      href="/marketplace"
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        category === extension.category
                          ? isTwThemeEnabled 
                            ? 'bg-twBlue-500 text-white font-semibold' 
                            : 'bg-blue-500 text-white font-semibold'
                          : isTwThemeEnabled 
                            ? 'tw-text-secondary hover:bg-twNavy-50 dark:hover:bg-twNavy-700' 
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                      } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Extension Details */}
              <div className="space-y-4">
                <div>
                  <span className={`text-xs font-medium ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                    Developer
                  </span>
                  <p className={`text-sm font-semibold ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                    {extension.developer}
                  </p>
                </div>
                
                <div>
                  <span className={`text-xs font-medium ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                    Configuration level
                  </span>
                  <p className={`text-sm font-semibold ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                    {extension.configLevel}
                  </p>
                </div>
                
                <div>
                  <span className={`text-xs font-medium ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                    Price
                  </span>
                  <p className={`text-sm font-semibold ${extension.price === 'Free' ? (isTwThemeEnabled ? 'text-twGreen-600' : 'text-green-600') : (isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600')} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {extension.price}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Extension Header */}
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-8 mb-6`}>
              <div className="flex items-start space-x-6">
                {/* Extension Icon */}
                <div 
                  className="w-20 h-20 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                  style={{ backgroundColor: extension.iconBg }}
                >
                  <Icon 
                    icon={extension.icon} 
                    className="w-10 h-10 text-white"
                  />
                </div>

                {/* Extension Info */}
                <div className="flex-1">
                  <h1 className={`text-3xl font-bold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                    {extension.name}
                  </h1>
                  <p className={`text-lg ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-300'} mb-4`}>
                    {extension.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {extension.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-700 dark:bg-twBlue-900 dark:text-twBlue-300 font-proximaNova' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} mb-6`}>
              <div className="flex border-b border-gray-200 dark:border-slate-700">
                {["OVERVIEW", "GETTING STARTED"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {}} // Removed tab switching for performance
                    className={`px-6 py-4 font-semibold transition-colors ${
                      activeTab === tab
                        ? isTwThemeEnabled 
                          ? 'text-twBlue-600 border-b-2 border-twBlue-600' 
                          : 'text-blue-600 border-b-2 border-blue-600'
                        : isTwThemeEnabled 
                          ? 'tw-text-secondary hover:text-twBlue-500' 
                          : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
                    } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {activeTab === "OVERVIEW" && (
                  <div>
                    <p className={`text-lg leading-relaxed mb-6 ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-700 dark:text-gray-300'}`}>
                      {extension.fullDescription}
                    </p>
                    
                    <h3 className={`text-xl font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                      The extension allows to:
                    </h3>
                    
                    <ul className="space-y-3">
                      {extension.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}></div>
                          <span className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-700 dark:text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Mock Payment Interface */}
                    {(extension.name === "2Checkout" || extension.name === "Stripe") && (
                      <div className="mt-8 p-6 bg-gray-100 dark:bg-slate-700 rounded-xl">
                        <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                          Payment Interface Preview
                        </h4>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Monthly payments limit: 25</span>
                            <select className="text-sm border rounded px-2 py-1">
                              <option>1000 $</option>
                            </select>
                          </div>
                          <p className="text-xs text-gray-500 mb-4">
                            In order to turn on the autopay, please make your first payment
                          </p>
                          <button className={`w-full py-2 px-4 rounded font-medium text-white ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}>
                            Turn on AutoPay
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "GETTING STARTED" && (
                  <div>
                    <h3 className={`text-xl font-semibold mb-6 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                      Getting Started with {extension.name}
                    </h3>
                    
                    <div className="space-y-4">
                      {extension.gettingStarted.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}>
                            {index + 1}
                          </div>
                          <p className={`${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-700 dark:text-gray-300'} pt-1`}>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Related Products */}
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-8`}>
              <h3 className={`text-2xl font-semibold mb-6 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                Related products
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RELATED_PRODUCTS.map((product, index) => (
                  <Link 
                    key={index}
                    href={`/marketplace/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg group-hover:scale-[1.02] ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700 hover:bg-twNavy-50 dark:hover:bg-twNavy-700' : 'border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700'}`}>
                      <div className="flex items-start space-x-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0"
                          style={{ backgroundColor: product.iconBg }}
                        >
                          <Icon 
                            icon={product.icon} 
                            className="w-6 h-6 text-white"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'} group-hover:${isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600'} transition-colors`}>
                            {product.name}
                          </h4>
                          <p className={`text-sm ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionDetailPage;
