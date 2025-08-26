import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: 'Shield',
      title: 'Community Verified',
      description: 'Every facility is verified by our community members to ensure safety and cleanliness standards are met.',
      color: 'text-success'
    },
    {
      id: 2,
      icon: 'Clock',
      title: 'Real-time Availability',
      description: 'Get live updates on facility availability, operating hours, and current status before you travel.',
      color: 'text-primary'
    },
    {
      id: 3,
      icon: 'Heart',
      title: 'Female-Friendly Certified',
      description: 'Special certification for facilities that prioritize women\'s safety, privacy, and comfort needs.',
      color: 'text-warning'
    },
    {
      id: 4,
      icon: 'MapPin',
      title: 'Smart Location Finder',
      description: 'Advanced search with area-based filtering to find the nearest safe facilities wherever you are.',
      color: 'text-primary'
    },
    {
      id: 5,
      icon: 'Star',
      title: 'Community Reviews',
      description: 'Read honest reviews from other women and contribute your own experiences to help the community.',
      color: 'text-success'
    },
    {
      id: 6,
      icon: 'Droplets',
      title: 'Water Availability Tracking',
      description: 'Find facilities with clean drinking water and handwashing stations to stay hydrated and healthy.',
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Toiletree?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique challenges women face when looking for safe facilities. Our platform is built with your safety and dignity in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature) => (
            <div
              key={feature?.id}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-modal transition-state group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center group-hover:scale-110 transition-spring">
                    <Icon name={feature?.icon} size={24} className={feature?.color} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {feature?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;