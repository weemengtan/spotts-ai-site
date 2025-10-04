import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import WhatIsAgenticAI from '@/components/home/WhatIsAgenticAI';
import ProblemsSection from '@/components/home/ProblemsSection';
import OutcomesSection from '@/components/home/OutcomesSection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'AI Agents with Human Oversight - 333% ROI Proven',
  description: 'Deploy AI agents that handle workflows autonomously with human oversight. 74% achieve ROI within year one. Real business automation with proven results from Fortune 500 companies.',
  openGraph: {
    title: 'AI Agents with Human Oversight - 333% ROI Proven | Spotts.ai',
    description: 'Deploy AI agents that handle workflows autonomously with human oversight. 74% achieve ROI within year one.',
    type: 'website',
    url: 'https://spotts.ai',
  },
  twitter: {
    title: 'AI Agents with Human Oversight - 333% ROI Proven',
    description: 'Deploy AI agents that handle workflows autonomously with human oversight. 74% achieve ROI within year one.',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <StatsBar />
      <WhatIsAgenticAI />
      <ProblemsSection />
      <OutcomesSection />
      <CTASection />
    </main>
  );
}
