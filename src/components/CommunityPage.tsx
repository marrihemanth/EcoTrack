import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Trophy, TrendingUp, Users, Leaf, Award, Calendar, MapPin } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard'>('feed');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock feed data
  const feedData = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Mumbai, India',
        level: 'Eco Warrior'
      },
      action: 'saved 12.5kg CO₂',
      description: 'Used public transport for the entire week instead of driving! 🚌',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      isLiked: false,
      badge: 'Transport Hero',
      impact: '+12.5kg CO₂'
    },
    {
      id: 2,
      user: {
        name: 'Alex Chen',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Delhi, India',
        level: 'Green Champion'
      },
      action: 'planted 5 trees',
      description: 'Community tree planting event was amazing! Every tree counts 🌳',
      timestamp: '4 hours ago',
      likes: 42,
      comments: 15,
      isLiked: true,
      badge: 'Tree Planter',
      impact: '+5 trees'
    },
    {
      id: 3,
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Bangalore, India',
        level: 'Sustainability Expert'
      },
      action: 'reduced energy consumption by 30%',
      description: 'Switched to LED bulbs and solar panels. The savings are incredible! ⚡',
      timestamp: '6 hours ago',
      likes: 38,
      comments: 12,
      isLiked: false,
      badge: 'Energy Saver',
      impact: '-30% energy'
    },
    {
      id: 4,
      user: {
        name: 'Rahul Gupta',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Chennai, India',
        level: 'Eco Enthusiast'
      },
      action: 'started composting',
      description: 'Week 1 of home composting complete! Turning kitchen waste into garden gold 🌱',
      timestamp: '8 hours ago',
      likes: 19,
      comments: 6,
      isLiked: true,
      badge: 'Waste Warrior',
      impact: '2kg waste diverted'
    },
    {
      id: 5,
      user: {
        name: 'Anita Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Pune, India',
        level: 'Green Innovator'
      },
      action: 'organized beach cleanup',
      description: 'Collected 50kg of plastic waste with 20 volunteers! Ocean cleanup success 🌊',
      timestamp: '1 day ago',
      likes: 67,
      comments: 23,
      isLiked: false,
      badge: 'Community Leader',
      impact: '50kg plastic removed'
    }
  ];

  // Mock leaderboard data
  const leaderboardData = [
    {
      rank: 1,
      user: {
        name: 'Alex Chen',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Delhi, India'
      },
      co2Saved: 156.8,
      points: 1250,
      streak: 45,
      badges: 12
    },
    {
      rank: 2,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Mumbai, India'
      },
      co2Saved: 142.3,
      points: 1180,
      streak: 38,
      badges: 10,
      isCurrentUser: true
    },
    {
      rank: 3,
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Bangalore, India'
      },
      co2Saved: 138.9,
      points: 1150,
      streak: 42,
      badges: 11
    },
    {
      rank: 4,
      user: {
        name: 'Anita Patel',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Pune, India'
      },
      co2Saved: 125.4,
      points: 1020,
      streak: 28,
      badges: 9
    },
    {
      rank: 5,
      user: {
        name: 'Rahul Gupta',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        location: 'Chennai, India'
      },
      co2Saved: 118.7,
      points: 980,
      streak: 35,
      badges: 8
    }
  ];

  const handleLike = (postId: number) => {
    console.log(`Liked post ${postId}`);
    // Handle like functionality
  };

  const handleComment = (postId: number) => {
    console.log(`Comment on post ${postId}`);
    // Handle comment functionality
  };

  const handleShare = (postId: number) => {
    console.log(`Share post ${postId}`);
    // Handle share functionality
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Award className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Transport Hero': 'bg-blue-100/80 text-blue-700',
      'Tree Planter': 'bg-green-100/80 text-green-700',
      'Energy Saver': 'bg-yellow-100/80 text-yellow-700',
      'Waste Warrior': 'bg-purple-100/80 text-purple-700',
      'Community Leader': 'bg-red-100/80 text-red-700'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-100/80 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Connect with fellow eco warriors and share your sustainable journey
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-12">
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === 'feed'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>Community Feed</span>
                </button>
                <button
                  onClick={() => setActiveTab('leaderboard')}
                  className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === 'leaderboard'
                      ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  <Trophy className="h-5 w-5" />
                  <span>Leaderboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Community Feed */}
          {activeTab === 'feed' && (
            <div className="space-y-8">
              {feedData.map((post, index) => (
                <div
                  key={post.id}
                  className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none"></div>
                  
                  <div className="relative">
                    {/* User Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={post.user.avatar}
                          alt={post.user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                        />
                        <div>
                          <h3 className="font-bold text-gray-800">{post.user.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>{post.user.location}</span>
                            <span>•</span>
                            <span className="text-green-600 font-medium">{post.user.level}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(post.badge)} mb-1`}>
                          {post.badge}
                        </div>
                        <div className="text-sm text-gray-500">{post.timestamp}</div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Leaf className="h-5 w-5 text-green-600" />
                        <span className="text-lg font-semibold text-gray-800">
                          {post.user.name.split(' ')[0]} {post.action}
                        </span>
                        <div className="bg-green-100/80 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.impact}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{post.description}</p>
                    </div>

                    {/* Engagement Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-red-50/50 group ${
                            post.isLiked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                          }`}
                        >
                          <Heart className={`h-5 w-5 transition-all duration-300 ${
                            post.isLiked ? 'fill-current' : 'group-hover:scale-110'
                          }`} />
                          <span className="font-medium">{post.likes}</span>
                        </button>
                        
                        <button
                          onClick={() => handleComment(post.id)}
                          className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group"
                        >
                          <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium">{post.comments}</span>
                        </button>
                        
                        <button
                          onClick={() => handleShare(post.id)}
                          className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-600 hover:text-green-600 hover:bg-green-50/50 transition-all duration-300 group"
                        >
                          <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium">Share</span>
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        {post.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Leaderboard */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              {/* Stats Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent pointer-events-none"></div>
                  <div className="relative text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">2,847 kg</div>
                    <div className="text-sm text-gray-600">Total CO₂ Saved</div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent pointer-events-none"></div>
                  <div className="relative text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">324</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-transparent pointer-events-none"></div>
                  <div className="relative text-center">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">156</div>
                    <div className="text-sm text-gray-600">Badges Earned</div>
                  </div>
                </div>
              </div>

              {/* Leaderboard List */}
              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <div
                    key={user.rank}
                    className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                      user.isCurrentUser
                        ? 'bg-gradient-to-r from-green-100/80 to-emerald-100/60 border border-green-200/50 shadow-xl'
                        : user.rank <= 3
                        ? 'bg-gradient-to-r from-yellow-50/80 to-amber-50/40 border border-yellow-200/30 shadow-lg'
                        : 'bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl hover:bg-white/80'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center justify-center w-12 h-12">
                          {getRankIcon(user.rank)}
                        </div>
                        
                        <img
                          src={user.user.avatar}
                          alt={user.user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/50"
                        />
                        
                        <div>
                          <div className={`font-bold text-lg ${
                            user.isCurrentUser ? 'text-green-800' : 
                            user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                          }`}>
                            {user.user.name}
                            {user.isCurrentUser && (
                              <span className="ml-2 text-xs bg-green-200/80 text-green-800 px-2 py-1 rounded-full">
                                You
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-3 w-3 mr-1" />
                            {user.user.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-6 text-center">
                        <div>
                          <div className={`text-lg font-bold ${
                            user.isCurrentUser ? 'text-green-700' : 
                            user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                          }`}>
                            {user.co2Saved} kg
                          </div>
                          <div className="text-xs text-gray-500">CO₂ Saved</div>
                        </div>
                        
                        <div>
                          <div className={`text-lg font-bold ${
                            user.isCurrentUser ? 'text-green-700' : 
                            user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                          }`}>
                            {user.points}
                          </div>
                          <div className="text-xs text-gray-500">Points</div>
                        </div>
                        
                        <div>
                          <div className={`text-lg font-bold ${
                            user.isCurrentUser ? 'text-green-700' : 
                            user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                          }`}>
                            {user.streak}
                          </div>
                          <div className="text-xs text-gray-500">Day Streak</div>
                        </div>
                        
                        <div>
                          <div className={`text-lg font-bold ${
                            user.isCurrentUser ? 'text-green-700' : 
                            user.rank <= 3 ? 'text-gray-800' : 'text-gray-700'
                          }`}>
                            {user.badges}
                          </div>
                          <div className="text-xs text-gray-500">Badges</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;