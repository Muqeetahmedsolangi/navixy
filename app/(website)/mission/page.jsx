"use client";

import { Icon } from "@iconify/react";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const MissionPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  const values = [
    {
      icon: "heroicons:heart",
      title: "Innovation",
      description: "We constantly push boundaries to develop cutting-edge telematics solutions that transform how businesses operate.",
      color: "twBlue"
    },
    {
      icon: "heroicons:users",
      title: "Partnership",
      description: "Building strong, lasting relationships with our partners and customers is at the core of everything we do.",
      color: "twGreen"
    },
    {
      icon: "heroicons:shield-check",
      title: "Excellence",
      description: "We maintain the highest standards in product quality, customer service, and business practices.",
      color: "twBrand"
    },
    {
      icon: "heroicons:globe-alt",
      title: "Global Impact",
      description: "Our solutions enable businesses worldwide to optimize operations and create positive change in their communities.",
      color: "twNavy"
    }
  ];

  const milestones = [
    {
      year: "2004",
      title: "Foundation",
      description: "GeoTrack was born from a vision to revolutionize telematics software solutions."
    },
    {
      year: "2010",
      title: "Global Expansion",
      description: "Expanded operations to serve partners across multiple continents."
    },
    {
      year: "2015",
      title: "Innovation Leader",
      description: "Became industry leader in IoT and advanced telematics technologies."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Led the industry in digital transformation and cloud-based solutions."
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Continuing to shape the future of telematics and GPS tracking technology."
    }
  ];

  const principles = [
    "Customer-first approach in everything we do",
    "Continuous innovation and technology advancement",
    "Transparent and ethical business practices",
    "Sustainable and responsible growth",
    "Empowering our global community of partners",
    "Building solutions that make a real difference"
  ];

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-900' : 'bg-white dark:bg-slate-900'}`}>
      
      {/* Hero Section */}
      <section className={`relative py-32 overflow-hidden ${isTwThemeEnabled ? 'bg-gradient-to-br from-twNavy-800 via-twBlue-700 to-twBlue-600' : 'bg-gradient-to-br from-slate-800 via-blue-700 to-blue-600'} text-white`}>
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 600" className="w-full h-full">
            <defs>
              <pattern id="mission-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="25" r="20" fill="white" opacity="0.1">
                  <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="25" cy="75" r="15" fill="white" opacity="0.1">
                  <animate attributeName="r" values="15;20;15" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="75" r="18" fill="white" opacity="0.1">
                  <animate attributeName="r" values="18;23;18" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mission-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-6xl lg:text-7xl font-bold mb-8 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
              Our Mission
            </h1>
            <p className={`text-2xl lg:text-3xl leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova text-white' : 'text-white'} opacity-90`}>
              To empower businesses worldwide with innovative telematics solutions that drive efficiency, safety, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-bold mb-8 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                Our Vision
              </h2>
              <p className={`text-xl leading-relaxed max-w-4xl mx-auto ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                To be the global leader in telematics technology, creating a connected world where businesses can optimize their operations, reduce environmental impact, and improve the quality of life for communities everywhere.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className={`p-8 rounded-3xl ${isTwThemeEnabled ? 'bg-twBlue-50 dark:bg-twBlue-900/10 border border-twBlue-200 dark:border-twBlue-800' : 'bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800'}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} flex items-center justify-center mr-4`}>
                      <Icon icon="heroicons:eye" className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      Future-Focused
                    </h3>
                  </div>
                  <p className={`text-lg ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                    We envision a future where telematics technology seamlessly integrates with every aspect of business operations, creating smarter, safer, and more sustainable enterprises.
                  </p>
                </div>
              </div>
              
              <div>
                <div className={`p-8 rounded-3xl ${isTwThemeEnabled ? 'bg-twGreen-50 dark:bg-twGreen-900/10 border border-twGreen-200 dark:border-twGreen-800' : 'bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800'}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${isTwThemeEnabled ? 'bg-twGreen-500' : 'bg-green-500'} flex items-center justify-center mr-4`}>
                      <Icon icon="heroicons:sparkles" className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      Global Impact
                    </h3>
                  </div>
                  <p className={`text-lg ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                    Our solutions will continue to drive positive change across industries, helping businesses reduce costs, improve safety, and contribute to a more sustainable world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-bold mb-8 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                Our Core Values
              </h2>
              <p className={`text-xl ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                The principles that guide every decision we make and every solution we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className={`h-full p-8 rounded-3xl transition-all duration-300 group-hover:scale-105 ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-lg hover:shadow-2xl' : 'bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl'}`}>
                    <div className={`w-20 h-20 rounded-2xl ${isTwThemeEnabled ? `bg-${value.color}-100 dark:bg-${value.color}-900/20` : `bg-${value.color.replace('tw', '').toLowerCase()}-100 dark:bg-${value.color.replace('tw', '').toLowerCase()}-900/20`} flex items-center justify-center mb-6 mx-auto`}>
                      <Icon icon={value.icon} className={`w-10 h-10 ${isTwThemeEnabled ? `text-${value.color}-600 dark:text-${value.color}-400` : `text-${value.color.replace('tw', '').toLowerCase()}-600 dark:text-${value.color.replace('tw', '').toLowerCase()}-400`}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-center ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      {value.title}
                    </h3>
                    <p className={`text-center leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-bold mb-8 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                Our Journey
              </h2>
              <p className={`text-xl ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                Two decades of innovation, growth, and transformation in telematics technology.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isTwThemeEnabled ? 'bg-twBlue-200 dark:bg-twBlue-800' : 'bg-blue-200 dark:bg-blue-800'}`}></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} border-4 border-white dark:border-gray-900 z-10`}></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className={`p-6 rounded-2xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-lg border border-twNavy-100 dark:border-twNavy-700' : 'bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-gray-700'}`}>
                        <div className={`text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400 font-lexend' : 'text-blue-600 dark:text-blue-400'}`}>
                          {milestone.year}
                        </div>
                        <h3 className={`text-xl font-bold mb-3 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                          {milestone.title}
                        </h3>
                        <p className={`${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-gradient-to-r from-twBlue-500 to-twBlue-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-5xl font-bold mb-8 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
                Our Guiding Principles
              </h2>
              <p className={`text-xl ${isTwThemeEnabled ? 'font-proximaNova text-white' : 'text-white'} opacity-90`}>
                The fundamental beliefs that shape our culture and drive our success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Icon icon="heroicons:check" className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className={`text-lg ${isTwThemeEnabled ? 'font-proximaNova text-white' : 'text-white'}`}>
                        {principle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`p-12 rounded-3xl ${isTwThemeEnabled ? 'bg-twNavy-800 dark:bg-twNavy-900' : 'bg-gray-900 dark:bg-slate-900'} text-white`}>
              <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl ${isTwThemeEnabled ? 'bg-twBrand-500' : 'bg-purple-500'} flex items-center justify-center`}>
                <Icon icon="heroicons:hand-raised" className="w-12 h-12 text-white" />
              </div>
              <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend text-white' : 'text-white'}`}>
                Our Commitment
              </h2>
              <p className={`text-xl leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova text-white' : 'text-white'} opacity-90`}>
                We pledge to continue pushing the boundaries of what's possible in telematics technology, always putting our customers and partners first, and never losing sight of our responsibility to create a better, more connected world for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
              Join Us in Our Mission
            </h2>
            <p className={`text-xl mb-8 ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
              Be part of the future of telematics. Partner with us to create innovative solutions that make a real difference.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
                BECOME A PARTNER
              </button>
              <button className={`px-8 py-4 border-2 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'border-twBlue-500 text-twBlue-600 hover:bg-twBlue-500 hover:text-white font-proximaNova' : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'}`}>
                EXPLORE CAREERS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
