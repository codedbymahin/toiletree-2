import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const GuestModePrompt = () => {
  return (
    <div className="bg-muted/30 rounded-lg p-6 border border-border">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
          <Icon name="Eye" size={32} color="var(--color-accent)" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Continue as Guest
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Explore facilities and browse reviews without creating an account. 
            You can always sign up later to save favorites and leave reviews.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button
            variant="outline"
            fullWidth
            asChild
            iconName="MapPin"
            iconPosition="left"
          >
            <Link to="/facility-finder-map">
              Browse Facilities
            </Link>
          </Button>
          
          <div className="text-xs text-muted-foreground">
            <p>Guest mode limitations:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Cannot save favorite facilities</li>
              <li>Cannot submit reviews or ratings</li>
              <li>Cannot report facility issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestModePrompt;