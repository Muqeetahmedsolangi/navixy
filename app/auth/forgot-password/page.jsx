"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const ForgotPasswordPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Reset email sent to:', email);
      setEmailSent(true);
      setIsLoading(false);
    }, 2000);
  };

  if (emailSent) {
    return (
      <div className="space-y-8 text-center">
        {/* Success Icon */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twGreen-500 to-twBlue-500' 
          : 'bg-gradient-to-br from-green-500 to-blue-500'
        } shadow-2xl animate-pulse`}>
          <Icon icon="heroicons:check" className="w-10 h-10 text-white" />
        </div>

        <div>
          <h1 className={`text-3xl font-bold mb-4 ${isTwThemeEnabled 
            ? 'text-twNavy-800 dark:text-white font-lexend' 
            : 'text-gray-900 dark:text-white'
          }`}>
            Check your email
          </h1>
          <p className={`text-lg mb-2 ${isTwThemeEnabled 
            ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
            : 'text-gray-600 dark:text-gray-300'
          }`}>
            We've sent a password reset link to
          </p>
          <p className={`font-semibold text-lg ${isTwThemeEnabled 
            ? 'text-twBlue-600 dark:text-twBlue-400 font-proximaNova' 
            : 'text-blue-600 dark:text-blue-400'
          }`}>
            {email}
          </p>
        </div>

        <div className={`p-6 rounded-2xl ${isTwThemeEnabled 
          ? 'bg-twBlue-50 dark:bg-blue-500/10 border border-twBlue-200 dark:border-blue-500/20' 
          : 'bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20'
        }`}>
          <h3 className={`font-semibold mb-3 ${isTwThemeEnabled 
            ? 'text-twBlue-800 dark:text-blue-300 font-proximaNova' 
            : 'text-blue-800 dark:text-blue-300'
          }`}>
            Didn't receive the email?
          </h3>
          <ul className={`text-sm space-y-2 text-left ${isTwThemeEnabled 
            ? 'text-twBlue-600 dark:text-blue-400 font-proximaNova' 
            : 'text-blue-600 dark:text-blue-400'
          }`}>
            <li>• Check your spam or junk folder</li>
            <li>• Make sure you entered the correct email</li>
            <li>• Try sending the reset link again</li>
          </ul>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setEmailSent(false)}
            className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
              ? 'bg-twBlue-100 hover:bg-twBlue-200 text-twBlue-700 dark:bg-blue-500/20 dark:hover:bg-blue-500/30 dark:text-blue-300 font-proximaNova' 
              : 'bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-500/20 dark:hover:bg-blue-500/30 dark:text-blue-300'
            } shadow-lg hover:shadow-xl`}
          >
            Send another email
          </button>
          
          <Link 
            href="/auth/login" 
            className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
              ? 'text-twNavy-600 hover:text-twNavy-700 dark:text-gray-300 dark:hover:text-white font-proximaNova' 
              : 'text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            <Icon icon="heroicons:arrow-left" className="w-4 h-4 mr-2" />
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twBrand-500 to-twBlue-500' 
          : 'bg-gradient-to-br from-purple-500 to-blue-500'
        } shadow-lg`}>
          <Icon icon="heroicons:key" className="w-8 h-8 text-white" />
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${isTwThemeEnabled 
          ? 'text-twNavy-800 dark:text-white font-lexend' 
          : 'text-gray-900 dark:text-white'
        }`}>
          Forgot Password?
        </h1>
        <p className={`text-lg ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          Enter your email to reset your password
        </p>
      </div>

      {/* Reset Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Email Field */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Email Address
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:envelope" className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`group w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl ${isTwThemeEnabled 
            ? 'bg-gradient-to-r from-twBrand-500 to-twBlue-500 hover:from-twBrand-600 hover:to-twBlue-600 text-white font-proximaNova' 
            : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Icon icon="line-md:loading-loop" className="w-6 h-6 mr-3" />
              Sending reset link...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span>Send Reset Link</span>
              <Icon icon="heroicons:paper-airplane" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
          <Icon icon="heroicons:information-circle" className={`w-5 h-5 mr-2 ${isTwThemeEnabled 
            ? 'text-twNavy-600 dark:text-gray-300' 
            : 'text-gray-600 dark:text-gray-300'
          }`} />
          <h3 className={`font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-800 dark:text-white font-proximaNova' 
            : 'text-gray-800 dark:text-white'
          }`}>
            Need Help?
          </h3>
        </div>
        <p className={`text-sm ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          If you're having trouble resetting your password, please{' '}
          <Link href="/contact" className={`font-semibold transition-all duration-300 hover:scale-105 inline-block ${isTwThemeEnabled 
            ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300' 
            : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
          }`}>
            contact our support team
          </Link>
          {' '}for assistance.
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;