import React from 'react';
import ServicePage from '../components/ServicePage';

const GeneralDentistry: React.FC = () => {
  return (
    <ServicePage
      title="General Dentistry"
      description="Comprehensive dental care for your entire family. Our general dentistry services focus on prevention, maintenance, and treatment of common dental issues."
      image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
      features={[
        "Regular check-ups and cleanings to maintain optimal oral health",
        "Dental fillings using the latest composite materials",
        "Root canal therapy to save damaged teeth",
        "Treatment of gum disease and periodontal care",
        "Oral cancer screenings for early detection",
        "Advanced digital X-rays for precise diagnostics"
      ]}
    />
  );
};

export default GeneralDentistry;
