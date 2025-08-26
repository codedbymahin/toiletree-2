import React from 'react';
import Button from '../../../components/ui/Button';

const ActionButtons = ({ 
  onGetDirections = () => {},
  onReportIssue = () => {},
  onCallFacility = () => {},
  hasPhoneNumber = false
}) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
        Quick Actions
      </h2>

      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          onClick={onGetDirections}
          iconName="Navigation"
          iconPosition="left"
          className="justify-center"
        >
          Get Directions
        </Button>

        {hasPhoneNumber && (
          <Button
            variant="outline"
            fullWidth
            onClick={onCallFacility}
            iconName="Phone"
            iconPosition="left"
            className="justify-center"
          >
            Call Facility
          </Button>
        )}

        <Button
          variant="ghost"
          fullWidth
          onClick={onReportIssue}
          iconName="Flag"
          iconPosition="left"
          className="justify-center text-error hover:text-error hover:bg-error hover:bg-opacity-10"
        >
          Report Issue
        </Button>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Help keep our community safe by reporting any issues or outdated information.
        </p>
      </div>
    </div>
  );
};

export default ActionButtons;