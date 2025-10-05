export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Spotts.ai",
    "url": "https://spotts.ai",
    "logo": "https://spotts.ai/logo.png",
    "description": "Meet your AI buddy - spotts.ai combines lightning-fast AI execution with smart human oversight for critical business decisions",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Singapore"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@spotts.ai",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://linkedin.com/company/spotts-ai"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Spotts.ai",
    "url": "https://spotts.ai",
    "description": "Your AI buddy powered by advanced language models with human oversight - fast AI execution with smart human guidance for critical business decisions.",
    "publisher": {
      "@type": "Organization",
      "name": "Spotts.ai"
    }
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Spotts.ai - AI Buddy Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "AI buddy platform that combines lightning-fast AI execution with smart human oversight for critical business decisions",
    "url": "https://spotts.ai",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "AI buddy partnership model",
      "Lightning-fast AI execution",
      "Smart human oversight",
      "Critical decision support",
      "Business transformation",
      "333% ROI proven results"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Buddy Partnership Services",
    "description": "Professional implementation of AI buddy partnerships with human oversight for critical business decisions and transformation",
    "provider": {
      "@type": "Organization",
      "name": "Spotts.ai"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "serviceType": "AI Automation Services"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
    </>
  );
}