import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import AuthTabs from './components/AuthTabs';
import SocialAuth from './components/SocialAuth';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TrustSignals from './components/TrustSignals';
import GuestModePrompt from './components/GuestModePrompt';
import Icon from '../../components/AppIcon';

const UserAuthentication = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Mock credentials for different user types
  const mockCredentials = {
    seeker: { email: 'fatima@example.com', password: 'Seeker123' },
    owner: { email: 'owner@example.com', password: 'Owner123' },
    volunteer: { email: 'volunteer@example.com', password: 'Volunteer123' }
  };

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('toiletree_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      // Redirect to intended destination or dashboard
      const from = location?.state?.from?.pathname || getDashboardPath(JSON.parse(savedUser));
      navigate(from, { replace: true });
    }
  }, [navigate, location]);

  const getDashboardPath = (userData) => {
    switch (userData?.role) {
      case 'owner':
        return '/facility-owner-dashboard';
      case 'volunteer':
        return '/volunteer-dashboard';
      default:
        return '/facility-finder-map';
    }
  };

  const handleLogin = async (formData) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check mock credentials
      const isValidCredentials = Object.values(mockCredentials)?.some(
        cred => cred?.email === formData?.email && cred?.password === formData?.password
      );

      if (!isValidCredentials) {
        throw new Error('Invalid email or password. Try: fatima@example.com / Seeker123');
      }

      // Determine user role based on email
      let userRole = 'seeker';
      if (formData?.email === mockCredentials?.owner?.email) userRole = 'owner';
      if (formData?.email === mockCredentials?.volunteer?.email) userRole = 'volunteer';

      const userData = {
        id: Date.now(),
        name: userRole === 'owner' ? 'Rashida Begum' : 
              userRole === 'volunteer' ? 'Aminul Islam' : 'Fatima Rahman',
        email: formData?.email,
        role: userRole,
        avatar: `https://randomuser.me/api/portraits/${userRole === 'volunteer' ? 'men' : 'women'}/${Math.floor(Math.random() * 50)}.jpg`,
        joinedDate: new Date()?.toISOString(),
        verified: true
      };

      // Save to localStorage
      localStorage.setItem('toiletree_user', JSON.stringify(userData));
      setUser(userData);

      // Redirect to appropriate dashboard
      const redirectPath = location?.state?.from?.pathname || getDashboardPath(userData);
      navigate(redirectPath, { replace: true });

    } catch (err) {
      setError(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (formData) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Check if email already exists (mock validation)
      if (Object.values(mockCredentials)?.some(cred => cred?.email === formData?.email)) {
        throw new Error('An account with this email already exists. Please sign in instead.');
      }

      const userData = {
        id: Date.now(),
        name: formData?.name,
        email: formData?.email,
        role: formData?.userType,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'women' : 'men'}/${Math.floor(Math.random() * 50)}.jpg`,
        joinedDate: new Date()?.toISOString(),
        verified: false
      };

      // Save to localStorage
      localStorage.setItem('toiletree_user', JSON.stringify(userData));
      setUser(userData);

      // Redirect to appropriate dashboard
      const redirectPath = getDashboardPath(userData);
      navigate(redirectPath, { replace: true });

    } catch (err) {
      setError(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate social login delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData = {
        id: Date.now(),
        name: provider === 'google' ? 'Nasreen Ahmed' : 'Salma Khatun',
        email: `${provider}user@example.com`,
        role: 'seeker',
        avatar: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 50)}.jpg`,
        joinedDate: new Date()?.toISOString(),
        verified: true,
        provider: provider
      };

      localStorage.setItem('toiletree_user', JSON.stringify(userData));
      setUser(userData);

      navigate('/facility-finder-map', { replace: true });

    } catch (err) {
      setError(`Failed to sign in with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('toiletree_user');
    setUser(null);
    navigate('/landing-page');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Authentication Forms */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
                {activeTab === 'login' ? 'Welcome Back' : 'Join Our Community'}
              </h1>
              <p className="text-muted-foreground">
                {activeTab === 'login' ?'Sign in to access your personalized facility finder and saved locations.' :'Create an account to save favorites, write reviews, and contribute to our community.'
                }
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-card p-6 lg:p-8 border border-border">
              <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
              
              <SocialAuth onSocialLogin={handleSocialLogin} />
              
              {activeTab === 'login' ? (
                <LoginForm 
                  onLogin={handleLogin}
                  isLoading={isLoading}
                  error={error}
                />
              ) : (
                <RegisterForm 
                  onRegister={handleRegister}
                  isLoading={isLoading}
                  error={error}
                />
              )}

              {/* Mock Credentials Helper */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground mb-1">Demo Credentials:</p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p><strong>Seeker:</strong> fatima@example.com / Seeker123</p>
                      <p><strong>Owner:</strong> owner@example.com / Owner123</p>
                      <p><strong>Volunteer:</strong> volunteer@example.com / Volunteer123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Mode Option */}
            <GuestModePrompt />
          </div>

          {/* Right Column - Trust Signals */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg shadow-card p-6 lg:p-8 border border-border">
              <TrustSignals />
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Community Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2,500+</div>
                  <div className="text-sm text-muted-foreground">Verified Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Facility Owners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Volunteers</div>
                </div>
              </div>
            </div>

            {/* Safety Message */}
            <div className="bg-success/10 rounded-lg p-6 border border-success/20">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={20} color="var(--color-success)" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Safety Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    Toiletree is built by women, for women. We understand the unique challenges 
                    you face and are committed to creating a safe, supportive community where 
                    every woman can find dignity and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserAuthentication;