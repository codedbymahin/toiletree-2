import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeaderboardCard = ({ volunteers }) => {
  const getRankIcon = (rank) => {
    if (rank === 1) return { icon: 'Crown', color: 'text-yellow-500' };
    if (rank === 2) return { icon: 'Medal', color: 'text-gray-400' };
    if (rank === 3) return { icon: 'Award', color: 'text-orange-500' };
    return { icon: 'User', color: 'text-gray-500' };
  };

  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
        <Icon name="Trophy" size={20} />
        <span>Top Volunteers</span>
      </h3>
      <div className="space-y-3">
        {volunteers?.map((volunteer, index) => {
          const rank = index + 1;
          const rankInfo = getRankIcon(rank);
          
          return (
            <div key={volunteer?.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-micro">
              <div className={`w-6 h-6 flex items-center justify-center ${rankInfo?.color}`}>
                <Icon name={rankInfo?.icon} size={16} />
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                <Image
                  src={volunteer?.avatar}
                  alt={volunteer?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{volunteer?.name}</p>
                <p className="text-xs text-muted-foreground">{volunteer?.level}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-primary">{volunteer?.points}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary/80 transition-micro">
        View full leaderboard
      </button>
    </div>
  );
};

export default LeaderboardCard;