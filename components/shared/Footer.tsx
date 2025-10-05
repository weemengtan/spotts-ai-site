'use client';

import { useUIStore } from '@/lib/store';

export default function Footer() {
  const { setShowContactModal } = useUIStore();
  return (
    <footer className="py-8 sm:py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="text-lg font-light mb-3">
              spotts<span className="text-gray-400">.ai</span>
            </div>
            <div className="text-xs font-light text-gray-600">
              AI agents with human oversight
            </div>
          </div>
          <div>
            <div className="text-xs font-normal mb-3">Platform</div>
            <div className="space-y-2 text-xs font-light text-gray-600">
              <div>How It Works</div>
              <div>Use Cases</div>
              <div>Research</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-normal mb-3">Company</div>
            <div className="space-y-2 text-xs font-light text-gray-600">
              <div>About</div>
              <div>Case Studies</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-normal mb-3">Contact</div>
            <div className="space-y-2 text-xs font-light text-gray-600">
              <button
                onClick={() => setShowContactModal(true)}
                className="hover:text-gray-900 transition-colors"
              >
                support@spotts.ai
              </button>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
        <div className="text-xs font-light text-gray-400 text-center pt-8 border-t border-gray-100">
          © 2025 Spotts.ai • All metrics sourced and verifiable
        </div>
      </div>
    </footer>
  );
}