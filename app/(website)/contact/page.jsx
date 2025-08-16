"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const ContactPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    websiteUrl: '',
    country: '',
    message: '',
    promotions: false,
    dataConsent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const phoneNumbers = [
    {
      region: "USA",
      number: "+1 213 786 12 80",
      color: "twBlue"
    },
    {
      region: "International", 
      number: "+1 213 786 12 80",
      color: "twNavy"
    },
    {
      region: "US and Canada",
      number: "+1 213 786 12 80", 
      color: "twGreen"
    },
    {
      region: "Latin America",
      number: "+52 55 85 26 18 30",
      color: "twBrand"
    },
    {
      region: "Europe",
      number: "+44 204 577 23 50",
      color: "twBlue"
    },
    {
      region: "Demo/online meeting",
      subtitle: "Schedule",
      color: "twNavy"
    }
  ];

  const addresses = [
    {
      country: "USA:",
      address: "2945 Townsgate Road Suite 200\nLos Angeles, CA, 91361"
    },
    {
      country: "Mexico:",
      address: "Florencia 31, piso 10, Colonia\nJuarez Alcaldía Cuauhtemoc,\n06600 Mexico City"
    },
    {
      country: "United Kingdom:",
      address: "15 St Botolph St,\nLondon EC3A 7BB, England"
    },
    {
      country: "Serbia:",
      address: "Kneza Mihaila 3,\nBelgrade"
    }
  ];

  const emails = [
    {
      type: "Sales:",
      email: "sales@geotrack.com"
    },
    {
      type: "Support:",
      email: "support@geotrack.com"
    }
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Australia", 
    "Brazil", "Mexico", "Japan", "South Korea", "India", "China", "Other"
  ];

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-gray-50 dark:bg-slate-900'} transition-colors duration-300`}>
      
      {/* Hero Section */}
      <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} py-8`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-2xl md:text-3xl font-bold text-white mb-3 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
              Contact Us
            </h1>
            <p className={`text-base text-white/90 max-w-xl mx-auto ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
              Get in touch with our team for sales inquiries, support, or to schedule a demo.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Call Us Directly & Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Left Side - Phone Numbers */}
            <div>
              <div className="flex items-center mb-6">
                <Icon icon="heroicons:phone" className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twNavy-600' : 'text-gray-600'}`} />
                <h2 className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  Call us directly
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phoneNumbers.map((phone, index) => (
                  <div key={index} className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-lg shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-4 hover:shadow-md transition-shadow`}>
                    <h3 className={`font-semibold mb-2 ${isTwThemeEnabled ? 'text-twBlue-600 font-proximaNova' : 'text-blue-600'}`}>
                      {phone.region}
                    </h3>
                    {phone.number && (
                      <a 
                        href={`tel:${phone.number}`} 
                        className={`text-lg font-medium ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                      >
                        {phone.number}
                      </a>
                    )}
                    {phone.subtitle && (
                      <p className={`text-sm ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'} mt-1`}>
                        {phone.subtitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} rounded-xl p-6 text-white`}>
              <h2 className={`text-xl font-bold mb-3 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                Get your best offer today
              </h2>
              <p className={`text-sm mb-4 text-white/90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                Fill out the form below to schedule a call with our sales representative.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    required
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <img src="https://flagcdn.com/w20/sa.png" alt="SA" className="w-4 h-3" />
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    />
                  </div>
                  <input
                    type="url"
                    name="websiteUrl"
                    placeholder="Website URL"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                  />
                </div>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                  required
                >
                  <option value="" className="text-gray-900">Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country} className="text-gray-900">
                      {country}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                />

                <div className="space-y-2">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      name="promotions"
                      checked={formData.promotions}
                      onChange={handleInputChange}
                      className="mt-1 w-3 h-3 text-white bg-white/20 border-white/30 rounded focus:ring-white/50"
                    />
                    <span className={`text-xs text-white/90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      I agree to receive promotions from GeoTrack by email or phone.
                    </span>
                  </label>

                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      name="dataConsent"
                      checked={formData.dataConsent}
                      onChange={handleInputChange}
                      className="mt-1 w-3 h-3 text-white bg-white/20 border-white/30 rounded focus:ring-white/50"
                      required
                    />
                    <span className={`text-xs text-white/90 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      I give consent for my personal data to be collected according to the{' '}
                      <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="/terms-of-service" className="underline hover:text-white">Terms</Link>.
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  text="Submit"
                  className={`w-full px-6 py-2 bg-white hover:bg-gray-100 font-semibold rounded-lg transition-colors text-sm ${isTwThemeEnabled ? 'text-twBlue-600 font-proximaNova' : 'text-blue-600'}`}
                />
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12">
            <div className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-xl shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-6`}>
              <div className="flex items-center mb-4">
                <Icon icon="heroicons:map-pin" className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twNavy-600' : 'text-gray-600'}`} />
                <h2 className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  Our Locations
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Map of Jeddah */}
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230769.80568503842!2d39.090598899999996!3d21.5169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1643000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jeddah, Saudi Arabia"
                  ></iframe>
                </div>

                {/* Office Details */}
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-slate-700'}`}>
                    <h3 className={`text-lg font-semibold mb-3 ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                      Saudi Arabia Office
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Icon icon="heroicons:map-pin" className={`w-4 h-4 mt-1 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                        <div>
                          <p className={`font-medium text-sm ${isTwThemeEnabled ? 'tw-text-primary font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                            Al-Madinah Al-Munawarah Road
                          </p>
                          <p className={`text-sm ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                            Jeddah 21589, Saudi Arabia
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon icon="heroicons:phone" className={`w-4 h-4 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                        <a 
                          href="tel:+966126699600" 
                          className={`font-medium text-sm ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                        >
                          +966 12 669 9600
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon icon="heroicons:envelope" className={`w-4 h-4 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                        <a 
                          href="mailto:sales@geotrack.sa" 
                          className={`font-medium text-sm ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                        >
                          sales@geotrack.sa
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon icon="heroicons:chat-bubble-bottom-center-text" className={`w-4 h-4 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                        <a 
                          href="mailto:support@geotrack.sa" 
                          className={`font-medium text-sm ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                        >
                          support@geotrack.sa
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon icon="heroicons:envelope" className={`w-4 h-4 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                        <a 
                          href="mailto:sales@geotrack.com" 
                          className={`font-medium text-sm ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                        >
                          sales@geotrack.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon icon="heroicons:phone" className={`w-4 h-4 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
                        <a
                          href="tel:+12137861280" 
                          className={`font-medium text-sm ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                        >
                          +1 213 786 12 80
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Addresses & Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Addresses */}
            <div>
              <div className="flex items-center mb-4">
                <Icon icon="heroicons:building-office" className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twNavy-600' : 'text-gray-600'}`} />
                <h2 className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  Global Offices
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.slice(0, 4).map((address, index) => (
                  <div key={index} className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-lg shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-4`}>
                    <h3 className={`font-semibold mb-2 text-sm ${isTwThemeEnabled ? 'text-twBlue-600 font-proximaNova' : 'text-blue-600'}`}>
                      {address.country}
                    </h3>
                    <div className={`whitespace-pre-line text-xs ${isTwThemeEnabled ? 'tw-text-secondary font-proximaNova' : 'text-gray-600 dark:text-gray-400'}`}>
                      {address.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email & Support */}
            <div>
              <div className="flex items-center mb-4">
                <Icon icon="heroicons:envelope" className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twNavy-600' : 'text-gray-600'}`} />
                <h2 className={`text-xl font-bold ${isTwThemeEnabled ? 'font-lexend tw-text-primary' : 'text-gray-900 dark:text-white'}`}>
                  Email & Support
                </h2>
              </div>

              <div className="space-y-4">
                {emails.map((email, index) => (
                  <div key={index} className={`${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} rounded-lg shadow-sm border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-700' : 'border-gray-200 dark:border-slate-700'} p-4`}>
                    <h3 className={`font-semibold mb-1 text-sm ${isTwThemeEnabled ? 'text-twGreen-600 font-proximaNova' : 'text-green-600'}`}>
                      {email.type}
                    </h3>
                    <a 
                      href={`mailto:${email.email}`} 
                      className={`font-medium ${isTwThemeEnabled ? 'tw-text-primary hover:text-twBlue-600 font-proximaNova' : 'text-gray-900 dark:text-white hover:text-blue-600'} transition-colors`}
                    >
                      {email.email}
                    </a>
                  </div>
                ))}

                {/* Additional Contact Info */}
                <div className={`${isTwThemeEnabled ? 'bg-gradient-to-r from-twBlue-500 to-twNavy-600' : 'bg-gradient-to-r from-blue-500 to-slate-600'} rounded-lg p-4 text-white`}>
                  <h3 className={`font-semibold mb-2 text-sm ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                    Need Immediate Support?
                  </h3>
                  <p className={`mb-3 text-xs ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    Our technical support team is available 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      text="Live Chat"
                      className={`bg-white hover:bg-gray-100 px-4 py-1 rounded text-xs font-semibold transition-colors ${isTwThemeEnabled ? 'text-twBlue-600 font-proximaNova' : 'text-blue-600'}`}
                    />
                    <Button
                      text="Schedule Demo"
                      className={`bg-white/20 text-white hover:bg-white/30 border border-white/30 px-4 py-1 rounded text-xs font-semibold transition-colors ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
