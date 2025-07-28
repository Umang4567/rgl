import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
        title="Contact Really Good Leads - Get Your Free Consultation Today"
        description="Contact Really Good Leads for exclusive lead generation services. Free consultation available. Call +1-321-408-7274 or email contact@reallygoodleads.xyz. Melbourne, FL office."
        keywords="contact really good leads, lead generation consultation, free consultation, Melbourne FL, contact form, lead generation company contact"
        canonical="/contact"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Ready to start receiving high-quality leads? Contact our team today for a free consultation 
              and discover how we can help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-rgl-charcoal mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-rgl-gray mb-8">
                  Our team is ready to help you start receiving quality leads. Reach out through any of the methods below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rgl-red text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rgl-charcoal mb-1">Phone</h3>
                    <p className="text-rgl-gray mb-2">Call us for immediate assistance</p>
                                    <a href="tel:+13214087274" className="text-rgl-red font-semibold hover:text-rgl-red-dark">
                  +1-321-408-7274
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rgl-red text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rgl-charcoal mb-1">Email</h3>
                    <p className="text-rgl-gray mb-2">Send us a detailed message</p>
                                    <a href="mailto:contact@reallygoodleads.xyz" className="text-rgl-red font-semibold hover:text-rgl-red-dark">
                  contact@reallygoodleads.xyz
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rgl-red text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rgl-charcoal mb-1">Office</h3>
                    <p className="text-rgl-gray mb-2">Visit our headquarters</p>
                    <address className="text-rgl-red font-semibold not-italic">
                      310 N Wickham Rd Unit 134<br />
                      Melbourne, FL 32935<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-rgl-red text-white p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rgl-charcoal mb-1">Business Hours</h3>
                    <p className="text-rgl-gray mb-2">When you can reach us</p>
                    <div className="text-rgl-red font-semibold">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 5:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-rgl-charcoal mb-3">Our Response Promise</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-rgl-gray">Phone calls answered within 3 rings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-rgl-gray">Email responses within 1 hour during business hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-rgl-gray">Free consultation scheduled within 24 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-rgl-charcoal mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all"
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all"
                >
                  <option value="">Select Service Interest *</option>
                  <option value="roofing-leads">Roofing Leads</option>
                  <option value="hvac-leads">HVAC Leads</option>
                  <option value="seo-leads">SEO Leads</option>
                  <option value="solar-leads">Solar Leads</option>
                  <option value="roofing-marketing">Roofing Marketing</option>
                  <option value="hvac-marketing">HVAC Marketing</option>
                  <option value="custom">Custom Solution</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your business and lead generation needs..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rgl-red focus:border-transparent transition-all resize-none"
                ></textarea>
                {/* Consent Checkbox */}
                <div className="flex items-start space-x-3 bg-gray-100 rounded-lg p-4">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={isConsentChecked}
                    onChange={e => setIsConsentChecked(e.target.checked)}
                    className="mt-1 accent-rgl-gold w-5 h-5"
                    required
                  />
                  <label htmlFor="consent" className="text-xs text-rgl-gray">
                    I agree to receive communications by text message regarding lead generation updates and results from Really Good Leads LLC. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our <a href="/privacy-policy" className="underline text-rgl-red hover:text-rgl-red-dark transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a> to learn how your data is used.
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={!isConsentChecked}
                  className="w-full bg-rgl-red text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-rgl-red-dark transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>

              <p className="text-xs text-rgl-gray text-center mt-4">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                We respect your privacy and will never share your information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Located in the heart of the business district, our office is easily accessible for in-person meetings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Placeholder for map - in a real implementation, you'd use Google Maps or similar */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-rgl-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-rgl-charcoal mb-2">Interactive Map</h3>
                <p className="text-rgl-gray">310 N Wickham Rd Unit 134, Melbourne, FL 32935, United States</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </motion.div>
  );
};

export default Contact;