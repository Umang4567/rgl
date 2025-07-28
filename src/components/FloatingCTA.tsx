import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCalendly } from '../utils/CalendlyContext';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openCalendly}
          aria-label="Schedule a call"
          className="fixed bottom-6 right-6 z-50 bg-rgl-red text-white p-4 rounded-full shadow-2xl hover:bg-rgl-red-dark transition-all duration-300 flex items-center space-x-2 focus:outline-none"
        >
          {/* ping ring – ignores pointer events */}
          <span className="absolute inset-0 rounded-full bg-rgl-red opacity-20 animate-ping pointer-events-none" />

          <Phone className="w-6 h-6 relative z-10" />
          <span className="font-semibold relative z-10">Get&nbsp;Quote!</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
