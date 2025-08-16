"use client";

import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

// Counter animation hook
const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);
  
  return count;
};

// Intersection Observer hook
const useInView = (threshold = 0.1) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [threshold, inView]);
  
  return [ref, inView];
};

const PlatformSection = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [statsRef, statsInView] = useInView(0.3);
  
  // Animated counters
  const assetsCount = useCountUp(800, 2000, statsInView);
  const projectsCount = useCountUp(10, 1500, statsInView);
  const countriesCount = useCountUp(130, 1800, statsInView);
  const uptimeCount = useCountUp(99.9, 2200, statsInView);

  const features = [
    {
      icon: "heroicons:chart-bar",
      title: "High-performance tracking",
      description: "GeoTrack combines modern technologies with an intuitive design, supporting real-time tracking of up to 25,000 assets in a single account."
    },
    {
      icon: "heroicons:code-bracket", 
      title: "No-code customization",
      description: "GeoTrack telematics PaaS enables businesses to personalize UI, integrate third-party apps, and customize telematics data processing."
    },
    {
      icon: "heroicons:wrench-screwdriver",
      title: "Engineering support", 
      description: "GeoTrack delivers top-tier technical and solution engineering support with a 99% customer satisfaction rate, enabling businesses to optimize operations."
    },
    {
      icon: "heroicons:puzzle-piece",
      title: "Platform flexibility",
      description: "Flexible deployment options including cloud, on-premises, and hybrid solutions to meet diverse business requirements and compliance needs."
    },
    {
      icon: "heroicons:globe-alt",
      title: "Global reliability",
      description: "Proven track record serving customers across 130+ countries with enterprise-grade infrastructure and 24/7 monitoring capabilities."
    },
    {
      icon: "heroicons:cloud",
      title: "API integration", 
      description: "Comprehensive REST API and webhook support for seamless integration with existing business systems and third-party applications."
    }
  ];

  return (
    <section className={`py-16 ${isTwThemeEnabled ? 'tw-bg' : 'bg-white dark:bg-slate-900'}`}>
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
            Telematics platform to innovate and scale globally
          </h2>
          <p className={`text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-6 ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
            GeoTrack makes building, deploying, and scaling GPS and telematics applications easy and flexible. With 20+ years
            of expertise, we ensure reliable performance and ongoing innovation.
          </p>
          <Button
            text="Get started"
            className={`px-6 py-3 font-semibold rounded-lg ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
          />
        </div>

        {/* Animated Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className={`text-2xl md:text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              {assetsCount}K+
            </div>
            <div className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-400'}`}>
              online assets
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl md:text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              {projectsCount}K+
            </div>
            <div className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-400'}`}>
              completed projects
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl md:text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              {countriesCount}+
            </div>
            <div className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-400'}`}>
              customer countries
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl md:text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              {uptimeCount}%
            </div>
            <div className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-400'}`}>
              historical uptime
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${isTwThemeEnabled ? 'tw-bg border-twNavy-200 hover:border-twBlue-300' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300'}`}>
              <div className="text-center mb-4">
                <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center ${isTwThemeEnabled ? 'bg-twBlue-100' : 'bg-blue-100'}`}>
                  <Icon icon={feature.icon} className={`w-6 h-6 ${isTwThemeEnabled ? 'text-twBlue-600' : 'text-blue-600'}`} />
                </div>
              </div>
              <h3 className={`text-lg font-bold mb-3 text-center ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                {feature.title}
              </h3>
              <p className={`text-center text-sm leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
