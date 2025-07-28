import React from 'react';
import { motion } from 'framer-motion';
import { Play, Target, Phone, CheckCircle, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: <Play className="w-8 h-8" />,
      title: 'Campaign Setup',
      description: 'We create a customized lead generation campaign tailored to your business and target market',
      color: 'from-blue-400 to-purple-500',
      details: ['Target market analysis', 'Custom landing pages', 'Multi-channel approach', '24hr setup time']
    },
    {
      number: '02',
      icon: <Target className="w-8 h-8" />,
      title: 'Lead Generation',
      description: 'Our advanced targeting system identifies and qualifies prospects in your service area',
      color: 'from-green-400 to-emerald-500',
      details: ['Pre-qualified prospects', 'Real-time verification', 'Exclusive leads only', 'Quality guarantee']
    },
    {
      number: '03',
      icon: <Phone className="w-8 h-8" />,
      title: 'Lead Delivery',
      description: 'Qualified leads are delivered directly to your CRM or preferred system within 24 hours',
      color: 'from-orange-400 to-red-500',
      details: ['Instant notifications', 'Full contact details', 'Lead scoring', 'Integration ready']
    },
    {
      number: '04',
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Conversion & Growth',
      description: 'Track performance and scale your campaigns based on real-time data and results',
      color: 'from-purple-400 to-indigo-500',
      details: ['Performance tracking', 'ROI optimization', 'Scalable campaigns', 'Ongoing support']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-80 h-80 bg-rgl-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-rgl-gold rounded-full blur-3xl"></div>
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
            <Clock className="w-5 h-5 text-rgl-red" />
            <span className="text-rgl-red font-semibold">Simple 4-Step Process</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
            How It Works
          </h2>
          <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
            Our proven 4-step process ensures you get the highest quality leads with maximum ROI
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-0.5 h-32 bg-gradient-to-b from-rgl-red to-rgl-gold transform -translate-x-1/2 z-0"></div>
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative z-10">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className="text-6xl font-bold text-gray-200 group-hover:text-rgl-red transition-colors duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-rgl-charcoal mb-4 group-hover:text-rgl-red transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-rgl-gray mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-rgl-red flex-shrink-0" />
                      <span className="text-sm text-rgl-gray">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow for connection */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-rgl-red" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-rgl-red mb-2">24 Hours</div>
            <div className="text-rgl-gray">Campaign Setup Time</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-rgl-red mb-2">95%</div>
            <div className="text-rgl-gray">Lead Qualification Rate</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-rgl-red mb-2">22%</div>
            <div className="text-rgl-gray">Average Conversion Rate</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
              Our team will walk you through the entire process and get your campaign live within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all shadow-xl"
              >
                <span>Schedule Demo</span>
                <Play className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white hover:text-rgl-red transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 