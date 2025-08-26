import React from 'react';
import Button from '../../../components/ui/Button';


const SocialAuth = ({ onSocialLogin }) => {
  const socialProviders = [
    {
      id: 'google',
      name: 'Google',
      icon: 'Chrome',
      color: 'bg-white border-border text-foreground hover:bg-muted'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'Facebook',
      color: 'bg-blue-600 text-white hover:bg-blue-700'
    }
  ];

  return (
    <div className="space-y-3">
      {socialProviders?.map((provider) => (
        <Button
          key={provider?.id}
          variant="outline"
          fullWidth
          onClick={() => onSocialLogin(provider?.id)}
          className={`${provider?.color} border transition-micro`}
          iconName={provider?.icon}
          iconPosition="left"
          iconSize={20}
        >
          Continue with {provider?.name}
        </Button>
      ))}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-background text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialAuth;