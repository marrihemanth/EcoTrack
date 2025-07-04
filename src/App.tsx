import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import EcoImpactSummary from './components/EcoImpactSummary';
import WeeklyPerformanceChart from './components/WeeklyPerformanceChart';
import StreakGoalsSection from './components/StreakGoalsSection';
import DailyEcoTip from './components/DailyEcoTip';
import AchievementsPreview from './components/AchievementsPreview';
import CommunityStats from './components/CommunityStats';
import ImpactTracker from './components/ImpactTracker';
import ProfileSetup from './components/ProfileSetup';
import RewardsPage from './components/RewardsPage';
import KnowledgeHub from './components/KnowledgeHub';
import AuthPage from './components/AuthPage';
import CommunityPage from './components/CommunityPage';
import EcoMap from './components/EcoMap';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }

    // Trigger entrance animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    // Save dark mode preference
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsVisible(false);
    
    // Re-trigger animations for the new page
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Render Auth page
  if (currentPage === 'auth') {
    return (
      <div className={`transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <AuthPage />
      </div>
    );
  }

  // Render EcoMap page
  if (currentPage === 'map') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header currentPage="Map" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <EcoMap />
      </div>
    );
  }

  // Render Community page
  if (currentPage === 'community') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header currentPage="Community" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <CommunityPage />
      </div>
    );
  }

  // Render Knowledge Hub page
  if (currentPage === 'knowledge') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header currentPage="Knowledge" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <KnowledgeHub />
      </div>
    );
  }

  // Render Rewards page
  if (currentPage === 'rewards') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header currentPage="Rewards" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <RewardsPage />
      </div>
    );
  }

  // Render Profile Setup page
  if (currentPage === 'profile') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header currentPage="Profile" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <ProfileSetup />
      </div>
    );
  }

  // Render Impact Tracker page
  if (currentPage === 'impact') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header currentPage="Impact" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        <ImpactTracker />
      </div>
    );
  }

  // Render Dashboard (default page)
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/30 transition-colors duration-300 ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header currentPage="Dashboard" onNavigate={handleNavigation} isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
      
      {/* Add top padding to account for fixed header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent transition-colors duration-300">
              Welcome back, Sarah!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
              Your eco-friendly journey continues. Every small action makes a big difference.
            </p>
          </div>

          {/* Eco Impact Summary Panel */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <EcoImpactSummary />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Left Column */}
            <div className="space-y-8">
              {/* Weekly Performance Chart */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <WeeklyPerformanceChart />
              </div>

              {/* Streak & Goals Section */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <StreakGoalsSection />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Daily Eco Tip */}
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <DailyEcoTip />
              </div>

              {/* Achievements Preview */}
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <AchievementsPreview />
              </div>
            </div>
          </div>

          {/* Community Stats Section */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CommunityStats />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;