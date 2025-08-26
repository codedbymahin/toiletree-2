import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: 'Users',
      value: '1,200+',
      label: 'Active Community Members',
      description: 'Women and girls using our platform daily'
    },
    {
      id: 2,
      icon: 'MapPin',
      value: '500+',
      label: 'Verified Facilities',
      description: 'Safe toilets and water points across Bangladesh'
    },
    {
      id: 3,
      icon: 'Star',
      value: '4.8/5',
      label: 'Average Rating',
      description: 'Community satisfaction score'
    },
    {
      id: 4,
      icon: 'Shield',
      value: '98%',
      label: 'Safety Verified',
      description: 'Facilities meet our safety standards'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted by the Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of women who rely on Toiletree for safe and dignified access to essential facilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:shadow-modal transition-state"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-2">
                {stat?.value}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {stat?.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;