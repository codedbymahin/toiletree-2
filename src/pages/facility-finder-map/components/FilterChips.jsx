import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ activeFilters, onFilterChange }) => {
  const filterOptions = [
    { id: 'all', label: 'All Facilities', icon: 'MapPin' },
    { id: 'toilet', label: 'Toilets', icon: 'Home' },
    { id: 'water', label: 'Drinking Water', icon: 'Droplets' },
    { id: 'female-friendly', label: 'Female Friendly', icon: 'Shield' },
    { id: 'wheelchair', label: 'Wheelchair Access', icon: 'Accessibility' },
    { id: 'open-now', label: 'Open Now', icon: 'Clock' },
    { id: 'high-rated', label: '4+ Stars', icon: 'Star' }
  ];

  const handleFilterClick = (filterId) => {
    if (filterId === 'all') {
      onFilterChange([]);
    } else {
      const newFilters = activeFilters?.includes(filterId)
        ? activeFilters?.filter(f => f !== filterId)
        : [...activeFilters, filterId];
      onFilterChange(newFilters);
    }
  };

  return (
    <div className="bg-background border-b border-border p-4">
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
        {filterOptions?.map((filter) => {
          const isActive = filter?.id === 'all' 
            ? activeFilters?.length === 0 
            : activeFilters?.includes(filter?.id);
          
          return (
            <button
              key={filter?.id}
              onClick={() => handleFilterClick(filter?.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-micro ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon name={filter?.icon} size={16} />
              <span>{filter?.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterChips;