import React from 'react';
import Icon from '../../../components/AppIcon';

const AmenityChecklist = ({ amenities = {} }) => {
  const amenityList = [
    {
      key: 'wheelchairAccessible',
      label: 'Wheelchair Accessible',
      icon: 'Accessibility',
      description: 'Accessible for people with mobility challenges'
    },
    {
      key: 'femaleFriendly',
      label: 'Female-Friendly',
      icon: 'Users',
      description: 'Safe and comfortable for women'
    },
    {
      key: 'drinkingWater',
      label: 'Drinking Water',
      icon: 'Droplets',
      description: 'Clean drinking water available'
    },
    {
      key: 'cleanlinessRating',
      label: 'High Cleanliness',
      icon: 'Sparkles',
      description: 'Maintained to high cleanliness standards',
      isRating: true
    },
    {
      key: 'babyChanging',
      label: 'Baby Changing',
      icon: 'Baby',
      description: 'Baby changing facilities available'
    },
    {
      key: 'handwashing',
      label: 'Handwashing',
      icon: 'Waves',
      description: 'Handwashing facilities with soap'
    },
    {
      key: 'lighting',
      label: 'Well Lit',
      icon: 'Lightbulb',
      description: 'Adequate lighting for safety'
    },
    {
      key: 'privacy',
      label: 'Privacy',
      icon: 'Lock',
      description: 'Secure and private facilities'
    }
  ];

  const getAmenityStatus = (amenity) => {
    const value = amenities?.[amenity?.key];
    
    if (amenity?.isRating) {
      return value >= 4; // Consider 4+ stars as "high cleanliness"
    }
    
    return Boolean(value);
  };

  const getAmenityValue = (amenity) => {
    const value = amenities?.[amenity?.key];
    
    if (amenity?.isRating && value) {
      return `${value}/5 stars`;
    }
    
    return null;
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
        Amenities & Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenityList?.map((amenity) => {
          const isAvailable = getAmenityStatus(amenity);
          const value = getAmenityValue(amenity);
          
          return (
            <div
              key={amenity?.key}
              className={`flex items-start space-x-3 p-3 rounded-lg border transition-micro ${
                isAvailable
                  ? 'border-success bg-success bg-opacity-5' :'border-border bg-muted bg-opacity-30'
              }`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                isAvailable ? 'bg-success text-white' : 'bg-muted-foreground text-white'
              }`}>
                <Icon 
                  name={isAvailable ? "Check" : amenity?.icon} 
                  size={16} 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h3 className={`text-sm font-medium ${
                    isAvailable ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {amenity?.label}
                  </h3>
                  {value && (
                    <span className="text-xs text-warning font-medium">
                      {value}
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-1 ${
                  isAvailable ? 'text-muted-foreground' : 'text-muted-foreground opacity-70'
                }`}>
                  {amenity?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Summary */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Available amenities:</span>
          <span className="font-medium text-foreground">
            {amenityList?.filter(amenity => getAmenityStatus(amenity))?.length} of {amenityList?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AmenityChecklist;