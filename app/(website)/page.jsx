"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import HeroSection from "@/components/partials/hero-section";
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
    <div className={`min-h-screen transition-colors duration-300 ${isTwThemeEnabled ? 'tw-bg dark:bg-background-dark' : 'bg-white dark:bg-slate-900'}`}>
      {/* Header */}
      <header className={`shadow-sm sticky top-0 z-50 transition-colors duration-300 ${isTwThemeEnabled ? 'tw-bg-alt dark:bg-background-darker tw-border-b' : 'bg-white dark:bg-slate-800'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon icon="heroicons:home-modern" className={`text-2xl ${isTwThemeEnabled ? 'tw-navy' : 'text-primary-500'}`} />
              <span className={`text-xl font-lexend font-black ${isTwThemeEnabled ? 'tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                TechSpace
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className={`font-proximaNova transition-colors ${isTwThemeEnabled ? 'tw-text-secondary hover:tw-blue' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}`}>
                Explore
              </Link>
              <Link href="#" className={`font-proximaNova transition-colors ${isTwThemeEnabled ? 'tw-text-secondary hover:tw-blue' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}`}>
                Solutions
              </Link>
              <Link href="#" className={`font-proximaNova transition-colors ${isTwThemeEnabled ? 'tw-text-secondary hover:tw-blue' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}`}>
                About
              </Link>
              <Link href="#" className={`font-proximaNova transition-colors ${isTwThemeEnabled ? 'tw-text-secondary hover:tw-blue' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}`}>
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!isDark)}
                className={`p-2 rounded-lg transition-colors ${isTwThemeEnabled ? 'tw-bg-alt hover:tw-bg-surface' : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600'}`}
                aria-label="Toggle dark mode"
              >
                <Icon 
                  icon={isDark ? "heroicons:sun" : "heroicons:moon"} 
                  className={`text-lg ${isTwThemeEnabled ? 'tw-text-secondary' : 'text-gray-600 dark:text-gray-300'}`} 
                />
              </button>
              
              {/* Theme Toggle */}
              <button
                onClick={() => toggleTwTheme()}
                className={`p-2 rounded-lg transition-colors ${isTwThemeEnabled ? 'tw-theme-active btn-tw-primary' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Toggle TW theme"
              >
                <Icon icon="heroicons:paint-brush" className="text-lg" />
              </button>
              
              <Link 
                href="/dashboard" 
                className={`font-proximaNova transition-colors ${isTwThemeEnabled ? 'tw-text-secondary hover:tw-blue' : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'}`}
              >
                Dashboard
              </Link>
              <Button 
                text="Get Started" 
                className={isTwThemeEnabled ? twButton.primary : "bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors"}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />


      {/* Features Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'tw-bg' : 'bg-white dark:bg-slate-900'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              Why Choose TechSpace?
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
              We deliver cutting-edge technology solutions that drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`text-center p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-0 ${isTwThemeEnabled ? twCard.ghost : 'bg-slate-50 dark:bg-slate-800'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isTwThemeEnabled ? 'bg-twBlue-100 dark:bg-twNavy-800' : 'bg-primary-100 dark:bg-primary-900'}`}>
                  <Icon icon={feature.icon} className={`text-2xl ${isTwThemeEnabled ? 'tw-blue' : 'text-primary-500'}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
                  {feature.title}
                </h3>
                <p className={`${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'tw-bg-alt' : 'bg-slate-50 dark:bg-slate-800'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-slate-900 dark:text-white'}`}>
              Our Technology Stack
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova tw-text-secondary' : 'text-slate-600 dark:text-slate-300'}`}>
              We use the latest and most powerful technologies to build your solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer border-0 ${isTwThemeEnabled ? twCard.default : ''}`}
              >
                <div className="relative h-48">
                  <div className={`absolute inset-0 ${isTwThemeEnabled ? 'bg-gradient-to-br from-twNavy-600 to-twBlue-600' : 'bg-gradient-to-br from-primary-600 to-secondary-600'}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      icon={index === 0 ? "logos:react" : index === 1 ? "logos:nodejs-icon" : index === 2 ? "heroicons:cloud" : "heroicons:cpu-chip"} 
                      className="text-6xl text-white"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className={`text-lg font-semibold ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                      {tech.title}
                    </h3>
                    <p className={`text-sm opacity-90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      {tech.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={isTwThemeEnabled ? 'py-20 bg-twNavy-500 dark:bg-twBlue-600' : 'py-20 bg-primary-500'}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold text-white mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Ready to Build Something Amazing?
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost' : 'text-primary-100'}`}>
            Join forward-thinking companies who trust TechSpace for their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              text="Start Your Project" 
              className={isTwThemeEnabled ? "bg-white text-twNavy-500 hover:bg-twBrand-ghost px-8 py-4 rounded-xl text-lg font-semibold font-lexend transition-colors" : "bg-white text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"}
            />
            <Button 
              text="Schedule Consultation" 
              className={isTwThemeEnabled ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-twNavy-500 px-8 py-4 rounded-xl text-lg font-semibold font-proximaNova transition-colors" : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={isTwThemeEnabled ? 'bg-twNavy-900 dark:bg-background-darker text-white py-16' : 'bg-slate-900 text-white py-16'}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon icon="heroicons:code-bracket-square" className={`text-2xl ${isTwThemeEnabled ? 'tw-blue' : 'text-primary-500'}`} />
                <span className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend' : ''}`}>TechSpace</span>
              </div>
              <p className={`mb-4 ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost' : 'text-slate-400'}`}>
                Your trusted partner for cutting-edge digital solutions and modern web development.
              </p>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>Services</h4>
              <ul className="space-y-2">
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Web Development</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Mobile Apps</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Cloud Solutions</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>AI Integration</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Documentation</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>API Reference</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Tutorials</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>About Us</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Careers</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Blog</Link></li>
                <li><Link href="#" className={`transition-colors ${isTwThemeEnabled ? 'font-proximaNova text-twBrand-ghost hover:tw-blue' : 'text-slate-400 hover:text-white'}`}>Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 text-center ${isTwThemeEnabled ? 'border-t border-twNavy-700 text-twBrand-ghost font-proximaNova' : 'border-t border-slate-800 text-slate-400'}`}>
            <p>&copy; 2024 TechSpace. All rights reserved. | Built with Professional TW Theme</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 