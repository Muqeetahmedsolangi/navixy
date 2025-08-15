"use client";

import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const NewsBlogSection = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  const blogPosts = [
    {
      id: "user-applications",
      title: "Make Navixy work for you: Introducing User Applications",
      shortTitle: "INTRODUCING USER APPLICATIONS",
      subtitle: "Make Navixy work for you",
      description: "Navixy's new User Applications feature allows you to embed custom web apps directly within the platform. Whether it's fleet analytics, compliance tools, or industry-specific modules, this functionality empowers integrators to create tailored telematics solutions for their clients...",
      icon: "heroicons:map",
      gradient: isTwThemeEnabled ? 'from-twBlue-400 to-twNavy-600' : 'from-blue-400 to-blue-600'
    },
    {
      id: "ngp-protocol",
      title: "Introducing NGP: A new standard for telematics data exchange",
      shortTitle: "INTRODUCING NGP",
      subtitle: "A new standard for telematics data exchange",
      description: "We're introducing the Navixy Generic Protocol (NGP) — our answer to the fragmentation challenge in the telematics industry. We'll explore how the Navixy Generic Protocol transforms telematics, how it works, and the ways it can benefit your operations...",
      icon: "heroicons:signal",
      gradient: isTwThemeEnabled ? 'from-twBlue-500 to-twBlue-600' : 'from-blue-500 to-blue-600'
    },
    {
      id: "passenger-counter",
      title: "Enhancing public transportation with automatic passenger counting",
      shortTitle: "AUTOMATIC PASSENGER COUNTER SOLUTION",
      subtitle: "",
      description: "Navixy's automatic passenger counter solutions, powered by advanced sensors like the ASPC102, enable transit operators to optimize routes, improve vehicle occupancy rates, and reduce operational costs. Learn how real-time passenger data can enhance efficiency and customer satisfaction...",
      icon: "heroicons:users",
      gradient: isTwThemeEnabled ? 'from-twBlue-400 to-twNavy-500' : 'from-blue-400 to-indigo-600'
    }
  ];

  return (
    <section className={`py-12 ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-900' : 'bg-white') : 'bg-white dark:bg-slate-900'}`}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Stay ahead with the latest news and trends
          </h2>
          <p className={`text-base max-w-2xl mx-auto leading-relaxed mb-6 ${isTwThemeEnabled ? (isDark ? 'text-twBlue-200' : 'text-twNavy-600') : 'text-slate-600 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            Keep up with the latest Navixy updates and telematics news. Gain insights into emerging technologies, industry innovations, and best practices.
          </p>
          <Button
            text="Explore blog"
            className={`px-6 py-3 text-sm font-semibold rounded-lg ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
          />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={post.id} className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-800 border border-twBlue-500/20' : 'bg-white border border-twNavy-100') : 'bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600'}`}>
              
              {/* Card Header with Gradient */}
              <div className={`h-40 relative bg-gradient-to-br ${post.gradient}`}>
                {/* Navixy Logo */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                      <Icon icon={post.icon} className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-white font-semibold text-xs">Navixy</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-sm mb-1">
                    {post.shortTitle}
                  </h3>
                  {post.subtitle && (
                    <p className="text-white/90 text-xs">
                      {post.subtitle}
                    </p>
                  )}
                </div>

                {/* Visual Elements */}
                {index === 0 && (
                  // Dashboard mockup for first card
                  <div className="absolute bottom-0 right-0">
                    <div className="w-24 h-16 bg-white/10 rounded-tl-lg border border-white/20 backdrop-blur-sm">
                      <div className="p-2 space-y-1">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-white/40 rounded"></div>
                          <div className="w-1.5 h-1.5 bg-white/40 rounded"></div>
                        </div>
                        <div className="w-full h-0.5 bg-white/30 rounded"></div>
                        <div className="w-3/4 h-0.5 bg-white/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {index === 1 && (
                  // Tech visualization for second card
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-2 h-2 bg-white/20 rounded"></div>
                      <div className="w-2 h-2 bg-white/40 rounded"></div>
                      <div className="w-2 h-2 bg-white/40 rounded"></div>
                      <div className="w-2 h-2 bg-white/60 rounded"></div>
                    </div>
                  </div>
                )}
                
                {index === 2 && (
                  // People illustration for third card
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-5 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-5 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h4 className={`text-base font-bold mb-3 leading-tight ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  {post.title}
                </h4>
                <p className={`text-xs leading-relaxed mb-4 ${isTwThemeEnabled ? (isDark ? 'text-twBlue-100' : 'text-twNavy-600') : 'text-slate-600 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  {post.description}
                </p>
                <button className={`text-xs font-semibold hover:underline transition-colors duration-300 ${isTwThemeEnabled ? (isDark ? 'text-twBlue-400 hover:text-twBlue-300' : 'text-twBlue-600 hover:text-twBlue-700') : 'text-blue-600 hover:text-blue-700'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlogSection;
