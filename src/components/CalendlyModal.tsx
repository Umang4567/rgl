import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { trackCalendlyOpen, trackLead } from '../utils/metaPixel';
import { trackCalendlyOpen as trackAnalyticsCalendly, trackConversion } from '../utils/analytics';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && !isScriptLoaded) {
      // Get current page name for tracking
      const currentPath = window.location.pathname;
      const pageName = currentPath === '/' ? 'Homepage' :
        currentPath.split('/').pop()?.replace(/([A-Z])/g, ' $1').trim() || 'Unknown';

      // Track Meta Pixel events
      trackCalendlyOpen('modal', pageName);
      trackLead('Calendly Modal Open', 'consultation_request');

      // Track analytics
      trackAnalyticsCalendly('modal', 'consultation');

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;

      // Track conversion when Calendly is loaded
      script.onload = () => {
        setIsScriptLoaded(true);
        trackConversion('calendly_booking', 20);
      };

      document.head.appendChild(script);

      return () => {
        // Clean up script when component unmounts
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
          setIsScriptLoaded(false);
        }
      };
    }
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-rgl-charcoal">Schedule Your Consultation</h2>
                <p className="text-rgl-gray mt-1">Book a free consultation to discuss your lead generation needs</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-rgl-gray" />
              </button>
            </div>

            {/* Calendly Widget */}
            <div className="relative">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/contact-flatratebookkeeping/really-good-leads-consultation"
                style={{ minWidth: '320px', height: '700px', maxHeight: 'calc(90vh - 120px)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalendlyModal; 