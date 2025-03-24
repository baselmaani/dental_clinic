import React from 'react';
import ServicePage from '../components/ServicePage';

const TeethWhitening: React.FC = () => {
  return (
    <ServicePage
      title="Teeth Whitening"
      description="Get a brighter, whiter smile with our professional teeth whitening services. We offer both in-office and take-home options for your convenience."
      image="https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&q=80"
      features={[
        "Professional in-office whitening for immediate results",
        "Custom take-home whitening kits",
        "Long-lasting results with proper maintenance",
        "Safe and comfortable treatment process",
        "Stain removal and prevention advice",
        "Touch-up treatments available"
      ]}
    />
  );
};

export default TeethWhitening;
