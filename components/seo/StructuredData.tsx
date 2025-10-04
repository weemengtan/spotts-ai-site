export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Spotts.ai",
    "url": "https://spotts.ai",
    "logo": "https://spotts.ai/logo.png",
    "description": "AI agents with human oversight for business automation",
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
    "description": "Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions.",
    "publisher": {
      "@type": "Organization",
      "name": "Spotts.ai"
    }
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Spotts.ai AI Agents Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "AI agents platform with human oversight for business workflow automation",
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
      "AI workflow automation",
      "Human oversight integration",
      "Business process optimization",
      "Real-time monitoring",
      "ROI tracking"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Agent Implementation Services",
    "description": "Professional implementation of AI agents with human oversight for business automation",
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