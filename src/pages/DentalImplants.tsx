import React from 'react';
import ServicePage from '../components/ServicePage';

const DentalImplants: React.FC = () => {
  return (
    <ServicePage
      title="Dental Implants"
      description="Restore your smile with state-of-the-art dental implants. Our experienced team provides permanent solutions for missing teeth that look and feel natural."
      image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
      features={[
        "Single tooth implant restorations",
        "Full arch implant solutions",
        "All-on-4 implant dentures",
        "3D imaging for precise implant placement",
        "Bone grafting when necessary",
        "Long-term implant maintenance care"
      ]}
    />
  );
};

export default DentalImplants;
