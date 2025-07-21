import React, { useState, useEffect } from 'react';
import { Leaf, User, Menu, X, Search, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'Dashboard', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Dashboard', 'Carbon Tracker', 'Map', 'Rewards', 'Knowledge', 'Events and NGO Collab', 'Profile'];

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

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-theme-glass shadow-theme-lg' 
        : 'bg-theme-glass shadow-theme'
    }`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-800/10 via-green-600/5 to-green-400/10 pointer-events-none"></div>
      
      {/* Subtle Border */}
      <div className="absolute inset-0 border border-theme-primary rounded-none pointer-events-none"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-green-300/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-2/3 w-1.5 h-1.5 bg-green-500/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => handleNavClick('Dashboard')}>
            <div className="relative">
              <Leaf className="h-8 w-8 text-green-theme transition-all duration-300 group-hover:text-green-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative">
              <span className="text-2xl font-bold tracking-wide text-theme-primary uppercase font-inter group-hover:text-green-theme transition-colors duration-300">
                EcoTrack
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-500 ease-out"></div>
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
                <Search className="h-5 w-5 text-theme-tertiary hover:text-green-theme transition-colors duration-200" />
              </button>
              <input
                type="text"
                placeholder="Search dashboard, tips, rewards..."
                className={`w-full h-12 pl-12 pr-4 input-theme rounded-full focus-theme transition-all duration-300 text-lg ${
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
                    ? 'text-green-theme' 
                    : 'text-theme-secondary hover:text-green-theme'
                }`}
              >
                {item}
                
                {/* Hover Underline Effect */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 group-hover:w-full ${
                  currentPage === item ? 'w-full' : ''
                }`}></span>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-3">
              <span className="hidden sm:block text-sm font-medium text-theme-secondary">
                Dark Mode
              </span>
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  isDarkMode ? 'bg-green-600' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={isDarkMode}
                aria-label="Toggle dark mode"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                >
                  {isDarkMode ? (
                    <Moon className="h-3 w-3 text-gray-600 m-0.5" />
                  ) : (
                    <Sun className="h-3 w-3 text-yellow-500 m-0.5" />
                  )}
                </span>
              </button>
            </div>

            {/* Auth Button (Desktop) */}
            <button 
              onClick={handleAuthClick}
              className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full btn-theme-primary font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-theme"
            >
              <User className="h-4 w-4 mr-2" />
              Login | Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-theme-glass hover:bg-theme-glass-hover transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-theme-primary" />
              ) : (
                <Menu className="h-6 w-6 text-theme-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-theme-glass rounded-2xl mt-4 border border-theme-primary">
            
            {/* Mobile Search */}
            <div className="px-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-theme-tertiary" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-12 pl-12 pr-4 input-theme rounded-full focus-theme"
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
                    ? 'text-green-theme bg-green-theme/10' 
                    : 'text-theme-primary hover:text-green-theme hover:bg-theme-glass'
                }`}
              >
                {item}
              </button>
            ))}

            {/* Mobile Auth Button */}
            <div className="px-4 pt-4">
              <button 
                onClick={handleAuthClick}
                className="w-full flex items-center justify-center px-6 py-3 rounded-full btn-theme-primary font-semibold transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Login | Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Navigation Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;