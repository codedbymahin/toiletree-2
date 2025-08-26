import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from './components/Breadcrumb';
import FacilityGallery from './components/FacilityGallery';
import FacilityHeader from './components/FacilityHeader';
import FacilityInfo from './components/FacilityInfo';
import AmenityChecklist from './components/AmenityChecklist';
import ReviewsSection from './components/ReviewsSection';
import ActionButtons from './components/ActionButtons';
import OwnerInfo from './components/OwnerInfo';

const FacilityDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [facility, setFacility] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock facility data
  const mockFacility = {
    id: 1,
    name: "Green Valley Shopping Complex",
    address: "House 45, Road 12, Dhanmondi, Dhaka 1209, Bangladesh",
    rating: 4.3,
    reviewCount: 127,
    isVerified: true,
    status: 'open',
    area: 'Dhanmondi',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622781564-1d987ba4deb0?w=800&h=600&fit=crop'
    ],
    operatingHours: {
      monday: { open: '8:00 AM', close: '10:00 PM' },
      tuesday: { open: '8:00 AM', close: '10:00 PM' },
      wednesday: { open: '8:00 AM', close: '10:00 PM' },
      thursday: { open: '8:00 AM', close: '10:00 PM' },
      friday: { open: '8:00 AM', close: '10:00 PM' },
      saturday: { open: '9:00 AM', close: '11:00 PM' },
      sunday: { open: '9:00 AM', close: '11:00 PM' }
    },
    contactInfo: {
      phone: '+880 1712-345678',
      email: 'info@greenvalley.com.bd'
    },
    amenities: {
      wheelchairAccessible: true,
      femaleFriendly: true,
      drinkingWater: true,
      cleanlinessRating: 4.5,
      babyChanging: true,
      handwashing: true,
      lighting: true,
      privacy: true
    },
    owner: {
      name: 'Rashida Begum',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      isVerified: true,
      responseRate: 95,
      responseTime: 'within 2 hours',
      joinedDate: '2023-03-15',
      totalFacilities: 3
    },
    reviews: [
      {
        id: 1,
        userName: 'Fatima Ahmed',
        userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        rating: 5,
        comment: `Very clean and well-maintained facility. The location is convenient and the staff is always helpful. I feel safe using this facility even during evening hours. Highly recommended for women traveling in the area.`,
        date: '2024-08-20',
        helpfulCount: 12,
        photos: [
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=200&fit=crop',
          'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=200&fit=crop'
        ]
      },
      {
        id: 2,
        userName: 'Nasreen Khan',
        userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        rating: 4,
        comment: `Good facility with most amenities available. The cleanliness could be improved during peak hours, but overall it's a reliable option. The drinking water is clean and the location is easily accessible.`,date: '2024-08-18',
        helpfulCount: 8
      },
      {
        id: 3,
        userName: 'Salma Rahman',userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',rating: 5,comment: `Excellent facility! Very clean, well-lit, and secure. The baby changing area is well-equipped. The owner is very responsive to feedback and maintains high standards.`,date: '2024-08-15',
        helpfulCount: 15,
        photos: [
          'https://images.unsplash.com/photo-1584622781564-1d987ba4deb0?w=200&h=200&fit=crop'
        ]
      },
      {
        id: 4,
        userName: 'Ruma Khatun',userAvatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',rating: 4,comment: `Safe and clean facility. Good lighting and privacy. The handwashing area is well-stocked with soap. Would recommend to other women in the area.`,date: '2024-08-12',
        helpfulCount: 6
      }
    ],
    lastUpdated: '2024-08-24'
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setFacility(mockFacility);
      setLoading(false);
    }, 1000);

    // Check for user authentication
    const savedUser = localStorage.getItem('toiletree_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Check bookmark status
    const bookmarks = JSON.parse(localStorage.getItem('toiletree_bookmarks') || '[]');
    setIsBookmarked(bookmarks?.includes(parseInt(id)));

    return () => clearTimeout(timer);
  }, [id]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('toiletree_bookmarks') || '[]');
    const facilityId = parseInt(id);
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarks?.filter(bookmarkId => bookmarkId !== facilityId);
      localStorage.setItem('toiletree_bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      bookmarks?.push(facilityId);
      localStorage.setItem('toiletree_bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  };

  const handleGetDirections = () => {
    // Mock coordinates for Dhanmondi, Dhaka
    const lat = 23.7461;
    const lng = 90.3742;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  };

  const handleReportIssue = () => {
    alert('Report issue functionality would be implemented here. Thank you for helping keep our community safe!');
  };

  const handleCallFacility = () => {
    if (facility?.contactInfo?.phone) {
      window.location.href = `tel:${facility?.contactInfo?.phone}`;
    }
  };

  const handleContactOwner = () => {
    if (!user) {
      navigate('/user-authentication');
      return;
    }
    alert('Contact owner functionality would be implemented here.');
  };

  const handleSubmitReview = () => {
    if (!user) {
      navigate('/user-authentication');
      return;
    }
    alert('Review submission functionality would be implemented here.');
  };

  const handleLogout = () => {
    localStorage.removeItem('toiletree_user');
    setUser(null);
    navigate('/landing-page');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} onLogout={handleLogout} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-1/3 mb-6"></div>
            <div className="h-64 bg-muted rounded-lg mb-6"></div>
            <div className="h-32 bg-muted rounded-lg mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-48 bg-muted rounded-lg"></div>
                <div className="h-64 bg-muted rounded-lg"></div>
              </div>
              <div className="space-y-6">
                <div className="h-32 bg-muted rounded-lg"></div>
                <div className="h-48 bg-muted rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!facility) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} onLogout={handleLogout} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Facility Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The facility you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/facility-finder-map')}
              className="text-primary hover:underline"
            >
              Back to Facility Finder
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          area={facility?.area}
          facilityName={facility?.name}
        />

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          <FacilityGallery 
            images={facility?.images}
            facilityName={facility?.name}
          />
          
          <FacilityHeader
            name={facility?.name}
            address={facility?.address}
            rating={facility?.rating}
            reviewCount={facility?.reviewCount}
            isVerified={facility?.isVerified}
            status={facility?.status}
            onBookmark={handleBookmark}
            isBookmarked={isBookmarked}
          />

          <ActionButtons
            onGetDirections={handleGetDirections}
            onReportIssue={handleReportIssue}
            onCallFacility={handleCallFacility}
            hasPhoneNumber={!!facility?.contactInfo?.phone}
          />

          <FacilityInfo
            operatingHours={facility?.operatingHours}
            contactInfo={facility?.contactInfo}
            lastUpdated={facility?.lastUpdated}
          />

          <AmenityChecklist amenities={facility?.amenities} />

          <ReviewsSection
            reviews={facility?.reviews}
            onSubmitReview={handleSubmitReview}
            isAuthenticated={!!user}
          />

          <OwnerInfo
            owner={facility?.owner}
            onContactOwner={handleContactOwner}
          />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="mb-6">
            <FacilityGallery 
              images={facility?.images}
              facilityName={facility?.name}
            />
          </div>

          <div className="mb-6">
            <FacilityHeader
              name={facility?.name}
              address={facility?.address}
              rating={facility?.rating}
              reviewCount={facility?.reviewCount}
              isVerified={facility?.isVerified}
              status={facility?.status}
              onBookmark={handleBookmark}
              isBookmarked={isBookmarked}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <FacilityInfo
                operatingHours={facility?.operatingHours}
                contactInfo={facility?.contactInfo}
                lastUpdated={facility?.lastUpdated}
              />

              <AmenityChecklist amenities={facility?.amenities} />

              <ReviewsSection
                reviews={facility?.reviews}
                onSubmitReview={handleSubmitReview}
                isAuthenticated={!!user}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ActionButtons
                onGetDirections={handleGetDirections}
                onReportIssue={handleReportIssue}
                onCallFacility={handleCallFacility}
                hasPhoneNumber={!!facility?.contactInfo?.phone}
              />

              <OwnerInfo
                owner={facility?.owner}
                onContactOwner={handleContactOwner}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailPage;