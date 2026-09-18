// ============================================================
// components/ui/Section.tsx
// ============================================================
// Page section wrapper. Provides consistent vertical rhythm
// and wraps content in a Container automatically.
// ============================================================

import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  'aria-label'?: string;
  children: React.ReactNode;
  className?: string;
  /** Skip the automatic Container wrapper (use when you need full-bleed) */
  bare?: boolean;
}

export function Section({
  id,
  children,
  className,
  'aria-label': ariaLabel,
  bare = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('py-20 sm:py-24 lg:py-28', className)}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
