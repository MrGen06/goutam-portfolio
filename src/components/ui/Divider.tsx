// ============================================================
// components/ui/Divider.tsx
// ============================================================
// Subtle horizontal rule for visual section separation.
// ============================================================

import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn('border-0 border-t border-white/[0.07]', className)}
    />
  );
}
