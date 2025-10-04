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
  description: 'Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions. Your team stays in control. 333% ROI, 74% achieve returns within year one.',
  keywords: [
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
    description: 'Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions. 333% ROI proven results.',
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
