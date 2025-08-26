import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VerificationMap = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    { id: 1, name: "Dhanmondi", pending: 12, verified: 45, lat: 23.7461, lng: 90.3742 },
    { id: 2, name: "Gulshan", pending: 8, verified: 32, lat: 23.7925, lng: 90.4078 },
    { id: 3, name: "Uttara", pending: 15, verified: 28, lat: 23.8759, lng: 90.3795 },
    { id: 4, name: "Old Dhaka", pending: 20, verified: 18, lat: 23.7104, lng: 90.4074 }
  ];

  return (
    <div className="bg-card rounded-lg border border-border shadow-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <Icon name="MapPin" size={20} />
          <span>Verification Coverage Map</span>
        </h3>
      </div>
      <div className="relative">
        {/* Map Container */}
        <div className="h-64 bg-muted relative overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Dhaka Verification Areas"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=23.8103,90.4125&z=11&output=embed"
            className="border-0"
          />
          
          {/* Area Markers Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {areas?.map((area) => (
              <div
                key={area?.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{
                  left: `${25 + (area?.id * 15)}%`,
                  top: `${30 + (area?.id * 10)}%`
                }}
              >
                <button
                  onClick={() => setSelectedArea(area)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg transition-all ${
                    area?.pending > 10 ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {area?.pending}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Area Statistics */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
              <p className="text-xs text-muted-foreground">High Priority</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
              <p className="text-xs text-muted-foreground">Low Priority</p>
            </div>
          </div>
          
          {selectedArea && (
            <div className="bg-muted rounded-lg p-3 mb-4">
              <h4 className="font-medium text-foreground mb-2">{selectedArea?.name}</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Pending:</span>
                  <span className="ml-2 font-medium text-red-600">{selectedArea?.pending}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Verified:</span>
                  <span className="ml-2 font-medium text-green-600">{selectedArea?.verified}</span>
                </div>
              </div>
            </div>
          )}
          
          <Button
            variant="outline"
            fullWidth
            iconName="Navigation"
            iconPosition="left"
          >
            View Tasks in This Area
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationMap;