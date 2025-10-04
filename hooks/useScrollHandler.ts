'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/lib/store';

export function useScrollHandler() {
  const { setScrollY } = useUIStore();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollY]);
}