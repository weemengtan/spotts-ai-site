'use client';

import { useUIStore } from '@/lib/store';
import { steps } from '@/lib/data';

export default function WhatIsAgenticAI() {
  const { activeStep, setActiveStep } = useUIStore();

  return (
    <section className="py-24 px-8" id="what">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-light mb-4">What is agentic AI?</h2>
        <p className="text-lg font-light text-gray-600 mb-16 max-w-3xl leading-relaxed">
          AI systems that can complete multi-step tasks independently, while keeping humans in the loop for critical decisions.
        </p>

        <div className="bg-gray-50 p-12 rounded-lg mb-12">
          <div className="grid grid-cols-2 gap-12 mb-8">
            <div>
              <div className="text-sm font-normal mb-3 text-gray-500">Regular AI (like ChatGPT)</div>
              <div className="space-y-3 text-sm font-light">
                <div>You: &ldquo;Draft an email to this customer&rdquo;</div>
                <div>AI: &ldquo;Here&rsquo;s your email&rdquo;</div>
                <div>You: &ldquo;Now update the CRM&rdquo;</div>
                <div>AI: &ldquo;I can&rsquo;t do that&rdquo;</div>
                <div className="pt-2 text-gray-500 italic">You&rsquo;re still doing the work.</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-normal mb-3 text-gray-500">Agentic AI (with oversight)</div>
              <div className="space-y-3 text-sm font-light">
                <div>You: &ldquo;Handle routine customer inquiries&rdquo;</div>
                <div>AI: ✓ Reads inquiries</div>
                <div className="pl-6">✓ Checks order history</div>
                <div className="pl-6">✓ Processes standard refunds (&lt;$100)</div>
                <div className="pl-6">⚠️ Escalates complex cases to you</div>
                <div className="pt-2 font-normal">You approve, AI executes.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-light mb-8">How it works: Four steps</h3>
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className={`p-6 rounded-lg border transition-all cursor-pointer ${
                  activeStep === i ? 'border-gray-400 bg-white' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="text-3xl font-light mb-2" style={{
                    color: activeStep === i ? '#78350F' : '#9CA3AF'
                  }}>
                    {i + 1}
                  </div>
                  <div className="text-base font-normal mb-2">{step.title}</div>
                  <div className="text-sm font-light text-gray-600 mb-3">{step.desc}</div>
                  <div className="text-xs font-light text-gray-500 mb-2">{step.detail}</div>
                  <div className="text-xs text-gray-400">{step.source}</div>
                </div>
                {i < 3 && (
                  <div className="absolute top-1/2 -right-3 text-gray-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 p-8 rounded-lg">
          <div className="text-sm font-normal mb-3">Human oversight is built in</div>
          <div className="text-sm font-light leading-relaxed">
            Agentic AI handles routine decisions independently, but critical actions—like large refunds, contract approvals, or security responses—require human approval. You set the rules: What can AI do autonomously? What needs your sign-off? The system learns your preferences and escalates appropriately.
          </div>
        </div>
      </div>
    </section>
  );
}