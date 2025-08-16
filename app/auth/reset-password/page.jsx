"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const ResetPasswordPage = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset:', formData);
      setIsLoading(false);
      // Handle success/error here
    }, 2000);
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

  const passwordStrength = getPasswordStrength(formData.newPassword);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = [
    'bg-red-500',
    'bg-orange-500', 
    'bg-yellow-500',
    'bg-blue-500',
    'bg-green-500'
  ];

  const passwordRequirements = [
    { test: formData.newPassword.length >= 8, text: 'At least 8 characters' },
    { test: /[a-z]/.test(formData.newPassword), text: 'One lowercase letter' },
    { test: /[A-Z]/.test(formData.newPassword), text: 'One uppercase letter' },
    { test: /[0-9]/.test(formData.newPassword), text: 'One number' },
    { test: /[^A-Za-z0-9]/.test(formData.newPassword), text: 'One special character' }
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${isTwThemeEnabled 
          ? 'bg-gradient-to-br from-twBrand-500 to-twGreen-500' 
          : 'bg-gradient-to-br from-purple-500 to-green-500'
        } shadow-lg`}>
          <Icon icon="heroicons:shield-check" className="w-8 h-8 text-white" />
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${isTwThemeEnabled 
          ? 'text-twNavy-800 dark:text-white font-lexend' 
          : 'text-gray-900 dark:text-white'
        }`}>
          Reset Password
        </h1>
        <p className={`text-lg ${isTwThemeEnabled 
          ? 'text-twNavy-600 dark:text-gray-300 font-proximaNova' 
          : 'text-gray-600 dark:text-gray-300'
        }`}>
          Create your new secure password
        </p>
      </div>

      {/* Reset Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* New Password Field */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            New Password
          </label>
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${isTwThemeEnabled 
              ? 'text-twNavy-400 group-focus-within:text-twBlue-500' 
              : 'text-gray-400 group-focus-within:text-blue-500'
            }`}>
              <Icon icon="heroicons:lock-closed" className="w-5 h-5" />
            </div>
            <input
              type={showNewPassword ? 'text' : 'password'}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className={`w-full pl-12 pr-14 py-4 border-2 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-20 ${isTwThemeEnabled 
                ? 'border-twNavy-200 focus:border-twBlue-400 focus:ring-twBlue-400 text-twNavy-800 placeholder-twNavy-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 font-proximaNova' 
                : 'border-gray-200 focus:border-blue-400 focus:ring-blue-400 text-gray-900 placeholder-gray-400 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400'
              } shadow-lg hover:shadow-xl`}
              placeholder="Enter new password"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className={`absolute inset-y-0 right-0 pr-4 flex items-center transition-colors duration-300 hover:scale-110 ${isTwThemeEnabled 
                ? 'text-twNavy-400 hover:text-twBlue-500 dark:text-gray-400 dark:hover:text-blue-400' 
                : 'text-gray-400 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400'
              }`}
            >
              <Icon 
                icon={showNewPassword ? "heroicons:eye-slash" : "heroicons:eye"} 
                className="w-5 h-5" 
              />
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {formData.newPassword && (
            <div className="space-y-3">
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

        {/* Password Requirements */}
        {formData.newPassword && (
          <div className={`p-4 rounded-2xl ${isTwThemeEnabled 
            ? 'bg-twNavy-50 dark:bg-slate-800 border border-twNavy-200 dark:border-gray-600' 
            : 'bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-600'
          }`}>
            <h4 className={`text-sm font-semibold mb-3 ${isTwThemeEnabled 
              ? 'text-twNavy-800 dark:text-white font-proximaNova' 
              : 'text-gray-800 dark:text-white'
            }`}>
              Password Requirements:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {passwordRequirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon 
                    icon={req.test ? "heroicons:check-circle" : "heroicons:x-circle"} 
                    className={`w-4 h-4 ${req.test 
                      ? 'text-green-500' 
                      : isTwThemeEnabled 
                        ? 'text-twNavy-400 dark:text-gray-400' 
                        : 'text-gray-400'
                    }`}
                  />
                  <span className={`text-xs ${req.test 
                    ? 'text-green-600 dark:text-green-400 font-medium' 
                    : isTwThemeEnabled 
                      ? 'text-twNavy-600 dark:text-gray-300' 
                      : 'text-gray-600 dark:text-gray-300'
                  } ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    {req.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <label className={`block text-sm font-semibold ${isTwThemeEnabled 
            ? 'text-twNavy-700 dark:text-white font-proximaNova' 
            : 'text-gray-700 dark:text-white'
          }`}>
            Confirm New Password
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
              placeholder="Confirm your new password"
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
              {formData.newPassword === formData.confirmPassword ? (
                <>
                  <Icon icon="heroicons:check-circle" className="w-4 h-4 text-green-500" />
                  <span className={`text-xs text-green-600 dark:text-green-400 font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    Passwords match
                  </span>
                </>
              ) : (
                <>
                  <Icon icon="heroicons:x-circle" className="w-4 h-4 text-red-500" />
                  <span className={`text-xs text-red-600 dark:text-red-400 font-medium ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>
                    Passwords do not match
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || passwordStrength < 3 || formData.newPassword !== formData.confirmPassword}
          className={`group w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl ${isTwThemeEnabled 
            ? 'bg-gradient-to-r from-twBrand-500 to-twGreen-500 hover:from-twBrand-600 hover:to-twGreen-600 text-white font-proximaNova' 
            : 'bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600 text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <Icon icon="line-md:loading-loop" className="w-6 h-6 mr-3" />
              Updating password...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span>Reset Password</span>
              <Icon icon="heroicons:shield-check" className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
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

      {/* Security Notice */}
      <div className={`p-6 rounded-2xl ${isTwThemeEnabled 
        ? 'bg-twGreen-50 dark:bg-green-500/10 border border-twGreen-200 dark:border-green-500/20' 
        : 'bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20'
      }`}>
        <div className="flex items-center mb-3">
          <Icon icon="heroicons:shield-check" className={`w-5 h-5 mr-2 ${isTwThemeEnabled 
            ? 'text-twGreen-600 dark:text-green-400' 
            : 'text-green-600 dark:text-green-400'
          }`} />
          <h3 className={`font-semibold ${isTwThemeEnabled 
            ? 'text-twGreen-800 dark:text-green-300 font-proximaNova' 
            : 'text-green-800 dark:text-green-300'
          }`}>
            Security Tip
          </h3>
        </div>
        <p className={`text-sm ${isTwThemeEnabled 
          ? 'text-twGreen-600 dark:text-green-400 font-proximaNova' 
          : 'text-green-600 dark:text-green-400'
        }`}>
          Choose a unique password that you don't use for other accounts. Consider using a password manager for better security.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;