import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CommunityImpact: React.FC = () => {
  const data = {
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
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    },
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Impact</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stats Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-white/20 p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none"></div>
          
          <div className="relative">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-800">This Month</h4>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-medium">Total CO₂ Saved</span>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800">1,687 kg</div>
              </div>
              
              <div>
                <div className="text-gray-600 font-medium mb-2">Active Members</div>
                <div className="text-2xl font-bold text-gray-800">324</div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2">Your Contribution</div>
                <div className="text-lg font-bold text-green-600">4.3%</div>
                <p className="text-sm text-gray-500 mt-1">
                  You contributed 4.3% of this month's community impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-white/20 p-8 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent pointer-events-none"></div>
          
          <div className="relative">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Contribution Distribution
            </h4>
            
            <div className="relative h-64">
              <Doughnut data={data} options={options} />
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">4.3%</div>
                  <div className="text-sm text-gray-600">Your Impact</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-6">
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
      </div>
    </div>
  );
};

export default CommunityImpact;