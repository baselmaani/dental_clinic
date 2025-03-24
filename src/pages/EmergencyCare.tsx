import React from 'react';
import ServicePage from '../components/ServicePage';

const EmergencyCare: React.FC = () => {
  return (
    <ServicePage
      title="Emergency Care"
      description="We're here when you need us most. Our emergency dental care services provide immediate attention to urgent dental problems to relieve pain and prevent further complications."
      image="https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?auto=format&fit=crop&q=80"
      features={[
        "Same-day emergency appointments",
        "Treatment for severe tooth pain",
        "Emergency tooth extractions",
        "Repair of broken or chipped teeth",
        "Treatment of dental infections",
        "24/7 emergency phone consultation"
      ]}
    />
  );
};

export default EmergencyCare;
