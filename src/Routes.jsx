import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import FacilityDetailPage from './pages/facility-detail-page';
import FacilityOwnerDashboard from './pages/facility-owner-dashboard';
import LandingPage from './pages/landing-page';
import VolunteerDashboard from './pages/volunteer-dashboard';
import FacilityFinderMap from './pages/facility-finder-map';
import UserAuthentication from './pages/user-authentication';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<FacilityDetailPage />} />
        <Route path="/facility-detail-page" element={<FacilityDetailPage />} />
        <Route path="/facility-owner-dashboard" element={<FacilityOwnerDashboard />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/facility-finder-map" element={<FacilityFinderMap />} />
        <Route path="/user-authentication" element={<UserAuthentication />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
