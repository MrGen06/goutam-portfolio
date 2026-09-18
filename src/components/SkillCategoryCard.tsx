// ============================================================
// components/SkillCategoryCard.tsx
// ============================================================
// Visually organized card for a single skill category.
// Renders category title, small icon, and technologies as clean
// tags/chips with subtle hover states.
//
// Rules followed:
//  • No arbitrary percentages (e.g. "Python 95%")
//  • No progress bars
//  • No colorful skill bars
//  • Subtle hover effects
// ============================================================

import {
  Code2,
  Brain,
  Sparkles,
  Database,
  Server,
  Cloud,
  Wrench,
} from 'lucide-react';
import type { SkillCategory } from '@/types';
import { cn } from '@/lib/utils';

interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
}

function getCategoryIcon(id: string, iconName?: string) {
  const key = iconName || id;
  switch (key) {
    case 'code':
    case 'programming':
      return <Code2 size={18} className="text-brand-400" aria-hidden="true" />;
    case 'brain':
    case 'ml-dl':
      return <Brain size={18} className="text-brand-400" aria-hidden="true" />;
    case 'sparkles':
    case 'gen-ai':
      return <Sparkles size={18} className="text-brand-400" aria-hidden="true" />;
    case 'database':
    case 'databases':
      return <Database size={18} className="text-brand-400" aria-hidden="true" />;
    case 'server':
    case 'frameworks':
      return <Server size={18} className="text-brand-400" aria-hidden="true" />;
    case 'cloud':
      return <Cloud size={18} className="text-brand-400" aria-hidden="true" />;
    case 'wrench':
    case 'tools':
      return <Wrench size={18} className="text-brand-400" aria-hidden="true" />;
    default:
      return <Code2 size={18} className="text-brand-400" aria-hidden="true" />;
  }
}

export function SkillCategoryCard({ category, className }: SkillCategoryCardProps) {
  return (
    <div
      className={cn(
        'group flex flex-col justify-between p-5 sm:p-6 rounded-xl',
        'bg-surface-800/90 border border-white/[0.07]',
        'transition-all duration-200 ease-out',
        'hover:border-brand-500/30 hover:bg-surface-700/90 hover:-translate-y-0.5',
        className,
      )}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex items-center justify-center shrink-0 w-9 h-9 rounded-lg',
                'bg-brand-500/10 border border-brand-500/20',
                'transition-colors duration-200 group-hover:bg-brand-500/15 group-hover:border-brand-500/30',
              )}
            >
              {getCategoryIcon(category.id, category.icon)}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-100 tracking-tight">
              {category.label}
            </h3>
          </div>

          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
            {category.skills.length}
          </span>
        </div>

        {/* Clean Skill Tags/Chips */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map(skill => (
            <span
              key={skill}
              className={cn(
                'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md',
                'bg-white/[0.04] text-slate-300 border border-white/[0.08]',
                'transition-colors duration-150',
                'hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-200',
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
