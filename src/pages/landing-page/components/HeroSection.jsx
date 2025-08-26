import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    facilities: 0,
    safety: 0
  });

  const dynamicStats = [
    { label: 'Active Users', value: 1247, suffix: '+', color: 'text-success' },
    { label: 'Verified Facilities', value: 534, suffix: '+', color: 'text-primary' },
    { label: 'Safety Reports', value: 98, suffix: '%', color: 'text-warning' },
    { label: 'Women Helped', value: 2156, suffix: '+', color: 'text-info' }
  ];

  const heroText = "Find Safe Toilets & Clean Water Near You";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex <= heroText?.length) {
        setTypedText(heroText?.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    // Animate stats
    const statsTimer = setTimeout(() => {
      const animateValue = (start, end, duration, callback) => {
        let startTime = null;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentValue = Math.floor(progress * (end - start) + start);
          callback(currentValue);
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      };

      animateValue(0, 1247, 2000, (value) => {
        setAnimatedStats(prev => ({ ...prev, users: value }));
      });
      
      animateValue(0, 534, 2500, (value) => {
        setAnimatedStats(prev => ({ ...prev, facilities: value }));
      });
      
      animateValue(0, 98, 3000, (value) => {
        setAnimatedStats(prev => ({ ...prev, safety: value }));
      });
    }, 1000);

    // Cycling stats
    const cycleTimer = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % dynamicStats?.length);
    }, 3000);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(statsTimer);
      clearInterval(cycleTimer);
    };
  }, [heroText]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-success/10 to-success/5 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '8s'}} />
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-r from-warning/10 to-warning/5 rounded-full animate-bounce" style={{animationDelay: '4s', animationDuration: '7s'}} />
        
        {/* Moving Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-success/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Icon name="Sparkles" size={16} />
              <span>Empowering Women Across Bangladesh</span>
            </div>

            {/* Typing Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              <span className="inline-block min-h-[1.2em]">
                {typedText?.split(' ')?.map((word, index) => {
                  if (word === 'Safe' || word === 'Toilets' || word === 'Clean' || word === 'Water') {
                    return (
                      <span key={index} className="text-primary animate-pulse">
                        {word}{' '}
                      </span>
                    );
                  }
                  return <span key={index}>{word} </span>;
                })}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            
            <p className={`text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Empowering women and girls in Bangladesh with a community-driven platform to locate verified, safe, and clean facilities. Your safety and dignity matter.
            </p>
            
            {/* Animated CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                variant="default"
                size="lg"
                asChild
                iconName="MapPin"
                iconPosition="left"
                className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link to="/facility-finder-map">
                  Find Facilities Near You
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="#how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>

            {/* Animated Trust Indicators */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-8 text-sm transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center space-x-2 animate-fade-in-right">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={16} className="text-success" />
                </div>
                <span className="text-muted-foreground font-medium">Community Verified</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in-right" style={{animationDelay: '0.2s'}}>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={16} className="text-primary" />
                </div>
                <span className="text-muted-foreground font-medium">
                  <span className="text-foreground font-bold">{animatedStats?.users?.toLocaleString()}</span>+ Active Users
                </span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in-right" style={{animationDelay: '0.4s'}}>
                <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={16} className="text-warning" />
                </div>
                <span className="text-muted-foreground font-medium">
                  <span className="text-foreground font-bold">{animatedStats?.facilities}</span>+ Facilities
                </span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Main Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500">
              {/* Live Statistics Card */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-muted-foreground">Live Statistics</span>
                </div>
                
                {/* Cycling Stats Display */}
                <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl p-4 border border-primary/10">
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-1 transition-all duration-500 ${dynamicStats?.[currentStatIndex]?.color}`}>
                      {dynamicStats?.[currentStatIndex]?.value?.toLocaleString()}{dynamicStats?.[currentStatIndex]?.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {dynamicStats?.[currentStatIndex]?.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl mb-6 relative overflow-hidden border border-border/50">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Dhaka Facilities Map"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=23.8103,90.4125&z=12&output=embed"
                  className="rounded-2xl"
                />
                
                {/* Animated Facility Pins */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <Icon name="MapPin" size={16} color="white" />
                      </div>
                      <div className="absolute -top-1 -left-1 w-10 h-10 bg-primary/20 rounded-full animate-ping" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                        <Icon name="MapPin" size={16} color="white" />
                      </div>
                      <div className="absolute -top-1 -left-1 w-10 h-10 bg-success/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                        <Icon name="MapPin" size={16} color="white" />
                      </div>
                      <div className="absolute -top-1 -left-1 w-10 h-10 bg-warning/20 rounded-full animate-ping" style={{animationDelay: '1s'}} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-heading font-bold text-foreground mb-2 flex items-center justify-center space-x-2">
                  <Icon name="Activity" size={20} className="text-primary" />
                  <span>Real-Time Facility Network</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <span className="text-success font-semibold">{animatedStats?.safety}%</span> verified safe locations across Greater Dhaka
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-success/20 to-success/5 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;