import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { TrendingUp, Trophy, Medal, Award, Users, User } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ImpactTracker: React.FC = () => {
  const [activeView, setActiveView] = useState<'personal' | 'community'>('personal');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for charts
  const personalData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Your CO₂ Saved (kg)',
        data: [8.2, 12.5, 15.3, 9.8, 18.7, 22.1, 16.4],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(34, 197, 94, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const communityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Community CO₂ Saved (kg)',
        data: [420, 380, 450, 437, 512, 489, 534],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: 'rgba(31, 41, 55, 1)',
        bodyColor: 'rgba(31, 41, 55, 1)',
        borderColor: activeView === 'personal' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          title: function(context: any) {
            return context[0].label;
          },
          label: function(context: any) {
            return `${context.parsed.y} kg CO₂ saved`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'rgba(107, 114, 128, 1)',
          font: {
            size: 12,
            weight: '500',
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'rgba(107, 114, 128, 1)',
          font: {
            size: 12,
            weight: '500',
          },
          callback: function(value: any) {
            return value + ' kg';
          }
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  // Mock leaderboard data
  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', co2Saved: 156.8, isCurrentUser: false },
    { rank: 2, name: 'Sarah Johnson', co2Saved: 142.3, isCurrentUser: true },
    { rank: 3, name: 'Michael Rodriguez', co2Saved: 138.9, isCurrentUser: false },
    { rank: 4, name: 'Emma Thompson', co2Saved: 125.4, isCurrentUser: false },
    { rank: 5, name: 'David Kim', co2Saved: 118.7, isCurrentUser: false },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const currentData = activeView === 'personal' ? personalData : communityData;
  const totalSaved = currentData.datasets[0].data.reduce((sum, value) => sum + value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Impact Tracker
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Monitor your environmental impact and see how you compare with the community
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
              <div className="flex">
                <button
                  onClick={() => setActiveView('personal')}
                  className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeView === 'personal'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Personal Impact</span>
                </button>
                <button
                  onClick={() => setActiveView('community')}
                  className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeView === 'community'
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>Community Impact</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart Section */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${
                activeView === 'personal' ? 'from-green-50/60 to-transparent' : 'from-blue-50/60 to-transparent'
              } pointer-events-none transition-all duration-500`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {activeView === 'personal' ? 'Your Weekly Impact' : 'Community Weekly Impact'}
                    </h2>
                    <p className="text-gray-600">CO₂ savings over the last 7 days</p>
                  </div>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    activeView === 'personal' ? 'bg-green-100/80' : 'bg-blue-100/80'
                  }`}>
                    <TrendingUp className={`h-5 w-5 ${
                      activeView === 'personal' ? 'text-green-600' : 'text-blue-600'
                    }`} />
                    <span className={`text-sm font-semibold ${
                      activeView === 'personal' ? 'text-green-700' : 'text-blue-700'
                    }`}>
                      +18% vs last week
                    </span>
                  </div>
                </div>

                <div className="h-80 mb-6">
                  <Line data={currentData} options={chartOptions} />
                </div>

                {/* Chart Summary Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/40 rounded-2xl">
                    <div className="text-2xl font-bold text-gray-800">{totalSaved.toFixed(1)} kg</div>
                    <div className="text-sm text-gray-600">Total this week</div>
                  </div>
                  <div className="text-center p-4 bg-white/40 rounded-2xl">
                    <div className="text-2xl font-bold text-gray-800">{(totalSaved / 7).toFixed(1)} kg</div>
                    <div className="text-sm text-gray-600">Daily average</div>
                  </div>
                  <div className="text-center p-4 bg-white/40 rounded-2xl">
                    <div className={`text-2xl font-bold ${
                      activeView === 'personal' ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {Math.max(...currentData.datasets[0].data).toFixed(1)} kg
                    </div>
                    <div className="text-sm text-gray-600">Best day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-transparent pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-2xl bg-purple-100/80 mr-4">
                    <Trophy className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
                    <p className="text-gray-600">Top performers this month</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {leaderboardData.map((user, index) => (
                    <div
                      key={user.rank}
                      className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                        user.isCurrentUser
                          ? 'bg-gradient-to-r from-green-100/80 to-emerald-100/60 border border-green-200/50'
                          : user.rank <= 3
                          ? 'bg-gradient-to-r from-yellow-50/80 to-amber-50/40 border border-yellow-200/30'
                          : 'bg-white/40 hover:bg-white/60 border border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-10 h-10">
                            {getRankIcon(user.rank)}
                          </div>
                          <div>
                            <div className={`font-semibold ${
                              user.isCurrentUser ? 'text-green-800' : 
                              user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                            }`}>
                              {user.name}
                              {user.isCurrentUser && (
                                <span className="ml-2 text-xs bg-green-200/80 text-green-800 px-2 py-1 rounded-full">
                                  You
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">
                              Rank #{user.rank}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            user.isCurrentUser ? 'text-green-700' : 
                            user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                          }`}>
                            {user.co2Saved} kg
                          </div>
                          <div className="text-sm text-gray-500">CO₂ saved</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Full Leaderboard Button */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-purple-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Full Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactTracker;