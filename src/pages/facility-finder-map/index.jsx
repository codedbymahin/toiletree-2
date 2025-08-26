import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SearchBar from './components/SearchBar';
import FilterChips from './components/FilterChips';
import MapView from './components/MapView';
import FacilityList from './components/FacilityList';
import ViewToggle from './components/ViewToggle';
import FacilityPreviewCard from './components/FacilityPreviewCard';

const FacilityFinderMap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [currentView, setCurrentView] = useState('split'); // split, map, list
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock facilities data
  const mockFacilities = [
    {
      id: 1,
      name: "Dhanmondi Community Center",
      address: "Road 27, Dhanmondi, Dhaka 1209",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      rating: 4.5,
      reviewCount: 128,
      distance: "0.3 km",
      status: "open",
      types: ["toilet", "water"],
      operatingHours: "6:00 AM - 10:00 PM",
      amenities: {
        femaleFriendly: true,
        wheelchairAccessible: true,
        cleanWater: true,
        babyChanging: false,
        parking: true
      }
    },
    {
      id: 2,
      name: "Gulshan Shopping Complex",
      address: "Gulshan Avenue, Gulshan 1, Dhaka 1212",
      image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?w=400&h=300&fit=crop",
      rating: 4.2,
      reviewCount: 89,
      distance: "0.7 km",
      status: "open",
      types: ["toilet"],
      operatingHours: "8:00 AM - 11:00 PM",
      amenities: {
        femaleFriendly: true,
        wheelchairAccessible: false,
        cleanWater: false,
        babyChanging: true,
        parking: true
      }
    },
    {
      id: 3,
      name: "Ramna Park Public Facility",
      address: "Ramna Park, Shahbagh, Dhaka 1000",
      image: "https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg?w=400&h=300&fit=crop",
      rating: 3.8,
      reviewCount: 156,
      distance: "1.2 km",
      status: "closing-soon",
      types: ["toilet", "water"],
      operatingHours: "5:00 AM - 8:00 PM",
      amenities: {
        femaleFriendly: true,
        wheelchairAccessible: true,
        cleanWater: true,
        babyChanging: false,
        parking: false
      }
    },
    {
      id: 4,
      name: "Bashundhara City Mall",
      address: "Panthapath, Dhaka 1205",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      rating: 4.7,
      reviewCount: 234,
      distance: "1.5 km",
      status: "open",
      types: ["toilet", "water"],
      operatingHours: "10:00 AM - 10:00 PM",
      amenities: {
        femaleFriendly: true,
        wheelchairAccessible: true,
        cleanWater: true,
        babyChanging: true,
        parking: true
      }
    },
    {
      id: 5,
      name: "Uttara Sector 7 Mosque",
      address: "Sector 7, Uttara, Dhaka 1230",
      image: "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?w=400&h=300&fit=crop",
      rating: 4.1,
      reviewCount: 67,
      distance: "2.1 km",
      status: "closed",
      types: ["toilet", "water"],
      operatingHours: "5:00 AM - 11:00 PM",
      amenities: {
        femaleFriendly: true,
        wheelchairAccessible: false,
        cleanWater: true,
        babyChanging: false,
        parking: true
      }
    },
    {
      id: 6,
      name: "New Market Shopping Area",
      address: "New Market, Azimpur, Dhaka 1205",
      image: "https://images.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg?w=400&h=300&fit=crop",
      rating: 3.9,
      reviewCount: 112,
      distance: "2.3 km",
      status: "open",
      types: ["toilet"],
      operatingHours: "9:00 AM - 9:00 PM",
      amenities: {
        femaleFriendly: true,
        wheelchairAccessible: false,
        cleanWater: false,
        babyChanging: false,
        parking: false
      }
    }
  ];

  const [facilities, setFacilities] = useState(mockFacilities);
  const [filteredFacilities, setFilteredFacilities] = useState(mockFacilities);

  // Filter facilities based on search and filters
  useEffect(() => {
    let filtered = facilities;

    // Apply search filter
    if (searchQuery?.trim()) {
      filtered = filtered?.filter(facility =>
        facility?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        facility?.address?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply active filters
    if (activeFilters?.length > 0) {
      filtered = filtered?.filter(facility => {
        return activeFilters?.every(filter => {
          switch (filter) {
            case 'toilet':
              return facility?.types?.includes('toilet');
            case 'water':
              return facility?.types?.includes('water');
            case 'female-friendly':
              return facility?.amenities?.femaleFriendly;
            case 'wheelchair':
              return facility?.amenities?.wheelchairAccessible;
            case 'open-now':
              return facility?.status === 'open';
            case 'high-rated':
              return facility?.rating >= 4.0;
            default:
              return true;
          }
        });
      });
    }

    setFilteredFacilities(filtered);
  }, [searchQuery, activeFilters, facilities]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleLocationDetect = () => {
    setIsDetectingLocation(true);
    // Mock location detection
    setTimeout(() => {
      setUserLocation({ lat: 23.8103, lng: 90.4125 });
      setIsDetectingLocation(false);
    }, 2000);
  };

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view !== 'split') {
      setSelectedFacility(null);
    }
  };

  const handleFacilitySelect = (facility) => {
    setSelectedFacility(facility);
  };

  const handleGetDirections = (facility) => {
    // Mock directions functionality
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(facility?.address)}`;
    window.open(url, '_blank');
  };

  const handleToggleFavorite = (facilityId) => {
    setFavorites(prev =>
      prev?.includes(facilityId)
        ? prev?.filter(id => id !== facilityId)
        : [...prev, facilityId]
    );
  };

  const handleCloseFacilityPreview = () => {
    setSelectedFacility(null);
  };

  return (
    <>
      <Helmet>
        <title>Find Safe Facilities - Toiletree</title>
        <meta name="description" content="Discover safe, clean toilets and drinking water facilities near you in Bangladesh. Community-verified locations with ratings and reviews." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="flex flex-col h-screen">
          {/* Search and Filters */}
          <div className="flex-shrink-0">
            <SearchBar
              onSearch={handleSearch}
              onLocationDetect={handleLocationDetect}
              isDetectingLocation={isDetectingLocation}
            />
            <FilterChips
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* View Toggle - Mobile Only */}
          <div className="flex-shrink-0 p-4 lg:hidden">
            <ViewToggle
              currentView={currentView}
              onViewChange={handleViewChange}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-hidden">
            {/* Mobile Views */}
            <div className="lg:hidden h-full">
              {currentView === 'map' && (
                <div className="relative h-full">
                  <MapView
                    facilities={filteredFacilities}
                    selectedFacility={selectedFacility}
                    onFacilitySelect={handleFacilitySelect}
                    userLocation={userLocation}
                    className="h-full"
                  />
                  {selectedFacility && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <FacilityPreviewCard
                        facility={selectedFacility}
                        onClose={handleCloseFacilityPreview}
                        onGetDirections={handleGetDirections}
                        onToggleFavorite={handleToggleFavorite}
                        isFavorite={favorites?.includes(selectedFacility?.id)}
                      />
                    </div>
                  )}
                </div>
              )}

              {currentView === 'list' && (
                <div className="h-full overflow-y-auto p-4">
                  <FacilityList
                    facilities={filteredFacilities}
                    onGetDirections={handleGetDirections}
                    onToggleFavorite={handleToggleFavorite}
                    favorites={favorites}
                    loading={loading}
                    searchQuery={searchQuery}
                    activeFilters={activeFilters}
                  />
                </div>
              )}

              {currentView === 'split' && (
                <div className="flex flex-col h-full">
                  <div className="flex-1 relative">
                    <MapView
                      facilities={filteredFacilities}
                      selectedFacility={selectedFacility}
                      onFacilitySelect={handleFacilitySelect}
                      userLocation={userLocation}
                      className="h-full"
                    />
                    {selectedFacility && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <FacilityPreviewCard
                          facility={selectedFacility}
                          onClose={handleCloseFacilityPreview}
                          onGetDirections={handleGetDirections}
                          onToggleFavorite={handleToggleFavorite}
                          isFavorite={favorites?.includes(selectedFacility?.id)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 border-t border-border">
                    <FacilityList
                      facilities={filteredFacilities}
                      onGetDirections={handleGetDirections}
                      onToggleFavorite={handleToggleFavorite}
                      favorites={favorites}
                      loading={loading}
                      searchQuery={searchQuery}
                      activeFilters={activeFilters}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Split View */}
            <div className="hidden lg:flex h-full">
              {/* Left Panel - Facility List */}
              <div className="w-1/3 border-r border-border overflow-y-auto">
                <div className="p-4">
                  <FacilityList
                    facilities={filteredFacilities}
                    onGetDirections={handleGetDirections}
                    onToggleFavorite={handleToggleFavorite}
                    favorites={favorites}
                    loading={loading}
                    searchQuery={searchQuery}
                    activeFilters={activeFilters}
                  />
                </div>
              </div>

              {/* Right Panel - Map */}
              <div className="flex-1 relative">
                <MapView
                  facilities={filteredFacilities}
                  selectedFacility={selectedFacility}
                  onFacilitySelect={handleFacilitySelect}
                  userLocation={userLocation}
                  className="h-full"
                />
                {selectedFacility && (
                  <div className="absolute top-4 left-4">
                    <FacilityPreviewCard
                      facility={selectedFacility}
                      onClose={handleCloseFacilityPreview}
                      onGetDirections={handleGetDirections}
                      onToggleFavorite={handleToggleFavorite}
                      isFavorite={favorites?.includes(selectedFacility?.id)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityFinderMap;