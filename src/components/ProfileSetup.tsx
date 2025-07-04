import React, { useState, useEffect } from 'react';
import { User, MapPin, CheckCircle, Save, Award, Calendar, Star, Zap } from 'lucide-react';

const ProfileSetup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    ecoHabits: [] as string[],
    tipPreference: 'daily'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const ecoHabitsOptions = [
    { id: 'recycling', label: 'Recycling', icon: '♻️' },
    { id: 'cycling', label: 'Cycling', icon: '🚴' },
    { id: 'public-transport', label: 'Public Transport', icon: '🚌' },
    { id: 'plant-based-diet', label: 'Plant-Based Diet', icon: '🌱' }
  ];

  const tipPreferenceOptions = [
    { id: 'daily', label: 'Daily', description: 'Get tips every day' },
    { id: 'weekly', label: 'Weekly', description: 'Get tips once a week' },
    { id: 'none', label: 'None', description: 'No tips for now' }
  ];

  const earnedBadges = [
    {
      id: 1,
      title: "Eco Warrior",
      description: "Completed profile setup",
      earnedDate: "Dec 20, 2024",
      color: "green",
      icon: Award,
      rarity: "Common"
    },
    {
      id: 2,
      title: "First Steps",
      description: "Started your eco journey",
      earnedDate: "Dec 15, 2024",
      color: "blue",
      icon: Star,
      rarity: "Rare"
    },
    {
      id: 3,
      title: "Community Member",
      description: "Joined the eco community",
      earnedDate: "Dec 10, 2024",
      color: "purple",
      icon: CheckCircle,
      rarity: "Epic"
    },
    {
      id: 4,
      title: "Quick Learner",
      description: "Read 5 eco tips",
      earnedDate: "Dec 8, 2024",
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

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, location: e.target.value }));
  };

  const handleEcoHabitChange = (habitId: string) => {
    setFormData(prev => ({
      ...prev,
      ecoHabits: prev.ecoHabits.includes(habitId)
        ? prev.ecoHabits.filter(id => id !== habitId)
        : [...prev.ecoHabits, habitId]
    }));
  };

  const handleTipPreferenceChange = (preference: string) => {
    setFormData(prev => ({ ...prev, tipPreference: preference }));
  };

  const handleSave = () => {
    console.log('Saving profile data:', formData);
    // Here you would typically save to a backend or local storage
    alert('Profile saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Profile Setup
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Personalize your eco journey and track your environmental impact
            </p>
          </div>
        </div>

        {/* Profile Form Card */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-2xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-300/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-green-100/80 mr-4">
                  <User className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
                  <p className="text-gray-600">Help us customize your experience</p>
                </div>
              </div>

              <div className="space-y-8">
                
                {/* Location Field */}
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <MapPin className="inline h-5 w-5 mr-2 text-green-600" />
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={handleLocationChange}
                    placeholder="Enter your city or region"
                    className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 text-lg"
                  />
                </div>

                {/* Eco Habits Section */}
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <CheckCircle className="inline h-5 w-5 mr-2 text-green-600" />
                    Eco Habits
                  </label>
                  <p className="text-gray-600 mb-6">Select the eco-friendly practices you currently follow</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ecoHabitsOptions.map((habit) => (
                      <label
                        key={habit.id}
                        className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                          formData.ecoHabits.includes(habit.id)
                            ? 'bg-gradient-to-r from-green-100/80 to-emerald-100/60 border-green-300/50 shadow-lg'
                            : 'bg-white/40 border-white/30 hover:bg-white/60 hover:border-green-200/50'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <input
                            type="checkbox"
                            checked={formData.ecoHabits.includes(habit.id)}
                            onChange={() => handleEcoHabitChange(habit.id)}
                            className="w-5 h-5 text-green-600 bg-white/60 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                          />
                          <span className="text-2xl">{habit.icon}</span>
                          <span className={`font-semibold transition-colors duration-300 ${
                            formData.ecoHabits.includes(habit.id) ? 'text-green-800' : 'text-gray-700'
                          }`}>
                            {habit.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tip Preference Section */}
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <Star className="inline h-5 w-5 mr-2 text-green-600" />
                    Tip Preference
                  </label>
                  <p className="text-gray-600 mb-6">How often would you like to receive eco tips?</p>
                  
                  <div className="space-y-4">
                    {tipPreferenceOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 border-2 flex items-center justify-between ${
                          formData.tipPreference === option.id
                            ? 'bg-gradient-to-r from-blue-100/80 to-indigo-100/60 border-blue-300/50 shadow-lg'
                            : 'bg-white/40 border-white/30 hover:bg-white/60 hover:border-blue-200/50'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <input
                            type="radio"
                            name="tipPreference"
                            value={option.id}
                            checked={formData.tipPreference === option.id}
                            onChange={() => handleTipPreferenceChange(option.id)}
                            className="w-5 h-5 text-blue-600 bg-white/60 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <div>
                            <div className={`font-semibold transition-colors duration-300 ${
                              formData.tipPreference === option.id ? 'text-blue-800' : 'text-gray-700'
                            }`}>
                              {option.label}
                            </div>
                            <div className="text-sm text-gray-600">{option.description}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Save Button */}
                <div className="pt-8">
                  <button
                    onClick={handleSave}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                  >
                    <Save className="h-6 w-6" />
                    <span>Save Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Earned Badges Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent pointer-events-none"></div>
            
            <div className="relative">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Earned Badges</h2>
                <p className="text-gray-600">Your achievements and milestones</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {earnedBadges.map((badge) => {
                  const Icon = badge.icon;
                  const colors = colorSchemes[badge.color as keyof typeof colorSchemes];
                  
                  return (
                    <div
                      key={badge.id}
                      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border border-white/30 p-6 shadow-xl hover:shadow-2xl ${colors.glow} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05] cursor-pointer`}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                      
                      <div className="relative text-center">
                        <div className="flex justify-center mb-4">
                          <div className={`p-3 rounded-xl bg-white/60 group-hover:bg-white/80 transition-colors duration-300`}>
                            <Icon className={`h-8 w-8 ${colors.icon}`} />
                          </div>
                        </div>
                        
                        <div className="flex justify-center mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                            {badge.rarity}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                          {badge.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{badge.description}</p>
                        
                        <div className="flex items-center justify-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {badge.earnedDate}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;