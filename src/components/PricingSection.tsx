import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Users, Zap, Shield, ArrowRight, Calendar } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

const PricingSection = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 500 : 4500,
      description: 'Perfect for small contractors getting started',
      features: [
        '50 exclusive leads per month',
        'Basic targeting options',
        'Email delivery',
        'Standard support',
        'Lead scoring included',
        '30-day guarantee'
      ],
      popular: false,
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? 1000 : 9000,
      description: 'Ideal for growing businesses with steady demand',
      features: [
        '150 exclusive leads per month',
        'Advanced targeting & filtering',
        'Real-time notifications',
        'Priority support',
        'CRM integration',
        'Performance analytics',
        'Custom landing pages',
        '60-day guarantee'
      ],
      popular: true,
      color: 'from-rgl-red to-rgl-red-dark'
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 2000 : 18000,
      description: 'For large companies with high-volume needs',
      features: [
        '500+ exclusive leads per month',
        'Custom targeting strategies',
        'Dedicated account manager',
        '24/7 priority support',
        'Advanced analytics & reporting',
        'Custom integrations',
        'White-label options',
        '90-day guarantee'
      ],
      popular: false,
      color: 'from-rgl-gold to-orange-500'
    }
  ];

  const savings = billingCycle === 'yearly' ? 10 : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-rgl-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-rgl-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-rgl-red/10 rounded-full px-6 py-3 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-rgl-red" />
            <span className="text-rgl-red font-semibold">Transparent Pricing</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-rgl-gray max-w-3xl mx-auto mb-8">
            No hidden fees, no surprises. Get exactly what you pay for with our transparent pricing structure
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-rgl-charcoal' : 'text-rgl-gray'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-rgl-red transition-colors"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-rgl-charcoal' : 'text-rgl-gray'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Save {savings}%
                </span>
              )}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-rgl-red to-rgl-red-dark text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                plan.popular ? 'border-rgl-red' : 'border-gray-100'
              } relative overflow-hidden`}>
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-rgl-charcoal mb-2">{plan.name}</h3>
                    <p className="text-rgl-gray mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-rgl-charcoal">${plan.price}</span>
                        <span className="text-rgl-gray ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-sm text-green-600 mt-1">Save ${plan.price * 0.1}/year</p>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-rgl-red flex-shrink-0 mt-0.5" />
                        <span className="text-rgl-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCalendlyOpen(true)}
                    className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                      plan.popular
                        ? 'bg-rgl-red text-white hover:bg-rgl-red-dark shadow-lg'
                        : 'bg-gray-100 text-rgl-charcoal hover:bg-gray-200'
                    }`}
                  >
                    <span>{plan.popular ? 'Get Started' : 'Choose Plan'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-rgl-charcoal mb-6">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-rgl-red" />
                <span className="text-rgl-gray">TCPA Compliant Leads</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-rgl-red" />
                <span className="text-rgl-gray">24hr Lead Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-rgl-red" />
                <span className="text-rgl-gray">Exclusive Rights</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </section>
  );
};

export default PricingSection; 