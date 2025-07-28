// Meta Pixel Event Tracking Utility
// Provides centralized tracking for all custom events

declare global {
  interface Window {
    fbq: any;
  }
}

// Check if Meta Pixel is loaded
const isMetaPixelLoaded = () => {
  return typeof window !== 'undefined' && window.fbq;
};

// Standard Events
export const trackPageView = (pageName: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('track', 'PageView', {
      page_name: pageName,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackLead = (eventSource: string, leadType?: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('track', 'Lead', {
      content_name: eventSource,
      content_category: leadType || 'general',
      timestamp: new Date().toISOString()
    });
  }
};

export const trackContact = (method: string, source: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('track', 'Contact', {
      content_name: `${method}_contact`,
      content_category: source,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackInitiateCheckout = (service: string, tier?: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: service,
      content_category: tier || 'standard',
      timestamp: new Date().toISOString()
    });
  }
};

// Custom Events
export const trackCalendlyOpen = (source: string, page: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'CalendlyModalOpen', {
      source_button: source,
      page_name: page,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackServiceInterest = (serviceName: string, action: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'ServiceInterest', {
      service_name: serviceName,
      action_type: action,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackPricingView = (serviceName: string, tier: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'PricingView', {
      service_name: serviceName,
      pricing_tier: tier,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackCTAClick = (ctaText: string, page: string, position: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'CTAClick', {
      cta_text: ctaText,
      page_name: page,
      position: position,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackPhoneClick = (source: string, page: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'PhoneClick', {
      source: source,
      page_name: page,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackEmailClick = (source: string, page: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'EmailClick', {
      source: source,
      page_name: page,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackFormSubmit = (formType: string, page: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'FormSubmit', {
      form_type: formType,
      page_name: page,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackServicePageView = (serviceName: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'ServicePageView', {
      service_name: serviceName,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackScrollDepth = (percentage: number, page: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'ScrollDepth', {
      scroll_percentage: percentage,
      page_name: page,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackVideoEngagement = (action: string, video: string, page: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'VideoEngagement', {
      action: action,
      video_name: video,
      page_name: page,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackTestimonialView = (testimonialName: string, industry: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'TestimonialView', {
      testimonial_name: testimonialName,
      industry: industry,
      timestamp: new Date().toISOString()
    });
  }
};

export const trackNavigationClick = (linkText: string, destination: string) => {
  if (isMetaPixelLoaded()) {
    window.fbq('trackCustom', 'NavigationClick', {
      link_text: linkText,
      destination: destination,
      timestamp: new Date().toISOString()
    });
  }
}; 