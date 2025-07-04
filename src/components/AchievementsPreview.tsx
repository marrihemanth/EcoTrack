import React from 'react';
import { Award, Calendar, Star, Zap } from 'lucide-react';

const AchievementsPreview: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "Carbon Crusher",
      description: "Saved 50kg of CO₂",
      earnedDate: "Dec 15, 2024",
      color: "green",
      icon: Award,
      rarity: "Epic"
    },
    {
      id: 2,
      title: "Streak Master",
      description: "30 days of eco actions",
      earnedDate: "Dec 10, 2024",
      color: "blue",
      icon: Calendar,
      rarity: "Rare"
    },
    {
      id: 3,
      title: "Community Hero",
      description: "Top 10% contributor",
      earnedDate: "Dec 5, 2024",
      color: "purple",
      icon: Star,
      rarity: "Legendary"
    },
    {
      id: 4,
      title: "Energy Saver",
      description: "Reduced energy by 25%",
      earnedDate: "Dec 1, 2024",
      color: "yellow",
      icon: Zap,
      rarity: "Common"
    }
  ];

  const colorSchemes = {
    green: {
      bg: "from-green-50/80 to-emerald-50/40",
      icon: "text-green-600",
      badge: "bg-green-100/80 text-green-700",
      glow: "group-hover:shadow-green-500/20"
    },
    blue: {
      bg: "from-blue-50/80 to-indigo-50/40",
      icon: "text-blue-600",
      badge: "bg-blue-100/80 text-blue-700",
      glow: "group-hover:shadow-blue-500/20"
    },
    purple: {
      bg: "from-purple-50/80 to-violet-50/40",
      icon: "text-purple-600",
      badge: "bg-purple-100/80 text-purple-700",
      glow: "group-hover:shadow-purple-500/20"
    },
    yellow: {
      bg: "from-yellow-50/80 to-amber-50/40",
      icon: "text-yellow-600",
      badge: "bg-yellow-100/80 text-yellow-700",
      glow: "group-hover:shadow-yellow-500/20"
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent pointer-events-none"></div>
      
      <div className="relative">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Achievements</h3>
          <p className="text-gray-600">Recent badges and milestones</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const colors = colorSchemes[achievement.color as keyof typeof colorSchemes];
            
            return (
              <div
                key={achievement.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border border-white/30 p-6 shadow-xl hover:shadow-2xl ${colors.glow} transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-xl bg-white/60 group-hover:bg-white/80 transition-colors duration-300`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge} mb-1`}>
                        {achievement.rarity}
                      </span>
                      <span className="text-xs text-gray-500">Earned</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {achievement.earnedDate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-3 rounded-2xl font-semibold hover:from-purple-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Achievements
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPreview;