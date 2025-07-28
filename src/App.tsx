import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import ServicesOverview from './pages/ServicesOverview';
import RoofingLeads from './pages/services/RoofingLeads';
import HVACLeads from './pages/services/HVACLeads';
import SEOLeads from './pages/services/SEOLeads';
import SolarLeads from './pages/services/SolarLeads';
import RoofingMarketing from './pages/services/RoofingMarketing';
import HVACMarketing from './pages/services/HVACMarketing';
import DigitalDoorKnocker from './pages/services/DigitalDoorKnocker';
import CompleteMarketingPackage from './pages/services/CompleteMarketingPackage';
import CallCenter from './pages/CallCenter';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import FloatingCTA from './components/FloatingCTA';
import CalendlyModal from './components/CalendlyModal';
import { CalendlyProvider, useCalendly } from './utils/CalendlyContext';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Wrapper component to use the context
const AppContent = () => {
  const { isCalendlyOpen, closeCalendly } = useCalendly();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/roofing-leads" element={<RoofingLeads />} />
            <Route path="/services/hvac-leads" element={<HVACLeads />} />
            <Route path="/services/seo-leads" element={<SEOLeads />} />
            <Route path="/services/solar-leads" element={<SolarLeads />} />
            <Route path="/services/roofing-marketing" element={<RoofingMarketing />} />
            <Route path="/services/hvac-marketing" element={<HVACMarketing />} />
            <Route path="/services/digital-door-knocker" element={<DigitalDoorKnocker />} />
            <Route path="/services/complete-marketing-package" element={<CompleteMarketingPackage />} />
            <Route path="/call-center" element={<CallCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingCTA />
        <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
      </div>
    </Router>
  );
};

function App() {
  return (
    <HelmetProvider>
      <CalendlyProvider>
        <AppContent />
      </CalendlyProvider>
    </HelmetProvider>
  );
}

export default App;