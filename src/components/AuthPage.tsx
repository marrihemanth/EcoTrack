import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, MapPin, Eye, EyeOff, Leaf, ArrowRight } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', location: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Auth Card */}
      <div className={`relative w-full max-w-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-300/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative p-8">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-2xl bg-green-100/80">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? 'Welcome Back' : 'Join EcoTrack'}
              </h1>
              <p className="text-gray-600">
                {isLogin ? 'Continue your eco journey' : 'Start your sustainable lifestyle today'}
              </p>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Location Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter your city or region"
                      className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 group"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-200/60"></div>
              <span className="px-4 text-sm text-gray-500 bg-white/40 rounded-full">or</span>
              <div className="flex-1 border-t border-gray-200/60"></div>
            </div>

            {/* Toggle Auth Mode */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </p>
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 hover:underline"
              >
                {isLogin ? 'Sign up for free' : 'Sign in instead'}
              </button>
            </div>

            {/* Terms (Signup only) */}
            {!isLogin && (
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By creating an account, you agree to our{' '}
                  <button className="text-green-600 hover:text-green-700 underline">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button className="text-green-600 hover:text-green-700 underline">
                    Privacy Policy
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Join 10,000+ Eco Warriors
            </h3>
            <p className="text-gray-600 text-sm">
              Track your environmental impact, earn rewards, and make a difference together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;