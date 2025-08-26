import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MapView = ({ facilities, selectedFacility, onFacilitySelect, userLocation, className = "" }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 23.8103, lng: 90.4125 }); // Dhaka, Bangladesh
  const [zoom, setZoom] = useState(12);

  // Mock map implementation with facility pins
  const handlePinClick = (facility) => {
    onFacilitySelect(facility);
  };

  const getPinColor = (status) => {
    switch (status) {
      case 'open': return 'bg-success';
      case 'closing-soon': return 'bg-warning';
      case 'closed': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 1, 18));
  const zoomOut = () => setZoom(prev => Math.max(prev - 1, 8));

  return (
    <div className={`relative bg-muted rounded-lg overflow-hidden ${className}`}>
      {/* Google Maps Embed */}
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        title="Facility Finder Map"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${mapCenter?.lat},${mapCenter?.lng}&z=${zoom}&output=embed`}
        className="absolute inset-0"
      />
      {/* Map Overlay with Facility Pins */}
      <div className="absolute inset-0 pointer-events-none">
        {facilities?.map((facility, index) => {
          const isSelected = selectedFacility?.id === facility?.id;
          // Mock positioning based on facility data
          const pinStyle = {
            left: `${20 + (index % 5) * 15}%`,
            top: `${25 + Math.floor(index / 5) * 20}%`,
          };

          return (
            <button
              key={facility?.id}
              onClick={() => handlePinClick(facility)}
              className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
              style={pinStyle}
            >
              <div className={`relative ${isSelected ? 'scale-125' : ''}`}>
                <div className={`w-6 h-6 rounded-full border-2 border-background shadow-lg ${getPinColor(facility?.status)}`}>
                  <Icon
                    name={facility?.types?.includes('toilet') ? 'Home' : 'Droplets'}
                    size={12}
                    className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                {isSelected && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-lg px-2 py-1 shadow-lg whitespace-nowrap">
                    <span className="text-xs font-medium text-foreground">
                      {facility?.name}
                    </span>
                  </div>
                )}
              </div>
            </button>
          );
        })}

        {/* User Location Pin */}
        {userLocation && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: '50%', top: '50%' }}
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-background shadow-lg animate-pulse" />
          </div>
        )}
      </div>
      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={zoomIn}
          iconName="Plus"
          iconSize={16}
        />
        <Button
          variant="secondary"
          size="icon"
          onClick={zoomOut}
          iconName="Minus"
          iconSize={16}
        />
      </div>
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3">
        <h4 className="text-xs font-medium text-foreground mb-2">Status</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full" />
            <span className="text-xs text-muted-foreground">Open</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-warning rounded-full" />
            <span className="text-xs text-muted-foreground">Closing Soon</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-destructive rounded-full" />
            <span className="text-xs text-muted-foreground">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;