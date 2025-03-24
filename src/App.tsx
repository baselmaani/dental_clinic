import { Bluetooth as Tooth, Clock, Phone, Calendar, Star, CheckCircle2, MapPin, Moon, Sun } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GeneralDentistry from './pages/GeneralDentistry';
import CosmeticDentistry from './pages/CosmeticDentistry';
import Orthodontics from './pages/Orthodontics';
import TeethWhitening from './pages/TeethWhitening';
import DentalImplants from './pages/DentalImplants';
import EmergencyCare from './pages/EmergencyCare';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900' : 'bg-white'} transition-colors duration-200`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'dark:bg-gray-800' : 'bg-white'} shadow-sm fixed w-full z-10 transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Tooth className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                BrightSmile Dental
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
                  Home
                </Link>
                <Link to="/services" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
                  Services
                </Link>
                <Link to="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
                  About
                </Link>
                <Link to="#testimonials" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
                  Testimonials
                </Link>
                <Link to="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
                  Contact
                </Link>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/services" element={
          <div className={`pt-24 pb-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-200`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Services
                </h2>
                <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Comprehensive dental care for the whole family
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'General Dentistry',
                    description: 'Comprehensive care for your entire family\'s dental health',
                    path: '/services/general-dentistry'
                  },
                  {
                    title: 'Cosmetic Dentistry',
                    description: 'Transform your smile with our advanced cosmetic treatments',
                    path: '/services/cosmetic-dentistry'
                  },
                  {
                    title: 'Orthodontics',
                    description: 'Achieve a perfectly aligned smile with our orthodontic solutions',
                    path: '/services/orthodontics'
                  },
                  {
                    title: 'Teeth Whitening',
                    description: 'Get a brighter, whiter smile with our professional treatments',
                    path: '/services/teeth-whitening'
                  },
                  {
                    title: 'Dental Implants',
                    description: 'Restore your smile with permanent tooth replacement solutions',
                    path: '/services/dental-implants'
                  },
                  {
                    title: 'Emergency Care',
                    description: 'Immediate attention for urgent dental problems',
                    path: '/services/emergency-care'
                  }
                ].map((service) => (
                  <Link to={service.path} key={service.path} className="block transform hover:scale-105 transition-all duration-200">
                    <div className={`${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-white hover:shadow-lg'
                    } rounded-lg p-6 h-full border ${darkMode ? 'border-gray-600' : 'border-gray-200'} transition-all duration-200`}>
                      <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                      </h3>
                      <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        } />
        <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
        <Route path="/services/orthodontics" element={<Orthodontics />} />
        <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
        <Route path="/services/dental-implants" element={<DentalImplants />} />
        <Route path="/services/emergency-care" element={<EmergencyCare />} />
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <div className="relative pt-16">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                  alt="Dental Office"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/70"></div>
              </div>

              <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
                <div className="max-w-2xl">
                  <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Your Smile, Our Passion
                  </h1>
                  <p className={`mt-6 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Experience exceptional dental care with our team of experienced professionals.
                    We're committed to giving you the confident smile you deserve.
                  </p>
                  <div className="mt-10">
                    <Link
                      to="#appointment"
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                        darkMode 
                          ? 'text-blue-400 bg-gray-700 hover:bg-gray-600' 
                          : 'text-blue-700 bg-white hover:bg-gray-50'
                      } transition-colors`}
                    >
                      Book Appointment
                      <Calendar className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                      <CheckCircle2 className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`mt-6 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Expert Care
                    </h3>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Our experienced team provides comprehensive dental services using the latest technology.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                      <Clock className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`mt-6 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Convenient Hours
                    </h3>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Open early mornings and weekends to accommodate your busy schedule.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                      <Star className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`mt-6 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      5-Star Service
                    </h3>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Consistently rated 5 stars by our satisfied patients for our quality care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className={`bg-gray-900 ${darkMode ? 'bg-gray-900' : 'bg-white'} py-24 transition-colors duration-200`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Contact Us
                    </h2>
                    <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      We're here to help with all your dental care needs
                    </p>
                    
                    <div className="mt-8 space-y-6">
                      <div className="flex items-center">
                        <Phone className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`ml-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}> (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`ml-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>123 Dental Street, City, State 12345</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`ml-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mon-Fri: 8am-6pm, Sat: 9am-2pm</span>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-gray-50 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-8`}>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Request an Appointment
                    </h3>
                    <form className="mt-6 space-y-6">
                      <div>
                        <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className={`w-full ${darkMode ? 'bg-blue-400 text-white' : 'bg-blue-600 text-white'} py-2 px-4 rounded-md hover:bg-blue-700 transition-colors`}
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>

      {/* Footer */}
      <footer className={`bg-gray-900 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center">
            <Tooth className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`ml-2 text-xl font-semibold ${darkMode ? 'text-white' : 'text-white'}`}>
              BrightSmile Dental
            </span>
          </div>
          <p className={`mt-4 text-center ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>
            {new Date().getFullYear()} BrightSmile Dental. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;