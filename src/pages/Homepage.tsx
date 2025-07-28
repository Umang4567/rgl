import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { trackServiceView } from '../utils/analytics';
import { trackPageView, trackScrollDepth } from '../utils/metaPixel';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Phone, Calendar, Play, Zap, Target, Award, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SocialProofSection from '../components/SocialProofSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import StatsSection from '../components/StatsSection';
import ServicesGrid from '../components/ServicesGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const Homepage = () => {
  useEffect(() => {
    trackServiceView('homepage', 'leads');
    trackPageView('Homepage');

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent >= 25 && !sessionStorage.getItem('scroll_25_homepage')) {
        trackScrollDepth(25, 'Homepage');
        sessionStorage.setItem('scroll_25_homepage', 'true');
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem('scroll_50_homepage')) {
        trackScrollDepth(50, 'Homepage');
        sessionStorage.setItem('scroll_50_homepage', 'true');
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem('scroll_75_homepage')) {
        trackScrollDepth(75, 'Homepage');
        sessionStorage.setItem('scroll_75_homepage', 'true');
      }
      if (scrollPercent >= 90 && !sessionStorage.getItem('scroll_90_homepage')) {
        trackScrollDepth(90, 'Homepage');
        sessionStorage.setItem('scroll_90_homepage', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <SEO
        title="Really Good Leads - #1 Lead Generation for Roofing, HVAC, Moving & Solar Companies"
        description="Get exclusive, high-quality leads with 21-22% conversion rates. Professional lead generation services for roofing, HVAC, moving, and solar contractors nationwide. Call center services available."
        keywords="lead generation, roofing leads, HVAC leads, SEO leads, solar leads, exclusive leads, call center services, home improvement leads, contractor leads, lead generation company, Melbourne FL"
        canonical="/"
        schemaType="Organization"
        ogType="website"
      />
      
      {/* New Modern Layout */}
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <StatsSection />
      <HowItWorksSection />
      <ServicesGrid />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </motion.div>
  );
};

export default Homepage;