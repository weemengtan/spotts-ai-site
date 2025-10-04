'use client';

import { useUIStore } from '@/lib/store';
import { SourceLinkProps } from '@/lib/types';

export default function SourceLink({ source, url, index }: SourceLinkProps) {
  const { showSource, setShowSource } = useUIStore();

  return (
    <span className="relative inline-block">
      <button
        className="text-xs ml-1 px-1.5 py-0.5 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
        style={{ color: '#78350F' }}
        onMouseEnter={() => setShowSource(index)}
        onMouseLeave={() => setShowSource(null)}
      >
        [source]
      </button>
      {showSource === index && (
        <div className="absolute left-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg p-3 w-64 z-10 text-xs">
          <div className="font-normal mb-1">{source}</div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-words"
          >
            {url}
          </a>
        </div>
      )}
    </span>
  );
}