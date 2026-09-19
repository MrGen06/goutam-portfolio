// ============================================================
// components/BackToTop.tsx
// ============================================================
// Subtle floating back-to-top control.
//
// Features:
//  • Appears smoothly once scrolled past 400px.
//  • Smooth scroll animation to top of page.
//  • Accessible label and keyboard navigation.
//  • Dark surface styling matching global design tokens.
// ============================================================

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-6 right-6 z-40',
        'flex items-center justify-center w-10 h-10 rounded-xl',
        'bg-surface-800/90 border border-white/10 text-slate-400',
        'hover:text-white hover:border-brand-500/40 hover:bg-surface-700',
        'backdrop-blur-sm shadow-xl shadow-black/40',
        'transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-brand-400',
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none',
      )}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
