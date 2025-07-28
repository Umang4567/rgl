import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can I start receiving leads?',
      answer: 'We can have your campaign live and generating leads within 24 hours of setup. Our team works quickly to get your targeting configured and your first leads delivered to your inbox.'
    },
    {
      question: 'Are the leads exclusive to my business?',
      answer: 'Yes, absolutely! All leads we generate are 100% exclusive to your business. We never share or resell leads to multiple contractors. Each lead is verified and delivered only to you.'
    },
    {
      question: 'What is your lead quality guarantee?',
      answer: 'We offer a 30-day quality guarantee on all leads. If you\'re not satisfied with the quality of leads within the first 30 days, we\'ll either replace them or provide a full refund. Our average conversion rate is 21-22%.'
    },
    {
      question: 'Do you provide call center services?',
      answer: 'Yes! Our Digital Door Knocker service provides professional call center representatives who can cold call prospects, qualify leads, and even set appointments for your team. This service is available at $10/hour per representative.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We specialize in home improvement and service industries including roofing, HVAC, solar, moving companies, and general contractors. We also provide SEO and digital marketing services for these industries.'
    },
    {
      question: 'How do you ensure TCPA compliance?',
      answer: 'All our lead generation campaigns follow strict TCPA guidelines. We use opt-in forms, maintain proper consent records, and ensure all leads have given explicit permission to be contacted. Our compliance team regularly audits our processes.'
    },
    {
      question: 'Can I integrate leads with my CRM?',
      answer: 'Yes! We offer seamless integration with popular CRM systems including Salesforce, HubSpot, and custom solutions. Leads are delivered in real-time with full contact information and lead scoring data.'
    },
    {
      question: 'What makes your leads different from competitors?',
      answer: 'Our leads are pre-qualified, exclusive, and delivered with full contact information. We use advanced targeting technology and real-time verification to ensure only qualified prospects reach your business. Plus, our 22% average conversion rate speaks for itself.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-rgl-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-rgl-red rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <HelpCircle className="w-5 h-5 text-rgl-red" />
            <span className="text-rgl-red font-semibold">Frequently Asked Questions</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
            Everything you need to know about our lead generation services and how we can help grow your business
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-rgl-charcoal pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-rgl-red" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-rgl-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Schedule a free consultation to discuss your specific needs and get personalized answers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-rgl-red px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all shadow-xl mx-auto"
            >
              <span>Schedule Free Consultation</span>
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 