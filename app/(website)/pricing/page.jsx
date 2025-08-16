"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const PricingPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [openFaq, setOpenFaq] = useState(0);

  const pricingPlans = [
    {
      name: "Basic",
      price: "$250",
      period: "/mo",
      description: "Essential features to help you get started with GeoTrack. Perfect for prototyping and small projects.",
      buttonText: "Get free trial",
      buttonStyle: "primary",
      highlight: false,
      features: [
        "Fully-featured platform",
        "Unlimited scalability", 
        "App customization",
        "Data residency choice",
        "Technical support"
      ],
      tags: ["Cloud"]
    },
    {
      name: "Pro", 
      price: "$500",
      period: "/mo",
      description: "A usage-based plan for small to medium projects. Unlimited resources with advanced configuration options. Provide your solutions to anyone. Only pay for what you use with no fixed contract.",
      buttonText: "Get free trial",
      buttonStyle: "primary",
      highlight: true,
      features: [
        "Priority access to new IoT devices",
        "Enhanced app customization",
        "Marketplace app publishing",
        "Onboarding and solution design"
      ],
      tags: ["Cloud"]
    },
    {
      name: "Custom",
      price: "$1,000",
      period: "/mo", 
      description: "Custom volume-based prices for medium to large projects, cloud or on-premise deployment, and resale. Contact our sales team to learn more.",
      buttonText: "Get free trial",
      buttonStyle: "primary",
      highlight: false,
      features: [
        "Dealer management",
        "API and On-premise advisory",
        "Video conferencing support"
      ],
      tags: ["Cloud", "On-premise"]
    }
  ];

  const faqs = [
    {
      question: "When will I be billed?",
      answer: "GeoTrack charges for the previous month's usage at the beginning of each month.",
      isOpen: true
    },
    {
      question: "Does price depend on the deployment type (Cloud PaaS / On-Premise)?",
      answer: "Pricing varies based on deployment type. Cloud PaaS offers flexible usage-based pricing, while On-Premise has custom enterprise pricing structures.",
      isOpen: false
    },
    {
      question: "Is there an activation fee?",
      answer: "No, there are no activation fees. You only pay for what you use after your free trial period ends.",
      isOpen: false
    },
    {
      question: "Can I upgrade / downgrade my subscription later?",
      answer: "Yes, you can change your subscription plan at any time. Changes will be reflected in your next billing cycle.",
      isOpen: false
    },
    {
      question: "Are there any limits or restrictions on usage?",
      answer: "Each plan has different usage limits. Basic and Pro plans have generous limits, while Custom plans offer unlimited usage based on your specific needs.",
      isOpen: false
    },
    {
      question: "What payment method do you accept?",
      answer: "We accept all major credit cards, bank transfers, and enterprise invoicing for qualified customers.",
      isOpen: false
    },
    {
      question: "Where should I direct pricing-related questions?",
      answer: "For pricing questions, contact our sales team at sales@geotrack.com or use our contact form. We're happy to help with custom quotes and plan recommendations.",
      isOpen: false
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className={`min-h-screen ${isTwThemeEnabled ? 'tw-bg' : 'bg-white dark:bg-slate-900'}`}>
      
      {/* Hero Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-gradient-to-br from-twNavy-50 to-twBlue-50 dark:from-twNavy-900 dark:to-twBlue-900' : 'bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900'}`}>
        <div className="container mx-auto px-6 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
            Start for free, then<br />
            only pay for what you use
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
            GeoTrack democratizes telematics for safer and effective businesses,<br />
            by offering you flexible usage and volume-based plans.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.highlight 
                    ? isTwThemeEnabled
                      ? 'bg-white dark:bg-twNavy-800 border-2 border-twBlue-500 shadow-2xl'
                      : 'bg-white dark:bg-slate-800 border-2 border-blue-500 shadow-2xl'
                    : isTwThemeEnabled
                      ? 'bg-white dark:bg-twNavy-800 border border-twNavy-200 dark:border-twNavy-600 shadow-xl hover:shadow-2xl'
                      : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl'
                }`}
              >
                {plan.highlight && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold text-white ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}>
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-5xl font-bold ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400 font-lexend' : 'text-blue-600 dark:text-blue-400'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${isTwThemeEnabled ? 'text-twNavy-500 dark:text-gray-400 font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                      {plan.period}
                    </span>
                  </div>
                  {index === 0 && (
                    <p className={`text-sm mb-4 ${isTwThemeEnabled ? 'text-twNavy-500 dark:text-gray-400 font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                      14 day trial • no credit card required
                    </p>
                  )}
                  <p className={`text-sm leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mb-8">
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    plan.highlight
                      ? isTwThemeEnabled
                        ? 'bg-twBlue-500 hover:bg-twBlue-600 text-white font-proximaNova'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                      : isTwThemeEnabled
                        ? 'bg-twGreen-500 hover:bg-twGreen-600 text-white font-proximaNova'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Icon 
                        icon="heroicons:check-circle" 
                        className={`w-5 h-5 mr-3 ${isTwThemeEnabled ? 'text-twGreen-500' : 'text-green-500'}`}
                      />
                      <span className={`${isTwThemeEnabled ? 'text-twNavy-700 dark:text-gray-300 font-proximaNova' : 'text-gray-700 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-6">
                  {plan.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-700 dark:bg-twBlue-900/20 dark:text-twBlue-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-700 dark:bg-twBlue-900/20 dark:text-twBlue-400 font-proximaNova' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'}`}>
              FLEXIBLE & TRANSPARENT PRICING
            </span>
            <h2 className={`text-4xl font-bold mb-8 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
              GeoTrack charges on two factors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Functionality */}
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400 font-lexend' : 'text-blue-600 dark:text-blue-400'}`}>
                  Functionality
                </h3>
                <p className={`text-lg leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Pay only for the functionality you use. Start with industry-leading GPS tracking, then add modules like premium maps or video telematics as needed.
                </p>
              </div>

              {/* Usage */}
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400 font-lexend' : 'text-blue-600 dark:text-blue-400'}`}>
                  Usage
                </h3>
                <p className={`text-lg leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                  Get charged for active connections only (known as concurrent licenses). As your count increases, the cost per device consistently reduces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Apps Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
                Core apps
              </h2>
              <p className={`text-lg leading-relaxed ${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'}`}>
                A comprehensive suite of web and mobile apps for mobile resource management, incorporating GPS tracking, fleet management, and field service. Achieve security, compliance, productivity, safety, and sustainability all in one place.
              </p>
            </div>
            <div className="relative">
              <div className={`bg-gradient-to-br ${isTwThemeEnabled ? 'from-twBlue-500 to-twBrand-500' : 'from-blue-500 to-purple-500'} rounded-3xl p-8 text-white text-center`}>
                <Icon icon="heroicons:device-phone-mobile" className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <h3 className={`text-2xl font-bold mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  Mobile & Web Apps
                </h3>
                <p className={`${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  Complete mobile resource management solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-twNavy-50 dark:bg-twNavy-900' : 'bg-gray-50 dark:bg-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-8 ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-lexend' : 'text-gray-900 dark:text-white'}`}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800 border border-twNavy-200 dark:border-twNavy-600' : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-600'} shadow-lg`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${isTwThemeEnabled ? 'bg-twBlue-100 text-twBlue-600 dark:bg-twBlue-900/20 dark:text-twBlue-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'}`}>
                      <Icon icon="heroicons:question-mark" className="w-4 h-4" />
                    </div>
                    <h3 className={`text-lg font-semibold ${isTwThemeEnabled ? 'text-twNavy-800 dark:text-white font-proximaNova' : 'text-gray-900 dark:text-white'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <Icon 
                    icon={openFaq === index ? "heroicons:minus" : "heroicons:plus"} 
                    className={`w-5 h-5 transition-transform duration-200 ${isTwThemeEnabled ? 'text-twBlue-600 dark:text-twBlue-400' : 'text-blue-600 dark:text-blue-400'}`}
                  />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <p className={`${isTwThemeEnabled ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' : 'text-gray-600 dark:text-gray-300'} leading-relaxed`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isTwThemeEnabled ? 'bg-gradient-to-r from-twNavy-800 to-twBlue-800' : 'bg-gradient-to-r from-slate-800 to-blue-800'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-6 ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
              Discover full potential of GPS asset tracking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className={`text-xl font-bold mb-4 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                Experience state-of-the-art GPS tracking.<br />
                Detect incompliances on the spot.
              </h3>
              <button className={`px-8 py-4 border-2 border-white rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                FIND A PARTNER
              </button>
            </div>

            <div className="text-center">
              <h3 className={`text-xl font-bold mb-4 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                Provide smart and intuitive mobile resource management services.<br />
                Impress, win and keep customers with powerful and intuitive ecosystem.
              </h3>
              <button className={`px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-100 ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                BECOME A PARTNER
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
