"use client";

import HeroSection from "@/components/partials/hero-section";
import AssetMonitoringSlider from "@/components/partials/asset-monitoring-slider";
import PartnerTestimonialsSlider from "@/components/partials/partner-testimonials-slider";
import IndustrySolutionsSection from "@/components/partials/industry-solutions-section";
import NewsBlogSection from "@/components/partials/news-blog-section";
import GPSTrackingCTASection from "@/components/partials/gps-tracking-cta-section";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";
import DualMarquee from "@/components/partials/dual-marquee";

const GetStartedPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Asset Monitoring Slider */}
      <AssetMonitoringSlider />

      {/* double slider */}
      <DualMarquee />

      {/* Partner Testimonials Slider */}
      <PartnerTestimonialsSlider />

      {/* Industry Solutions Section */}
      <IndustrySolutionsSection />
      {/* GPS Tracking CTA Section */}
      <GPSTrackingCTASection />

      {/* News & Blog Section */}
      <NewsBlogSection />



      {/* Additional Content */}
      <div className={`min-h-screen flex items-center justify-center ${isTwThemeEnabled ? (isDark ? 'tw-bg' : 'tw-bg') : 'bg-white dark:bg-slate-900'}`}>
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold ${isTwThemeEnabled ? (isDark ? 'text-twBlue-400' : 'text-twNavy-700') : 'text-slate-900 dark:text-white'} ${isTwThemeEnabled ? 'font-lexend' : ''}`}>
            Hello World
          </h1>
          <p className={`mt-4 text-lg ${isTwThemeEnabled ? (isDark ? 'text-twBlue-200' : 'text-twNavy-600') : 'text-slate-600 dark:text-slate-300'} ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
            Welcome to the Get Started page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
