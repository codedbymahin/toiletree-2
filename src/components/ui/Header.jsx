import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ user = null, onLogout = () => {} }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Find Facilities',
      path: '/facility-finder-map',
      icon: 'MapPin',
      primary: true
    },
    {
      label: 'How It Works',
      path: '/landing-page',
      icon: 'Info'
    }
  ];

  const dashboardItems = [
    {
      label: 'Owner Dashboard',
      path: '/facility-owner-dashboard',
      icon: 'Building2',
      role: 'owner'
    },
    {
      label: 'Volunteer Dashboard',
      path: '/volunteer-dashboard',
      icon: 'Users',
      role: 'volunteer'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const getDashboardPath = () => {
    if (!user) return null;
    if (user?.role === 'owner') return '/facility-owner-dashboard';
    if (user?.role === 'volunteer') return '/volunteer-dashboard';
    return null;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/landing-page" 
              className="flex items-center space-x-2 transition-micro hover:opacity-80"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={20} color="white" />
              </div>
              <span className="text-xl font-heading font-semibold text-foreground">
                Toiletree
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-micro ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.label}</span>
                </Link>
              ))}

              {/* Dashboard Link for Authenticated Users */}
              {user && getDashboardPath() && (
                <Link
                  to={getDashboardPath()}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-micro ${
                    isActivePath(getDashboardPath())
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon name="LayoutDashboard" size={16} />
                  <span>Dashboard</span>
                </Link>
              )}
            </nav>

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} color="var(--color-accent-foreground)" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {user?.name || 'User'}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onLogout}
                    iconName="LogOut"
                    iconPosition="left"
                    iconSize={14}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                >
                  <Link to="/user-authentication">
                    Sign In
                  </Link>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-micro"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 left-0 z-50 w-80 h-full bg-background shadow-modal transform transition-all duration-300 ease-in-out md:hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link 
                  to="/landing-page" 
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} color="white" />
                  </div>
                  <span className="text-xl font-heading font-semibold text-foreground">
                    Toiletree
                  </span>
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-foreground hover:bg-muted transition-micro"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-4 space-y-2">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-micro ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.label}</span>
                  </Link>
                ))}

                {/* Dashboard Link for Mobile */}
                {user && getDashboardPath() && (
                  <Link
                    to={getDashboardPath()}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-micro ${
                      isActivePath(getDashboardPath())
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name="LayoutDashboard" size={20} />
                    <span>Dashboard</span>
                  </Link>
                )}
              </nav>

              {/* Mobile Auth Section */}
              <div className="p-4 border-t border-border">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 px-4 py-2">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} color="var(--color-accent-foreground)" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {user?.name || 'User'}
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {user?.role || 'Member'}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() => {
                        onLogout();
                        closeMobileMenu();
                      }}
                      iconName="LogOut"
                      iconPosition="left"
                      className="border-destructive/20 text-destructive hover:bg-destructive/10"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="default"
                    fullWidth
                    asChild
                  >
                    <Link to="/user-authentication" onClick={closeMobileMenu}>
                      Sign In
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;