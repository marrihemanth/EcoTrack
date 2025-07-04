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

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('Dashboard');

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsVisible(false);
    
    // Re-trigger animations for the new page
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  };

  // Render Auth page
  if (currentPage === 'auth') {
    return <AuthPage />;
  }

  // Render Community page
  if (currentPage === 'community') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <Header currentPage="Community" onNavigate={handleNavigation} />
        <CommunityPage />
      </div>
    );
  }

  // Render Knowledge Hub page
  if (currentPage === 'knowledge') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <Header currentPage="Knowledge" onNavigate={handleNavigation} />
        <KnowledgeHub />
      </div>
    );
  }

  // Render Rewards page
  if (currentPage === 'rewards') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <Header currentPage="Rewards" onNavigate={handleNavigation} />
        <RewardsPage />
      </div>
    );
  }

  // Render Profile Setup page
  if (currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <Header currentPage="Profile" onNavigate={handleNavigation} />
        <ProfileSetup />
      </div>
    );
  }

  // Render Impact Tracker page
  if (currentPage === 'impact') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
        <Header currentPage="Impact" onNavigate={handleNavigation} />
        <ImpactTracker />
      </div>
    );
  }

  // Render Dashboard (default page)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <Header currentPage="Dashboard" onNavigate={handleNavigation} />
      
      {/* Add top padding to account for fixed header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Welcome back, Sarah!
            </h1>
            <p className="text-xl text-gray-600 font-medium">
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