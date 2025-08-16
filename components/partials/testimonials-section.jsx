"use client";

import React from "react";
import useTwTheme from "@/hooks/useTwTheme";

const TestimonialsSection = () => {
  const { isTwThemeEnabled } = useTwTheme();

  const testimonials = [
    {
      name: "Anthony",
      title: "CEO and Co-founder",
      company: "TRACK-N-ROUTE",
      avatar: "/assets/images/all-img/user.png", // Placeholder
      quote: "GeoTrack gives us flexibility and robustness to provide a complete all-in-one solution to any business, regardless of their sphere and location.",
      logo: "TRACK-N-ROUTE"
    },
    {
      name: "Bodo Erken",
      title: "CEO",
      company: "trackerando",
      avatar: "/assets/images/all-img/user2.png", // Placeholder
      quote: "We have been offering GeoTrack as a solution to our customers for over 5 years. The associated advantages such as user-friendliness, stability and fast service response are the guarantee of our success.",
      logo: "trackerando"
    },
    {
      name: "Danny",
      title: "Chief Technical Officer",
      company: "ThaiSoft",
      avatar: "/assets/images/all-img/user3.png", // Placeholder
      quote: "Our overall experience with GeoTrack has been great. The features and the support helped our company expand in many ways, and we look forward to working with them for years to come.",
      logo: "ThaiSoft"
    }
  ];

  return (
    <section className={`py-16 relative overflow-hidden ${isTwThemeEnabled ? 'bg-gradient-to-br from-twNavy-900 via-twNavy-800 to-twBlue-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900'}`}>
      {/* Visible Grid Background - Similar to Hero Section */}
      <div className="absolute inset-0">
        {/* Vertical Lines - More Visible */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`v-${i}`}
              className={`absolute h-full border-l ${isTwThemeEnabled ? 'border-twBlue-500/15' : 'border-blue-400/15'}`}
              style={{
                left: `${(i / 20) * 100}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Horizontal Lines - More Visible */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`h-${i}`}
              className={`absolute w-full border-t ${isTwThemeEnabled ? 'border-twBlue-500/15' : 'border-blue-400/15'}`}
              style={{
                top: `${(i / 12) * 100}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Smaller and Cleaner */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Meet the companies who build with GeoTrack
          </h2>
          <p className={`text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-white/90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            Together with our global network of integrators and developers, we have successfully delivered thousands of projects from startups to enterprises, solving industry-specific challenges.
          </p>
        </div>

        {/* Testimonials Grid - Compact and Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${isTwThemeEnabled ? 'bg-twNavy-700/60 hover:bg-twNavy-700/80 border border-twBlue-500/30' : 'bg-slate-800/60 hover:bg-slate-800/80 border border-blue-400/30'}`}
            >
              {/* Profile Section - Compact */}
              <div className="flex flex-col items-center mb-4">
                {/* Avatar - Smaller */}
                <div className={`w-16 h-16 rounded-full mb-3 overflow-hidden border-2 ${isTwThemeEnabled ? 'border-twBlue-400/50' : 'border-blue-400/50'}`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-lg font-bold text-white ${isTwThemeEnabled ? 'bg-twBlue-500/80' : 'bg-blue-500/80'}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>

                {/* Name and Title - Smaller */}
                <h3 className={`text-base font-semibold text-white mb-1 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  {testimonial.name}
                </h3>
                <p className={`text-xs text-white/80 mb-2 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  {testimonial.title}
                </p>

                {/* Company Logo/Name - Smaller */}
                <div className={`px-3 py-1 rounded text-xs font-medium text-white ${isTwThemeEnabled ? 'bg-twBlue-600/60' : 'bg-blue-600/60'}`}>
                  {testimonial.logo}
                </div>
              </div>

              {/* Quote - More Compact */}
              <div className="relative">
                <blockquote className={`text-white/90 leading-relaxed text-center italic text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
