'use client';

import { useUIStore } from '@/lib/store';

export default function Hero() {
  const { setShowContactModal } = useUIStore();
  return (
    <section className="pt-32 pb-24 px-8" id="hero" aria-label="Hero section">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-light mb-6 leading-tight">
          AI agents that work<br />
          alongside your team
        </h1>
        <p className="text-xl font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions. Your team stays in control.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setShowContactModal(true)}
            className="px-7 py-3 rounded-full font-normal transition-all text-base hover:opacity-90"
            style={{ backgroundColor: '#06B6D4', color: 'white' }}
          >
            See How It Works
          </button>
          <button
            onClick={() => setShowContactModal(true)}
            className="px-7 py-3 rounded-full border border-gray-300 font-normal transition-all text-base hover:border-gray-500"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}