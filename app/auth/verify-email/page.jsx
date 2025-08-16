"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const VerifyEmailPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
    setOtp(newOtp);
    
    // Focus the last filled input or first empty
    const lastFilledIndex = newOtp.findIndex(val => !val);
    const focusIndex = lastFilledIndex === -1 ? 5 : Math.max(0, lastFilledIndex);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.some(digit => !digit)) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('OTP submitted:', otp.join(''));
      setIsLoading(false);
      // Handle success/error here
    }, 2000);
  };

  const handleResendCode = () => {
    setTimeLeft(300);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    console.log('Resending verification code...');
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twGreen-500 to-twBrand-500' 
          : 'bg-gradient-to-br from-green-500 to-purple-500'
        } shadow-2xl animate-pulse`} style={{ animationDuration: '2s' }}>
          <Icon icon="heroicons:envelope-open" className="w-10 h-10 text-white" />
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${isTwThemeEnabled 
          ? 'text-twNavy-800 dark:text-white font-lexend' 
          : 'text-gray-900 dark:text-white'
        }`}>
          Verify Your Email
        </h1>
        <p className={`text-lg mb-2 ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          We've sent a 6-digit code to
        </p>
        <p className={`font-semibold text-lg ${isTwThemeEnabled 
          ? 'text-twBlue-600 dark:text-twBlue-400 font-proximaNova' 
          : 'text-blue-600 dark:text-blue-400'
        }`}>
          user@example.com
        </p>
      </div>

      {/* OTP Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-14 h-16 text-center text-2xl font-bold border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 transform hover:scale-105 focus:scale-110 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl ${digit ? 'bg-blue-50 dark:bg-blue-500/10' : ''}`}
              autoComplete="off"
            />
          ))}
        </div>

        {/* Timer & Resend */}
        <div className="text-center">
          {!canResend ? (
            <div className={`flex items-center justify-center space-x-2 ${isTwThemeEnabled 
              ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
              : 'text-gray-600 dark:text-gray-300'
            }`}>
              <Icon icon="heroicons:clock" className="w-5 h-5" />
              <span>Code expires in <span className={`font-bold ${isTwThemeEnabled 
                ? 'text-twBlue-600 dark:text-twBlue-400' 
                : 'text-blue-600 dark:text-blue-400'
              }`}>{formatTime(timeLeft)}</span></span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleResendCode}
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
                ? 'bg-twGreen-100 hover:bg-twGreen-200 text-twGreen-700 dark:bg-green-500/20 dark:hover:bg-green-500/30 dark:text-green-300 font-proximaNova' 
                : 'bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-500/20 dark:hover:bg-green-500/30 dark:text-green-300'
              } shadow-lg hover:shadow-xl`}
            >
              <Icon icon="heroicons:arrow-path" className="w-5 h-5" />
              <span>Resend Code</span>
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || otp.some(digit => !digit)}
          className={`group w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl ${isTwThemeEnabled 
            ? 'bg-gradient-to-r from-twGreen-500 to-twBrand-500 hover:from-twGreen-600 hover:to-twBrand-600 text-white font-proximaNova' 
            : 'bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-600 hover:to-purple-600 text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Icon icon="line-md:loading-loop" className="w-6 h-6 mr-3" />
              Verifying...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span>Verify Email</span>
              <Icon icon="heroicons:check-circle" className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </div>
          )}
        </button>
      </form>

      {/* Back to Login */}
      <div className="text-center">
        <Link 
          href="/auth/login" 
          className={`inline-flex items-center text-sm font-semibold transition-all duration-300 hover:scale-105 ${isTwThemeEnabled 
            ? 'text-twNavy-600 hover:text-twNavy-700 dark:text-gray-300 dark:hover:text-white font-proximaNova' 
            : 'text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
          }`}
        >
          <Icon icon="heroicons:arrow-left" className="w-4 h-4 mr-2" />
          Back to login
        </Link>
      </div>

      {/* Help Section */}
      <div className={`p-6 rounded-2xl ${isTwThemeEnabled 
        ? 'bg-twNavy-50 dark:bg-slate-800 border border-twNavy-200 dark:border-gray-600' 
        : 'bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-600'
      }`}>
        <div className="flex items-center mb-3">
          <Icon icon="heroicons:question-mark-circle" className={`w-5 h-5 mr-2 ${isTwThemeEnabled 
            ? 'text-twNavy-600 dark:text-gray-300' 
            : 'text-gray-600 dark:text-gray-300'
          }`} />
          <h3 className={`font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-800 dark:text-white font-proximaNova' 
            : 'text-gray-800 dark:text-white'
          }`}>
            Having trouble?
          </h3>
        </div>
        <ul className={`text-sm space-y-2 ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          <li>• Check your spam or junk folder</li>
          <li>• Make sure you entered the correct email</li>
          <li>• Try requesting a new code if this one expired</li>
          <li>• <Link href="/contact" className={`font-semibold transition-all duration-300 hover:scale-105 inline-block ${isTwThemeEnabled 
            ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300' 
            : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
          }`}>Contact support</Link> if you need help</li>
        </ul>
      </div>
    </div>
  );
};

export default VerifyEmailPage;