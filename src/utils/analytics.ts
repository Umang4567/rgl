// Google Analytics utility functions for lead generation tracking

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-D04B8FRS41', {
      page_title,
      page_location,
    });
  }
};

// Track Calendly modal opens
export const trackCalendlyOpen = (source: string, service?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calendly_open', {
      event_category: 'Lead Generation',
      event_label: source,
      service_type: service || 'general',
      value: 1
    });
  }
};

// Track phone clicks
export const trackPhoneClick = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'Contact',
      event_label: source,
      value: 1
    });
  }
};

// Track email clicks
export const trackEmailClick = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'Contact',
      event_label: source,
      value: 1
    });
  }
};

// Track form submissions
export const trackFormSubmission = (form_type: string, service?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Lead Generation',
      event_label: form_type,
      service_type: service || 'general',
      value: 5 // Higher value for form submissions
    });
  }
};

// Track service page views
export const trackServiceView = (service_name: string, service_type: 'leads' | 'marketing') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_view', {
      event_category: 'Service Interest',
      event_label: service_name,
      service_type,
      value: 1
    });
  }
};

// Track pricing section views
export const trackPricingView = (service_name: string, pricing_tier?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pricing_view', {
      event_category: 'Pricing Interest',
      event_label: service_name,
      pricing_tier: pricing_tier || 'all',
      value: 1
    });
  }
};

// Track CTA button clicks
export const trackCTAClick = (cta_text: string, location: string, service?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'Call to Action',
      event_label: cta_text,
      location,
      service_type: service || 'general',
      value: 2
    });
  }
};

// Track scroll depth for engagement
export const trackScrollDepth = (depth: number, page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: page,
      value: depth
    });
  }
};

// Track testimonial interactions
export const trackTestimonialView = (testimonial_name: string, industry: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'testimonial_view', {
      event_category: 'Social Proof',
      event_label: testimonial_name,
      industry,
      value: 1
    });
  }
};

// Enhanced ecommerce tracking for lead packages
export const trackLeadPackageInterest = (
  service: string,
  package_name: string,
  price: string,
  action: 'view' | 'click' | 'inquiry'
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action === 'view' ? 'view_item' : 'select_item', {
      currency: 'USD',
      value: parseFloat(price.replace(/[^0-9.-]+/g, '')),
      items: [{
        item_id: `${service}_${package_name}`.toLowerCase().replace(/\s+/g, '_'),
        item_name: `${service} - ${package_name}`,
        item_category: 'Lead Generation',
        item_variant: service,
        price: parseFloat(price.replace(/[^0-9.-]+/g, '')),
        quantity: 1
      }]
    });
  }
};

// Track conversion goals
export const trackConversion = (conversion_type: 'calendly_booking' | 'form_submission' | 'phone_call', value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      event_category: 'Goal',
      event_label: conversion_type,
      value: value || 10
    });
    
    // Send to conversion tracking
    window.gtag('event', 'conversion', {
      send_to: 'G-D04B8FRS41'
    });
  }
}; 