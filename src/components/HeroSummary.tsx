import React from 'react';
import { TrendingUp, Wallet, Target } from 'lucide-react';

const HeroSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* CO2 Saved Card */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent pointer-events-none"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
              +12.3%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">72.5 kg</h3>
          <p className="text-gray-600 font-medium">Total CO₂ Saved</p>
        </div>
      </div>

      {/* Wallet Balance Card */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Active
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">₹320</h3>
          <p className="text-gray-600 font-medium">Wallet Balance</p>
        </div>
      </div>

      {/* Monthly Progress Card */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent pointer-events-none"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              72%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Monthly Goal</h3>
          <p className="text-gray-600 font-medium mb-3">72% Complete</p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: '72%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSummary;