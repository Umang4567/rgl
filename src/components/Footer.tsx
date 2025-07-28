import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Award, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rgl-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Really Good Leads Logo" 
                className="h-[125px] w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing exclusive, compliant, and high-quality leads to help your business grow.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-rgl-gold">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">100% Compliant</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Lead Generation</h3>
            <div className="space-y-2">
              <Link to="/services/roofing-leads" className="block text-gray-300 hover:text-white transition-colors">
                Roofing Leads
              </Link>
              <Link to="/services/hvac-leads" className="block text-gray-300 hover:text-white transition-colors">
                HVAC Leads
              </Link>
                              <Link to="/services/seo-leads" className="block text-gray-300 hover:text-white transition-colors">
                SEO Leads
              </Link>
              <Link to="/services/solar-leads" className="block text-gray-300 hover:text-white transition-colors">
                Solar Leads
              </Link>
            </div>
          </div>

          {/* Marketing Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Marketing Services</h3>
            <div className="space-y-2">
              <Link to="/services/roofing-marketing" className="block text-gray-300 hover:text-white transition-colors">
                Roofing Marketing
              </Link>
              <Link to="/services/hvac-marketing" className="block text-gray-300 hover:text-white transition-colors">
                HVAC Marketing
              </Link>
              <Link to="/call-center" className="block text-gray-300 hover:text-white transition-colors">
                Call Center Services
              </Link>
              <Link to="/faqs" className="block text-gray-300 hover:text-white transition-colors">
                FAQs
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <a href="tel:+13214087274" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-rgl-red" />
                <span>+1-321-408-7274</span>
              </a>
              <a href="mailto:contact@reallygoodleads.xyz" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-rgl-red" />
                <span>contact@reallygoodleads.xyz</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-rgl-red mt-1 flex-shrink-0" />
                <span>310 N Wickham Rd Unit 134<br />Melbourne, FL 32935<br />United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-rgl-gold">
              <Award className="w-6 h-6" />
              <span className="font-medium">Industry Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-rgl-gold">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">TCPA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-rgl-gold">
              <Shield className="w-6 h-6" />
              <span className="font-medium">Secure & Private</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 space-y-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Really Good Leads. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://www.qasimkharodia.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rgl-red transition-colors text-sm font-medium underline hover:no-underline cursor-pointer"
            >
              Designed and developed by Qasim Kharodia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;