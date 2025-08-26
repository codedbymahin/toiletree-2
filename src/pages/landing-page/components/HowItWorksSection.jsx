import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: 'Search',
      title: 'Search & Discover',
      description: 'Use our smart search to find safe toilets and water facilities near your location or destination.',
      details: [
        'Enter your location or browse the map',
        'Filter by amenities and safety features',
        'View real-time availability status'
      ]
    },
    {
      id: 2,
      icon: 'MapPin',
      title: 'Navigate & Visit',
      description: 'Get directions to verified facilities with detailed information about amenities and operating hours.',
      details: [
        'View facility photos and reviews',
        'Check operating hours and contact info',
        'Get turn-by-turn directions'
      ]
    },
    {
      id: 3,
      icon: 'MessageSquare',
      title: 'Review & Share',
      description: 'Help other women by sharing your experience and rating the facility to keep our community informed.',
      details: [
        'Rate cleanliness and safety',
        'Share photos and detailed reviews',
        'Report any issues to help improve'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding safe facilities is simple with our three-step process designed specifically for women's needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps?.map((step, index) => (
            <div key={step?.id} className="relative">
              {/* Connection Line */}
              {index < steps?.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Icon name="ChevronRight" size={20} className="text-border" />
                  </div>
                </div>
              )}

              <div className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-modal transition-state relative z-10">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-heading font-bold text-lg mb-4 mx-auto">
                  {step?.id}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <Icon name={step?.icon} size={32} className="text-primary" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading font-semibold text-foreground text-xl mb-3">
                    {step?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {step?.description}
                  </p>

                  {/* Details List */}
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    {step?.details?.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            asChild
            iconName="ArrowRight"
            iconPosition="right"
            className="text-lg px-8 py-4"
          >
            <Link to="/facility-finder-map">
              Start Finding Facilities
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;