"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const PartnerTestimonialsSlider = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-loop through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: "warren-m",
      name: "Warren M.",
      position: "Director, Information Technology and Services",
      company: "11-50 employees",
      avatar: "/assets/images/avatar/av-1.svg",
      testimonial: "Amazing Platform",
      review: "The GeoTrack team are professional, courteous and always willing to listen. Great company and great people. This is the most comprehensive platform I have to integrate new devices.",
      rating: 5,
      companyLogo: "Capterra"
    },
    {
      id: "sarah-k",
      name: "Sarah K.",
      position: "Fleet Manager",
      company: "Transportation Services",
      avatar: "/assets/images/avatar/av-2.svg",
      testimonial: "Outstanding Support",
      review: "Incredible platform with real-time tracking capabilities. The customer support team goes above and beyond to help. We've reduced our operational costs by 30% since implementation.",
      rating: 5,
      companyLogo: "TrustPilot"
    },
    {
      id: "michael-r",
      name: "Michael R.",
      position: "Operations Director",
      company: "Logistics Company",
      avatar: "/assets/images/avatar/av-3.svg",
      testimonial: "Game Changer",
      review: "This telematics solution transformed our business operations. The analytics dashboard provides insights we never had before. Highly recommend for any fleet management needs.",
      rating: 5,
      companyLogo: "G2"
    },
    {
      id: "elena-v",
      name: "Elena V.",
      position: "CEO",
      company: "Tech Startup",
      avatar: "/assets/images/avatar/av-4.svg",
      testimonial: "Exceptional Quality",
      review: "The API integration was seamless and the documentation is excellent. Our development team was able to implement the solution quickly and efficiently.",
      rating: 5,
      companyLogo: "Capterra"
    }
  ];

  return (
    <section className={`py-12 relative overflow-hidden ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-900' : 'bg-twBlue-500') : (isDark ? 'bg-slate-900' : 'bg-blue-500')}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={`w-full h-full ${isTwThemeEnabled ? (isDark ? 'bg-twBlue-800' : 'bg-twNavy-900') : (isDark ? 'bg-slate-800' : 'bg-blue-900')}`} style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${isTwThemeEnabled ? (isDark ? '#3BAFF3' : '#0F2D53') : (isDark ? '#3B82F6' : '#1E40AF')} 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${isTwThemeEnabled ? (isDark ? '#0F2D53' : '#3BAFF3') : (isDark ? '#1E40AF' : '#3B82F6')} 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 text-white ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Satisfied partners all over the world
          </h2>
        </div>

        {/* Main Layout: 20% Navigation + 80% Slider */}
        <div className="flex items-center gap-6">
          {/* Vertical Navigation - 20% Width (Left Side) */}
          <div className="w-1/5 flex justify-center">
            <div className="flex flex-col space-y-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/60 hover:bg-white/80 shadow-md'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* Ring around active bullet */}
                  {activeTestimonial === index && (
                    <div className="absolute -inset-2 rounded-full border-2 border-white/50 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Card - 80% Width */}
          <div className="w-4/5">
            <div className={`relative rounded-xl p-6 md:p-8 shadow-2xl ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-800 border border-twBlue-500/20' : 'bg-white') : (isDark ? 'bg-slate-800 border border-slate-600' : 'bg-white')}`}>
              
              {/* Quote Icon */}
              <div className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center ${isTwThemeEnabled ? 'bg-twBlue-500/10' : 'bg-blue-500/10'}`}>
                <Icon icon="heroicons:chat-bubble-bottom-center-text" className={`w-4 h-4 ${isTwThemeEnabled ? 'text-twBlue-500' : 'text-blue-500'}`} />
              </div>

              {/* Main Content */}
              <div className="text-center space-y-4 mt-2">
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className={`w-16 h-16 rounded-full overflow-hidden border-3 ${isTwThemeEnabled ? 'border-twBlue-500' : 'border-blue-500'} shadow-md`}>
                    <div className={`w-full h-full flex items-center justify-center text-lg font-bold text-white ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'}`}>
                      {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Name & Position */}
                <div>
                  <h3 className={`text-lg font-bold ${isTwThemeEnabled ? (isDark ? 'text-white' : 'text-twNavy-800') : (isDark ? 'text-white' : 'text-slate-900')} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className={`text-xs ${isTwThemeEnabled ? (isDark ? 'text-twBlue-200' : 'text-twNavy-600') : (isDark ? 'text-slate-400' : 'text-slate-600')} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}
                  </p>
                </div>

                {/* Testimonial Title */}
                <h4 className={`text-xl md:text-2xl font-bold ${isTwThemeEnabled ? (isDark ? 'text-twBlue-400' : 'text-twNavy-700') : (isDark ? 'text-slate-200' : 'text-slate-800')} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
                  "{testimonials[activeTestimonial].testimonial}"
                </h4>

                {/* Review Text */}
                <p className={`text-sm leading-relaxed max-w-2xl mx-auto ${isTwThemeEnabled ? (isDark ? 'text-twBlue-100' : 'text-twNavy-600') : (isDark ? 'text-slate-300' : 'text-slate-600')} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  {testimonials[activeTestimonial].review}
                </p>

                {/* Star Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon 
                      key={i} 
                      icon="heroicons:star" 
                      className={`w-4 h-4 ${isTwThemeEnabled ? (isDark ? 'text-twBrand-hoverBlue' : 'text-twBrand-hoverBlue') : 'text-yellow-400'}`} 
                    />
                  ))}
                </div>

                {/* Company Logo */}
                <div className="pt-2">
                  <div className={`inline-flex items-center px-3 py-1 rounded-md ${isTwThemeEnabled ? (isDark ? 'bg-twNavy-700' : 'bg-twBlue-50') : (isDark ? 'bg-slate-700' : 'bg-blue-50')}`}>
                    <Icon icon="heroicons:building-office" className={`w-4 h-4 mr-1 ${isTwThemeEnabled ? (isDark ? 'text-twBlue-400' : 'text-twBlue-500') : (isDark ? 'text-blue-400' : 'text-blue-500')}`} />
                    <span className={`text-sm font-semibold ${isTwThemeEnabled ? (isDark ? 'text-twBlue-300' : 'text-twBlue-600') : (isDark ? 'text-blue-300' : 'text-blue-600')} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                      {testimonials[activeTestimonial].companyLogo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonialsSlider;
