import React, { useState } from 'react';
import { RefreshCw, Quote, Lightbulb } from 'lucide-react';

const DailyEcoTip: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  const tips = [
    "Replace plastic with metal bottles this week.",
    "Switch to LED bulbs - they use 75% less energy and last 25 times longer.",
    "Take shorter showers to save both water and the energy used to heat it.",
    "Unplug electronics when not in use - they consume energy even when off.",
    "Choose public transport or bike to reduce your carbon footprint by 2.6 tons annually."
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
      
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="p-3 rounded-2xl bg-blue-100/80 mr-4">
              <Lightbulb className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Daily Eco Tip</h3>
              <p className="text-gray-600">Today's sustainable action</p>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-3 rounded-2xl bg-blue-100/80 hover:bg-blue-200/80 transition-all duration-300 group disabled:opacity-50"
          >
            <RefreshCw 
              className={`h-6 w-6 text-blue-600 transition-transform duration-500 ${
                isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'
              }`} 
            />
          </button>
        </div>

        <div className="relative bg-gradient-to-r from-blue-50/60 to-indigo-50/40 rounded-2xl p-6 border border-blue-100/50">
          <Quote className="h-8 w-8 text-blue-400 mb-4" />
          <div className="text-xl text-gray-800 leading-relaxed font-medium mb-4">
            "{tips[tipIndex]}"
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Tip #{tipIndex + 1} of {tips.length}
            </div>
            <div className="flex items-center space-x-2 bg-blue-100/60 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Daily</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Mark as Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyEcoTip;