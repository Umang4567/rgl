import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, TrendingUp, CheckCircle, Shield } from 'lucide-react';

const SocialProofSection = () => {
  const clients = [
    { name: 'ABC Roofing', logo: '🏠', rating: 5.0, review: 'Amazing lead quality!' },
    { name: 'Cool Breeze HVAC', logo: '❄️', rating: 4.9, review: 'Best ROI we\'ve seen' },
    { name: 'SunPower Solar', logo: '☀️', rating: 5.0, review: 'Exclusive leads work!' },
    { name: 'Elite Moving Co', logo: '📦', rating: 4.8, review: 'Consistent quality' },
    { name: 'Peak Contractors', logo: '🏔️', rating: 4.9, review: 'Game changer for us' },
    { name: 'Green Energy Pro', logo: '🌱', rating: 5.0, review: 'Outstanding service' }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '50,000+', label: 'Leads Delivered', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '22%', label: 'Avg Conversion', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Client Rating', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-rgl-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-rgl-red rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-rgl-gold/10 rounded-full px-6 py-3 mb-6"
          >
            <Award className="w-5 h-5 text-rgl-gold" />
            <span className="text-rgl-gold font-semibold">Trusted by Industry Leaders</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
            Join 500+ Successful Contractors
          </h2>
          <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
            See why leading contractors across the country choose Really Good Leads for their growth
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-rgl-red/10 to-rgl-gold/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-rgl-red mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-rgl-gray font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Client Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{client.logo}</div>
                  <div>
                    <h3 className="font-semibold text-rgl-charcoal">{client.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(client.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-rgl-gray ml-1">{client.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-rgl-gray italic">"{client.review}"</p>

              {/* Verified Badge */}
              <div className="flex items-center space-x-2 mt-4">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-medium">Verified Client</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-rgl-charcoal mb-6">
              Industry Recognition & Certifications
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium text-rgl-charcoal">TCPA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Award className="w-5 h-5 text-rgl-gold" />
                <span className="font-medium text-rgl-charcoal">BBB Accredited</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-rgl-charcoal">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Star className="w-5 h-5 text-rgl-red" />
                <span className="font-medium text-rgl-charcoal">5-Star Rated</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection; 