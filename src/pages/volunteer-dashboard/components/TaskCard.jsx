import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TaskCard = ({ task, onClaim, onView }) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const typeIcons = {
    verification: 'CheckCircle',
    moderation: 'Shield',
    investigation: 'Search',
    report: 'Flag'
  };

  return (
    <div className="bg-card rounded-lg p-4 border border-border shadow-card hover:shadow-lg transition-state">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
            <Icon name={typeIcons?.[task?.type]} size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">{task?.title}</h4>
            <p className="text-sm text-muted-foreground">{task?.location}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors?.[task?.priority]}`}>
          {task?.priority}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{task?.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <span className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{task?.timeAgo}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="Award" size={14} />
            <span>{task?.points} pts</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onView(task)}
            iconName="Eye"
            iconSize={14}
          >
            View
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onClaim(task)}
            iconName="Plus"
            iconSize={14}
          >
            Claim
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;