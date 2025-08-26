import React from 'react';
import Icon from '../../../components/AppIcon';

const FacilityInfo = ({ 
  operatingHours = {},
  contactInfo = {},
  lastUpdated = null
}) => {
  const formatTime = (time) => {
    if (!time) return 'Not specified';
    return time;
  };

  const getCurrentDayHours = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = days?.[new Date()?.getDay()];
    return operatingHours?.[currentDay] || { open: 'Not specified', close: 'Not specified' };
  };

  const todayHours = getCurrentDayHours();

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
        Facility Information
      </h2>
      <div className="space-y-4">
        {/* Operating Hours */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Operating Hours</span>
          </div>
          <div className="ml-6 text-sm text-muted-foreground">
            <div className="font-medium text-foreground">
              Today: {formatTime(todayHours?.open)} - {formatTime(todayHours?.close)}
            </div>
            <div className="mt-2 space-y-1">
              {Object.entries(operatingHours)?.map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize">{day}:</span>
                  <span>{formatTime(hours?.open)} - {formatTime(hours?.close)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        {(contactInfo?.phone || contactInfo?.email) && (
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Phone" size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Contact</span>
            </div>
            <div className="ml-6 space-y-1">
              {contactInfo?.phone && (
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Phone" size={14} />
                  <span>{contactInfo?.phone}</span>
                </div>
              )}
              {contactInfo?.email && (
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Mail" size={14} />
                  <span>{contactInfo?.email}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Last Updated */}
        {lastUpdated && (
          <div className="pt-2 border-t border-border">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="RefreshCw" size={12} />
              <span>Last updated: {new Date(lastUpdated)?.toLocaleDateString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityInfo;