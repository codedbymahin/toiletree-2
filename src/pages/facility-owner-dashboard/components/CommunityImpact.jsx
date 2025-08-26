import React from 'react';
import Icon from '../../../components/AppIcon';

const CommunityImpact = ({ impactData }) => {
  const impactMetrics = [
    {
      id: 'women-helped',
      title: 'Women Helped',
      value: impactData?.womenHelped,
      icon: 'Users',
      description: 'Total women who found safe facilities',
      color: 'text-pink-600 bg-pink-50'
    },
    {
      id: 'safety-score',
      title: 'Safety Score',
      value: `${impactData?.safetyScore}/10`,
      icon: 'Shield',
      description: 'Community safety rating',
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 'monthly-visits',
      title: 'Monthly Visits',
      value: impactData?.monthlyVisits?.toLocaleString(),
      icon: 'MapPin',
      description: 'Facility visits this month',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 'community-rank',
      title: 'Community Rank',
      value: `#${impactData?.communityRank}`,
      icon: 'Award',
      description: 'Among facility owners in your area',
      color: 'text-yellow-600 bg-yellow-50'
    }
  ];

  const achievements = [
    {
      id: 'verified-contributor',
      title: 'Verified Contributor',
      description: 'All facilities verified by community',
      icon: 'CheckCircle',
      earned: impactData?.achievements?.includes('verified-contributor'),
      date: '15 Aug 2025'
    },
    {
      id: 'safety-champion',
      title: 'Safety Champion',
      description: 'Maintained 4.5+ safety rating for 3 months',
      icon: 'Shield',
      earned: impactData?.achievements?.includes('safety-champion'),
      date: '10 Aug 2025'
    },
    {
      id: 'community-hero',
      title: 'Community Hero',
      description: 'Helped 500+ women find safe facilities',
      icon: 'Heart',
      earned: impactData?.achievements?.includes('community-hero'),
      date: '05 Aug 2025'
    },
    {
      id: 'responsive-owner',
      title: 'Responsive Owner',
      description: 'Responds to reviews within 24 hours',
      icon: 'MessageCircle',
      earned: impactData?.achievements?.includes('responsive-owner'),
      date: null
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Community Impact</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Your contribution to women's safety and dignity</p>
      </div>
      <div className="p-6">
        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {impactMetrics?.map((metric) => (
            <div key={metric?.id} className="text-center">
              <div className={`w-12 h-12 rounded-lg ${metric?.color} flex items-center justify-center mx-auto mb-3`}>
                <Icon name={metric?.icon} size={24} />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{metric?.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{metric?.title}</p>
              <p className="text-xs text-muted-foreground">{metric?.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h4 className="text-base font-semibold text-foreground mb-4">Achievements</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements?.map((achievement) => (
              <div
                key={achievement?.id}
                className={`p-4 rounded-lg border transition-micro ${
                  achievement?.earned
                    ? 'bg-green-50 border-green-200' :'bg-muted border-border'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    achievement?.earned
                      ? 'bg-green-100 text-green-600' :'bg-gray-100 text-gray-400'
                  }`}>
                    <Icon name={achievement?.icon} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h5 className={`font-medium ${
                        achievement?.earned ? 'text-green-800' : 'text-muted-foreground'
                      }`}>
                        {achievement?.title}
                      </h5>
                      {achievement?.earned && (
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                      )}
                    </div>
                    <p className={`text-sm ${
                      achievement?.earned ? 'text-green-700' : 'text-muted-foreground'
                    }`}>
                      {achievement?.description}
                    </p>
                    {achievement?.earned && achievement?.date && (
                      <p className="text-xs text-green-600 mt-1">Earned on {achievement?.date}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Quote" size={16} color="white" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium mb-2">
                "Your facilities have provided safe access to {impactData?.womenHelped?.toLocaleString()} women this year, contributing to their freedom of movement and dignity."
              </p>
              <p className="text-xs text-muted-foreground">
                - Toiletree Community Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityImpact;