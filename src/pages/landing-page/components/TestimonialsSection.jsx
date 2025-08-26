import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rashida Begum',
      role: 'University Student',
      location: 'Dhaka',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `As a university student who travels across Dhaka daily, Toiletree has been a lifesaver. I no longer worry about finding safe facilities during my commute. The community reviews are so helpful!`,
      rating: 5
    },
    {
      id: 2,
      name: 'Fatima Rahman',
      role: 'Working Mother',
      location: 'Chittagong',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `Being a working mother, I often need to find clean facilities when I'm out with my daughter. This app gives me peace of mind knowing that other mothers have verified these places as safe and clean.`,
      rating: 5
    },
    {
      id: 3,
      name: 'Nasreen Ahmed',role: 'Shop Owner',location: 'Sylhet',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',content: `I listed my shop's facilities on Toiletree to help other women in my community. It feels great to contribute to women's safety and dignity. The platform makes it easy to manage and update information.`,
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Stories from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from women across Bangladesh who are making their communities safer and more accessible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-modal transition-state"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, index) => (
                  <Icon key={index} name="Star" size={16} className="text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial?.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.role} • {testimonial?.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-surface rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="font-heading font-semibold text-foreground">1,200+ Members</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-2">
              <Icon name="MessageSquare" size={20} className="text-success" />
              <span className="font-heading font-semibold text-foreground">2,800+ Reviews</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-warning" />
              <span className="font-heading font-semibold text-foreground">4.8 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;