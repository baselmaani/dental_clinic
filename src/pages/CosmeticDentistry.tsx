import React from 'react';
import ServicePage from '../components/ServicePage';

const CosmeticDentistry: React.FC = () => {
  return (
    <ServicePage
      title="Cosmetic Dentistry"
      description="Transform your smile with our advanced cosmetic dentistry services. We combine artistry with cutting-edge technology to give you the confident smile you deserve."
      image="https://images.unsplash.com/photo-1581585099217-83c565e7e9a7?auto=format&fit=crop&q=80"
      features={[
        "Porcelain veneers for a complete smile makeover",
        "Professional teeth whitening treatments",
        "Dental bonding for minor repairs and improvements",
        "Smile design consultation using digital imaging",
        "Gum contouring for aesthetic enhancement",
        "Natural-looking dental crowns and bridges"
      ]}
    />
  );
};

export default CosmeticDentistry;
