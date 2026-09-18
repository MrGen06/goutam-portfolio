// ============================================================
// components/ui/Container.tsx
// ============================================================
// Centered max-width wrapper with consistent horizontal padding.
// Max-width: 72rem (1152px) — comfortable reading on wide screens.
// ============================================================

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-12',
        className,
      )}
    >
      {children}
    </div>
  );
}
