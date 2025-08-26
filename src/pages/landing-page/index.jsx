import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CommunityHeroesSection from './components/CommunityHeroesSection';
import TeamSection from './components/TeamSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check for returning user from dashboard
  useEffect(() => {
    const returnUser = localStorage.getItem('toiletree_user_session');
    if (returnUser) {
      try {
        const userData = JSON.parse(returnUser);
        setUser(userData);
      } catch (error) {
        // Clear invalid session data
        localStorage.removeItem('toiletree_user_session');
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear user session
    setUser(null);
    localStorage.removeItem('toiletree_user_session');
    
    // Navigate to landing page if not already there
    if (window.location?.pathname !== '/landing-page') {
      navigate('/landing-page');
    }
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Toiletree - Find Safe Toilets & Clean Water in Bangladesh</title>
        <meta 
          name="description" 
          content="Empowering women and girls in Bangladesh with a community-driven platform to locate verified, safe, and clean toilet facilities and drinking water. Your safety and dignity matter." 
        />
        <meta name="keywords" content="safe toilets, clean water, Bangladesh, women safety, community platform, facility finder" />
        <meta property="og:title" content="Toiletree - Find Safe Toilets & Clean Water in Bangladesh" />
        <meta property="og:description" content="Community-driven platform for finding safe and clean facilities across Bangladesh" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/landing-page" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header user={user} onLogout={handleLogout} />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Stats Section */}
          <StatsSection />

          {/* Features Section */}
          <FeaturesSection />

          {/* How It Works Section */}
          <HowItWorksSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Community Heroes Section */}
          <CommunityHeroesSection />

          {/* Team Section */}
          <TeamSection />
        </main>

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default LandingPage;