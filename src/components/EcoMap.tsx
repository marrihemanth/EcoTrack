import React, { useState, useEffect } from 'react';
import { MapPin, Filter, Navigation, Star, Clock, Phone, Globe, ChevronDown, Search } from 'lucide-react';

const EcoMap: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [filters, setFilters] = useState({
    type: 'all',
    distance: 'all',
    verified: 'all'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mock location data
  const locations = [
    {
      id: 1,
      name: 'Green Valley Organic Farm',
      type: 'Organic Farm',
      address: 'Sector 15, Gurgaon, Haryana 122001',
      distance: '2.3 km',
      rating: 4.8,
      verified: true,
      phone: '+91 98765 43210',
      website: 'greenvalley.com',
      hours: 'Open 6:00 AM - 8:00 PM',
      description: 'Certified organic farm offering fresh vegetables, fruits, and dairy products.',
      coordinates: { lat: 28.4595, lng: 77.0266 },
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'EcoWaste Recycling Center',
      type: 'Recycling Center',
      address: 'Industrial Area Phase 1, Chandigarh 160002',
      distance: '5.7 km',
      rating: 4.5,
      verified: true,
      phone: '+91 98765 43211',
      website: 'ecowaste.in',
      hours: 'Open 9:00 AM - 6:00 PM',
      description: 'Complete waste management and recycling solutions for households and businesses.',
      coordinates: { lat: 30.7333, lng: 76.7794 },
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Solar Solutions Hub',
      type: 'Solar Installation',
      address: 'Tech Park, Whitefield, Bangalore 560066',
      distance: '8.2 km',
      rating: 4.9,
      verified: true,
      phone: '+91 98765 43212',
      website: 'solarhub.co.in',
      hours: 'Open 10:00 AM - 7:00 PM',
      description: 'Professional solar panel installation and maintenance services.',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Urban Garden Center',
      type: 'Garden Center',
      address: 'Koregaon Park, Pune, Maharashtra 411001',
      distance: '3.1 km',
      rating: 4.6,
      verified: false,
      phone: '+91 98765 43213',
      website: 'urbangarden.com',
      hours: 'Open 7:00 AM - 9:00 PM',
      description: 'Everything you need for urban gardening and sustainable living.',
      coordinates: { lat: 18.5204, lng: 73.8567 },
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Clean Energy Café',
      type: 'Eco Café',
      address: 'Connaught Place, New Delhi 110001',
      distance: '1.8 km',
      rating: 4.7,
      verified: true,
      phone: '+91 98765 43214',
      website: 'cleanenergycafe.in',
      hours: 'Open 8:00 AM - 11:00 PM',
      description: 'Solar-powered café serving organic food and promoting sustainable practices.',
      coordinates: { lat: 28.6315, lng: 77.2167 },
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filterOptions = {
    type: [
      { value: 'all', label: 'All Types' },
      { value: 'organic-farm', label: 'Organic Farms' },
      { value: 'recycling-center', label: 'Recycling Centers' },
      { value: 'solar-installation', label: 'Solar Services' },
      { value: 'garden-center', label: 'Garden Centers' },
      { value: 'eco-cafe', label: 'Eco Cafés' }
    ],
    distance: [
      { value: 'all', label: 'Any Distance' },
      { value: '2km', label: 'Within 2km' },
      { value: '5km', label: 'Within 5km' },
      { value: '10km', label: 'Within 10km' }
    ],
    verified: [
      { value: 'all', label: 'All Locations' },
      { value: 'verified', label: 'Verified Only' },
      { value: 'unverified', label: 'Unverified' }
    ]
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleLocationSelect = (location: any) => {
    setSelectedLocation(location);
  };

  const handleGetDirections = (location: any) => {
    // In a real app, this would open maps with directions
    console.log('Getting directions to:', location.name);
    alert(`Opening directions to ${location.name}`);
  };

  // Filter locations based on current filters
  const filteredLocations = locations.filter(location => {
    if (filters.verified === 'verified' && !location.verified) return false;
    if (filters.verified === 'unverified' && location.verified) return false;
    // Add more filter logic as needed
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              EcoMap
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Discover eco-friendly locations, services, and sustainable businesses near you
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-8 shadow-2xl sticky top-32">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-2xl bg-green-100/80 mr-4">
                    <Filter className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                </div>

                <div className="space-y-6">
                  
                  {/* Search Bar */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Search Locations
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by name or type..."
                        className="w-full pl-10 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Type Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Type
                    </label>
                    <div className="relative">
                      <select
                        value={filters.type}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {filterOptions.type.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Distance Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Distance
                    </label>
                    <div className="relative">
                      <select
                        value={filters.distance}
                        onChange={(e) => handleFilterChange('distance', e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {filterOptions.distance.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Verified Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Verification
                    </label>
                    <div className="relative">
                      <select
                        value={filters.verified}
                        onChange={(e) => handleFilterChange('verified', e.target.value)}
                        className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        {filterOptions.verified.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  <button
                    onClick={() => setFilters({ type: 'all', distance: 'all', verified: 'all' })}
                    className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 rounded-2xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Location Details */}
          <div className={`lg:col-span-3 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Map Container */}
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent pointer-events-none"></div>
              
              <div className="relative">
                {/* Map Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Interactive Map</h2>
                      <p className="text-gray-600">Click on markers to view location details</p>
                    </div>
                    <div className="bg-green-100/80 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {filteredLocations.length} locations found
                    </div>
                  </div>
                </div>

                {/* Placeholder Map */}
                <div className="relative h-96 bg-gradient-to-br from-green-100/50 to-blue-100/30 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Map placeholder"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
                  
                  {/* Map Markers */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8">
                      {filteredLocations.slice(0, 6).map((location, index) => (
                        <button
                          key={location.id}
                          onClick={() => handleLocationSelect(location)}
                          className={`group relative p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                            selectedLocation?.id === location.id
                              ? 'bg-green-600 shadow-lg shadow-green-500/50'
                              : 'bg-white/80 hover:bg-green-100/80 shadow-lg'
                          }`}
                          style={{
                            animationDelay: `${index * 200}ms`,
                            animation: 'bounce 2s infinite'
                          }}
                        >
                          <MapPin className={`h-6 w-6 ${
                            selectedLocation?.id === location.id ? 'text-white' : 'text-green-600'
                          }`} />
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                              {location.name}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white/90 transition-all duration-300">
                      <Navigation className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Location Details */}
            {selectedLocation && (
              <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent pointer-events-none"></div>
                
                <div className="relative p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Location Image */}
                    <div className="lg:col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={selectedLocation.image}
                          alt={selectedLocation.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Verified Badge */}
                        {selectedLocation.verified && (
                          <div className="absolute top-4 left-4">
                            <div className="bg-green-100/90 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-current" />
                              <span>Verified</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Location Details */}
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        
                        {/* Header */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-gray-800">{selectedLocation.name}</h3>
                            <div className="flex items-center space-x-1">
                              <Star className="h-5 w-5 text-yellow-500 fill-current" />
                              <span className="text-lg font-semibold text-gray-800">{selectedLocation.rating}</span>
                            </div>
                          </div>
                          <div className="bg-blue-100/80 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                            {selectedLocation.type}
                          </div>
                          <p className="text-gray-600 leading-relaxed">{selectedLocation.description}</p>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <MapPin className="h-5 w-5 text-gray-500" />
                              <div>
                                <div className="text-sm text-gray-500">Address</div>
                                <div className="font-medium text-gray-800">{selectedLocation.address}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Navigation className="h-5 w-5 text-gray-500" />
                              <div>
                                <div className="text-sm text-gray-500">Distance</div>
                                <div className="font-medium text-gray-800">{selectedLocation.distance}</div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-gray-500" />
                              <div>
                                <div className="text-sm text-gray-500">Phone</div>
                                <div className="font-medium text-gray-800">{selectedLocation.phone}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Clock className="h-5 w-5 text-gray-500" />
                              <div>
                                <div className="text-sm text-gray-500">Hours</div>
                                <div className="font-medium text-gray-800">{selectedLocation.hours}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                          <button
                            onClick={() => handleGetDirections(selectedLocation)}
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:from-green-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                          >
                            <Navigation className="h-5 w-5" />
                            <span>Get Directions</span>
                          </button>
                          
                          <button className="flex-1 bg-white/60 backdrop-blur-sm border border-white/30 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-white/80 transition-all duration-300 flex items-center justify-center space-x-2">
                            <Globe className="h-5 w-5" />
                            <span>Visit Website</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Default Message when no location selected */}
            {!selectedLocation && (
              <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 p-12 shadow-2xl text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 to-transparent pointer-events-none"></div>
                
                <div className="relative">
                  <div className="p-6 rounded-full bg-gray-100/80 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Select a Location</h3>
                  <p className="text-gray-600">
                    Click on any marker on the map above to view detailed information about eco-friendly locations near you.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoMap;