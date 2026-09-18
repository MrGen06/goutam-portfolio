// ============================================================
// components/ui/Card.tsx
// ============================================================
// Dark surface card with subtle border, modest radius,
// comfortable padding, and an optional hover state.
// ============================================================

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable a subtle lift + border brightening on hover */
  hover?: boolean;
  /** Render as a specific element (default: div) */
  as?: 'div' | 'article' | 'li';
}

export function Card({ children, className, hover = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        // Surface + border
        'bg-surface-700 border border-white/[0.07] rounded-xl',
        // Padding
        'p-6',
        // Transition base
        'transition-all duration-200 ease-out',
        // Hover state (opt-in)
        hover && 'hover:border-white/[0.13] hover:bg-surface-600 hover:-translate-y-px',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
