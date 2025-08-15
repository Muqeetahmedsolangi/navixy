"use client";

import Button from "@/components/ui/Button";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const GPSTrackingCTASection = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();

  return (
    <section 
      className={`relative py-16 ${isTwThemeEnabled ? (isDark ? 'bg-gradient-to-br from-twNavy-900 via-twNavy-800 to-twBlue-900' : 'bg-gradient-to-br from-twNavy-900 via-twNavy-800 to-twBlue-900') : 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900'}`}
    >
      {/* Small 3D Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Vertical Lines - Very Subtle Grid */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`v-${i}`}
              className={`absolute h-full border-l ${isTwThemeEnabled ? 'border-twBlue-500/15' : 'border-blue-400/5'}`}
              style={{ left: `${(i / 30) * 100}%` }}
            ></div>
          ))}
        </div>
        {/* Horizontal Lines - Very Subtle Grid */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`h-${i}`}
              className={`absolute w-full border-t ${isTwThemeEnabled ? 'border-twBlue-500/15' : 'border-blue-400/5'}`}
              style={{ top: `${(i / 20) * 100}%` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Minimal overlay for text contrast */}
      <div className="absolute inset-0 bg-black/10 z-5"></div>



      {/* Content */}
      <div className="relative z-20 py-8">
        <div className="container mx-auto px-6">
          {/* Main Heading */}
          <div className="text-center mb-8">
            <h2 className={`text-xl md:text-2xl font-bold text-white leading-tight mb-4 ${isTwThemeEnabled ? 'font-lexend' : ''} drop-shadow-2xl`}>
              Discover full potential of GPS asset tracking
            </h2>
          </div>

          {/* Two Column Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Column - Find a Partner */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <p className={`text-base md:text-lg text-white leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova' : ''} drop-shadow-lg`}>
                  Experience state-of-the-art GPS tracking.<br />
                  Detect incompliances on the spot.<br />
                  Protect your assets and boost productivity.
                </p>
              </div>
              
              <div className="pt-4">
                <Button
                  text="FIND A PARTNER"
                  className={`px-8 py-3 text-sm font-semibold rounded border-2 transition-all shadow-lg ${isTwThemeEnabled ? 'border-white text-white hover:bg-white hover:text-twNavy-800 font-proximaNova' : 'border-white text-white hover:bg-white hover:text-slate-800'} bg-transparent`}
                />
              </div>
            </div>

            {/* Right Column - Become a Partner */}
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <p className={`text-base md:text-lg text-white leading-relaxed ${isTwThemeEnabled ? 'font-proximaNova' : ''} drop-shadow-lg`}>
                  Provide smart and cost-effective GPS tracking service.<br />
                  Stand out from competitors and impress your customers.<br />
                  Scale up your business with us.
                </p>
              </div>
              
              <div className="pt-4">
                <Button
                  text="BECOME A PARTNER"
                  className={`px-8 py-3 text-sm font-semibold rounded transition-all shadow-lg ${isTwThemeEnabled ? 'bg-white text-twNavy-800 hover:bg-gray-100 font-proximaNova' : 'bg-white text-slate-800 hover:bg-gray-100'}`}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GPSTrackingCTASection;
