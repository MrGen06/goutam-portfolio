// ============================================================
// components/ui/Badge.tsx
// ============================================================
// Compact label chip for skills, technologies, and categories.
// ============================================================

import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'accent' | 'outline';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/5 text-slate-300 border border-white/8',
  accent:  'bg-brand-500/10 text-brand-300 border border-brand-500/20',
  outline: 'bg-transparent text-slate-400 border border-white/10',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5',
        'text-xs font-medium rounded-md',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
