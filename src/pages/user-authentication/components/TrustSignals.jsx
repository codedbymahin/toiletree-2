import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected'
    },
    {
      icon: 'Users',
      title: 'Community Verified',
      description: 'Trusted by thousands of women across Bangladesh'
    },
    {
      icon: 'Lock',
      title: 'Safe Platform',
      description: 'Built with safety and dignity in mind'
    }
  ];

  const testimonials = [
    {
      name: 'Fatima Rahman',
      role: 'Regular User',
      location: 'Dhaka',
      comment: 'Toiletree has made my daily commute so much safer. I always know where to find clean facilities.',
      rating: 5
    },
    {
      name: 'Rashida Begum',
      role: 'Facility Owner',
      location: 'Chittagong',
      comment: 'Proud to be part of this community initiative. It feels good to help other women.',
      rating: 5
    }
  ];

  return (
    <div className="space-y-8">
      {/* Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {securityFeatures?.map((feature, index) => (
          <div key={index} className="text-center p-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
            </div>
            <h4 className="font-medium text-foreground mb-1">{feature?.title}</h4>
            <p className="text-sm text-muted-foreground">{feature?.description}</p>
          </div>
        ))}
      </div>
      {/* Testimonials */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground text-center mb-4">
          Trusted by Our Community
        </h3>
        {testimonials?.map((testimonial, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-4 border border-border">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={20} color="var(--color-primary)" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h5 className="font-medium text-foreground text-sm">{testimonial?.name}</h5>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{testimonial?.location}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{testimonial?.role}</p>
                <p className="text-sm text-foreground">{testimonial?.comment}</p>
                <div className="flex items-center mt-2">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={14} color="var(--color-warning)" className="fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Privacy Links */}
      <div className="text-center space-y-2 pt-4 border-t border-border">
        <div className="flex items-center justify-center space-x-4 text-sm">
          <button className="text-primary hover:text-primary/80 transition-micro">
            Privacy Policy
          </button>
          <span className="text-muted-foreground">•</span>
          <button className="text-primary hover:text-primary/80 transition-micro">
            Terms of Service
          </button>
          <span className="text-muted-foreground">•</span>
          <button className="text-primary hover:text-primary/80 transition-micro">
            Help Center
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          By signing up, you're joining a community dedicated to women's safety and dignity.
        </p>
      </div>
    </div>
  );
};

export default TrustSignals;