import React from 'react';
import { Flame, Calendar, Trophy } from 'lucide-react';

const StreakGoalsSection: React.FC = () => {
  const streakDays = 6;
  const targetDays = 30;
  const progressPercentage = (streakDays / targetDays) * 100;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-100/80 to-emerald-100/60 backdrop-blur-xl border border-white/30 p-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-300/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
      
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-2xl bg-green-200/80 mr-4">
            <Flame className="h-8 w-8 text-green-700" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">6-Day Eco Streak</h3>
            <p className="text-gray-600">Keep up the great work!</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Streak Progress */}
          <div className="bg-white/60 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-700 font-medium">Progress to 30-day goal</span>
              <span className="text-2xl font-bold text-green-600">{streakDays}/{targetDays}</span>
            </div>
            
            <div className="w-full bg-gray-200/60 rounded-full h-4 overflow-hidden mb-4">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all duration-2000 ease-out shadow-lg"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <span>Started Dec 15</span>
              <span>{Math.round(progressPercentage)}% complete</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/60 rounded-2xl p-4 text-center">
              <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-800">24</div>
              <div className="text-sm text-gray-600">Days remaining</div>
            </div>
            <div className="bg-white/60 rounded-2xl p-4 text-center">
              <Trophy className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Streak rewards</div>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-4 border border-green-200/50">
            <p className="text-green-800 font-medium text-center">
              🌱 You're doing amazing! Just 24 more days to unlock the "Eco Champion" badge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakGoalsSection;