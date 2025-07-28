import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { trackTestimonialView } from '../utils/metaPixel';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Johnson Roofing Co.',
      role: 'Owner',
      rating: 4,
      text: 'Really Good Leads has helped improve our lead quality. We\'ve seen a steady increase in qualified prospects and our conversion rates have improved consistently.',
      results: '21% conversion rate',
      industry: 'Roofing'
    },
    {
      name: 'Sarah Williams',
      company: 'Elite HVAC Services',
      role: 'General Manager',
      rating: 4,
      text: 'The leads are well-qualified and exclusive as promised. We\'ve seen good improvements in our conversion rates and appreciate the reliable service.',
      results: '22% conversion rate',
      industry: 'HVAC'
    },
    {
      name: 'David Chen',
      company: 'SunPower Solutions',
      role: 'Sales Director',
      rating: 4,
      text: 'After trying several lead generation companies, Really Good Leads provides consistent quality and reliable delivery. The prospects are genuinely interested.',
      results: '$650K in additional sales',
      industry: 'Solar'
    },
    {
      name: 'Jennifer Martinez',
      company: 'Digital Growth Agency',
      role: 'Co-Owner',
      rating: 5,
      text: 'The service is professional and reliable. The leads come with good information and most customers are genuinely interested in our SEO and digital marketing services.',
      results: '95% interested leads',
      industry: 'SEO'
    }
  ];

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    trackTestimonialView(testimonials[nextIndex].name, testimonials[nextIndex].industry);
  };

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    trackTestimonialView(testimonials[prevIndex].name, testimonials[prevIndex].industry);
  };

  // Track initial testimonial view
  useEffect(() => {
    if (testimonials[currentIndex]) {
      trackTestimonialView(testimonials[currentIndex].name, testimonials[currentIndex].industry);
    }
  }, []);

  // Auto-advance for mobile (better UX on touch devices)
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMobile, currentIndex]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rgl-charcoal mb-4 px-2">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-rgl-gray max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what industry leaders say about our lead generation services.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? -50 : -100 }}
              transition={{ duration: isMobile ? 0.3 : 0.5 }}
              className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12"
            >
              {/* Quote Icon */}
              <div className="text-rgl-red mb-4 sm:mb-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-base sm:text-lg lg:text-xl text-rgl-charcoal leading-relaxed mb-6 sm:mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Results */}
              <div className="bg-rgl-red text-white rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 inline-block">
                <div className="font-semibold text-base sm:text-lg">
                  {testimonials[currentIndex].results}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  {/* Stars */}
                  <div className="flex items-center mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Name and Company */}
                  <div className="font-semibold text-rgl-charcoal text-sm sm:text-base">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-rgl-gray text-sm">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>

                {/* Industry Badge */}
                <div className="bg-white border border-rgl-light-gray rounded-full px-3 sm:px-4 py-2 self-start sm:self-auto">
                  <span className="text-rgl-red font-medium text-sm">
                    {testimonials[currentIndex].industry}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white border border-rgl-light-gray p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors touch-manipulation"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-rgl-charcoal" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    trackTestimonialView(testimonials[index].name, testimonials[index].industry);
                  }}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors touch-manipulation ${
                    index === currentIndex ? 'bg-rgl-red' : 'bg-rgl-light-gray'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white border border-rgl-light-gray p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors touch-manipulation"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-rgl-charcoal" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="text-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0">
            <div className="text-2xl sm:text-3xl font-bold text-rgl-red mb-2">4.3/5</div>
            <div className="text-rgl-charcoal font-semibold text-sm sm:text-base">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              ))}
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
            </div>
          </div>
          <div className="text-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0">
            <div className="text-2xl sm:text-3xl font-bold text-rgl-red mb-2">87%</div>
            <div className="text-rgl-charcoal font-semibold text-sm sm:text-base">Client Retention</div>
            <div className="text-rgl-gray text-xs sm:text-sm mt-1">Year-over-year</div>
          </div>
          <div className="text-center bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0">
            <div className="text-2xl sm:text-3xl font-bold text-rgl-red mb-2">24hrs</div>
            <div className="text-rgl-charcoal font-semibold text-sm sm:text-base">Setup Time</div>
            <div className="text-rgl-gray text-xs sm:text-sm mt-1">From contract to leads</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;