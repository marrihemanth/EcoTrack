import React from 'react';
import { TrendingUp, Wallet, Target } from 'lucide-react';

const EcoImpactSummary: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Eco Impact Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total CO₂ Saved Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-emerald-50/40 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-green-100/80 group-hover:bg-green-200/80 transition-colors duration-300">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-green-700 bg-green-100/80 px-4 py-2 rounded-full">
                +12.3%
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                72.5 kg
              </h3>
              <p className="text-gray-600 font-medium text-lg">Total CO₂ Saved</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>
          </div>
        </div>

        {/* Wallet Balance Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-blue-100/80 group-hover:bg-blue-200/80 transition-colors duration-300">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-sm font-semibold text-blue-700 bg-blue-100/80 px-4 py-2 rounded-full">
                Active
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                ₹320
              </h3>
              <p className="text-gray-600 font-medium text-lg">Wallet Balance</p>
              <p className="text-sm text-gray-500">Available rewards</p>
            </div>
          </div>
        </div>

        {/* Monthly Progress Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-violet-50/40 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-purple-100/80 group-hover:bg-purple-200/80 transition-colors duration-300">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-purple-700 bg-purple-100/80 px-4 py-2 rounded-full">
                72%
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Monthly Goal
                </h3>
                <p className="text-gray-600 font-medium">72% Complete</p>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="space-y-2">
                <div className="w-full bg-gray-200/60 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-2000 ease-out shadow-lg"
                    style={{ width: '72%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>72 kg saved</span>
                  <span>100 kg target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoImpactSummary;