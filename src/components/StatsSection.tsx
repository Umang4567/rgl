import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle, Clock, Award, Zap } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const stats = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      number: 850,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses growing with our leads',
      color: 'from-blue-500 to-blue-600',
      percentage: 95
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      number: 95,
      suffix: '%',
      label: 'Lead Quality',
      description: 'Pre-qualified prospects ready to buy',
      color: 'from-green-500 to-green-600',
      percentage: 95
    },
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      number: 100,
      suffix: '%',
      label: 'Exclusive',
      description: 'Never shared or resold to competitors',
      color: 'from-rgl-red to-red-600',
      percentage: 100
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      number: 24,
      suffix: '/7',
      label: 'Support',
      description: 'Round-the-clock customer service',
      color: 'from-purple-500 to-purple-600',
      percentage: 100
    }
  ];

  const achievements = [
    { icon: <Award className="w-4 h-4 sm:w-6 sm:h-6" />, label: 'Industry Leader', value: '5 Years' },
    { icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />, label: 'Fast Delivery', value: '<15 Min' },
    { icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />, label: 'Team Size', value: '50+ Experts' },
    { icon: <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />, label: 'Success Rate', value: '98.5%' }
  ];

  const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = isMobile ? 1000 : 2000; // Faster on mobile
      const steps = isMobile ? 30 : 60;
      const increment = target / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [target, isVisible, isMobile]);

    return (
      <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-rgl-red">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  const ProgressBar = ({ percentage, color }: { percentage: number; color: string }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, isMobile ? 200 : 500);

      return () => clearTimeout(timer);
    }, [percentage, isVisible, isMobile]);

    return (
      <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden mt-3 sm:mt-4">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: isMobile ? 1 : 1.5, ease: "easeOut" }}
        />
      </div>
    );
  };

  // Simplified motion variants for mobile
  const mobileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const desktopVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      style={{ minHeight: isMobile ? 'auto' : '600px' }}
    >
      {/* Background Pattern - Hidden on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C85A5A' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-rgl-red/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
          >
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-rgl-red" />
            <span className="text-rgl-red font-semibold text-sm sm:text-base">Proven Results</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-rgl-charcoal mb-4 sm:mb-6 px-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-rgl-gray max-w-3xl mx-auto px-4">
            Join thousands of successful businesses who trust Really Good Leads for their growth
          </p>
        </motion.div>

        {/* Main Stats Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={isMobile ? mobileVariants.hidden : desktopVariants.hidden}
              animate={isVisible ? (isMobile ? mobileVariants.visible : desktopVariants.visible) : {}}
              transition={{ 
                duration: isMobile ? 0.5 : 0.8, 
                delay: index * (isMobile ? 0.05 : 0.1) 
              }}
              whileHover={!isMobile ? { 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              } : {}}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group"
            >
              {/* Hover Gradient Effect - Desktop only */}
              {!isMobile && (
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              )}
              
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  className="text-rgl-red mb-4 sm:mb-6 flex justify-center"
                  whileHover={!isMobile ? { 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  } : {}}
                >
                  <div className={`p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Animated Counter */}
                <div className="mb-3 sm:mb-4">
                  <Counter target={stat.number} suffix={stat.suffix} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-rgl-charcoal mb-2 sm:mb-3 group-hover:text-rgl-red transition-colors">
                  {stat.label}
                </h3>
                
                <p className="text-rgl-gray text-xs sm:text-sm mb-3 sm:mb-4 px-2">
                  {stat.description}
                </p>

                {/* Progress Bar */}
                <ProgressBar percentage={stat.percentage} color={stat.color} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges - Improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center shadow-md hover:shadow-lg transition-all border border-gray-200"
            >
              <div className="text-rgl-red mb-2 sm:mb-3 flex justify-center">
                {achievement.icon}
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-rgl-charcoal mb-1">
                {achievement.value}
              </div>
              <div className="text-xs sm:text-sm text-rgl-gray">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Trust Indicators - Improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-rgl-gray mb-6 sm:mb-8 text-base sm:text-lg">Trusted by leading companies in:</p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4">
            {['Roofing', 'HVAC', 'Moving', 'Solar', 'Home Services', 'Construction'].map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={!isMobile ? { 
                  scale: 1.1,
                  backgroundColor: '#C85A5A',
                  color: '#ffffff',
                  transition: { duration: 0.3 }
                } : {}}
                className="bg-white px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-md border border-gray-200 cursor-pointer group"
              >
                <span className="text-rgl-charcoal font-semibold text-sm sm:text-base group-hover:text-white transition-colors">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;