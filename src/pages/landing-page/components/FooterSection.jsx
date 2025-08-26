import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FooterSection = () => {
  const partnerLogos = [
    {
      id: 1,
      name: 'UN Women',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
      alt: 'UN Women Partnership'
    },
    {
      id: 2,
      name: 'BRAC',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop',
      alt: 'BRAC Partnership'
    },
    {
      id: 3,
      name: 'Dhaka City Corporation',
      logo: 'https://images.unsplash.com/photo-1560472355-a9a6c4c7b6d7?w=120&h=60&fit=crop',
      alt: 'Dhaka City Corporation'
    },
    {
      id: 4,
      name: 'Bangladesh Women Chamber',
      logo: 'https://images.unsplash.com/photo-1560472355-b8b8b8b8b8b8?w=120&h=60&fit=crop',
      alt: 'Bangladesh Women Chamber'
    }
  ];

  const footerLinks = {
    platform: [
      { label: 'Find Facilities', path: '/facility-finder-map' },
      { label: 'How It Works', path: '/landing-page#how-it-works' },
      { label: 'Community Guidelines', path: '#' },
      { label: 'Safety Standards', path: '#' }
    ],
    community: [
      { label: 'Become a Volunteer', path: '/volunteer-dashboard' },
      { label: 'List Your Facility', path: '/facility-owner-dashboard' },
      { label: 'Community Heroes', path: '#' },
      { label: 'Success Stories', path: '#' }
    ],
    support: [
      { label: 'Help Center', path: '#' },
      { label: 'Contact Us', path: '#' },
      { label: 'Report an Issue', path: '#' },
      { label: 'Feedback', path: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Cookie Policy', path: '#' },
      { label: 'Accessibility', path: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  const currentYear = new Date()?.getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Partners Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-heading font-semibold mb-2">
              Trusted Partners
            </h3>
            <p className="text-secondary-foreground/70 text-sm">
              Working together to create safer communities for women
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos?.map((partner) => (
              <div
                key={partner?.id}
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-micro"
              >
                <Image
                  src={partner?.logo}
                  alt={partner?.alt}
                  className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-micro"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/landing-page" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={20} color="white" />
              </div>
              <span className="text-xl font-heading font-semibold">
                Toiletree
              </span>
            </Link>
            
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Empowering women and girls in Bangladesh with safe access to essential facilities through community-driven verification and support.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-micro group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="group-hover:text-white transition-micro" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks?.platform?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-micro"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks?.community?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-micro"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks?.support?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-micro"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks?.legal?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground text-sm transition-micro"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/70 text-sm">
              © {currentYear} Toiletree. All rights reserved. Made with ❤️ for women's safety and dignity.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-secondary-foreground/70">Community Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={16} className="text-primary" />
                <span className="text-secondary-foreground/70">Women-Centered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;