"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const SignupPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      console.log('Signup submitted:', formData);
      setIsLoading(false);
      // Handle success/error here
    }, 2000);
  };

  const handleSocialSignup = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Implement social signup logic
  };

  // Password strength calculation
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = [
    'bg-red-500',
    'bg-orange-500', 
    'bg-yellow-500',
    'bg-blue-500',
    'bg-green-500'
  ];

  return (
    <div className="space-y-3">
      
      {/* Header */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twGreen-500 to-twBlue-500' 
          : 'bg-gradient-to-br from-green-500 to-blue-500'
        } shadow-lg`}>
          <Icon icon="heroicons:user-plus" className="w-6 h-6 text-white" />
        </div>
        <h1 className={`text-2xl font-bold mb-1 ${isTwThemeEnabled 
          ? 'text-twNavy-800 dark:text-white font-lexend' 
          : 'text-gray-900 dark:text-white'
        }`}>
          Create Account
        </h1>
        <p className={`text-sm ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          Start your GPS tracking journey
        </p>
      </div>

      {/* Social Signup */}
      <div className="grid grid-cols-1 gap-2">
        <button
          onClick={() => handleSocialSignup('google')}
          className={`group w-full flex items-center justify-center px-4 py-2 border rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
            ? 'border-twNavy-200 hover:border-twBlue-300 hover:bg-twBlue-50 text-twNavy-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10 font-proximaNova' 
            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10'
          } shadow-lg hover:shadow-xl`}
        >
          <Icon icon="logos:google-icon" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs">Google</span>
        </button>
        
        <button
          onClick={() => handleSocialSignup('microsoft')}
          className={`group w-full flex items-center justify-center px-4 py-2 border rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${isTwThemeEnabled 
            ? 'border-twNavy-200 hover:border-twBlue-300 hover:bg-twBlue-50 text-twNavy-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10 font-proximaNova' 
            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white dark:hover:bg-blue-500/10'
          } shadow-lg hover:shadow-xl`}
        >
          <Icon icon="logos:microsoft-icon" className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs">Microsoft</span>
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
            Or create with email
          </span>
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ${isTwThemeEnabled 
              ? 'text-twNavy-700 dark:text-white font-proximaNova' 
              : 'text-gray-700 dark:text-white'
            }`}>
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="First name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className={`block text-sm font-semibold ${isTwThemeEnabled 
              ? 'text-twNavy-700 dark:text-white font-proximaNova' 
              : 'text-gray-700 dark:text-white'
            }`}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Last name"
              required
            />
          </div>
        </div>

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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Company Field */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Company Name <span className="text-gray-400">(Optional)</span>
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:building-office-2" className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-4 py-4 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Password
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:lock-closed" className="w-5 h-5" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Create a password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute inset-y-0 right-0 pr-4 flex items-center transition-colors duration-300 hover:scale-110 ${isTwThemeEnabled 
                ? 'text-twNavy-400 hover:text-twBlue-500 dark:text-gray-400 dark:hover:text-blue-400' 
                : 'text-gray-400 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400'
              }`}
            >
              <Icon 
                icon={showPassword ? "heroicons:eye-slash" : "heroicons:eye"} 
                className="w-5 h-5" 
              />
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${strengthColors[passwordStrength - 1] || 'bg-gray-300'}`}
                    style={{ width: `${(passwordStrength / 5) * 100}%` }}
                  ></div>
                </div>
                <span className={`text-xs font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                  {strengthLabels[passwordStrength - 1] || 'Very Weak'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Confirm Password
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:lock-closed" className="w-5 h-5" />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={`absolute inset-y-0 right-0 pr-4 flex items-center transition-colors duration-300 hover:scale-110 ${isTwThemeEnabled 
                ? 'text-twNavy-400 hover:text-twBlue-500 dark:text-gray-400 dark:hover:text-blue-400' 
                : 'text-gray-400 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400'
              }`}
            >
              <Icon 
                icon={showConfirmPassword ? "heroicons:eye-slash" : "heroicons:eye"} 
                className="w-5 h-5" 
              />
            </button>
          </div>
          
          {/* Password Match Indicator */}
          {formData.confirmPassword && (
            <div className="flex items-center space-x-2">
              {formData.password === formData.confirmPassword ? (
                <>
                  <Icon icon="heroicons:check-circle" className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Passwords match</span>
                </>
              ) : (
                <>
                  <Icon icon="heroicons:x-circle" className="w-4 h-4 text-red-500" />
                  <span className="text-xs text-red-600 dark:text-red-400 font-medium">Passwords do not match</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            className={`w-5 h-5 mt-1 rounded-lg border-2 transition-all duration-300 focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
              ? 'text-twBlue-500 border-twNavy-300 focus:ring-twBlue-400 dark:border-gray-600 dark:bg-slate-700' 
              : 'text-blue-500 border-gray-300 focus:ring-blue-400 dark:border-gray-600 dark:bg-slate-700'
            }`}
            required
          />
          <div className={`text-sm ${isTwThemeEnabled 
            ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
            : 'text-gray-600 dark:text-gray-300'
          }`}>
            I agree to the{' '}
            <Link href="/terms" className={`font-semibold transition-all duration-300 hover:scale-105 inline-block ${isTwThemeEnabled 
              ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300' 
              : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            }`}>
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className={`font-semibold transition-all duration-300 hover:scale-105 inline-block ${isTwThemeEnabled 
              ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300' 
              : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            }`}>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !formData.agreeTerms || formData.password !== formData.confirmPassword}
          className={`group w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl ${isTwThemeEnabled 
            ? 'bg-gradient-to-r from-twGreen-500 to-twBlue-500 hover:from-twGreen-600 hover:to-twBlue-600 text-white font-proximaNova' 
            : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Icon icon="line-md:loading-loop" className="w-6 h-6 mr-3" />
              Creating your account...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span>Create Account</span>
              <Icon icon="heroicons:arrow-right" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          )}
        </button>
      </form>

      {/* Sign In Link */}
      <div className="text-center">
        <p className={`text-sm ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          Already have an account?{' '}
          <Link 
            href="/auth/login" 
            className={`font-bold transition-all duration-300 hover:scale-105 inline-block ${isTwThemeEnabled 
              ? 'text-twBlue-600 hover:text-twBlue-700 dark:text-twBlue-400 dark:hover:text-twBlue-300 font-proximaNova' 
              : 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
            }`}
          >
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;