import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'Service' | 'Product' | 'WebPage';
  breadcrumbs?: Array<{ name: string; url: string }>;
  price?: string;
  service?: string;
  location?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Really Good Leads - Exclusive Lead Generation Services",
  description = "Professional lead generation for roofing, HVAC, moving, and solar companies. Get exclusive, high-quality leads with 21-22% conversion rates. Call center services available.",
  keywords = "lead generation, roofing leads, HVAC leads, SEO leads, solar leads, exclusive leads, call center services, marketing services, home improvement leads",
  canonical,
  ogType = "website",
  ogImage = "/favicon_io/android-chrome-512x512.png",
  twitterCard = "summary_large_image",
  schemaType = "Organization",
  breadcrumbs,
  price,
  service,
  location = "Melbourne, FL"
}) => {
  const siteUrl = "https://reallygoodleads.xyz";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Base Schema.org structured data
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": "Really Good Leads",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": fullOgImage,
    "telephone": "+1-321-408-7274",
    "email": "contact@reallygoodleads.xyz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "310 N Wickham Rd Unit 134",
      "addressLocality": "Melbourne",
      "addressRegion": "FL",
      "postalCode": "32935",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Lead Generation",
      "Roofing Leads",
      "HVAC Leads", 
              "SEO Leads",
      "Solar Leads",
      "Digital Marketing",
      "Call Center Services"
    ]
  };

  // Add business-specific schema
  if (schemaType === 'LocalBusiness' || schemaType === 'Organization') {
    Object.assign(baseSchema, {
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.3",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mike Johnson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "reviewBody": "Really Good Leads has helped improve our lead quality. We've seen a steady increase in qualified prospects and our conversion rates have improved consistently."
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    });
  }

  // Service-specific schema
  if (schemaType === 'Service' && service) {
    Object.assign(baseSchema, {
      "@type": "Service",
      "serviceType": service,
      "provider": {
        "@type": "Organization",
        "name": "Really Good Leads"
      },
      "offers": price ? {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "USD"
      } : undefined
    });
  }

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Really Good Leads" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@reallygoodleads" />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Really Good Leads" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Melbourne, Florida" />
      <meta name="geo.position" content="28.0836;-80.6081" />
      <meta name="ICBM" content="28.0836, -80.6081" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="310 N Wickham Rd Unit 134" />
      <meta name="business:contact_data:locality" content="Melbourne" />
      <meta name="business:contact_data:region" content="FL" />
      <meta name="business:contact_data:postal_code" content="32935" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-321-408-7274" />
      <meta name="business:contact_data:email" content="contact@reallygoodleads.xyz" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>

      {/* Breadcrumb Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 