// ============================================================
// components/ui/SectionHeading.tsx
// ============================================================
// Consistent section title treatment.
// Eyebrow → Title → Subtitle hierarchy.
// ============================================================

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Small all-caps label displayed above the title */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Text alignment — default is left */
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.12em] uppercase text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-slate-400 text-base leading-relaxed',
            align === 'left' && 'max-w-2xl',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
