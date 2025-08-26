import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const RegisterForm = ({ onRegister, isLoading, error }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    agreeToTerms: false,
    agreeToPrivacy: false
  });
  const [formErrors, setFormErrors] = useState({});

  const userTypeOptions = [
    { 
      value: 'seeker', 
      label: 'Facility Seeker',
      description: 'Find and review safe toilet facilities'
    },
    { 
      value: 'owner', 
      label: 'Facility Owner',
      description: 'List and manage your facilities'
    },
    { 
      value: 'volunteer', 
      label: 'Community Volunteer',
      description: 'Help verify and improve facility information'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (formErrors?.[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      userType: value
    }));
    
    if (formErrors?.userType) {
      setFormErrors(prev => ({
        ...prev,
        userType: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData?.name?.trim()) {
      errors.name = 'Full name is required';
    } else if (formData?.name?.trim()?.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData?.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.password) {
      errors.password = 'Password is required';
    } else if (formData?.password?.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/?.test(formData?.password)) {
      errors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData?.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData?.password !== formData?.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData?.userType) {
      errors.userType = 'Please select your user type';
    }
    
    if (!formData?.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms of service';
    }
    
    if (!formData?.agreeToPrivacy) {
      errors.agreeToPrivacy = 'You must agree to the privacy policy';
    }
    
    setFormErrors(errors);
    return Object.keys(errors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onRegister(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}
      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData?.name}
        onChange={handleInputChange}
        error={formErrors?.name}
        required
      />
      <Input
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData?.email}
        onChange={handleInputChange}
        error={formErrors?.email}
        required
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Create a strong password"
        description="Must contain uppercase, lowercase, and number"
        value={formData?.password}
        onChange={handleInputChange}
        error={formErrors?.password}
        required
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData?.confirmPassword}
        onChange={handleInputChange}
        error={formErrors?.confirmPassword}
        required
      />
      <Select
        label="I am a..."
        description="Choose the option that best describes you"
        options={userTypeOptions}
        value={formData?.userType}
        onChange={handleSelectChange}
        error={formErrors?.userType}
        placeholder="Select your role"
        required
      />
      <div className="space-y-3 pt-2">
        <Checkbox
          label="I agree to the Terms of Service"
          name="agreeToTerms"
          checked={formData?.agreeToTerms}
          onChange={handleInputChange}
          error={formErrors?.agreeToTerms}
          required
        />
        
        <Checkbox
          label="I agree to the Privacy Policy"
          name="agreeToPrivacy"
          checked={formData?.agreeToPrivacy}
          onChange={handleInputChange}
          error={formErrors?.agreeToPrivacy}
          required
        />
      </div>
      <Button
        type="submit"
        variant="default"
        fullWidth
        loading={isLoading}
        className="mt-6"
      >
        Create Account
      </Button>
    </form>
  );
};

export default RegisterForm;