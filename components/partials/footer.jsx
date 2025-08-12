"use client";

import Link from "next/link";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

const Footer = () => {
  const { isTwThemeEnabled } = useTwTheme();

  const platformLinks = [
    { name: "GPS asset tracking", href: "#" },
    { name: "Fleet management", href: "#" },
    { name: "Workforce management", href: "#" },
    { name: "Admin panel", href: "#" },
    { name: "Mobile apps", href: "#" },
    { name: "Roadmap", href: "#" },
    { name: "System status", href: "#" },
  ];

  const resourcesLinks = [
    { name: "Marketplace", href: "#" },
    { name: "API and SDK", href: "#" },
    { name: "User guides", href: "#" },
    { name: "Release notes", href: "#" },
    { name: "Top 10 GPS vendors", href: "#" },
  ];

  const moreLinks = [
    { name: "Features overview", href: "#" },
    { name: "Supported GPS trackers", href: "#" },
    { name: "GPS tracking system", href: "#" },
    { name: "GPS tracker software", href: "#" },
    { name: "GPS tracking business", href: "#" },
    { name: "What is telematics", href: "#" },
    { name: "White label", href: "#" },
  ];

  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Contacts", href: "#" },
    { name: "Mission", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const socialLinks = [
    { name: "YouTube", icon: "heroicons:play", href: "#" },
    { name: "Facebook", icon: "heroicons:face-smile", href: "#" },
    { name: "Twitter", icon: "heroicons:chat-bubble-left", href: "#" },
    { name: "LinkedIn", icon: "heroicons:building-office", href: "#" },
    { name: "Telegram", icon: "heroicons:paper-airplane", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy policy", href: "#" },
    { name: "Terms of service", href: "#" },
    { name: "Legal center", href: "#" },
    { name: "Cookie settings", href: "#" },
  ];

  return (
    <footer className={`${isTwThemeEnabled ? 'bg-twNavy-900' : 'bg-slate-900'} text-white`}>
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Platform Column */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
              Platform
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova text-twBlue-300 hover:text-twBlue-200' : 'text-gray-400 hover:text-gray-300'} transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
              Resources
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova text-twBlue-300 hover:text-twBlue-200' : 'text-gray-400 hover:text-gray-300'} transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
              More
            </h3>
            <ul className="space-y-3">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova text-twBlue-300 hover:text-twBlue-200' : 'text-gray-400 hover:text-gray-300'} transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova text-twBlue-300 hover:text-twBlue-200' : 'text-gray-400 hover:text-gray-300'} transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className={`border-t pt-8 ${isTwThemeEnabled ? 'border-twNavy-700' : 'border-gray-700'}`}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            
            {/* Left Side - Logo and Copyright */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 lg:space-y-0 lg:space-x-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded flex items-center justify-center ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}>
                  <Icon icon="heroicons:map" className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
                  Navixy
                </span>
              </div>
              
              {/* Copyright */}
              <p className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova text-twBlue-300' : 'text-gray-400'} max-w-md`}>
                © 2005-2025 Navixy. GPS tracking and telematics platform. All rights reserved.
              </p>
            </div>

            {/* Right Side - Legal Links and Social */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              
              {/* Legal Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {legalLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova text-twBlue-300 hover:text-twBlue-200' : 'text-gray-400 hover:text-gray-300'} transition-colors whitespace-nowrap`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${isTwThemeEnabled ? 'text-twBlue-300 hover:text-twBlue-200 hover:bg-twNavy-800' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'}`}
                    title={social.name}
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
