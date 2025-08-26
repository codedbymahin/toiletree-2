import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OwnerInfo = ({ 
  owner = {},
  onContactOwner = () => {}
}) => {
  const {
    name = 'Facility Owner',
    avatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    isVerified = false,
    responseRate = 0,
    responseTime = 'within hours',
    joinedDate = '2024-01-01',
    totalFacilities = 1
  } = owner;

  const formatJoinDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
        Facility Owner
      </h2>

      <div className="flex items-start space-x-4">
        <div className="relative">
          <Image
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} color="white" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-medium text-foreground">{name}</h3>
            {isVerified && (
              <span className="text-xs bg-success bg-opacity-10 text-success px-2 py-1 rounded-full">
                Verified
              </span>
            )}
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={14} />
              <span>Member since {formatJoinDate(joinedDate)}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={14} />
              <span>{totalFacilities} {totalFacilities === 1 ? 'facility' : 'facilities'}</span>
            </div>

            {responseRate > 0 && (
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={14} />
                <span>{responseRate}% response rate</span>
              </div>
            )}

            {responseTime && (
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} />
                <span>Responds {responseTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Button
          variant="outline"
          fullWidth
          onClick={onContactOwner}
          iconName="MessageSquare"
          iconPosition="left"
          className="justify-center"
        >
          Contact Owner
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-muted rounded-lg">
          <div className="text-lg font-semibold text-foreground">
            {responseRate}%
          </div>
          <div className="text-xs text-muted-foreground">
            Response Rate
          </div>
        </div>

        <div className="text-center p-3 bg-muted rounded-lg">
          <div className="text-lg font-semibold text-foreground">
            {totalFacilities}
          </div>
          <div className="text-xs text-muted-foreground">
            Facilities
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerInfo;