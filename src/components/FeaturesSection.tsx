import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Shield, Clock, Users, TrendingUp, CheckCircle, Star, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast Delivery',
      description: 'Get qualified leads within 24 hours of campaign launch',
      color: 'from-yellow-400 to-orange-500',
      stats: '24hr delivery'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Targeting',
      description: 'Advanced targeting ensures only qualified prospects reach your business',
      color: 'from-blue-400 to-purple-500',
      stats: '95% accuracy'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '100% Compliant',
      description: 'All leads are TCPA compliant and follow strict industry regulations',
      color: 'from-green-400 to-emerald-500',
      stats: 'TCPA compliant'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Real-Time Updates',
      description: 'Track lead status and performance in real-time dashboard',
      color: 'from-red-400 to-pink-500',
      stats: 'Live tracking'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Exclusive Leads',
      description: 'Never shared or resold - leads are exclusively yours',
      color: 'from-indigo-400 to-blue-500',
      stats: '100% exclusive'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven ROI',
      description: 'Average 21-22% conversion rates with our qualified leads',
      color: 'from-purple-400 to-indigo-500',
      stats: '22% conversion'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rgl-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rgl-gold rounded-full blur-3xl"></div>
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
            <Star className="w-5 h-5 text-rgl-red" />
            <span className="text-rgl-red font-semibold">Why Choose Really Good Leads</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
            The Most Advanced Lead Generation Platform
          </h2>
          <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver the highest quality leads in the industry
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-rgl-charcoal mb-3 group-hover:text-rgl-red transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-rgl-gray mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-rgl-red" />
                    <span className="text-sm font-semibold text-rgl-charcoal">{feature.stats}</span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-rgl-red/20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Lead Generation?
            </h3>
            <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of contractors who have already scaled their businesses with our exclusive leads
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all shadow-xl mx-auto"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection; 