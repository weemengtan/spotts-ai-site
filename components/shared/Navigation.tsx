'use client';

import Link from 'next/link';
import { useUIStore } from '@/lib/store';

export default function Navigation() {
  const { setShowContactModal } = useUIStore();
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-light hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Go to homepage"
        >
          spotts<span className="text-gray-400">.ai</span>
        </Link>
        <div className="flex gap-6 items-center text-sm">
          <a href="#what" className="text-gray-600 hover:text-black">
            What It Does
          </a>
          <a href="#problems" className="text-gray-600 hover:text-black">
            Use Cases
          </a>
          <a href="#outcomes" className="text-gray-600 hover:text-black">
            Outcomes
          </a>
          <button
            onClick={() => setShowContactModal(true)}
            className="px-5 py-2 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: '#06B6D4', color: 'white' }}
          >
            Explore Your Use Case
          </button>
        </div>
      </div>
    </nav>
  );
}