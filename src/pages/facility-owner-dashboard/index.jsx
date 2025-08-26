import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import MetricsCard from './components/MetricsCard';
import FacilityTable from './components/FacilityTable';
import RecentReviews from './components/RecentReviews';
import AnalyticsChart from './components/AnalyticsChart';
import QuickActions from './components/QuickActions';
import CommunityImpact from './components/CommunityImpact';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const FacilityOwnerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data
  const mockUser = {
    id: 1,
    name: "Rashida Ahmed",
    email: "rashida.ahmed@email.com",
    role: "owner",
    joinDate: "2024-03-15",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  };

  // Mock facilities data
  const mockFacilities = [
    {
      id: 1,
      name: "Green Valley Shopping Complex",
      type: "Shopping Mall",
      area: "Dhanmondi",
      address: "Road 27, Dhanmondi, Dhaka",
      rating: 4.8,
      reviewCount: 156,
      status: "active",
      views: 2847,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Sunrise Restaurant",
      type: "Restaurant",
      area: "Gulshan",
      address: "Avenue 3, Gulshan 1, Dhaka",
      rating: 4.6,
      reviewCount: 89,
      status: "active",
      views: 1923,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "City Center Pharmacy",
      type: "Pharmacy",
      area: "Uttara",
      address: "Sector 7, Uttara, Dhaka",
      rating: 4.2,
      reviewCount: 34,
      status: "pending",
      views: 756,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Metro Station Facility",
      type: "Public Facility",
      area: "Motijheel",
      address: "Motijheel Commercial Area, Dhaka",
      rating: 3.9,
      reviewCount: 67,
      status: "active",
      views: 1456,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Community Center",
      type: "Community Space",
      area: "Mirpur",
      address: "Section 10, Mirpur, Dhaka",
      rating: 4.4,
      reviewCount: 23,
      status: "inactive",
      views: 432,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop"
    }
  ];

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      userName: "Fatima Khan",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      facilityName: "Green Valley Shopping Complex",
      facilityLocation: "Dhanmondi",
      rating: 5,
      comment: "Excellent facility! Very clean and well-maintained. The location is perfect and easily accessible. Staff is very helpful and the amenities are top-notch. I felt completely safe using this facility.",
      date: "2025-08-23",
      photos: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop"
      ],
      response: null,
      responseDate: null
    },
    {
      id: 2,
      userName: "Nasreen Begum",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      facilityName: "Sunrise Restaurant",
      facilityLocation: "Gulshan",
      rating: 4,
      comment: "Good facility overall. Clean and safe environment. Could use better lighting in the evening hours.",
      date: "2025-08-22",
      photos: [],
      response: "Thank you for your feedback! We\'re working on improving the lighting system. Your safety and comfort are our top priorities.",
      responseDate: "2025-08-23"
    },
    {
      id: 3,
      userName: "Salma Rahman",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      facilityName: "Metro Station Facility",
      facilityLocation: "Motijheel",
      rating: 4,
      comment: "Convenient location near the metro station. Clean and accessible. Thank you for providing this service to the community.",
      date: "2025-08-21",
      photos: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop"
      ],
      response: null,
      responseDate: null
    }
  ];

  // Mock analytics data
  const mockAnalyticsData = [
    { date: '19/08', views: 245, visits: 89 },
    { date: '20/08', views: 312, visits: 124 },
    { date: '21/08', views: 289, visits: 98 },
    { date: '22/08', views: 356, visits: 145 },
    { date: '23/08', views: 423, visits: 167 },
    { date: '24/08', views: 398, visits: 156 },
    { date: '25/08', views: 445, visits: 189 }
  ];

  // Mock community impact data
  const mockImpactData = {
    womenHelped: 1247,
    safetyScore: 8.6,
    monthlyVisits: 3456,
    communityRank: 12,
    achievements: ['verified-contributor', 'safety-champion', 'community-hero']
  };

  useEffect(() => {
    // Simulate loading and authentication check
    const timer = setTimeout(() => {
      // Store user session for persistence
      const userData = mockUser;
      setUser(userData);
      localStorage.setItem('toiletree_user_session', JSON.stringify(userData));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    // Clear user session
    setUser(null);
    localStorage.removeItem('toiletree_user_session');
    
    // Navigate to landing page with a small delay for smooth transition
    setTimeout(() => {
      navigate('/landing-page');
    }, 100);
  };

  const handleEditFacility = (facilityId) => {
    console.log('Edit facility:', facilityId);
    // Navigate to edit facility page
  };

  const handleViewPublic = (facilityId) => {
    navigate('/facility-detail-page', { state: { facilityId } });
  };

  const handleManagePhotos = (facilityId) => {
    console.log('Manage photos for facility:', facilityId);
    // Open photo management modal
  };

  const handleRespondToReview = (reviewId) => {
    console.log('Respond to review:', reviewId);
    // Open response modal
  };

  const handleAddFacility = () => {
    console.log('Add new facility');
    // Navigate to add facility page
  };

  const handleViewAnalytics = () => {
    console.log('View detailed analytics');
    // Navigate to analytics page
  };

  const handleUpdateHours = () => {
    console.log('Update operating hours');
    // Open hours update modal
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} onLogout={handleLogout} />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <Icon name="Loader2" size={48} className="text-primary animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium text-foreground">Loading Dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} onLogout={handleLogout} />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center max-w-md mx-auto px-4">
            <Icon name="Lock" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Access Restricted</h2>
            <p className="text-muted-foreground mb-6">
              Please sign in to access your facility owner dashboard.
            </p>
            <Button onClick={() => navigate('/user-authentication')}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section with Sign Out Option */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your facilities and track community impact
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => navigate('/landing-page')}
                iconName="Home"
                iconPosition="left"
                className="hidden sm:flex"
              >
                Back to Home
              </Button>
              <Button
                variant="default"
                onClick={handleAddFacility}
                iconName="Plus"
                iconPosition="left"
                className="hidden sm:flex"
              >
                Add New Facility
              </Button>
            </div>
          </div>
          
          {/* Mobile Action Buttons */}
          <div className="sm:hidden space-y-3">
            <Button
              variant="outline"
              fullWidth
              onClick={() => navigate('/landing-page')}
              iconName="Home"
              iconPosition="left"
            >
              Back to Home
            </Button>
            <Button
              variant="default"
              fullWidth
              onClick={handleAddFacility}
              iconName="Plus"
              iconPosition="left"
            >
              Add New Facility
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="Total Views"
            value="8,247"
            change="+12.5%"
            changeType="positive"
            icon="Eye"
            color="primary"
          />
          <MetricsCard
            title="Average Rating"
            value="4.6"
            change="+0.2"
            changeType="positive"
            icon="Star"
            color="success"
          />
          <MetricsCard
            title="Recent Reviews"
            value="23"
            change="+5"
            changeType="positive"
            icon="MessageSquare"
            color="info"
          />
          <MetricsCard
            title="Community Impact"
            value="1,247"
            change="+89"
            changeType="positive"
            icon="Heart"
            color="warning"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Facilities and Reviews */}
          <div className="xl:col-span-2 space-y-8">
            <FacilityTable
              facilities={mockFacilities}
              onEdit={handleEditFacility}
              onViewPublic={handleViewPublic}
              onManagePhotos={handleManagePhotos}
            />
            
            <RecentReviews
              reviews={mockReviews}
              onRespond={handleRespondToReview}
            />
          </div>

          {/* Right Column - Quick Actions and Impact */}
          <div className="space-y-8">
            <QuickActions
              onAddFacility={handleAddFacility}
              onManagePhotos={() => handleManagePhotos('all')}
              onViewAnalytics={handleViewAnalytics}
              onUpdateHours={handleUpdateHours}
            />
            
            <CommunityImpact impactData={mockImpactData} />
          </div>
        </div>

        {/* Analytics Chart */}
        <div className="mb-8">
          <AnalyticsChart
            data={mockAnalyticsData}
            title="Facility Performance"
          />
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Thank you for contributing to women's safety and dignity in Bangladesh.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date()?.getFullYear()} Toiletree. Making communities safer, one facility at a time.
          </p>
        </div>
      </main>
    </div>
  );
};

export default FacilityOwnerDashboard;