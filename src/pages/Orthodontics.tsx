import React from 'react';
import ServicePage from '../components/ServicePage';

const Orthodontics: React.FC = () => {
  return (
    <ServicePage
      title="Orthodontics"
      description="Achieve a perfectly aligned smile with our comprehensive orthodontic treatments. We offer both traditional and modern solutions to suit your lifestyle."
      image="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80"
      features={[
        "Traditional metal braces for reliable results",
        "Clear aligners for discreet teeth straightening",
        "Ceramic braces that blend with your natural teeth",
        "Early orthodontic intervention for children",
        "Retainers to maintain your perfect smile",
        "Advanced 3D treatment planning"
      ]}
    />
  );
};

export default Orthodontics;
