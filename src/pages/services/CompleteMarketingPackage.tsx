import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { trackServiceView } from '../../utils/analytics';
import { trackServicePageView, trackCTAClick, trackFormSubmit, trackScrollDepth } from '../../utils/metaPixel';
import { 
  Zap, Target, Phone, Search, Globe, Users, Star, CheckCircle, 
  ArrowRight, TrendingUp, Clock, Shield, Award, Rocket, 
  DollarSign, Building, Mail, Calendar, X, Eye
} from 'lucide-react';
import CalendlyModal from '../../components/CalendlyModal';

const CompleteMarketingPackage = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);


  useEffect(() => {
    trackServiceView('complete_marketing_package', 'marketing');
    trackServicePageView('Complete Marketing Package');

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent >= 25 && !sessionStorage.getItem('scroll_25_complete_package')) {
        trackScrollDepth(25, 'Complete Marketing Package');
        sessionStorage.setItem('scroll_25_complete_package', 'true');
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem('scroll_50_complete_package')) {
        trackScrollDepth(50, 'Complete Marketing Package');
        sessionStorage.setItem('scroll_50_complete_package', 'true');
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem('scroll_75_complete_package')) {
        trackScrollDepth(75, 'Complete Marketing Package');
        sessionStorage.setItem('scroll_75_complete_package', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleCTAClick = (location: string) => {
    trackCTAClick('Book Consultation', `Complete Marketing Package - ${location}`);
    setCalendlyOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-20"
    >
      <SEO
        title="Complete Marketing Package - $2499/mo | Really Good Leads"
        description="Transform your business with our complete marketing package: Digital Door Knocker, Social Media Management, Google Ads, Local SEO, and Virtual Assistant for just $2499/mo."
        keywords="complete marketing package, digital marketing, lead generation, Google ads management, social media marketing, SEO services, virtual assistant, business growth"
        canonical="/services/complete-marketing-package"
        schemaType="Service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Complete Marketing Package", url: "/services/complete-marketing-package" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-900 text-white py-12 lg:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-rgl-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Everything You Need to
                <span className="block text-rgl-gold">Dominate Your Market</span>
              </h1>

              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed">
                Stop piecing together marketing services. Get a complete marketing team for one flat rate of <span className="text-rgl-gold font-bold">$2,499/month</span> that delivers real results.
              </p>

              {/* Value Proposition Points */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, text: "5x More Leads Than Your Current Marketing", highlight: "5x More Leads" },
                  { icon: <Clock className="w-6 h-6" />, text: "Setup Complete in 48 Hours", highlight: "48 Hours" },
                  { icon: <Shield className="w-6 h-6" />, text: "100% Money-Back Guarantee", highlight: "100% Money-Back" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="text-rgl-gold flex-shrink-0 mt-1">{feature.icon}</div>
                    <span className="text-gray-100">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCTAClick('Hero Primary')}
                  className="bg-rgl-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-2xl flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Book Strategy Call</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => document.getElementById('package-details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-rgl-red transition-all flex items-center justify-center space-x-2"
                >
                  <Eye className="w-6 h-6" />
                  <span>See What's Included</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Package Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-rgl-gold mb-2">$2,499</div>
                  <div className="text-xl text-gray-200">/month</div>
                  <div className="text-sm text-gray-300 line-through">Worth $8,500+/month separately</div>
                </div>

                {/* Quick Package Overview */}
                <div className="space-y-3">
                  {[
                    '1 Digital Door Knocker',
                    '1 Social Media Manager',
                    '1 Google Ads Expert',
                    '1 SEO Specialist',
                    '1 Virtual Assistant'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-rgl-gold" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="text-rgl-gold font-semibold text-sm mb-2">⚡ BONUS INCLUDED ⚡</div>
                  <div className="text-white text-sm">Free setup & onboarding ($2,500 value)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-rgl-charcoal text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: 'Businesses Scaled' },
              { number: '1M+', label: 'Leads Generated' },
              { number: '200%', label: 'Average ROI' },
              { number: '48hrs', label: 'Setup Time' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-rgl-gold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="package-details" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
              What's Included in Your
              <span className="block text-rgl-red">Complete Marketing Team</span>
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Five dedicated marketing professionals working exclusively for your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-12 h-12" />,
                title: 'Digital Door Knocker',
                value: '$2,000/mo value',
                description: 'Professional appointment setter who reaches hundreds of prospects daily',
                features: [
                  'Trained sales professional',
                  'Reaches 500+ prospects daily',
                  'Books qualified appointments',
                  'CRM integration & tracking'
                ],
                color: 'bg-blue-500'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Social Media Manager',
                value: '$1,500/mo value',
                description: 'Complete social media management across all platforms',
                features: [
                  'Content creation & posting',
                  'Facebook, Instagram, LinkedIn',
                  'Community engagement',
                  'Monthly performance reports'
                ],
                color: 'bg-purple-500'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Google Ads Expert',
                value: '$2,500/mo value',
                description: 'Professional Google Ads management for maximum ROI',
                features: [
                  'Campaign setup & optimization',
                  'Keyword research & bidding',
                  'Ad copy testing',
                  'Conversion tracking'
                ],
                color: 'bg-green-500'
              },
              {
                icon: <Search className="w-12 h-12" />,
                title: 'SEO Specialist',
                value: '$1,500/mo value',
                description: 'Local SEO optimization for top Google map rankings',
                features: [
                  'Google My Business optimization',
                  'Local citation building',
                  'Review management',
                  'Monthly ranking reports'
                ],
                color: 'bg-orange-500'
              },
              {
                icon: <Building className="w-12 h-12" />,
                title: 'Virtual Assistant',
                value: '$1,000/mo value',
                description: 'Dedicated assistant for lead follow-up and phone support',
                features: [
                  'Lead follow-up & nurturing',
                  'Inbound call handling',
                  'Appointment scheduling',
                  'Customer service support'
                ],
                color: 'bg-pink-500'
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Bonus: Free Setup',
                value: '$2,500/mo value',
                description: 'Complete onboarding and system integration',
                features: [
                  'Account setup & integration',
                  'Team training & onboarding',
                  'Custom strategy development',
                  'Priority support channel'
                ],
                color: 'bg-rgl-gold'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-rgl-red group"
              >
                <div className={`${service.color} text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-rgl-charcoal">{service.title}</h3>
                  <span className="text-rgl-red font-bold text-sm bg-red-50 px-3 py-1 rounded-full">
                    {service.value}
                  </span>
                </div>

                <p className="text-rgl-gray mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-rgl-charcoal text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Value Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Total Value: $10,500+/month</h3>
            <p className="text-xl mb-4">Your Investment: Only $2,499/month</p>
            <div className="text-4xl font-bold text-rgl-gold">You Save $8,001 Every Month!</div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
              How We Transform Your Business
              <span className="block text-rgl-red">in Just 48 Hours</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Setup',
                description: 'We analyze your business and set up all marketing systems within 48 hours',
                icon: <Rocket className="w-8 h-8" />,
                timeline: 'Day 1-2'
              },
              {
                step: '02',
                title: 'Launch & Execute',
                description: 'Your dedicated team starts generating leads across all channels immediately',
                icon: <TrendingUp className="w-8 h-8" />,
                timeline: 'Day 3-7'
              },
              {
                step: '03',
                title: 'Scale & Optimize',
                description: 'Continuous optimization and scaling based on performance data',
                icon: <Target className="w-8 h-8" />,
                timeline: 'Ongoing'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="w-20 h-20 bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>

                {/* Connecting Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 z-0 transform translate-x-1/2"></div>
                )}

                <div className="bg-rgl-red/10 p-4 rounded-xl w-fit mx-auto mb-4">
                  <div className="text-rgl-red">{step.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-rgl-charcoal mb-3">{step.title}</h3>
                <p className="text-rgl-gray mb-4">{step.description}</p>
                <span className="inline-block bg-rgl-gold text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {step.timeline}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & ROI Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-rgl-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our complete marketing package has achieved for businesses just like yours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '500%',
                label: 'ROI Increase',
                description: 'Average return on investment within 90 days',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                metric: '250+',
                label: 'Leads/Month',
                description: 'Qualified leads generated monthly per client',
                icon: <Target className="w-8 h-8" />
              },
              {
                metric: '$180K',
                label: 'Revenue Added',
                description: 'Average additional revenue in first year',
                icon: <DollarSign className="w-8 h-8" />
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
              >
                <div className="text-rgl-gold mb-4 flex justify-center">{result.icon}</div>
                <div className="text-4xl font-bold text-rgl-gold mb-2">{result.metric}</div>
                <div className="text-xl font-semibold mb-3">{result.label}</div>
                <p className="text-gray-300">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      



      {/* Final CTA Section */}
      <section className="py-20 bg-rgl-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to 5x Your Business Growth?
            </h2>
            <p className="text-xl lg:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop struggling with scattered marketing efforts. Get your complete marketing team for just $2,499/month and watch your leads explode.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCTAClick('Final CTA')}
              className="bg-rgl-gold text-black px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-yellow-400 transition-all shadow-2xl inline-flex items-center space-x-3"
            >
              <Calendar className="w-8 h-8" />
              <span>Book Your Free Strategy Call</span>
            </motion.button>

            <p className="text-red-200 mt-6 text-lg">
              No contracts • No setup fees • 100% money-back guarantee
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </motion.div>
  );
};

export default CompleteMarketingPackage; 