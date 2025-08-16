"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const LoginPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login submitted:', formData);
      setIsLoading(false);
      // Handle success/error here
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic
  };

  return (
    <div className="space-y-4">
      
      {/* Header */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twBlue-500 to-twBrand-500' 
          : 'bg-gradient-to-br from-blue-500 to-purple-500'
        } shadow-lg`}>
          <Icon icon="heroicons:lock-closed" className="w-6 h-6 text-white" />
        </div>
        <h1 className={`text-2xl font-bold mb-1 ${isTwThemeEnabled 
          ? 'text-twNavy-800 dark:text-white font-lexend' 
          : 'text-gray-900 dark:text-white'
        }`}>
          Welcome Back
        </h1>
        <p className={`text-sm ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          Sign in to your account
        </p>
      </div>

      {/* Social Login */}
      <div className="space-y-2">
        <button
          onClick={() => handleSocialLogin('google')}
          className={`group w-full flex items-center justify-center px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
            ? 'border-twNavy-200 hover:border-twBlue-300 hover:bg-twBlue-50 text-twNavy-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10 font-proximaNova' 
            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10'
          } shadow-lg hover:shadow-xl`}
        >
          <Icon icon="logos:google-icon" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm">Continue with Google</span>
        </button>
        
        <button
          onClick={() => handleSocialLogin('microsoft')}
          className={`group w-full flex items-center justify-center px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
            ? 'border-twNavy-200 hover:border-twBlue-300 hover:bg-twBlue-50 text-twNavy-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10 font-proximaNova' 
            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10'
          } shadow-lg hover:shadow-xl`}
        >
          <Icon icon="logos:microsoft-icon" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm">Continue with Microsoft</span>
        </button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className={`w-full border-t-2 ${isTwThemeEnabled 
            ? 'border-twNavy-200 dark:border-gray-600' 
            : 'border-gray-200 dark:border-gray-600'
          }`}></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className={`px-4 bg-white dark:bg-slate-900 font-medium ${isTwThemeEnabled 
            ? 'text-twNavy-500 dark:text-gray-400 font-proximaNova' 
            : 'text-gray-500 dark:text-gray-400'
          }`}>
            Or continue with email
          </span>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Email Field */}
        <div className="space-y-1">
          <label className={`block text-xs font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Email Address
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:envelope" className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl text-sm`}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label className={`block text-xs font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Password
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:lock-closed" className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl text-sm`}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-300 hover:scale-110 ${isTwThemeEnabled 
                ? 'text-twNavy-400 hover:text-twBlue-500 dark:text-gray-400 dark:hover:text-blue-400' 
                : 'text-gray-400 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400'
              }`}
            >
              <Icon 
                icon={showPassword ? "heroicons:eye-slash" : "heroicons:eye"} 
                className="w-4 h-4" 
              />
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center cursor-pointer group">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className={`w-4 h-4 rounded border transition-all duration-300 focus:ring-2 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'text-twBlue-500 border-twNavy-300 focus:ring-twBlue-400 dark:border-gray-600 dark:bg-slate-700' 
                : 'text-blue-500 border-gray-300 focus:ring-blue-400 dark:border-gray-600 dark:bg-slate-700'
              }`}
            />
            <span className={`ml-2 text-xs font-medium group-hover:scale-105 transition-transform duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
              : 'text-gray-600 dark:text-gray-300'
            }`}>
              Remember me
            </span>
          </label>
          
          <Link 
            href="/auth/forgot-password" 
            className={`text-xs font-semibold transition-all duration-300 hover:scale-105 ${isTwThemeEnabled 
              ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300 font-proximaNova' 
              : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            }`}
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`group w-full py-3 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl ${isTwThemeEnabled 
            ? 'bg-gradient-to-r from-twBlue-500 to-twBrand-500 hover:from-twBlue-600 hover:to-twBrand-600 text-white font-proximaNova' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Icon icon="line-md:loading-loop" className="w-5 h-5 mr-2" />
              <span className="text-sm">Signing you in...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-sm">Sign In</span>
              <Icon icon="heroicons:arrow-right" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          )}
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center">
        <p className={`text-xs ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          Don't have an account?{' '}
          <Link 
            href="/auth/signup" 
            className={`font-bold transition-all duration-300 hover:scale-105 inline-block ${isTwThemeEnabled 
              ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300 font-proximaNova' 
              : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            }`}
          >
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;