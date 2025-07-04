import React, { useState, useEffect } from 'react';
import { Wallet, Gift, Star, ShoppingBag, Zap, Coffee, Leaf, Award, Filter } from 'lucide-react';

const RewardsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'available' | 'redeemed'>('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock rewards data
  const rewardsData = [
    {
      id: 1,
      title: '₹50 Eco Store Coupon',
      pointsRequired: 150,
      description: 'Discount on sustainable products',
      icon: ShoppingBag,
      color: 'green',
      status: 'available',
      category: 'Shopping'
    },
    {
      id: 2,
      title: '₹100 Plant Nursery Voucher',
      pointsRequired: 300,
      description: 'Buy plants for your home',
      icon: Leaf,
      color: 'emerald',
      status: 'available',
      category: 'Plants'
    },
    {
      id: 3,
      title: 'Free Coffee at Green Café',
      pointsRequired: 75,
      description: 'Enjoy organic, fair-trade coffee',
      icon: Coffee,
      color: 'amber',
      status: 'redeemed',
      category: 'Food & Drink'
    },
    {
      id: 4,
      title: '₹200 Solar Panel Discount',
      pointsRequired: 500,
      description: 'Renewable energy for your home',
      icon: Zap,
      color: 'yellow',
      status: 'available',
      category: 'Energy'
    },
    {
      id: 5,
      title: 'Eco Workshop Access',
      pointsRequired: 200,
      description: 'Learn sustainable living practices',
      icon: Award,
      color: 'blue',
      status: 'available',
      category: 'Education'
    },
    {
      id: 6,
      title: '₹25 Organic Food Voucher',
      pointsRequired: 100,
      description: 'Fresh, organic groceries',
      icon: Gift,
      color: 'purple',
      status: 'redeemed',
      category: 'Food & Drink'
    }
  ];

  const colorSchemes = {
    green: {
      bg: 'from-green-50/80 to-emerald-50/40',
      icon: 'text-green-600',
      button: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
      badge: 'bg-green-100/80 text-green-700',
      glow: 'group-hover:shadow-green-500/20'
    },
    emerald: {
      bg: 'from-emerald-50/80 to-teal-50/40',
      icon: 'text-emerald-600',
      button: 'from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600',
      badge: 'bg-emerald-100/80 text-emerald-700',
      glow: 'group-hover:shadow-emerald-500/20'
    },
    amber: {
      bg: 'from-amber-50/80 to-orange-50/40',
      icon: 'text-amber-600',
      button: 'from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
      badge: 'bg-amber-100/80 text-amber-700',
      glow: 'group-hover:shadow-amber-500/20'
    },
    yellow: {
      bg: 'from-yellow-50/80 to-amber-50/40',
      icon: 'text-yellow-600',
      button: 'from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600',
      badge: 'bg-yellow-100/80 text-yellow-700',
      glow: 'group-hover:shadow-yellow-500/20'
    },
    blue: {
      bg: 'from-blue-50/80 to-indigo-50/40',
      icon: 'text-blue-600',
      button: 'from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600',
      badge: 'bg-blue-100/80 text-blue-700',
      glow: 'group-hover:shadow-blue-500/20'
    },
    purple: {
      bg: 'from-purple-50/80 to-violet-50/40',
      icon: 'text-purple-600',
      button: 'from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600',
      badge: 'bg-purple-100/80 text-purple-700',
      glow: 'group-hover:shadow-purple-500/20'
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All', count: rewardsData.length },
    { id: 'available', label: 'Available', count: rewardsData.filter(r => r.status === 'available').length },
    { id: 'redeemed', label: 'Redeemed', count: rewardsData.filter(r => r.status === 'redeemed').length }
  ];

  const filteredRewards = rewardsData.filter(reward => {
    if (activeFilter === 'all') return true;
    return reward.status === activeFilter;
  });

  const currentPoints = 275; // Mock current points

  const handleRedeem = (rewardId: number, pointsRequired: number) => {
    if (currentPoints >= pointsRequired) {
      console.log(`Redeeming reward ${rewardId}`);
      alert('Reward redeemed successfully!');
    } else {
      alert(`You need ${pointsRequired - currentPoints} more points to redeem this reward.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Rewards Store
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Redeem your eco points for amazing rewards and sustainable products
            </p>
          </div>
        </div>

        {/* Wallet Balance Card */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-emerald-50/30 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-300/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
            
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-4 rounded-2xl bg-green-100/80 mr-6">
                    <Wallet className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Wallet Balance</h2>
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl font-bold text-green-600">{currentPoints}</div>
                      <div className="text-lg text-gray-600">Eco Points</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-100/80 px-6 py-3 rounded-2xl">
                    <div className="text-sm text-green-700 font-medium">This Month</div>
                    <div className="text-2xl font-bold text-green-800">+85 pts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-12">
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
              <div className="flex space-x-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id as any)}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeFilter === tab.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-green-600 hover:bg-white/40'
                    }`}
                  >
                    <Filter className="h-4 w-4" />
                    <span>{tab.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeFilter === tab.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRewards.map((reward, index) => {
              const Icon = reward.icon;
              const colors = colorSchemes[reward.color as keyof typeof colorSchemes];
              const canRedeem = currentPoints >= reward.pointsRequired && reward.status === 'available';
              const isRedeemed = reward.status === 'redeemed';
              
              return (
                <div
                  key={reward.id}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${colors.bg} backdrop-blur-xl border border-white/30 p-8 shadow-2xl hover:shadow-3xl ${colors.glow} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
                    isRedeemed ? 'opacity-75' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                  
                  {isRedeemed && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gray-100/90 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold">
                        Redeemed
                      </div>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-white/60 group-hover:bg-white/80 transition-colors duration-300`}>
                        <Icon className={`h-8 w-8 ${colors.icon}`} />
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge} mb-2`}>
                          {reward.category}
                        </div>
                        <div className="text-sm text-gray-600">Points Required</div>
                        <div className="text-2xl font-bold text-gray-800">{reward.pointsRequired}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {reward.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{reward.description}</p>
                    
                    <div className="space-y-4">
                      {/* Points Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Your Points</span>
                          <span className="font-semibold text-gray-800">{currentPoints}/{reward.pointsRequired}</span>
                        </div>
                        <div className="w-full bg-gray-200/60 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                              canRedeem ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'
                            }`}
                            style={{ width: `${Math.min((currentPoints / reward.pointsRequired) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Redeem Button */}
                      <button
                        onClick={() => handleRedeem(reward.id, reward.pointsRequired)}
                        disabled={!canRedeem || isRedeemed}
                        className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                          isRedeemed
                            ? 'bg-gray-400 cursor-not-allowed'
                            : canRedeem
                            ? `bg-gradient-to-r ${colors.button} transform hover:scale-105`
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <Star className="h-5 w-5" />
                        <span>
                          {isRedeemed ? 'Already Redeemed' : canRedeem ? 'Redeem Now' : `Need ${reward.pointsRequired - currentPoints} more points`}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredRewards.length === 0 && (
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center py-16">
              <div className="p-6 rounded-full bg-gray-100/80 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Gift className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No rewards found</h3>
              <p className="text-gray-600">Try changing your filter to see more rewards.</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mt-16 text-center">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-200/50 p-8">
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to earn more points?</h3>
                <p className="text-gray-600 mb-6">Complete eco-friendly actions and track your impact to earn more rewards!</p>
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Eco Actions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;