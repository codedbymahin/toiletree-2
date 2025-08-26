import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FacilityHeader = ({ 
  name = '', 
  address = '', 
  rating = 0, 
  reviewCount = 0, 
  isVerified = false,
  status = 'unknown',
  onBookmark = () => {},
  isBookmarked = false
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-success';
      case 'closed': return 'text-error';
      case 'busy': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open Now';
      case 'closed': return 'Closed';
      case 'busy': return 'Busy';
      default: return 'Status Unknown';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-2xl font-heading font-semibold text-foreground">
              {name}
            </h1>
            {isVerified && (
              <div className="flex items-center space-x-1 bg-success bg-opacity-10 text-success px-2 py-1 rounded-full text-xs font-medium">
                <Icon name="Shield" size={12} />
                <span>Verified</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-1 text-muted-foreground mb-2">
            <Icon name="MapPin" size={16} />
            <span className="text-sm">{address}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted-foreground'}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground ml-1">
                {rating?.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({reviewCount} reviews)
              </span>
            </div>

            <div className={`flex items-center space-x-1 ${getStatusColor(status)}`}>
              <div className={`w-2 h-2 rounded-full ${
                status === 'open' ? 'bg-success' : 
                status === 'closed' ? 'bg-error' : 
                status === 'busy' ? 'bg-warning' : 'bg-muted-foreground'
              }`} />
              <span className="text-sm font-medium">{getStatusText(status)}</span>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onBookmark}
          className="ml-4"
        >
          <Icon 
            name={isBookmarked ? "Bookmark" : "BookmarkPlus"} 
            size={20} 
            className={isBookmarked ? 'fill-current text-primary' : ''}
          />
        </Button>
      </div>
    </div>
  );
};

export default FacilityHeader;