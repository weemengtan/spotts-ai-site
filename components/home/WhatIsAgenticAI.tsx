'use client';

import Image from 'next/image';
import { useUIStore } from '@/lib/store';

export default function WhatIsAgenticAI() {
  const { setShowContactModal } = useUIStore();

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-8" id="what">
      <div className="max-w-6xl mx-auto">
        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 sm:p-8">
              <Image
                src="/images/hero/image-retro.png"
                alt="Human and AI working together in partnership"
                width={600}
                height={400}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Story Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-sm sm:text-base font-light text-gray-700 leading-relaxed space-y-4">
              <p>
                Give any Agentic AI the right workflow and tools, and he can plan and execute at lightning speed. But here&rsquo;s the catch: drop an Agentic AI into a your critical business operation, and it&rsquo;ll quickly hit a wall. Why? Because even the smartest AI can&rsquo;t make judgment calls around risk, ethics, or strategy. Left on its own, any Agentic AI might push too far, miss a subtle trade-off, or optimize the wrong outcome.
              </p>

              <p>
                That&rsquo;s when his human partner steps in — the steady hand who sets guardrails, weighs tough choices, and keeps everything on course. Together, they become something stronger: AI delivering speed and precision, humans providing oversight and accountability.
              </p>

              <p>
                And that&rsquo;s where the magic happens — real success born from the partnership between people and AI.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Promise Section */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base sm:text-lg font-light text-gray-700 leading-relaxed mb-8 px-4 sm:px-0">
            This partnership is our promise: we don&rsquo;t just unleash AI, we pair it with the right human oversight, governance, and strategy so your critical operations run smarter, safer, and stronger. That&rsquo;s our unique edge — helping businesses avoid the common traps of AI projects and turn ambition into measurable success. 🚀 Curious how spotts.ai + <em>human buddy</em> model can transform your business?
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center px-8 py-4 rounded-full font-normal transition-all text-base hover:opacity-90"
            style={{ backgroundColor: '#06B6D4', color: 'white' }}
          >
            👋 Meet Your AI Buddy
          </button>
        </div>
      </div>
    </section>
  );
}