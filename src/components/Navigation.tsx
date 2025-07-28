import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackPhoneClick } from '../utils/analytics';
import { trackPhoneClick as trackMetaPhoneClick, trackCTAClick, trackNavigationClick } from '../utils/metaPixel';
import CalendlyModal from './CalendlyModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Complete Marketing Package', path: '/services/complete-marketing-package' },
    { name: 'Roofing Leads', path: '/services/roofing-leads' },
    { name: 'HVAC Leads', path: '/services/hvac-leads' },
    { name: 'SEO Leads', path: '/services/seo-leads' },
    { name: 'Solar Leads', path: '/services/solar-leads' },
    { name: 'Digital Door Knocker', path: '/services/digital-door-knocker' },
    { name: 'Roofing Marketing', path: '/services/roofing-marketing' },
    { name: 'HVAC Marketing', path: '/services/hvac-marketing' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    // Scroll to top when navigating on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img 
                src="/logo.png" 
                alt="Really Good Leads Logo" 
                className="h-[125px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link
              to="/"
              className={`font-medium transition-colors text-rgl-charcoal hover:text-rgl-red ${
                location.pathname === '/' ? 'text-rgl-red' : ''
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors text-rgl-charcoal hover:text-rgl-red"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-rgl-charcoal hover:bg-gray-50 font-medium"
                    onClick={() => {
                      setServicesOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-rgl-gray hover:bg-gray-50 hover:text-rgl-red transition-colors"
                        onClick={() => {
                          setServicesOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link
              to="/call-center"
              className="font-medium transition-colors text-rgl-charcoal hover:text-rgl-red"
            >
              Call Center
            </Link>

            <Link
              to="/faqs"
              className="font-medium transition-colors text-rgl-charcoal hover:text-rgl-red"
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className="font-medium transition-colors text-rgl-charcoal hover:text-rgl-red"
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            {/* Phone Number */}
            <a
              href="tel:+13214087274"
              onClick={() => {
                trackPhoneClick('desktop_navigation');
                trackMetaPhoneClick('desktop_navigation', 'Navigation');
              }}
              className="flex items-center space-x-2 font-semibold transition-colors text-rgl-red hover:text-rgl-red-dark"
            >
              <Phone className="w-4 h-4" />
              <span>+1-321-408-7274</span>
            </a>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCalendlyOpen(true);
                trackCTAClick('Get Started', 'Navigation', 'header');
              }}
              className="px-6 py-2 rounded-lg font-semibold transition-all bg-rgl-red text-white hover:bg-rgl-red-dark"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-rgl-charcoal"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div className="px-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-1 bg-gray-50 rounded-lg p-2"
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-rgl-charcoal hover:text-rgl-red font-medium rounded-lg hover:bg-white transition-colors"
                      onClick={closeMobileMenu}
                    >
                      All Services
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-rgl-gray hover:text-rgl-red hover:bg-white rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
              
              <Link
                to="/call-center"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Call Center
              </Link>
              <Link
                to="/faqs"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-rgl-charcoal hover:text-rgl-red hover:bg-gray-50 font-medium rounded-lg mx-2 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              {/* Mobile Phone & CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4 px-2 space-y-3">
                <a
                  href="tel:+13214087274"
                  onClick={() => {
                    trackPhoneClick('mobile_navigation');
                    trackMetaPhoneClick('mobile_navigation', 'Navigation');
                  }}
                  className="flex items-center space-x-3 px-4 py-3 text-rgl-red font-semibold bg-rgl-red/10 rounded-lg hover:bg-rgl-red/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1-321-408-7274</span>
                </a>
                <button 
                  className="w-full bg-rgl-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-rgl-red-dark transition-colors"
                  onClick={() => {
                    setCalendlyOpen(true);
                    trackCTAClick('Get Started', 'Navigation', 'mobile_header');
                    closeMobileMenu();
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={calendlyOpen} 
        onClose={() => setCalendlyOpen(false)} 
      />
    </motion.nav>
  );
};

export default Navigation;