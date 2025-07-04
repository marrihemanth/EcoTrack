import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Play, Lightbulb, Clock, User, Tag, ChevronDown } from 'lucide-react';

const KnowledgeHub: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock content data
  const contentData = [
    {
      id: 1,
      type: 'article',
      title: 'The Complete Guide to Zero Waste Living',
      description: 'Learn practical steps to reduce waste in your daily life and create a sustainable lifestyle that benefits both you and the planet.',
      thumbnail: 'https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sarah Green',
      readTime: '8 min read',
      tags: ['tips', 'lifestyle'],
      publishedDate: 'Dec 18, 2024'
    },
    {
      id: 2,
      type: 'video',
      title: 'Solar Panel Installation: DIY vs Professional',
      description: 'Compare the costs, benefits, and challenges of installing solar panels yourself versus hiring professionals.',
      thumbnail: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Mike Johnson',
      readTime: '12 min watch',
      tags: ['energy', 'diy'],
      publishedDate: 'Dec 17, 2024'
    },
    {
      id: 3,
      type: 'tip',
      title: '5 Simple Ways to Reduce Water Consumption',
      description: 'Quick and easy tips to cut your water usage by up to 30% without sacrificing comfort or convenience.',
      thumbnail: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emma Wilson',
      readTime: '3 min read',
      tags: ['tips', 'water'],
      publishedDate: 'Dec 16, 2024'
    },
    {
      id: 4,
      type: 'article',
      title: 'Urban Gardening: Growing Food in Small Spaces',
      description: 'Transform your balcony, windowsill, or small yard into a productive garden that provides fresh, organic produce.',
      thumbnail: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'David Chen',
      readTime: '10 min read',
      tags: ['gardening', 'food'],
      publishedDate: 'Dec 15, 2024'
    },
    {
      id: 5,
      type: 'video',
      title: 'Electric Vehicle Buying Guide 2024',
      description: 'Everything you need to know about purchasing your first electric vehicle, including costs, charging, and maintenance.',
      thumbnail: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Lisa Rodriguez',
      readTime: '15 min watch',
      tags: ['transport', 'technology'],
      publishedDate: 'Dec 14, 2024'
    },
    {
      id: 6,
      type: 'tip',
      title: 'Eco-Friendly Cleaning Products You Can Make at Home',
      description: 'Create effective, non-toxic cleaning solutions using common household ingredients like vinegar, baking soda, and lemon.',
      thumbnail: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Anna Taylor',
      readTime: '5 min read',
      tags: ['tips', 'health'],
      publishedDate: 'Dec 13, 2024'
    },
    {
      id: 7,
      type: 'article',
      title: 'The Economics of Renewable Energy',
      description: 'Understand how renewable energy costs have dropped and why clean energy is now the most economical choice.',
      thumbnail: 'https://images.pexels.com/photos/9875482/pexels-photo-9875482.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Robert Kim',
      readTime: '12 min read',
      tags: ['energy', 'economics'],
      publishedDate: 'Dec 12, 2024'
    },
    {
      id: 8,
      type: 'video',
      title: 'Composting 101: Turn Waste into Garden Gold',
      description: 'Learn the basics of composting and how to turn your kitchen scraps into nutrient-rich soil for your garden.',
      thumbnail: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Green Thumb TV',
      readTime: '8 min watch',
      tags: ['gardening', 'waste'],
      publishedDate: 'Dec 11, 2024'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Content', count: contentData.length },
    { id: 'tips', label: 'Tips', count: contentData.filter(item => item.tags.includes('tips')).length },
    { id: 'energy', label: 'Energy', count: contentData.filter(item => item.tags.includes('energy')).length },
    { id: 'gardening', label: 'Gardening', count: contentData.filter(item => item.tags.includes('gardening')).length },
    { id: 'lifestyle', label: 'Lifestyle', count: contentData.filter(item => item.tags.includes('lifestyle')).length },
    { id: 'transport', label: 'Transport', count: contentData.filter(item => item.tags.includes('transport')).length }
  ];

  const contentTypeIcons = {
    article: BookOpen,
    video: Play,
    tip: Lightbulb
  };

  const contentTypeColors = {
    article: {
      bg: 'from-blue-50/80 to-indigo-50/40',
      icon: 'text-blue-600',
      badge: 'bg-blue-100/80 text-blue-700'
    },
    video: {
      bg: 'from-red-50/80 to-pink-50/40',
      icon: 'text-red-600',
      badge: 'bg-red-100/80 text-red-700'
    },
    tip: {
      bg: 'from-green-50/80 to-emerald-50/40',
      icon: 'text-green-600',
      badge: 'bg-green-100/80 text-green-700'
    }
  };

  // Filter content based on search and active filter
  const filteredContent = contentData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || item.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setIsFilterDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Knowledge Hub
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Discover articles, videos, and tips to enhance your eco-friendly journey
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent pointer-events-none"></div>
            
            <div className="relative">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search articles, videos, tips..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-14 pl-12 pr-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 text-lg"
                    />
                  </div>
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                    className="flex items-center justify-between w-full lg:w-64 h-14 px-6 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 hover:bg-white/80 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <Filter className="h-5 w-5 text-green-600" />
                      <span className="font-medium">
                        {filterOptions.find(f => f.id === activeFilter)?.label}
                      </span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isFilterDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isFilterDropdownOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl z-10 overflow-hidden">
                      {filterOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleFilterChange(option.id)}
                          className={`w-full flex items-center justify-between px-6 py-4 text-left hover:bg-green-50/50 transition-colors duration-200 ${
                            activeFilter === option.id ? 'bg-green-100/50 text-green-700' : 'text-gray-700'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            activeFilter === option.id 
                              ? 'bg-green-200/80 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {option.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Active Filters Display */}
              {(searchQuery || activeFilter !== 'all') && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {searchQuery && (
                    <div className="flex items-center space-x-2 bg-blue-100/80 text-blue-700 px-4 py-2 rounded-full">
                      <Search className="h-4 w-4" />
                      <span className="text-sm font-medium">"{searchQuery}"</span>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        ×
                      </button>
                    </div>
                  )}
                  {activeFilter !== 'all' && (
                    <div className="flex items-center space-x-2 bg-green-100/80 text-green-700 px-4 py-2 rounded-full">
                      <Tag className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {filterOptions.find(f => f.id === activeFilter)?.label}
                      </span>
                      <button
                        onClick={() => setActiveFilter('all')}
                        className="text-green-500 hover:text-green-700"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing {filteredContent.length} of {contentData.length} results
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredContent.map((item, index) => {
                const Icon = contentTypeIcons[item.type as keyof typeof contentTypeIcons];
                const colors = contentTypeColors[item.type as keyof typeof contentTypeColors];
                
                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} pointer-events-none transition-all duration-500`}></div>
                    
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Content Type Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`flex items-center space-x-2 px-3 py-2 rounded-full ${colors.badge} backdrop-blur-sm`}>
                          <Icon className={`h-4 w-4 ${colors.icon}`} />
                          <span className="text-sm font-semibold capitalize">{item.type}</span>
                        </div>
                      </div>

                      {/* Play Button for Videos */}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 text-red-600 ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{item.publishedDate}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100/80 text-gray-600 text-sm rounded-full hover:bg-green-100/80 hover:text-green-700 transition-colors duration-200 cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <button className={`w-full py-3 rounded-2xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r ${
                        item.type === 'video' 
                          ? 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                          : item.type === 'tip'
                          ? 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                          : 'from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                      } transform hover:scale-105`}>
                        {item.type === 'video' ? 'Watch Now' : 'Read More'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="p-6 rounded-full bg-gray-100/80 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No content found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredContent.length > 0 && (
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mt-16 text-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Load More Content
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeHub;