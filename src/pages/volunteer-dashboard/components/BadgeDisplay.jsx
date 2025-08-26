import React from 'react';
import Icon from '../../../components/AppIcon';

const BadgeDisplay = ({ badges }) => {
  const badgeIcons = {
    'Facility Verifier': 'CheckCircle',
    'Content Moderator': 'Shield',
    'Community Hero': 'Heart',
    'Quality Guardian': 'Star',
    'Safety Champion': 'Award',
    'Trusted Reviewer': 'ThumbsUp'
  };

  const badgeColors = {
    'Facility Verifier': 'bg-green-100 text-green-800 border-green-200',
    'Content Moderator': 'bg-blue-100 text-blue-800 border-blue-200',
    'Community Hero': 'bg-red-100 text-red-800 border-red-200',
    'Quality Guardian': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Safety Champion': 'bg-purple-100 text-purple-800 border-purple-200',
    'Trusted Reviewer': 'bg-indigo-100 text-indigo-800 border-indigo-200'
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
        <Icon name="Award" size={20} />
        <span>Your Badges</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {badges?.map((badge) => (
          <div
            key={badge?.id}
            className={`p-3 rounded-lg border text-center transition-micro hover:scale-105 ${
              badgeColors?.[badge?.name] || 'bg-gray-100 text-gray-800 border-gray-200'
            }`}
          >
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <Icon 
                name={badgeIcons?.[badge?.name] || 'Award'} 
                size={20} 
                color="currentColor"
              />
            </div>
            <h4 className="text-xs font-medium mb-1">{badge?.name}</h4>
            <p className="text-xs opacity-80">{badge?.earnedDate}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          Complete more tasks to earn new badges and recognition!
        </p>
      </div>
    </div>
  );
};

export default BadgeDisplay;