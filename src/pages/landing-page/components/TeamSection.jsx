import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Md Sifat Al Mahin',
      role: 'Founder & Lead Architect',
      description: 'Visionary leader dedicated to empowering women through technology. Expert in system architecture and community building.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      isSpecial: true,
      skills: ['System Architecture', 'Community Building', 'Strategic Vision'],
      socialLinks: [
        { platform: 'LinkedIn', icon: 'Linkedin', url: '#' },
        { platform: 'Twitter', icon: 'Twitter', url: '#' },
        { platform: 'Github', icon: 'Github', url: '#' }
      ]
    },
    {
      id: 2,
      name: 'Hasib Ashfaq Saad',
      role: 'Community Research Analyst',
      description: 'Data-driven researcher focused on understanding community needs and impact measurement.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      isSpecial: false,
      skills: ['Data Analysis', 'Community Research', 'Impact Measurement'],
      socialLinks: [
        { platform: 'LinkedIn', icon: 'Linkedin', url: '#' },
        { platform: 'Twitter', icon: 'Twitter', url: '#' }
      ]
    },
    {
      id: 3,
      name: 'Ebrahim Islam Asif',
      role: 'Partnership Outreach Coordinator',
      description: 'Strategic partnership builder connecting communities with organizations for sustainable impact.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face',
      isSpecial: false,
      skills: ['Partnership Development', 'Stakeholder Management', 'Strategic Communication'],
      socialLinks: [
        { platform: 'LinkedIn', icon: 'Linkedin', url: '#' },
        { platform: 'Twitter', icon: 'Twitter', url: '#' }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            The Team Behind{' '}
            <span className="text-primary">Toiletree</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals dedicated to creating safer, more accessible communities for women and girls across Bangladesh.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers?.map((member, index) => (
            <div
              key={member?.id}
              className={`group relative ${member?.isSpecial ? 'md:transform md:scale-110 md:z-10' : ''}`}
            >
              <div className={`
                bg-background border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-modal transition-all duration-500 group-hover:transform group-hover:scale-105
                ${member?.isSpecial ? 'ring-2 ring-primary/20 shadow-lg' : ''}
              `}>
                {member?.isSpecial && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Icon name="Crown" size={12} />
                      <span>Founder</span>
                    </div>
                  </div>
                )}
                {member?.isSpecial ? (
                  <>
                    {/* Profile Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative bg-gradient-to-br from-primary/30 to-primary/10">
                        <Image
                          src={member?.image}
                          alt={`${member?.name} - ${member?.role}`}
                          className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-card group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-8 left-8 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
                        <div className="absolute bottom-8 right-8 w-2 h-2 bg-success/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                        <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-warning/40 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">{member?.name}</h3>
                        <p className="text-sm font-semibold mb-3 px-3 py-1 rounded-full inline-block text-primary bg-primary/10">{member?.role}</p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">{member?.description}</p>
                      <div className="mb-6">
                        <div className="flex flex-wrap justify-center gap-2">
                          {member?.skills?.map((skill, skillIndex) => (
                            <span key={skillIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center space-x-3">
                        {member?.socialLinks?.map((social, socialIndex) => (
                          <a
                            key={socialIndex}
                            href={social?.url}
                            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                            aria-label={`${member?.name} on ${social?.platform}`}
                          >
                            <Icon name={social?.icon} size={16} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-6 flex flex-col items-center">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{member?.name}</h3>
                    <p className="text-sm font-semibold mb-3 px-3 py-1 rounded-full inline-block text-muted-foreground bg-muted">{member?.role}</p>
                  </div>
                )}
              </div>
              {member?.isSpecial && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-background border border-border rounded-xl p-6 shadow-card max-w-2xl mx-auto">
            <Icon name="Heart" size={24} className="text-primary mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-foreground mb-3">
              Building for Impact
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Together, we're committed to creating lasting change for women's safety and dignity in Bangladesh. 
              Our diverse expertise comes together with a shared mission to empower communities through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;