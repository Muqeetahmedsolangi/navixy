"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import HeroSection from "@/components/partials/hero-section";
import SolutionsTabs from "@/components/partials/solutions-tabs";
import BrandsMarquee from "@/components/partials/brands-marquee";
import PlatformSection from "@/components/partials/platform-section";
import DualMarquee from "@/components/partials/dual-marquee";
import TestimonialsSection from "@/components/partials/testimonials-section";
import VideoSection from "@/components/partials/video-section";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const HomePage = () => {
  const { twButton, twCard, isTwThemeEnabled, toggleTwTheme } = useTwTheme();
  const [isDark, setDarkMode] = useDarkMode();

  const features = [
    {
      icon: "heroicons:code-bracket-square",
      title: "Modern Development",
      description: "Build with cutting-edge technologies and best practices for scalable solutions"
    },
    {
      icon: "heroicons:bolt",
      title: "Lightning Fast",
      description: "Optimized performance and blazing-fast load times for better user experience"
    },
    {
      icon: "heroicons:shield-check",
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime for your peace of mind"
    },
    {
      icon: "heroicons:sparkles",
      title: "AI-Powered",
      description: "Leverage artificial intelligence to create smarter, more intuitive applications"
    }
  ];

  const technologies = [
    {
      image: "/assets/images/all-img/card-1.png",
      title: "React & Next.js",
      description: "Modern frontend development"
    },
    {
      image: "/assets/images/all-img/card-2.png",
      title: "Node.js & Python",
      description: "Powerful backend solutions"
    },
    {
      image: "/assets/images/all-img/card-3.png",
      title: "Cloud & DevOps",
      description: "Scalable infrastructure"
    },
    {
      image: "/assets/images/all-img/card-4.png",
      title: "AI & Machine Learning",
      description: "Intelligent applications"
    }
  ];

  return (
    <div className="website-main-content">

      {/* Hero Section */}
      <HeroSection />

      {/* Brands Marquee */}
      <BrandsMarquee />

      {/* GeoTrack-Style Platform Section */}
      <PlatformSection />

      {/* Solutions Tabs Section */}
      <SolutionsTabs />

      {/* Video Section - Explore GeoTrack */}
      <VideoSection />
      {/* Dual Marquee - Marketplace & Integrations */}
      <DualMarquee />


      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* News and Trends Section - GeoTrack Style */}
      <section className={`py-20 relative ${isTwThemeEnabled ? 'bg-twBrand-ghost' : 'bg-gray-50 dark:bg-slate-800'}`}>
        {/* Background Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          {/* Vertical Lines */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={`v-${i}`}
                className={`absolute h-full border-l ${isTwThemeEnabled ? 'border-twBlue-300/30' : 'border-gray-300'}`}
                style={{ left: `${(i / 20) * 100}%` }}
              ></div>
            ))}
          </div>
          {/* Horizontal Lines */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={`h-${i}`}
                className={`absolute w-full border-t ${isTwThemeEnabled ? 'border-twBlue-300/30' : 'border-gray-300'}`}
                style={{ top: `${(i / 12) * 100}%` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              Stay ahead with the latest news and trends
            </h2>
            <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
              Keep up with the latest GeoTrack updates and telematics news. Gain insights into emerging technologies, industry
              innovations, and best practices.
            </p>
            <Link href="/blog">
              <Button 
                text="Explore blog"
                className={`px-8 py-4 text-lg font-semibold rounded-lg ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              />
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 - User Applications */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${isTwThemeEnabled ? 'bg-white border border-twNavy-100' : 'bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600'}`}>
              <div className={`h-48 relative ${isTwThemeEnabled ? 'bg-gradient-to-br from-twBlue-400 to-twNavy-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'}`}>
                {/* GeoTrack Logo */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <Icon icon="heroicons:map" className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-white font-semibold text-sm">GeoTrack</span>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2">
                    INTRODUCING<br />
                    USER APPLICATIONS
                  </h3>
                  <p className="text-white/90 text-sm">
                    Make GeoTrack work for you
                  </p>
                </div>
                {/* Dashboard mockup */}
                <div className="absolute bottom-0 right-0">
                  <div className="w-32 h-20 bg-white/10 rounded-tl-lg border border-white/20 backdrop-blur-sm">
                    <div className="p-2 space-y-1">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white/40 rounded"></div>
                        <div className="w-2 h-2 bg-white/40 rounded"></div>
                      </div>
                      <div className="w-full h-1 bg-white/30 rounded"></div>
                      <div className="w-3/4 h-1 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className={`text-lg font-bold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                  Make GeoTrack work for you: Introducing User Applications
                </h4>
                <p className={`text-sm leading-relaxed mb-4 ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                  GeoTrack's new User Applications feature allows you to embed custom web apps directly within the platform. Whether it's fleet analytics, compliance tools, or industry-specific modules, this functionality empowers integrators to create tailored telematics solutions for their clients...
                </p>
                <button className={`text-sm font-semibold ${isTwThemeEnabled ? 'text-twBlue-600 hover:text-twBlue-700' : 'text-blue-600 hover:text-blue-700'}`}>
                  Learn more
                </button>
              </div>
            </div>

            {/* Card 2 - NGP */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${isTwThemeEnabled ? 'bg-white border border-twNavy-100' : 'bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600'}`}>
              <div className={`h-48 relative ${isTwThemeEnabled ? 'bg-gradient-to-br from-twBlue-500 to-twBlue-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>
                {/* GeoTrack Logo */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <Icon icon="heroicons:signal" className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-white font-semibold text-sm">GeoTrack</span>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2">
                    INTRODUCING NGP
                  </h3>
                  <p className="text-white/90 text-sm">
                    A new standard<br />
                    for telematics data exchange
                  </p>
                </div>
                {/* Tech visualization */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-3 h-3 bg-white/20 rounded"></div>
                    <div className="w-3 h-3 bg-white/40 rounded"></div>
                    <div className="w-3 h-3 bg-white/40 rounded"></div>
                    <div className="w-3 h-3 bg-white/60 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className={`text-lg font-bold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                  Introducing NGP: A new standard for telematics data exchange
                </h4>
                <p className={`text-sm leading-relaxed mb-4 ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                  We're introducing the GeoTrack Generic Protocol (NGP) — our answer to the fragmentation challenge in the telematics industry. We'll explore how the GeoTrack Generic Protocol transforms telematics, how it works, and the ways it can benefit your operations...
                </p>
                <button className={`text-sm font-semibold ${isTwThemeEnabled ? 'text-twBlue-600 hover:text-twBlue-700' : 'text-blue-600 hover:text-blue-700'}`}>
                  Learn more
                </button>
              </div>
            </div>

            {/* Card 3 - Passenger Counter */}
            <div className={`rounded-xl overflow-hidden shadow-lg ${isTwThemeEnabled ? 'bg-white border border-twNavy-100' : 'bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600'}`}>
              <div className={`h-48 relative ${isTwThemeEnabled ? 'bg-gradient-to-br from-twBlue-400 to-twNavy-500' : 'bg-gradient-to-br from-blue-400 to-indigo-600'}`}>
                {/* GeoTrack Logo */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <Icon icon="heroicons:users" className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-white font-semibold text-sm">GeoTrack</span>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">
                    AUTOMATIC PASSENGER<br />
                    COUNTER SOLUTION
                  </h3>
                </div>
                {/* People illustration */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-4 h-6 bg-white/30 rounded-full"></div>
                    <div className="w-4 h-6 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className={`text-lg font-bold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                  Enhancing public transportation with automatic passenger counting
                </h4>
                <p className={`text-sm leading-relaxed mb-4 ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                  GeoTrack's automatic passenger counter solutions, powered by advanced sensors like the ASPC102, enable transit operators to optimize routes, improve vehicle occupancy rates, and reduce operational costs. Learn how real-time passenger data can enhance efficiency and customer satisfaction...
                </p>
                <button className={`text-sm font-semibold ${isTwThemeEnabled ? 'text-twBlue-600 hover:text-twBlue-700' : 'text-blue-600 hover:text-blue-700'}`}>
                  Learn more
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 