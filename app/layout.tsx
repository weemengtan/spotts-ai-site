import { Metadata } from 'next';
import { robotoSerif } from '@/lib/fonts';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import ContactModal from '@/components/shared/ContactModal';
import StructuredData from '@/components/seo/StructuredData';
import QueryProvider from '@/components/providers/QueryProvider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Spotts.ai - AI Agents with Human Oversight',
    template: '%s | Spotts.ai'
  },
  description: 'Meet spotts.ai - your AI buddy powered by advanced language models with human oversight. Fast AI execution with smart human guidance for critical business decisions. 333% ROI proven.',
  keywords: [
    'AI buddy',
    'AI human partnership',
    'spotts.ai',
    'AI with human oversight',
    'business AI automation',
    'AI governance',
    'enterprise AI solutions',
    'Singapore AI',
    'AI strategy consulting',
    'human-AI collaboration',
    'AI business transformation',
    'intelligent automation'
  ],
  authors: [{ name: 'Spotts.ai Team' }],
  creator: 'Spotts.ai',
  publisher: 'Spotts.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://spotts.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://spotts.ai',
    title: 'Spotts.ai - AI Agents with Human Oversight',
    description: 'Meet your AI buddy - spotts.ai combines lightning-fast AI execution with smart human oversight for critical business decisions. Partnership model that delivers measurable success.',
    siteName: 'Spotts.ai',
    images: [
      {
        url: '/icon-512',
        width: 512,
        height: 512,
        alt: 'Spotts.ai - AI Agents with Human Oversight',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spotts.ai - AI Agents with Human Oversight',
    description: 'Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions.',
    images: ['/icon-512'],
    creator: '@spottsai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoSerif.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <StructuredData />
      </head>
      <body className={`${robotoSerif.variable} font-serif antialiased`}>
        <QueryProvider>
          <Navigation />
          {children}
          <Footer />
          <ContactModal />
        </QueryProvider>
      </body>
    </html>
  );
}
