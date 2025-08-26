import React from 'react';
import Icon from '../../../components/AppIcon';

const ActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    const icons = {
      verification: 'CheckCircle',
      moderation: 'Shield',
      badge: 'Award',
      report: 'Flag',
      review: 'Star'
    };
    return icons?.[type] || 'Activity';
  };

  const getActivityColor = (type) => {
    const colors = {
      verification: 'text-green-600',
      moderation: 'text-blue-600',
      badge: 'text-yellow-600',
      report: 'text-red-600',
      review: 'text-purple-600'
    };
    return colors?.[type] || 'text-gray-600';
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
        <Icon name="Activity" size={20} />
        <span>Recent Activity</span>
      </h3>
      <div className="space-y-4">
        {activities?.map((activity) => (
          <div key={activity?.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity?.description}</p>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-xs text-muted-foreground">{activity?.timeAgo}</span>
                {activity?.points && (
                  <span className="text-xs text-primary font-medium">+{activity?.points} pts</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 transition-micro">
        View all activities
      </button>
    </div>
  );
};

export default ActivityFeed;