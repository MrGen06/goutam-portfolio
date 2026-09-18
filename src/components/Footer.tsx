// ============================================================
// components/Footer.tsx
// ============================================================

import { personalInfo } from '@/data/portfolio';
import { Container } from '@/components/ui';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/[0.06] py-8"
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          &copy; {year}{' '}
          <span className="text-slate-400">{personalInfo.name}</span>.
          All rights reserved.
        </p>
        <p className="text-xs text-slate-600 font-mono">
          React · TypeScript · Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}
