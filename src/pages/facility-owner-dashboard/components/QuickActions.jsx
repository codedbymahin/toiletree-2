import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = ({ onAddFacility, onManagePhotos, onViewAnalytics, onUpdateHours }) => {
  const actions = [
    {
      id: 'add-facility',
      title: 'Add New Facility',
      description: 'List a new toilet or water facility',
      icon: 'Plus',
      color: 'primary',
      onClick: onAddFacility
    },
    {
      id: 'manage-photos',
      title: 'Manage Photos',
      description: 'Upload and organize facility images',
      icon: 'Camera',
      color: 'info',
      onClick: onManagePhotos
    },
    {
      id: 'view-analytics',
      title: 'View Analytics',
      description: 'Detailed performance insights',
      icon: 'BarChart3',
      color: 'success',
      onClick: onViewAnalytics
    },
    {
      id: 'update-hours',
      title: 'Update Hours',
      description: 'Modify operating schedules',
      icon: 'Clock',
      color: 'warning',
      onClick: onUpdateHours
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100';
      case 'success':
        return 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100';
      case 'warning':
        return 'bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100';
      case 'info':
        return 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
        <p className="text-sm text-muted-foreground mt-1">Manage your facilities efficiently</p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions?.map((action) => (
            <button
              key={action?.id}
              onClick={action?.onClick}
              className={`p-4 rounded-lg border-2 border-dashed transition-all duration-200 text-left group ${getColorClasses(action?.color)}`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(action?.color)?.replace('border-dashed', 'border-solid')}`}>
                  <Icon name={action?.icon} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground group-hover:text-current transition-micro">
                    {action?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 group-hover:text-current/80 transition-micro">
                    {action?.description}
                  </p>
                </div>
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className="text-muted-foreground group-hover:text-current transition-micro" 
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={16} color="white" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Pro Tip</h4>
                <p className="text-sm text-muted-foreground">
                  Regular photo updates and prompt review responses help build trust and increase facility usage by up to 40%.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button
            variant="outline"
            fullWidth
            iconName="HelpCircle"
            iconPosition="left"
            iconSize={16}
          >
            Need Help? View Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;