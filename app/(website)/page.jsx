"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

const HomePage = () => {
  const features = [
    {
      icon: "heroicons:home-modern",
      title: "Modern Spaces",
      description: "Discover unique and beautifully designed spaces for your stay"
    },
    {
      icon: "heroicons:map-pin",
      title: "Prime Locations",
      description: "Find accommodations in the heart of your favorite destinations"
    },
    {
      icon: "heroicons:star",
      title: "Top Rated",
      description: "Stay in highly rated properties with excellent reviews"
    },
    {
      icon: "heroicons:shield-check",
      title: "Secure Booking",
      description: "Book with confidence using our secure payment system"
    }
  ];

  const destinations = [
    {
      image: "/assets/images/all-img/card-1.png",
      title: "Tokyo, Japan",
      properties: "120+ properties"
    },
    {
      image: "/assets/images/all-img/card-2.png", 
      title: "Paris, France",
      properties: "85+ properties"
    },
    {
      image: "/assets/images/all-img/card-3.png",
      title: "New York, USA", 
      properties: "200+ properties"
    },
    {
      image: "/assets/images/all-img/card-4.png",
      title: "London, UK",
      properties: "150+ properties"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon icon="heroicons:home-modern" className="text-2xl text-primary-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">ShareSpace</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                Explore
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                Host
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard" 
                className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
              >
                Dashboard
              </Link>
              <Button 
                text="Sign Up" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Find Your Perfect
              <span className="text-primary-500 block">Stay Anywhere</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Discover unique accommodations around the world. From cozy apartments to luxury villas, 
              find the perfect space for your next adventure.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Where</label>
                  <input 
                    type="text" 
                    placeholder="Search destinations" 
                    className="w-full p-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full p-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600 dark:text-slate-300">Guests</label>
                  <select className="w-full p-3 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-slate-700 dark:text-white">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <Button 
                  text="Search" 
                  icon="heroicons:magnifying-glass"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl text-lg font-semibold transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose ShareSpace?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We make it easy to find and book the perfect accommodation for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-0 bg-slate-50 dark:bg-slate-800">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon={feature.icon} className="text-2xl text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore our most loved destinations around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border-0">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{destination.title}</h3>
                    <p className="text-sm opacity-90">{destination.properties}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join millions of travelers who trust ShareSpace for their accommodation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              text="Explore Properties" 
              className="bg-white text-primary-500 hover:bg-primary-50 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            />
            <Button 
              text="Become a Host" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Icon icon="heroicons:home-modern" className="text-2xl text-primary-500" />
                <span className="text-xl font-bold">ShareSpace</span>
              </div>
              <p className="text-slate-400 mb-4">
                Your trusted platform for finding unique accommodations worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Press</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Safety</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Cancellation</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Host</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Experiences</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Referrals</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Gift Cards</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ShareSpace. All rights reserved. | Built with DashCode NextJS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 