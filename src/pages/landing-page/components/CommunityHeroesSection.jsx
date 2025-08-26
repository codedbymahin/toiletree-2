import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const CommunityHeroesSection = () => {
  const heroes = [
    {
      id: 1,
      name: 'Salma Khatun',
      role: 'Community Volunteer',
      location: 'Dhaka',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      contribution: 'Verified 45+ facilities',
      badge: 'Gold Contributor',
      description: 'Salma has been instrumental in verifying facilities across Old Dhaka, ensuring women have access to safe spaces in the historic district.',
      stats: {
        facilities: 45,
        reviews: 120,
        helpedUsers: 890
      }
    },
    {
      id: 2,
      name: 'Ruma Akter',
      role: 'Safety Advocate',
      location: 'Chittagong',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      contribution: 'Led 12 safety workshops',
      badge: 'Community Leader',
      description: 'Ruma organizes community workshops to educate women about facility safety and digital literacy for using the platform.',
      stats: {
        workshops: 12,
        participants: 340,
        facilities: 28
      }
    },
    {
      id: 3,
      name: 'Nasir Ahmed',
      role: 'Facility Owner',
      location: 'Sylhet',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      contribution: 'Opened facilities to community',
      badge: 'Partner Hero',
      description: 'Nasir opened his restaurant facilities to the community and maintains the highest safety standards, earning 5-star ratings consistently.',
      stats: {
        facilities: 3,
        rating: 4.9,
        monthlyUsers: 450
      }
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Community Heroes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the amazing individuals who are making a difference in their communities by ensuring safe access to essential facilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {heroes?.map((hero) => (
            <div
              key={hero?.id}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-modal transition-state"
            >
              {/* Hero Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <Image
                    src={hero?.avatar}
                    alt={hero?.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                    <Icon name="Award" size={16} />
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                  {hero?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {hero?.role} • {hero?.location}
                </p>
                
                {/* Badge */}
                <div className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  <Icon name="Star" size={12} />
                  <span>{hero?.badge}</span>
                </div>
              </div>

              {/* Contribution */}
              <div className="text-center mb-4">
                <p className="text-sm font-medium text-foreground mb-2">
                  {hero?.contribution}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hero?.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {hero?.id === 1 && (
                  <>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.facilities}
                      </div>
                      <div className="text-xs text-muted-foreground">Facilities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.reviews}
                      </div>
                      <div className="text-xs text-muted-foreground">Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.helpedUsers}
                      </div>
                      <div className="text-xs text-muted-foreground">Helped</div>
                    </div>
                  </>
                )}
                {hero?.id === 2 && (
                  <>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.workshops}
                      </div>
                      <div className="text-xs text-muted-foreground">Workshops</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.participants}
                      </div>
                      <div className="text-xs text-muted-foreground">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.facilities}
                      </div>
                      <div className="text-xs text-muted-foreground">Verified</div>
                    </div>
                  </>
                )}
                {hero?.id === 3 && (
                  <>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.facilities}
                      </div>
                      <div className="text-xs text-muted-foreground">Facilities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-heading font-bold text-foreground">
                        {hero?.stats?.monthlyUsers}
                      </div>
                      <div className="text-xs text-muted-foreground">Monthly</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Community CTA */}
        <div className="bg-card rounded-xl p-8 text-center shadow-card border border-border">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Become a Community Hero
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our network of volunteers and facility owners who are making a real difference in women's lives across Bangladesh. Every contribution matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                asChild
                iconName="Users"
                iconPosition="left"
              >
                <Link to="/volunteer-dashboard">
                  Become a Volunteer
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                iconName="Building2"
                iconPosition="left"
              >
                <Link to="/facility-owner-dashboard">
                  List Your Facility
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHeroesSection;