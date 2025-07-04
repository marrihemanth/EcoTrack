import React, { useState, useEffect } from 'react';
import { Leaf, User, Menu, X, Search, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'Dashboard', onNavigate, isDarkMode = false, onToggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Dashboard', 'Impact', 'Map', 'Rewards', 'Knowledge', 'Community', 'Profile'];

  const handleNavClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item.toLowerCase());
    }
    setIsMobileMenuOpen(false);
  };

  const handleAuthClick = () => {
    if (onNavigate) {
      onNavigate('auth');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-[16px] bg-white/20 dark:bg-gray-900/20 shadow-[0_8px_40px_rgba(0,0,0,0.15)]' 
        : 'backdrop-blur-[12px] bg-white/15 dark:bg-gray-900/15 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
    }`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/10 via-green-600/5 to-green-400/10 dark:from-green-400/10 dark:via-green-600/5 dark:to-green-800/10 pointer-events-none"></div>
      
      {/* Subtle Border */}
      <div className="absolute inset-0 border border-white/20 dark:border-gray-700/20 rounded-none pointer-events-none"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-green-400/30 dark:bg-green-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-green-300/40 dark:bg-green-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-2/3 w-1.5 h-1.5 bg-green-500/20 dark:bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick('Dashboard')}>
            <div className="relative">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:text-green-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-green-500/20 dark:bg-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative">
              <span className="text-2xl font-bold tracking-wide text-gray-800 dark:text-gray-100 uppercase font-inter group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
                EcoTrack
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
          </div>

          {/* Center Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center">
            <div className={`relative transition-all duration-300 ${
              isSearchExpanded ? 'w-80' : 'w-12'
            }`}>
              <button
                onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
              >
                <Search className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" />
              </button>
              <input
                type="text"
                placeholder="Search dashboard, tips, rewards..."
                className={`w-full h-12 pl-12 pr-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-full text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 ${
                  isSearchExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  currentPage === item 
                    ? 'text-green-700 dark:text-green-300' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                {item}
                
                {/* Hover Underline Effect */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-300 transition-all duration-300 group-hover:w-full ${
                  currentPage === item ? 'w-full' : ''
                }`}></span>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-green-500/10 dark:bg-green-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:block">
                Dark Mode
              </span>
              <button
                onClick={onToggleDarkMode}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-green-600 to-green-500' 
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className="sr-only">Toggle dark mode</span>
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                    isDarkMode ? 'translate-x-7' : 'translate-x-1'
                  }`}
                >
                  {isDarkMode ? (
                    <Moon className="h-3 w-3 text-green-600" />
                  ) : (
                    <Sun className="h-3 w-3 text-yellow-500" />
                  )}
                </span>
              </button>
            </div>

            {/* Auth Button (Desktop) */}
            <button 
              onClick={handleAuthClick}
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-green-700 to-green-500 dark:from-green-600 dark:to-green-400 text-white font-semibold hover:from-green-800 hover:to-green-600 dark:hover:from-green-700 dark:hover:to-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25"
            >
              <User className="h-4 w-4 mr-2" />
              Login | Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl mt-4 border border-white/20 dark:border-gray-600/20">
            
            {/* Mobile Search */}
            <div className="px-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600 dark:text-gray-300" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-12 pl-12 pr-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-full text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`w-full text-left px-6 py-3 text-base font-medium transition-all duration-200 ${
                  currentPage === item 
                    ? 'text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-900/20' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-white/10 dark:hover:bg-gray-700/10'
                }`}
              >
                {item}
              </button>
            ))}

            {/* Mobile Auth Button */}
            <div className="px-4 pt-4">
              <button 
                onClick={handleAuthClick}
                className="w-full flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-green-700 to-green-500 dark:from-green-600 dark:to-green-400 text-white font-semibold hover:from-green-800 hover:to-green-600 dark:hover:from-green-700 dark:hover:to-green-500 transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Login | Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Navigation Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 dark:via-green-400/50 to-transparent"></div>
    </header>
  );
};

export default Header;