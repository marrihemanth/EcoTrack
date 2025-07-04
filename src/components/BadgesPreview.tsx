import React from 'react';
import { Award, Calendar, Star } from 'lucide-react';

const BadgesPreview: React.FC = () => {
  const badges = [
    {
      id: 1,
      title: "Carbon Crusher",
      description: "Saved 50kg of CO₂",
      earnedDate: "Dec 15, 2024",
      color: "green",
      icon: Award
    },
    {
      id: 2,
      title: "Streak Master",
      description: "30 days of eco actions",
      earnedDate: "Dec 10, 2024",
      color: "blue",
      icon: Calendar
    },
    {
      id: 3,
      title: "Community Hero",
      description: "Top 10% contributor",
      earnedDate: "Dec 5, 2024",
      color: "purple",
      icon: Star
    }
  ];

  const colorSchemes = {
    green: {
      bg: "from-green-50/50 to-transparent",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-700"
    },
    blue: {
      bg: "from-blue-50/50 to-transparent",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-700"
    },
    purple: {
      bg: "from-purple-50/50 to-transparent",
      icon: "text-purple-600",
      badge: "bg-purple-100 text-purple-700"
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Achievements</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {badges.map((badge) => {
          const Icon = badge.icon;
          const colors = colorSchemes[badge.color as keyof typeof colorSchemes];
          
          return (
            <div
              key={badge.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} pointer-events-none`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}>
                    Earned
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-800 mb-2">{badge.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{badge.description}</p>
                
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {badge.earnedDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgesPreview;