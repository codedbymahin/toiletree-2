import React from 'react';
import Button from '../../../components/ui/Button';

const ViewToggle = ({ currentView, onViewChange }) => {
  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      <Button
        variant={currentView === 'split' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('split')}
        iconName="Layout"
        iconSize={16}
        className="flex-1"
      >
        Map & List
      </Button>
      <Button
        variant={currentView === 'map' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('map')}
        iconName="Map"
        iconSize={16}
        className="flex-1"
      >
        Map Only
      </Button>
      <Button
        variant={currentView === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('list')}
        iconName="List"
        iconSize={16}
        className="flex-1"
      >
        List Only
      </Button>
    </div>
  );
};

export default ViewToggle;