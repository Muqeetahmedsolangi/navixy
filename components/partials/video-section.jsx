"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";

const VideoSection = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={`py-16 relative overflow-hidden ${isTwThemeEnabled ? 'bg-gradient-to-br from-twBlue-600 to-twBlue-700' : 'bg-gradient-to-br from-blue-600 to-blue-700'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                Explore Navixy
              </h2>
              <p className={`text-lg leading-relaxed text-white/90 mb-8 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                Learn more about Navixy on our YouTube channel. From step-by-step guides and feature highlights to industry insights, our videos help you discover the full potential of the Navixy telematics platform.
              </p>
            </div>

            {/* Watch More Button */}
            <div>
              <button 
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white ${isTwThemeEnabled ? 'font-proximaNova' : ''} hover:scale-105`}
                onClick={() => setIsPlaying(true)}
              >
                Watch more
              </button>
            </div>
          </div>

          {/* Right Side - Video Player */}
          <div className="relative">
            {/* Video Container */}
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${isTwThemeEnabled ? 'bg-twNavy-800' : 'bg-slate-800'}`}>
              {/* Video Thumbnail/Player */}
              <div className="aspect-video relative">
                {/* Background with Dashboard Preview */}
                <div className={`absolute inset-0 ${isTwThemeEnabled ? 'bg-gradient-to-br from-twNavy-700 to-twNavy-800' : 'bg-gradient-to-br from-slate-700 to-slate-800'}`}>
                  {/* Simulated Dashboard Interface */}
                  <div className="absolute inset-4 bg-white rounded-lg overflow-hidden">
                    {/* Header Bar */}
                    <div className={`h-8 flex items-center px-3 ${isTwThemeEnabled ? 'bg-twNavy-600' : 'bg-slate-600'}`}>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-white font-medium">Navixy Dashboard</span>
                      </div>
                    </div>
                    
                    {/* Map Area */}
                    <div className="relative h-full bg-blue-100">
                      {/* Simulated Map */}
                      <div className="absolute inset-2 bg-gradient-to-br from-green-200 via-blue-200 to-green-300 rounded">
                        {/* Map Markers */}
                        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        
                        {/* Route Lines */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path 
                            d="M20,30 Q40,20 60,40 T90,35" 
                            stroke={isTwThemeEnabled ? "#3BAFF3" : "#3B82F6"} 
                            strokeWidth="2" 
                            fill="none" 
                            strokeDasharray="5,5"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                      
                      {/* Side Panel */}
                      <div className="absolute top-2 right-2 bottom-2 w-24 bg-white border-l border-gray-200 p-2">
                        <div className="space-y-2">
                          <div className={`h-3 rounded ${isTwThemeEnabled ? 'bg-twBlue-200' : 'bg-blue-200'}`}></div>
                          <div className={`h-3 rounded ${isTwThemeEnabled ? 'bg-twNavy-200' : 'bg-slate-200'}`}></div>
                          <div className={`h-3 rounded ${isTwThemeEnabled ? 'bg-twGreen-200' : 'bg-green-200'}`}></div>
                          <div className="h-2 bg-gray-100 rounded"></div>
                          <div className="h-2 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navixy Branding Overlay */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="flex items-center space-x-2">
                    <Icon icon="heroicons:map" className={`w-6 h-6 text-white`} />
                    <span className={`text-white font-bold text-lg ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                      Navixy
                    </span>
                  </div>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                    <h3 className={`text-white font-bold text-lg mb-1 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                      Navixy:
                    </h3>
                    <h4 className={`text-white/90 text-base ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      Advanced Telematics Software
                    </h4>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button 
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-400' : 'bg-blue-500 hover:bg-blue-400'} group`}
                    onClick={() => setIsPlaying(true)}
                  >
                    <Icon 
                      icon="heroicons:play" 
                      className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" 
                    />
                  </button>
                </div>

                {/* Tech/Radar Effect */}
                <div className="absolute bottom-16 right-16 w-16 h-16 z-5">
                  <div className={`w-full h-full rounded-full border-2 animate-ping ${isTwThemeEnabled ? 'border-twBlue-400' : 'border-blue-400'} opacity-30`}></div>
                  <div className={`absolute inset-2 rounded-full border animate-pulse ${isTwThemeEnabled ? 'border-twBlue-300' : 'border-blue-300'} opacity-50`}></div>
                  <div className={`absolute inset-4 rounded-full ${isTwThemeEnabled ? 'bg-twBlue-400' : 'bg-blue-400'} animate-pulse opacity-70`}></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-white/30 animate-pulse"></div>
          </div>

        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
    </section>
  );
};

export default VideoSection;
