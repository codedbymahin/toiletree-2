import React from 'react';
import FacilityCard from './FacilityCard';
import Icon from '../../../components/AppIcon';

const FacilityList = ({ 
  facilities, 
  onGetDirections, 
  onToggleFavorite, 
  favorites = [], 
  loading = false,
  searchQuery = '',
  activeFilters = []
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span>Loading facilities...</span>
        </div>
      </div>
    );
  }

  if (facilities?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon name="MapPin" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
          No facilities found
        </h3>
        <p className="text-muted-foreground max-w-sm">
          {searchQuery || activeFilters?.length > 0
            ? "Try adjusting your search or filters to find more facilities." :"No facilities are available in this area at the moment."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-heading font-semibold text-foreground">
          {facilities?.length} {facilities?.length === 1 ? 'Facility' : 'Facilities'} Found
        </h2>
        {(searchQuery || activeFilters?.length > 0) && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Filter" size={16} />
            <span>Filtered results</span>
          </div>
        )}
      </div>
      {/* Facility Cards */}
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-1">
        {facilities?.map((facility) => (
          <FacilityCard
            key={facility?.id}
            facility={facility}
            onGetDirections={onGetDirections}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites?.includes(facility?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FacilityList;