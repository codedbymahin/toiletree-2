import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onLocationDetect, isDetectingLocation = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e?.target?.value);
    // Trigger search on every keystroke for real-time results
    onSearch(e?.target?.value);
  };

  return (
    <div className="bg-background border-b border-border p-4">
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <Input
            type="search"
            placeholder="Search for areas, landmarks, or facility names..."
            value={searchQuery}
            onChange={handleInputChange}
            className="pl-10"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          />
        </div>
        
        <Button
          type="button"
          variant="outline"
          size="default"
          onClick={onLocationDetect}
          loading={isDetectingLocation}
          iconName="MapPin"
          className="shrink-0"
        >
          <span className="hidden sm:inline">Current Location</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;