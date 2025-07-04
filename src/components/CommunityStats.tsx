import React from 'react';
import { Users, TrendingUp, Globe } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const CommunityStats: React.FC = () => {
  const contributionData = {
    labels: ['Your Impact', 'Other Members'],
    datasets: [
      {
        data: [4.3, 95.7],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(229, 231, 235, 0.6)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(229, 231, 235, 1)',
        ],
        borderWidth: 2,
        cutout: '75%',
      },
    ],
  };

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Community CO₂ Saved (kg)',
        data: [420, 380, 450, 437],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const doughnutOptions = {
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
        borderColor: 'rgba(34, 197, 94, 0.2)',
        borderWidth: 1,
        cornerRadius: 12,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    },
  };

  const barOptions = {
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
        borderColor: 'rgba(34, 197, 94, 0.2)',
        borderWidth: 1,
        cornerRadius: 12,
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
  };

  return (
    <div className="mb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Community Impact</h2>
        <p className="text-gray-600">See how you're contributing to our collective environmental goals</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Community Stats Card */}
        <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent pointer-events-none"></div>
          
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-2xl bg-green-100/80 mr-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">This Month</h3>
                <p className="text-gray-600">Community stats</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/60 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-medium">Total CO₂ Saved</span>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">1,687 kg</div>
                <div className="text-sm text-green-600 font-medium">+18% vs last month</div>
              </div>
              
              <div className="bg-white/60 rounded-2xl p-6">
                <div className="text-gray-600 font-medium mb-2">Active Members</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">324</div>
                <div className="text-sm text-blue-600 font-medium">+12 new this week</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-200/50">
                <div className="text-sm text-green-800 font-medium mb-2">Your Contribution</div>
                <div className="text-2xl font-bold text-green-600 mb-1">4.3%</div>
                <p className="text-sm text-green-700">
                  You contributed 4.3% of this month's community impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution Chart */}
        <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent pointer-events-none"></div>
          
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Your Impact</h3>
              <p className="text-gray-600">Contribution breakdown</p>
            </div>
            
            <div className="relative h-48 mb-6">
              <Doughnut data={contributionData} options={doughnutOptions} />
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">4.3%</div>
                  <div className="text-sm text-gray-600">Your Impact</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Your Impact</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-transparent pointer-events-none"></div>
          
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-2xl bg-purple-100/80 mr-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Monthly Trend</h3>
                <p className="text-gray-600">Weekly progress</p>
              </div>
            </div>
            
            <div className="h-48 mb-6">
              <Bar data={monthlyData} options={barOptions} />
            </div>

            <div className="bg-white/60 rounded-2xl p-4 text-center">
              <div className="text-lg font-bold text-gray-800 mb-1">1,687 kg</div>
              <div className="text-sm text-gray-600">Total community impact this month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;