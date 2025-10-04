'use client';

import { useUIStore } from '@/lib/store';

export default function CTASection() {
  const { setShowContactModal } = useUIStore();
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light mb-6">Ready to explore your use case?</h2>
        <p className="text-lg font-light text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          We start with a conversation about your actual workflows. No generic demos. We prototype one use case in 2-4 weeks. If it works, we scale. If not, we pivot.
        </p>

        <div className="bg-white p-10 rounded-lg border border-gray-200 mb-8">
          <div className="text-lg font-normal mb-6">The 4-week discovery process</div>
          <div className="grid grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-sm font-normal mb-2 text-gray-600">Week 1</div>
              <div className="text-sm font-light">
                Discovery: What&rsquo;s your biggest operational bottleneck?
              </div>
            </div>
            <div>
              <div className="text-sm font-normal mb-2 text-gray-600">Week 2</div>
              <div className="text-sm font-light">
                Design: Map workflow, define oversight rules
              </div>
            </div>
            <div>
              <div className="text-sm font-normal mb-2 text-gray-600">Week 3-4</div>
              <div className="text-sm font-light">
                Build & test prototype with your real data
              </div>
            </div>
            <div>
              <div className="text-sm font-normal mb-2 text-gray-600">Decision</div>
              <div className="text-sm font-light">
                Works? Scale it. Doesn&rsquo;t? We pivot or part ways.
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowContactModal(true)}
          className="px-8 py-4 rounded-full font-normal transition-all text-base hover:opacity-90"
          style={{ backgroundColor: '#06B6D4', color: 'white' }}
        >
          Schedule Discovery Call
        </button>
        <div className="mt-6 text-sm text-gray-500">
          30 minutes. We discuss your workflows, not our features.
        </div>
      </div>
    </section>
  );
}