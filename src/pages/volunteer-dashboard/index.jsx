import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';






import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const VolunteerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data for volunteer
  const mockUser = {
    id: 2,
    name: "Fatima Rahman", 
    email: "fatima.rahman@email.com",
    role: "volunteer",
    joinDate: "2024-05-20",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
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
              Please sign in to access your volunteer dashboard.
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
        {/* Welcome Section with Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome, {user?.name}!
              </h1>
              <p className="text-muted-foreground mt-1">
                Continue making a difference in your community
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
                onClick={() => navigate('/facility-finder-map')}
                iconName="MapPin"
                iconPosition="left"
                className="hidden sm:flex"
              >
                Find Facilities
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
              onClick={() => navigate('/facility-finder-map')}
              iconName="MapPin"
              iconPosition="left"
            >
              Find Facilities
            </Button>
          </div>
        </div>

        {/* Dashboard content would continue here with existing components */}
        {/* This is a simplified version focusing on the session management */}
        
        {/* Footer */}
        <div className="text-center py-8 border-t border-border mt-12">
          <p className="text-sm text-muted-foreground">
            Thank you for being a champion of women's safety in Bangladesh.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date()?.getFullYear()} Toiletree. Powered by community volunteers like you.
          </p>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;