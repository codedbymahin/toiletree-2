import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacilityPreviewCard = ({ facility, onClose, onGetDirections, onToggleFavorite, isFavorite = false }) => {
  if (!facility) return null;

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
        size={12}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-modal p-4 max-w-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-base font-heading font-semibold text-foreground mb-1">
            {facility?.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {facility?.address}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-muted rounded-full transition-micro"
        >
          <Icon name="X" size={16} className="text-muted-foreground" />
        </button>
      </div>
      {/* Image */}
      <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
        <Image
          src={facility?.image}
          alt={facility?.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleFavorite(facility?.id)}
          className="absolute top-2 right-2 p-1 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-micro"
        >
          <Icon
            name="Heart"
            size={14}
            className={isFavorite ? 'text-primary fill-current' : 'text-muted-foreground'}
          />
        </button>
      </div>
      {/* Status and Rating */}
      <div className="flex items-center justify-between mb-3">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted ${getStatusColor(facility?.status)}`}>
          <div className={`w-2 h-2 rounded-full mr-1 ${
            facility?.status === 'open' ? 'bg-success' :
            facility?.status === 'closing-soon'? 'bg-warning' : 'bg-destructive'
          }`} />
          {getStatusText(facility?.status)}
        </span>
        <div className="flex items-center space-x-1">
          {renderStars(facility?.rating)}
          <span className="text-xs text-muted-foreground ml-1">
            ({facility?.reviewCount})
          </span>
        </div>
      </div>
      {/* Distance and Types */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">
          {facility?.distance}
        </span>
        <div className="flex items-center space-x-1">
          {facility?.types?.map((type, index) => (
            <Icon
              key={index}
              name={type === 'toilet' ? 'Home' : 'Droplets'}
              size={14}
              className="text-primary"
            />
          ))}
        </div>
      </div>
      {/* Amenities */}
      <div className="flex items-center space-x-2 mb-4">
        {facility?.amenities?.femaleFriendly && (
          <Icon name="Shield" size={14} className="text-success" />
        )}
        {facility?.amenities?.wheelchairAccessible && (
          <Icon name="Accessibility" size={14} className="text-primary" />
        )}
        {facility?.amenities?.cleanWater && (
          <Icon name="Droplets" size={14} className="text-blue-600" />
        )}
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
            Details
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
  );
};

export default FacilityPreviewCard;