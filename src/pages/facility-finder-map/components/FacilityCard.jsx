import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacilityCard = ({ facility, onGetDirections, onToggleFavorite, isFavorite = false }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-success';
      case 'closing-soon': return 'text-warning';
      case 'closed': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'closing-soon': return 'Closing Soon';
      case 'closed': return 'Closed';
      default: return 'Unknown';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-card hover:shadow-modal transition-state">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          src={facility?.image}
          alt={facility?.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleFavorite(facility?.id)}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-micro"
        >
          <Icon
            name="Heart"
            size={18}
            className={isFavorite ? 'text-primary fill-current' : 'text-muted-foreground'}
          />
        </button>
        
        {/* Status Badge */}
        <div className="absolute bottom-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm ${getStatusColor(facility?.status)}`}>
            <div className={`w-2 h-2 rounded-full mr-1 ${
              facility?.status === 'open' ? 'bg-success' :
              facility?.status === 'closing-soon'? 'bg-warning' : 'bg-destructive'
            }`} />
            {getStatusText(facility?.status)}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1 line-clamp-1">
              {facility?.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
              {facility?.address}
            </p>
          </div>
          <div className="ml-2 text-right">
            <div className="flex items-center space-x-1 mb-1">
              {renderStars(facility?.rating)}
            </div>
            <span className="text-sm text-muted-foreground">
              {facility?.rating} ({facility?.reviewCount})
            </span>
          </div>
        </div>

        {/* Distance and Type */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              {facility?.distance}
            </span>
            <div className="flex items-center space-x-1">
              {facility?.types?.map((type, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                >
                  <Icon
                    name={type === 'toilet' ? 'Home' : 'Droplets'}
                    size={12}
                    className="mr-1"
                  />
                  {type === 'toilet' ? 'Toilet' : 'Water'}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center space-x-3 mb-4">
          {facility?.amenities?.femaleFriendly && (
            <div className="flex items-center space-x-1 text-success">
              <Icon name="Shield" size={14} />
              <span className="text-xs">Female Friendly</span>
            </div>
          )}
          {facility?.amenities?.wheelchairAccessible && (
            <div className="flex items-center space-x-1 text-primary">
              <Icon name="Accessibility" size={14} />
              <span className="text-xs">Accessible</span>
            </div>
          )}
          {facility?.amenities?.cleanWater && (
            <div className="flex items-center space-x-1 text-blue-600">
              <Icon name="Droplets" size={14} />
              <span className="text-xs">Clean Water</span>
            </div>
          )}
        </div>

        {/* Operating Hours */}
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Clock" size={14} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {facility?.operatingHours}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1"
          >
            <Link to={`/facility-detail-page?id=${facility?.id}`}>
              View Details
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onGetDirections(facility)}
            iconName="Navigation"
            iconSize={14}
          >
            Directions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;