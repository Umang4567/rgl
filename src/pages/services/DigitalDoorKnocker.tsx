import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { trackServiceView } from '../../utils/analytics';
import { trackServicePageView, trackCTAClick, trackFormSubmit, trackScrollDepth } from '../../utils/metaPixel';
import { Globe, Target, Calendar, CheckCircle, User, Rocket, X, Phone, Mail, Building, ArrowRight } from 'lucide-react';
import CalendlyModal from '../../components/CalendlyModal';

const DigitalDoorKnocker = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    phoneNumber: '',
    industry: '',
    questions: '',
    preferredDate: '',
    preferredTime: ''
  });

  useEffect(() => {
    trackServiceView('digital_door_knocker', 'leads');
    trackServicePageView('Digital Door Knocker');

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent >= 25 && !sessionStorage.getItem('scroll_25_digital_door_knocker')) {
        trackScrollDepth(25, 'Digital Door Knocker');
        sessionStorage.setItem('scroll_25_digital_door_knocker', 'true');
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem('scroll_50_digital_door_knocker')) {
        trackScrollDepth(50, 'Digital Door Knocker');
        sessionStorage.setItem('scroll_50_digital_door_knocker', 'true');
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem('scroll_75_digital_door_knocker')) {
        trackScrollDepth(75, 'Digital Door Knocker');
        sessionStorage.setItem('scroll_75_digital_door_knocker', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmit('digital_door_knocker_contact', JSON.stringify(formData));
    setCalendlyOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      className="pt-8 lg:pt-12"
    >
      <SEO
        title="Digital Door Knocker Services - Remote Cold Calling | Really Good Leads"
        description="Replace expensive door-to-door sales teams with our elite digital door knockers. Professional appointment setters for just $10/hour. Scale your lead generation instantly."
        keywords="digital door knocker, remote cold calling, appointment setting, sales outsourcing, lead generation, door to door alternative, cold calling services, sales reps"
        canonical="/services/digital-door-knocker"
        schemaType="Service"
        service="Digital Door Knocker Services"
        price="$10/hour"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Digital Door Knocker", url: "/services/digital-door-knocker" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rgl-red via-rgl-red-dark to-red-900 text-white py-12 lg:py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-rgl-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
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
                Stop Knocking.
                <span className="block text-rgl-gold">Start Closing.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-red-100 mb-8 leading-relaxed">
                Replace your expensive, inefficient door-to-door team with our elite digital door knockers.
                We deliver qualified appointments directly to your calendar for just $10/hour.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                {[
                  { icon: <Globe className="w-6 h-6" />, text: "Trained Sales Reps: Get instant access to a team of professional appointment setters." },
                  { icon: <Target className="w-6 h-6" />, text: "Instant Outreach to Hundreds: Reach more prospects in a day than a door knocker could in a week." },
                  { icon: <Calendar className="w-6 h-6" />, text: "Book More Leads, Faster: Fill your pipeline with qualified, high-intent leads." }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="text-rgl-gold flex-shrink-0 mt-1">{feature.icon}</div>
                    <span className="text-gray-100">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - SVG and CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col items-center"
            >
              {/* SVG Character with Animation */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-lg relative"
              >
                {/* Animated Circles */}
                <motion.div
                  className="absolute -right-4 -top-4 w-20 h-20 rounded-full border-2 border-rgl-gold opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -left-2 bottom-10 w-16 h-16 rounded-full border-2 border-white opacity-20"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <img
                  src="/Generating new leads-pana.svg"
                  alt="Digital Door Knocker Representative"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Stats and CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center w-full max-w-lg"
              >
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: "100%", label: "Remote" },
                    { value: "10x", label: "Faster" },
                    { value: "24/7", label: "Available" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-3"
                    >
                      <div className="text-2xl font-bold text-rgl-gold">{stat.value}</div>
                      <div className="text-sm text-red-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button with Glow Effect */}
                <motion.button
                  onClick={() => {
                    trackCTAClick('hero_cta', 'digital_door_knocker', 'consultation_request');
                    setCalendlyOpen(true);
                  }}
                  className="relative group w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-rgl-gold rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

                  {/* Button Content */}
                  <div className="relative bg-rgl-gold hover:bg-rgl-gold/90 text-rgl-charcoal font-bold py-5 px-8 rounded-xl text-xl shadow-lg flex items-center justify-center space-x-3">
                    <Calendar className="w-6 h-6" />
                    <span>Schedule Your Free Strategy Call</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>

                {/* Subtle Hint Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-4 text-red-200/80 text-sm"
                >
                  No commitment required • 15-minute consultation
                </motion.p>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rgl-gold/10 rounded-full blur-3xl transform scale-75" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Professional Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-rgl-charcoal via-gray-800 to-rgl-charcoal text-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with VS Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
                VS
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-red-400">Old School</span> vs.
              <span className="text-green-400"> Future Proof</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop throwing money at outdated methods. See why smart businesses are making the switch.
            </p>
          </motion.div>

          {/* Interactive Battle Arena */}
          <div className="relative">
            {/* Lightning Bolt Separator */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-20 hidden lg:block">
              <motion.svg
                width="80"
                height="400"
                viewBox="0 0 80 400"
                className="h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.path
                  d="M40 0 L30 120 L50 120 L35 200 L60 200 L25 400 L45 250 L25 250 L40 0"
                  fill="url(#lightning)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="lightning" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>

            {/* Mobile Horizontal Scroll for VS Section */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto pb-6  space-x-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex-shrink-0 w-6 py-10"></div> {/* Left padding */}

                {/* Traditional Side - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-shrink-0 w-[340px] snap-center relative group z-5"
                >
                  {/* Failure Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90%]  hidden sm:block">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg text-center whitespace-nowrap">
                      ❌ OUTDATED
                    </div>
                  </div>


                  <div className="bg-gradient-to-br from-red-900/50 to-gray-800/50 rounded-3xl p-6 border border-red-500/30 relative overflow-hidden group-hover:border-red-400 transition-all duration-500 min-h-[600px]">
                    {/* Character Illustration */}
                    <div className="text-center mb-6">
                      <motion.div
                        className="relative mx-auto w-20 h-20 mb-3"
                        whileHover={{ scale: 1.05 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="bg-gray-700 rounded-full w-full h-full flex items-center justify-center border-2 border-red-400 shadow-xl">
                          <div className="text-2xl">🚪</div>
                        </div>
                        {/* Sweat Drops */}
                        <motion.div
                          className="absolute -right-1 top-1 text-blue-400 text-sm"
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          💧
                        </motion.div>
                      </motion.div>
                      <h3 className="text-lg font-bold text-red-400 mb-1">Traditional Door Knocking</h3>
                      <p className="text-red-300 text-xs">Slow • Expensive • Unreliable</p>
                    </div>

                    {/* Problems List - Compact */}
                    <div className="space-y-2.5">
                      {[
                        { icon: "🌧️", text: "Weather dependent" },
                        { icon: "💰", text: "High overhead costs" },
                        { icon: "📊", text: "No tracking" },
                        { icon: "⏰", text: "Time wasting" },
                        { icon: "📈", text: "Hard to scale" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-red-900/30 rounded-lg p-3 border border-red-600/30"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg flex-shrink-0">{item.icon}</div>
                            <div className="flex items-center space-x-2 min-w-0">
                              <X className="w-3 h-3 text-red-400 flex-shrink-0" />
                              <span className="text-white text-sm font-medium truncate">{item.text}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Failure Meter */}
                    <div className="mt-6 text-center">
                      <div className="bg-gray-800 rounded-full h-3 mb-2 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                      <p className="text-red-400 text-xs font-bold">85% Failure Rate</p>
                    </div>
                  </div>
                </motion.div>

                {/* Digital Side - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-shrink-0 w-full max-w-[340px] snap-center relative group"
                >
                  {/* Success Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90%]  hidden sm:block" >
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg text-center whitespace-nowrap">
                      ✅ REVOLUTIONARY
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-3xl p-6 border border-green-500/30 relative overflow-hidden group-hover:border-green-400 transition-all duration-500 min-h-[600px] flex flex-col justify-between">
                    {/* Character Illustration */}
                    <div className="text-center mb-6">
                      <motion.div
                        className="relative mx-auto w-20 h-20 mb-3"
                        whileHover={{ scale: 1.05 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-full w-full h-full flex items-center justify-center border-2 border-green-400 shadow-xl">
                          <div className="text-xl">📞</div>
                        </div>
                        {/* Success Sparkles */}
                        <div className="absolute -right-1 -top-1 text-yellow-400 text-sm">✨</div>
                      </motion.div>
                      <h3 className="text-lg font-bold text-green-400 mb-1">Digital Door Knocker</h3>
                      <p className="text-green-300 text-xs">Fast • Smart • Scalable</p>
                    </div>

                    {/* Benefits List - Compact */}
                    <div className="space-y-2.5">
                      {[
                        { icon: "🌍", text: "Global reach 24/7" },
                        { icon: "💡", text: "Cost effective" },
                        { icon: "📈", text: "Real-time analytics" },
                        { icon: "🎯", text: "Qualified prospects" },
                        { icon: "🚀", text: "Instant scaling" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-green-900/30 rounded-lg p-3 border border-green-600/30"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg flex-shrink-0">{item.icon}</div>
                            <div className="flex items-center space-x-2 min-w-0">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-white text-sm font-medium truncate">{item.text}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Success Meter */}
                    <div className="mt-6 text-center">
                      <div className="bg-gray-800 rounded-full h-3 mb-2 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 1.2 }}
                        />
                      </div>
                      <p className="text-green-400 text-xs font-bold">95% Success Rate</p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 text-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCalendlyOpen(true)}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg inline-flex items-center space-x-2 w-full justify-center"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Get Quote</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>


                <div className="flex-shrink-0 w-6"></div> {/* Right padding */}
              </div>

              {/* Mobile Swipe Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
              </div>

              {/* Swipe Instruction */}
              <div className="text-center mt-2">
                <p className="text-gray-400 text-sm">← Swipe to compare →</p>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-24">
              {/* Traditional Side - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Failure Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ❌ OUTDATED
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-900/50 to-gray-800/50 rounded-3xl p-8 border border-red-500/30 relative overflow-hidden group-hover:border-red-400 transition-all duration-500">


                  {/* Character Illustration */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="relative mx-auto w-32 h-32 mb-4"
                      whileHover={{ scale: 1.05 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="bg-gray-700 rounded-full w-full h-full flex items-center justify-center border-4 border-red-400 shadow-xl">
                        <div className="text-5xl">
                          🚪
                        </div>
                      </div>
                      {/* Sweat Drops */}
                      <motion.div
                        className="absolute -right-2 top-4 text-blue-400 text-xl"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        💧
                      </motion.div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-red-400 mb-2">Traditional Door Knocking</h3>
                    <p className="text-red-300 text-sm">Slow • Expensive • Unreliable</p>
                  </div>

                  {/* Problems List */}
                  <div className="space-y-4">
                    {[
                      { icon: "🌧️", text: "Weather dependent", detail: "Rain stops sales" },
                      { icon: "💰", text: "High overhead costs", detail: "$50K+ per rep" },
                      { icon: "📊", text: "No tracking", detail: "Blind results" },
                      { icon: "⏰", text: "Time wasting", detail: "Wrong prospects" },
                      { icon: "📈", text: "Hard to scale", detail: "Geographic limits" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-red-900/30 rounded-xl p-4 border border-red-600/30 hover:border-red-500/50 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl group-hover/item:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <X className="w-4 h-4 text-red-400" />
                              <span className="text-white font-medium">{item.text}</span>
                            </div>
                            <p className="text-red-300 text-sm mt-1">{item.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Failure Meter */}
                  <div className="mt-8 text-center">
                    <div className="bg-gray-800 rounded-full h-4 mb-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                    <p className="text-red-400 text-sm font-bold">85% Failure Rate</p>
                  </div>
                </div>
              </motion.div>

              {/* Digital Side - Right */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Success Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ✅ REVOLUTIONARY
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-3xl p-8 border border-green-500/30 relative overflow-hidden group-hover:border-green-400 transition-all duration-500">


                  {/* Character Illustration */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="relative mx-auto w-32 h-32 mb-4"
                      whileHover={{ scale: 1.05 }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-full w-full h-full flex items-center justify-center border-4 border-green-400 shadow-xl">
                        <div className="text-4xl">
                          📞
                        </div>
                      </div>
                      {/* Success Sparkles */}
                      <div className="absolute -right-3 -top-1 text-yellow-400 text-lg">
                        ✨
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Digital Door Knocker</h3>
                    <p className="text-green-300 text-sm">Fast • Smart • Scalable</p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    {[
                      { icon: "🌍", text: "Global reach 24/7", detail: "No boundaries" },
                      { icon: "💡", text: "Cost effective", detail: "$10/hour only" },
                      { icon: "📈", text: "Real-time analytics", detail: "Live insights" },
                      { icon: "🎯", text: "Qualified prospects", detail: "Hot leads only" },
                      { icon: "🚀", text: "Instant scaling", detail: "Add reps in minutes" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-green-900/30 rounded-xl p-4 border border-green-600/30 hover:border-green-500/50 transition-all duration-300 group/item"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl group-hover/item:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-white font-medium">{item.text}</span>
                            </div>
                            <p className="text-green-300 text-sm mt-1">{item.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Success Meter */}
                  <div className="mt-8 text-center">
                    <div className="bg-gray-800 rounded-full h-4 mb-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1.2 }}
                      />
                    </div>
                    <p className="text-green-400 text-sm font-bold">95% Success Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to  revolution your lead generation?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't let your competition steal your customers with outdated methods.
                Make the smart switch today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCalendlyOpen(true)}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl inline-flex items-center space-x-2"
              >
                <span>Make the Switch Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-rgl-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-rgl-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-rgl-red/10 rounded-full px-6 py-3 mb-6">
              <Rocket className="w-5 h-5 text-rgl-red" />
              <span className="text-rgl-red font-semibold">HOW WE DO IT</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-rgl-charcoal mb-6">
              From Door-to-Door to
              <span className="block text-rgl-red">Digital Domination</span>
            </h2>
            <p className="text-xl text-rgl-gray max-w-3xl mx-auto">
              Simple. Fast. Effective. Get qualified appointments in 4 easy steps.
            </p>
          </motion.div>

          {/* Process Flow */}
          <div className="relative">
            {/* Process Arrow Path - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 transform -translate-y-1/2">
              <svg className="w-full h-full" viewBox="0 0 1000 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="33%" stopColor="#F59E0B" />
                    <stop offset="66%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#C85A5A" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 20 L300 20 L400 20 L700 20 L800 20 L1000 20"
                  stroke="url(#arrowGradient)"
                  strokeWidth="6"
                  strokeDasharray="12,6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden">
              <div className="flex overflow-x-auto pb-4 space-x-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex-shrink-0 w-4"></div> {/* Left padding */}
                {[
                  {
                    step: 1,
                    icon: <User className="w-8 h-8" />,
                    title: "Tell Us Your Target",
                    subtitle: "WHO",
                    description: "Define your ideal customer",
                    color: "bg-blue-500",
                    delay: 0.1
                  },
                  {
                    step: 2,
                    icon: <Target className="w-8 h-8" />,
                    title: "We Start Calling",
                    subtitle: "DIAL",
                    description: "Trained reps make calls",
                    color: "bg-amber-500",
                    delay: 0.2
                  },
                  {
                    step: 3,
                    icon: <Calendar className="w-8 h-8" />,
                    title: "Track Everything",
                    subtitle: "MONITOR",
                    description: "See live results",
                    color: "bg-emerald-500",
                    delay: 0.3
                  },
                  {
                    step: 4,
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "Get Appointments",
                    subtitle: "CLOSE",
                    description: "You show up and close",
                    color: "bg-red-500",
                    delay: 0.4
                  }
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 snap-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: step.delay }}
                      className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 h-full relative overflow-hidden"
                    >
                      {/* Step Connection Arrow */}
                      {index < 3 && (
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="w-6 h-6 bg-rgl-red rounded-full flex items-center justify-center shadow-lg">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      )}

                      <div className="text-center">
                        {/* Large Interactive Icon */}
                        <div className={`${step.color} text-white rounded-2xl p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center shadow-lg`}>
                          {step.icon}
                        </div>

                        {/* Step Badge */}
                        <div className="bg-gradient-to-r from-rgl-gold to-rgl-red text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3 text-lg font-bold shadow-lg">
                          {step.step}
                        </div>

                        {/* Subtitle Badge */}
                        <div className="inline-block bg-rgl-red/10 text-rgl-red px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                          {step.subtitle}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-rgl-charcoal mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-rgl-gray leading-relaxed text-sm">
                          {step.description}
                        </p>

                        {/* Progress Ring */}
                        <div className="mt-4 flex justify-center">
                          <div className="relative w-12 h-12">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <circle
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="2"
                              />
                              <motion.circle
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke="#C85A5A"
                                strokeWidth="3"
                                strokeDasharray="87.96"
                                initial={{ strokeDashoffset: 87.96 }}
                                whileInView={{ strokeDashoffset: 87.96 - (21.99 * (index + 1)) }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: step.delay + 0.3 }}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-rgl-red font-bold text-sm">{(index + 1) * 25}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-500 via-emerald-500 to-red-500 rounded-b-2xl"></div>
                    </motion.div>
                  </div>
                ))}
                <div className="flex-shrink-0 w-4"></div> {/* Right padding */}
              </div>

              {/* Mobile Process Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-rgl-red/30"
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-6 items-stretch">
              {[
                {
                  step: 1,
                  icon: <User className="w-8 h-8 lg:w-10 lg:h-10" />,
                  title: "Tell Us Your Target",
                  subtitle: "WHO",
                  description: "Define your service areas - Down to the zip code.",
                  color: "bg-blue-500",
                  delay: 0.1
                },
                {
                  step: 2,
                  icon: <Target className="w-8 h-8 lg:w-10 lg:h-10" />,
                  title: "We Start Calling",
                  subtitle: "DIAL",
                  description: "Y(our) trained reps make calls using proven scripts and real-time coaching and validation.",
                  color: "bg-amber-500",
                  delay: 0.2
                },
                {
                  step: 3,
                  icon: <Calendar className="w-8 h-8 lg:w-10 lg:h-10" />,
                  title: "Track Everything",
                  subtitle: "MONITOR",
                  description: "See live results, listen to calls, and optimize performance in real-time.",
                  color: "bg-emerald-500",
                  delay: 0.3
                },
                {
                  step: 4,
                  icon: <CheckCircle className="w-8 h-8 lg:w-10 lg:h-10" />,
                  title: "Get Appointments",
                  subtitle: "CLOSE",
                  description: "Qualified prospects book directly into your calendar. You show up and close.",
                  color: "bg-red-500",
                  delay: 0.4
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: step.delay }}
                  className="relative group h-[400px] md:h-[500px] lg:h-[550px]"
                >
                  {/* Connecting Arrow */}
                  {index < 3 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        whileInView={{ scale: 1, rotate: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: step.delay + 0.3 }}
                        className="w-10 h-10 bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-full flex items-center justify-center shadow-lg"
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  )}

                  <motion.div
                    className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 relative overflow-hidden border-2 border-gray-100 group-hover:border-rgl-red h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Background Pulse */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-rgl-red/5 to-rgl-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative z-10 text-center flex flex-col flex-grow">
                      {/* Large Interactive Icon */}
                      <motion.div
                        className={`${step.color} text-white rounded-2xl md:rounded-3xl p-4 md:p-6 mx-auto mb-4 md:mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Step Badge */}
                      <div className="bg-gradient-to-r from-rgl-gold to-rgl-red text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-3 md:mb-4 text-base md:text-lg font-bold shadow-lg flex-shrink-0">
                        {step.step}
                      </div>

                      {/* Subtitle Badge */}
                      <div className="inline-block bg-rgl-red/10 text-rgl-red px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 uppercase tracking-wider flex-shrink-0">
                        {step.subtitle}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-rgl-charcoal mb-3 md:mb-4 group-hover:text-rgl-red transition-colors flex-shrink-0">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-rgl-gray leading-relaxed text-base md:text-lg flex-grow">
                        {step.description}
                      </p>

                      {/* Interactive Progress Ring */}
                      <div className="mt-auto pt-4 md:pt-6 flex justify-center flex-shrink-0">
                        <motion.div
                          className="relative w-12 h-12 md:w-16 md:h-16"
                          initial={{ rotate: 0 }}
                          whileInView={{ rotate: 360 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: step.delay + 0.5 }}
                        >
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <circle
                              cx="18"
                              cy="18"
                              r="16"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="2"
                            />
                            <motion.circle
                              cx="18"
                              cy="18"
                              r="16"
                              fill="none"
                              stroke="#C85A5A"
                              strokeWidth="3"
                              strokeDasharray="100"
                              initial={{ strokeDashoffset: 100 }}
                              whileInView={{ strokeDashoffset: 100 - (25 * (index + 1)) }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: step.delay + 0.3 }}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-rgl-red font-bold text-sm md:text-base">{(index + 1) * 25}%</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Interactive Hover Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-blue-500 via-amber-500 via-emerald-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl md:rounded-b-3xl"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-rgl-red to-rgl-red-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Sales Process?</h3>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of home service businesses who've replaced expensive door-to-door teams with our digital solution.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCalendlyOpen(true)}
                className="bg-white text-rgl-red px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Let's talk about it</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />
    </motion.div>
  );
};

export default DigitalDoorKnocker;