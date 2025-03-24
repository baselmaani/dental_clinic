import React from 'react';
import { Calendar } from 'lucide-react';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, description, features, image }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/70"></div>
        </div>

        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
            <p className="mt-6 text-xl text-white/90">{description}</p>
            <div className="mt-10">
              <a
                href="#appointment"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition"
              >
                Book Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900">Feature {index + 1}</h3>
                <p className="mt-2 text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
