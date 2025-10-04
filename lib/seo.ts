export const seoConfig = {
  defaultTitle: 'Spotts.ai - AI Agents with Human Oversight',
  defaultDescription: 'Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions. Your team stays in control.',
  siteUrl: 'https://spotts.ai',
  siteName: 'Spotts.ai',
  twitterHandle: '@spottsai',

  // Default Open Graph image
  defaultOGImage: {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Spotts.ai - AI Agents with Human Oversight',
  },

  // Keywords for different pages/sections
  keywords: {
    home: [
      'AI agents',
      'agentic AI',
      'business automation',
      'workflow automation',
      'human oversight',
      'AI with human control',
      'Singapore AI solutions',
      'enterprise AI',
      'AI ROI',
      'business process automation'
    ],
    about: [
      'AI company Singapore',
      'AI automation team',
      'enterprise AI solutions'
    ],
    contact: [
      'AI consultation Singapore',
      'AI implementation services',
      'enterprise AI support'
    ]
  }
};

export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return seoConfig.defaultTitle;
  return `${pageTitle} | ${seoConfig.siteName}`;
}

export function generateCanonicalUrl(path: string = ''): string {
  return `${seoConfig.siteUrl}${path}`;
}