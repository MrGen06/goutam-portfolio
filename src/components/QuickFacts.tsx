// ============================================================
// components/QuickFacts.tsx
// ============================================================
// Compact visual highlights for the About section.
// Communicates key factual highlights from the resume without
// exaggeration or invented metrics.
// ============================================================

import { GraduationCap, Sigma, Award, Trophy } from 'lucide-react';
import type { QuickFact } from '@/types';
import { cn } from '@/lib/utils';

interface QuickFactsProps {
  facts: QuickFact[];
  className?: string;
}

function getFactIcon(iconName?: string) {
  switch (iconName) {
    case 'graduation-cap':
      return <GraduationCap size={18} className="text-brand-400" aria-hidden="true" />;
    case 'sigma':
      return <Sigma size={18} className="text-brand-400" aria-hidden="true" />;
    case 'award':
      return <Award size={18} className="text-brand-400" aria-hidden="true" />;
    case 'trophy':
      return <Trophy size={18} className="text-brand-400" aria-hidden="true" />;
    default:
      return <Award size={18} className="text-brand-400" aria-hidden="true" />;
  }
}

export function QuickFacts({ facts, className }: QuickFactsProps) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-3.5', className)}>
      {facts.map(fact => (
        <div
          key={fact.id}
          className={cn(
            'group flex items-start gap-3.5 p-3.5 rounded-xl',
            'bg-surface-800/80 border border-white/[0.07]',
            'transition-all duration-200 ease-out',
            'hover:border-brand-500/30 hover:bg-surface-700/80 hover:-translate-y-0.5',
          )}
        >
          {/* Icon Badge */}
          <div
            className={cn(
              'flex items-center justify-center shrink-0 w-10 h-10 rounded-lg',
              'bg-brand-500/10 border border-brand-500/20',
              'transition-colors duration-200 group-hover:bg-brand-500/15 group-hover:border-brand-500/30',
            )}
          >
            {getFactIcon(fact.icon)}
          </div>

          {/* Text Details */}
          <div className="min-w-0 flex-1">
            <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-0.5">
              {fact.label}
            </span>
            <span className="block text-sm sm:text-base font-semibold text-slate-100 leading-tight">
              {fact.value}
            </span>
            {fact.detail && (
              <span className="block text-[11px] text-slate-400/90 mt-1 truncate">
                {fact.detail}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
