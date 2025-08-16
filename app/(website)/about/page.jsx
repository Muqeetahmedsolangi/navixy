"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const AboutPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [selectedOffice, setSelectedOffice] = useState(0);

  const stats = [
    { number: "130+", label: "countries" },
    { number: "1600+", label: "devices" },
    { number: "34", label: "languages" },
    { number: "700K+", label: "assets" }
  ];

  const offices = [
    {
      id: 0,
      city: "Los Angeles, USA",
      address: "2945 Townsgate Rd Suite 200",
      addressLine2: "LA, CA, 91361",
      phone: "+1 (555) 123-4567",
      email: "la@geotrack.com",
      timezone: "PST (UTC-8)",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "Our North American headquarters, serving clients across the Americas with cutting-edge telematics solutions."
    },
    {
      id: 1,
      city: "Mexico City, Mexico", 
      address: "Florencia 31, piso 10,",
      addressLine2: "Colonia Juarez Alcaldia Cuauhtemoc",
      phone: "+52 55 1234 5678",
      email: "mx@geotrack.com",
      timezone: "CST (UTC-6)",
      coordinates: { lat: 19.4326, lng: -99.1332 },
      description: "Strategic Latin American hub providing localized support and solutions for the growing Mexican market."
    },
    {
      id: 2,
      city: "London, UK",
      address: "15 St Botolph St",
      addressLine2: "London EC3A 7DT",
      phone: "+44 20 7123 4567",
      email: "uk@geotrack.com",
      timezone: "GMT (UTC+0)",
      coordinates: { lat: 51.5074, lng: -0.1278 },
      description: "European operations center, connecting with partners across the EU and supporting EMEA expansion."
    },
    {
      id: 3,
      city: "Belgrade, Serbia",
      address: "Kneza Mihaila 3",
      addressLine2: "11000 Belgrade",
      phone: "+381 11 123 4567",
      email: "rs@geotrack.com",
      timezone: "CET (UTC+1)",
      coordinates: { lat: 44.7866, lng: 20.4489 },
      description: "Our European development center and main headquarters, where innovation meets tradition in the heart of the Balkans."
    }
  ];

  const teamMembers = [
    { id: 1, image: "/assets/new-images/team1.jpg" },
    { id: 2, image: "/assets/new-images/team2.jpg" },
    { id: 3, image: "/assets/new-images/team3.jpg" },
    { id: 4, image: "/assets/new-images/team4.jpg" },
    { id: 5, image: "/assets/new-images/team5.jpg" },
    { id: 6, image: "/assets/new-images/team6.jpg" }
  ];

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-white dark:bg-slate-900'}`}>
      
      {/* DNA Hero Section */}
      <section className={`relative py-32 overflow-hidden ${isTwThemeEnabled ? 'bg-gradient-to-br from-twBlue-500 to-twBlue-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'} text-white`}>
        {/* DNA Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1200 600" className="w-full h-full">
            <defs>
              <pattern id="dna-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 Q50,20 100,50 Q150,80 200,50" stroke="white" strokeWidth="2" fill="none" opacity="0.3">
                  <animate attributeName="d" values="M0,50 Q50,20 100,50 Q150,80 200,50;M0,50 Q50,80 100,50 Q150,20 200,50;M0,50 Q50,20 100,50 Q150,80 200,50" dur="4s" repeatCount="indefinite"/>
                </path>
                <circle cx="20" cy="50" r="3" fill="white" opacity="0.6">
                  <animate attributeName="cy" values="50;30;50;70;50" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="50" r="3" fill="white" opacity="0.6">
                  <animate attributeName="cy" values="50;70;50;30;50" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="120" cy="50" r="3" fill="white" opacity="0.6">
                  <animate attributeName="cy" values="50;30;50;70;50" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="180" cy="50" r="3" fill="white" opacity="0.6">
                  <animate attributeName="cy" values="50;70;50;30;50" dur="4s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 ">
          <h1 className={`text-white text-5xl font-bold mb-8 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Do You Know Who We Are And What We Do?
          </h1>
          <button className={`px-8 py-4 border-2 border-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            GET STARTED
          </button>
        </div>
      </section>

      {/* Inspired by Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className={`rounded-3xl shadow-2xl w-full h-96 flex items-center justify-center ${isTwThemeEnabled ? 'bg-twBlue-100 dark:bg-twBlue-900/20' : 'bg-blue-100 dark:bg-blue-900/20'}`}>
                <div className="text-center">
                  <Icon icon="heroicons:computer-desktop" className={`w-24 h-24 mx-auto mb-4 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400' : 'text-blue-600 dark:text-blue-400'}`} />
                  <p className={`text-lg font-semibold ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-white font-proximaNova' : 'text-gray-700 dark:text-white'}`}>
                    Technology & Innovation
                  </p>
                </div>
              </div>
            </div>
            <div>
                             <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                 Inspired by Technology<br />
                 and IoT
               </h2>
               <p className={`text-lg leading-relaxed mb-6 ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                 Being a community of developers, researchers and innovators, we are always curious about new opportunities that emerging IoT technologies can bring to different industries and people, and provide them through solutions and tech stack.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business by Design Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                Business by design
              </h2>
                             <p className={`text-lg leading-relaxed mb-6 ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                 Having started as a satellite internet reseller, we gained not only expertise in technology but also a unique understanding of what it takes to build a successful business partner network.
               </p>
               <p className={`text-lg leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                 A fusion of knowledge and desire to create an outstanding telematics software gave birth to GeoTrack in 2004. Since then we've been building a comprehensive ecosystem for our global channel partners maintaining human-to-human approach.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`rounded-2xl shadow-xl h-48 flex items-center justify-center ${isTwThemeEnabled ? 'bg-twGreen-100 dark:bg-twGreen-900/20' : 'bg-green-100 dark:bg-green-900/20'}`}>
                <div className="text-center">
                  <Icon icon="heroicons:users" className={`w-12 h-12 mx-auto mb-2 ${isTwThemeEnabled ? 'text-twGreen-600 dark:text-twGreen-400' : 'text-green-600 dark:text-green-400'}`} />
                  <p className={`text-sm font-semibold ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-white font-proximaNova' : 'text-gray-700 dark:text-white'}`}>
                    Team Meeting
                  </p>
                </div>
              </div>
              <div className={`rounded-2xl shadow-xl h-48 flex items-center justify-center mt-8 ${isTwThemeEnabled ? 'bg-twBrand-100 dark:bg-twBrand-900/20' : 'bg-purple-100 dark:bg-purple-900/20'}`}>
                <div className="text-center">
                  <Icon icon="heroicons:building-office" className={`w-12 h-12 mx-auto mb-2 ${isTwThemeEnabled ? 'text-twBrand-600 dark:text-twBrand-400' : 'text-purple-600 dark:text-purple-400'}`} />
                  <p className={`text-sm font-semibold ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-white font-proximaNova' : 'text-gray-700 dark:text-white'}`}>
                    Office Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community of Experts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className={`rounded-3xl shadow-2xl w-full h-96 flex items-center justify-center ${isTwThemeEnabled ? 'bg-twNavy-100 dark:bg-twNavy-900/20' : 'bg-gray-100 dark:bg-gray-900/20'}`}>
                <div className="text-center">
                  <Icon icon="heroicons:academic-cap" className={`w-24 h-24 mx-auto mb-4 ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-twNavy-400' : 'text-gray-600 dark:text-gray-400'}`} />
                  <p className={`text-lg font-semibold ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-white font-proximaNova' : 'text-gray-700 dark:text-white'}`}>
                    Training & Development
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                Community of experts
              </h2>
                             <p className={`text-lg leading-relaxed mb-6 ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                 15 years after its launch, GeoTrack is a global company committed to its family-business values. We treat each team member as a partner and every partner as a part of our big international team.
               </p>
               <p className={`text-lg leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                 We keep on applying our competencies and experience in most audacious and groundbreaking projects to benefit partners and industries, while contributing to local communities and society.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-gradient-to-r from-twBlue-500 to-twBlue-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl lg:text-6xl font-bold mb-2 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  {stat.number}
                </div>
                <div className={`text-xl ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-16 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
              Satisfied partners all over the world
            </h2>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full shadow-lg flex items-center justify-center ${isTwThemeEnabled ? 'bg-twBlue-100 dark:bg-twBlue-900/20' : 'bg-blue-100 dark:bg-blue-900/20'}`}>
                  <Icon icon="heroicons:user-circle" className={`w-16 h-16 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400' : 'text-blue-600 dark:text-blue-400'}`} />
                </div>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                Gelu I.
              </h3>
              <p className={`text-sm mb-6 ${isTwThemeEnabled ? 'text-twNavy-500 dark:text-gray-400 font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                IT Manager, Telecommunications, 51-200 employees
              </p>
              <blockquote className={`text-2xl mb-6 italic ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-300 font-proximaNova' : 'text-gray-700 dark:text-gray-300'}`}>
                "The most intuitive and user friendly GPS tracking solutions"
              </blockquote>
                             <p className={`text-lg leading-relaxed mb-6 ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                 It is for sure the platform with the most modern interface - intuitive and easy to use - Easy to implement and add trackers - A lot of features, advanced telematics reports and alerts - Fast response time from support department.
               </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="heroicons:star" className={`w-6 h-6 ${isTwThemeEnabled ? 'text-twBrand-400' : 'text-yellow-400'}`} />
                ))}
              </div>
              <div className="flex justify-end">
                <span className={`text-sm font-semibold ${isTwThemeEnabled ? 'text-twBlue-600 font-proximaNova' : 'text-blue-600'}`}>
                  Capterra
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
              Our Global Offices
            </h2>
            <p className={`text-xl ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
              Strategically located worldwide to serve our global community
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Office Selection Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {offices.map((office, index) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(index)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    selectedOffice === index
                      ? (isTwThemeEnabled ? 'bg-twBlue-500 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg')
                      : (isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 text-twNavy-700 dark:text-gray-300 hover:bg-twBlue-50 dark:hover:bg-twNavy-700' : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700')
                  } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                >
                  <div className="flex items-center">
                    <Icon icon="heroicons:map-pin" className="w-4 h-4 mr-2" />
                    {office.city}
                  </div>
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Office Details */}
              <div className={`p-8 rounded-3xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-xl border border-twNavy-100 dark:border-twNavy-700' : 'bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-gray-700'}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${isTwThemeEnabled ? 'bg-twBlue-100 dark:bg-twBlue-900/20' : 'bg-blue-100 dark:bg-blue-900/20'} flex items-center justify-center mr-4`}>
                    <Icon icon="heroicons:building-office-2" className={`w-8 h-8 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400' : 'text-blue-600 dark:text-blue-400'}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                      {offices[selectedOffice].city}
                    </h3>
                    <p className={`text-sm ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400 font-proximaNova' : 'text-blue-600 dark:text-blue-400'}`}>
                      {offices[selectedOffice].timezone}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      Address
                    </h4>
                    <div className="flex items-start">
                      <Icon icon="heroicons:map-pin" className={`w-5 h-5 mr-3 mt-1 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                      <div>
                        <p className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                          {offices[selectedOffice].address}
                        </p>
                        {offices[selectedOffice].addressLine2 && (
                          <p className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                            {offices[selectedOffice].addressLine2}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      Contact Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icon icon="heroicons:phone" className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twGreen-500' : 'text-green-500'}`} />
                        <span className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                          {offices[selectedOffice].phone}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Icon icon="heroicons:envelope" className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twBrand-500' : 'text-purple-500'}`} />
                        <span className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                          {offices[selectedOffice].email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      About This Office
                    </h4>
                    <p className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'} leading-relaxed`}>
                      {offices[selectedOffice].description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
                      <Icon icon="heroicons:map" className="w-4 h-4 mr-2 inline" />
                      View on Map
                    </button>
                    <button className={`px-6 py-3 border-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'border-twBlue-500 text-twBlue-600 hover:bg-twBlue-500 hover:text-white font-proximaNova' : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'}`}>
                      <Icon icon="heroicons:phone" className="w-4 h-4 mr-2 inline" />
                      Contact Office
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive World Map */}
              <div className="relative">
                <div className={`rounded-3xl overflow-hidden shadow-2xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 border border-twNavy-100 dark:border-twNavy-700' : 'bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700'}`}>
                  {/* Map Header */}
                  <div className={`p-6 ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} text-white`}>
                    <h4 className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                      Global Coverage
                    </h4>
                    <p className={`text-sm opacity-90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      Click on any location to view office details
                    </p>
                  </div>

                  {/* Interactive World Map SVG */}
                  <div className="relative h-96 p-6">
                    <svg viewBox="0 0 800 400" className="w-full h-full">
                      <defs>
                        <style>
                          {`
                            .map-land { fill: ${isTwThemeEnabled ? (isDark ? '#1e293b' : '#f1f5f9') : (isDark ? '#374151' : '#f3f4f6')}; stroke: ${isTwThemeEnabled ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#4b5563' : '#e5e7eb')}; stroke-width: 0.5; }
                            .map-water { fill: ${isTwThemeEnabled ? (isDark ? '#0f172a' : '#dbeafe') : (isDark ? '#1f2937' : '#dbeafe')}; }
                            .office-marker { cursor: pointer; transition: all 0.3s ease; }
                            .office-marker:hover { transform: scale(1.2); }
                            .office-active { fill: ${isTwThemeEnabled ? '#3b82f6' : '#3b82f6'}; }
                            .office-inactive { fill: ${isTwThemeEnabled ? '#6b7280' : '#6b7280'}; }
                          `}
                        </style>
                      </defs>

                      {/* World Map Background */}
                      <rect width="800" height="400" className="map-water" />
                      
                      {/* Simplified World Continents */}
                      {/* North America */}
                      <path d="M50,80 L180,60 L200,120 L180,180 L120,200 L80,160 Z" className="map-land" />
                      {/* South America */}
                      <path d="M140,220 L180,200 L200,300 L160,340 L140,300 Z" className="map-land" />
                      {/* Europe */}
                      <path d="M320,60 L400,50 L420,120 L380,140 L320,120 Z" className="map-land" />
                      {/* Africa */}
                      <path d="M320,140 L400,130 L420,280 L380,320 L320,300 Z" className="map-land" />
                      {/* Asia */}
                      <path d="M420,40 L650,30 L680,180 L640,200 L420,180 Z" className="map-land" />
                      {/* Australia */}
                      <path d="M580,260 L660,250 L680,300 L620,320 Z" className="map-land" />

                      {/* Office Markers */}
                      {offices.map((office, index) => {
                        const x = 50 + (office.coordinates.lng + 180) * (700 / 360);
                        const y = 200 - (office.coordinates.lat * (300 / 180));
                        
                        return (
                          <g key={office.id}>
                            {/* Marker Circle */}
                            <circle
                              cx={x}
                              cy={y}
                              r="8"
                              className={`office-marker ${selectedOffice === index ? 'office-active' : 'office-inactive'}`}
                              onClick={() => setSelectedOffice(index)}
                            />
                            {/* Marker Border */}
                            <circle
                              cx={x}
                              cy={y}
                              r="12"
                              fill="none"
                              stroke={selectedOffice === index ? (isTwThemeEnabled ? '#3b82f6' : '#3b82f6') : 'transparent'}
                              strokeWidth="2"
                              opacity="0.5"
                              className="office-marker"
                              onClick={() => setSelectedOffice(index)}
                            />
                            {/* Office Label */}
                            {selectedOffice === index && (
                              <g>
                                <rect
                                  x={x - 30}
                                  y={y - 35}
                                  width="60"
                                  height="20"
                                  rx="10"
                                  fill={isTwThemeEnabled ? '#3b82f6' : '#3b82f6'}
                                  opacity="0.9"
                                />
                                <text
                                  x={x}
                                  y={y - 22}
                                  textAnchor="middle"
                                  fill="white"
                                  fontSize="10"
                                  fontWeight="bold"
                                >
                                  {office.city.split(',')[0]}
                                </text>
                              </g>
                            )}
                          </g>
                        );
                      })}

                      {/* Connection Lines (optional) */}
                      <defs>
                        <pattern id="connectionLine" patternUnits="userSpaceOnUse" width="4" height="4">
                          <rect width="4" height="4" fill="transparent"/>
                          <circle cx="2" cy="2" r="1" fill={isTwThemeEnabled ? '#3b82f6' : '#3b82f6'} opacity="0.3"/>
                        </pattern>
                      </defs>
                    </svg>

                    {/* Map Legend */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`p-3 rounded-lg ${isTwThemeEnabled ? 'bg-white/90 dark:bg-twNavy-800/90' : 'bg-white/90 dark:bg-slate-800/90'} backdrop-blur-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-600' : 'border-gray-200 dark:border-gray-600'}`}>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-2 ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}></div>
                            <span className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                              Selected Office
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                            <span className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                              Other Offices
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className={`text-center p-6 rounded-2xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-lg' : 'bg-white dark:bg-slate-800 shadow-lg'}`}>
                <div className={`text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400 font-lexend' : 'text-blue-600 dark:text-blue-400'}`}>
                  {offices.length}
                </div>
                <div className={`text-sm ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Global Offices
                </div>
              </div>
              <div className={`text-center p-6 rounded-2xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-lg' : 'bg-white dark:bg-slate-800 shadow-lg'}`}>
                <div className={`text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'text-twGreen-600 dark:text-twGreen-400 font-lexend' : 'text-green-600 dark:text-green-400'}`}>
                  24/7
                </div>
                <div className={`text-sm ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Support Coverage
                </div>
              </div>
              <div className={`text-center p-6 rounded-2xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-lg' : 'bg-white dark:bg-slate-800 shadow-lg'}`}>
                <div className={`text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'text-twBrand-600 dark:text-twBrand-400 font-lexend' : 'text-purple-600 dark:text-purple-400'}`}>
                  4
                </div>
                <div className={`text-sm ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Time Zones
                </div>
              </div>
              <div className={`text-center p-6 rounded-2xl ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 shadow-lg' : 'bg-white dark:bg-slate-800 shadow-lg'}`}>
                <div className={`text-3xl font-bold mb-2 ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-twNavy-400 font-lexend' : 'text-gray-600 dark:text-gray-400'}`}>
                  3
                </div>
                <div className={`text-sm ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Continents
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-gradient-to-r from-twBlue-500 to-twBlue-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
              Meet the team
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              Learn more about GeoTrack behind-the-scenes. See what's<br />
              new and get to know the people behind the product.<br />
              #geotrackteam
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20">
                  <div className="bg-white/20 rounded-xl h-32 flex items-center justify-center">
                    <Icon icon="heroicons:users" className="w-12 h-12 text-white/60" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Team, Careers Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${isTwThemeEnabled ? 'bg-twBlue-100 dark:bg-twBlue-900/20' : 'bg-blue-100 dark:bg-blue-900/20'} flex items-center justify-center`}>
                <Icon icon="heroicons:target" className={`w-10 h-10 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400' : 'text-blue-600 dark:text-blue-400'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                GeoTrack vision, values and inspiration. Learn more about our Mission.
              </h3>
              <button className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'border-twBlue-500 text-twBlue-600 hover:bg-twBlue-500 hover:text-white font-proximaNova' : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'}`}>
                GO TO MISSION
              </button>
            </div>

            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${isTwThemeEnabled ? 'bg-twGreen-100 dark:bg-twGreen-900/20' : 'bg-green-100 dark:bg-green-900/20'} flex items-center justify-center`}>
                <Icon icon="heroicons:users" className={`w-10 h-10 ${isTwThemeEnabled ? 'text-twGreen-600 dark:text-twGreen-400' : 'text-green-600 dark:text-green-400'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                Meet a team of leaders and innovators. Get to know the people behind GeoTrack.
              </h3>
              <button className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'border-twGreen-500 text-twGreen-600 hover:bg-twGreen-500 hover:text-white font-proximaNova' : 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white'}`}>
                MEET THE TEAM
              </button>
            </div>

            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${isTwThemeEnabled ? 'bg-twBrand-100 dark:bg-twBrand-900/20' : 'bg-purple-100 dark:bg-purple-900/20'} flex items-center justify-center`}>
                <Icon icon="heroicons:document-text" className={`w-10 h-10 ${isTwThemeEnabled ? 'text-twBrand-600 dark:text-twBrand-400' : 'text-purple-600 dark:text-purple-400'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                Join our global team. Learn about career opportunities at GeoTrack.
              </h3>
              <button className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'border-twBrand-500 text-twBrand-600 hover:bg-twBrand-500 hover:text-white font-proximaNova' : 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'}`}>
                GO TO CAREERS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-gradient-to-r from-twNavy-800 to-twBlue-800' : 'bg-gradient-to-r from-slate-800 to-blue-800'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
              Start growing and optimizing business today
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              Provide smart and intuitive mobile resource management services. Impress,<br />
              win and keep customers with powerful and intuitive ecosystem.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <button className={`px-8 py-4 border-2 border-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              FIND A PARTNER
            </button>
            <button className={`px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-100 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              BECOME A PARTNER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
