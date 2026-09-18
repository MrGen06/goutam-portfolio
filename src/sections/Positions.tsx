// ============================================================
// sections/Positions.tsx  —  Positions of Responsibility
// ============================================================
//
// Leadership & Activities at NIT Kurukshetra:
//   1. PR & Social Media Head — Anant, The Mathematical Society (Aug 2024 – May 2025)
//   2. Event Head — Techspardha (2024–25, 27 Feb 2025 – 2 Mar 2025)
//
// Design principles:
//   • Pure data from portfolio.ts — zero invented descriptions or fabricated metrics.
//   • Professional compact card layout.
//   • Semantic <article> elements with clear heading hierarchy.
//   • Subtle hover effects aligned with global design tokens.
// ============================================================

import { Users, Calendar, Megaphone, Sparkles } from 'lucide-react';
import { positions } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui';

function getPositionIcon(id: string) {
  if (id.includes('anant')) {
    return <Megaphone size={18} className="text-brand-400" aria-hidden="true" />;
  }
  return <Sparkles size={18} className="text-brand-400" aria-hidden="true" />;
}

export default function Positions() {
  return (
    <Section id="positions" aria-label="Positions of Responsibility">
      <SectionHeading
        eyebrow="Leadership & Involvement"
        title="Positions of Responsibility"
        subtitle="Student leadership, technical coordination, and society management at NIT Kurukshetra."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {positions.map(position => (
          <article
            key={position.id}
            className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-800/80 border border-white/[0.07] transition-all duration-200 hover:border-brand-500/35 hover:bg-surface-700/80 hover:-translate-y-0.5"
            aria-label={`${position.role} at ${position.organization}`}
          >
            <div>
              {/* Header row: Icon + Period badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div
                  className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 transition-colors duration-200 group-hover:bg-brand-500/15 group-hover:border-brand-500/30"
                  aria-hidden="true"
                >
                  {getPositionIcon(position.id)}
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                  <Calendar size={12} className="text-slate-500" aria-hidden="true" />
                  <time>{position.period}</time>
                </div>
              </div>

              {/* Role Title & Organization */}
              <h3 className="text-xl font-bold text-slate-100 tracking-tight leading-snug">
                {position.role}
              </h3>
              <p className="text-sm sm:text-base text-brand-300 font-medium mt-1">
                {position.organization}
              </p>
            </div>

            {/* Event Details where applicable (e.g. Techspardha dates) */}
            {position.detail ? (
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-400">
                <Users size={13} className="text-slate-500" aria-hidden="true" />
                <span>Event Duration: {position.detail}</span>
              </div>
            ) : (
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-slate-500">
                <Users size={13} className="text-slate-600" aria-hidden="true" />
                <span>Executive Society Leadership</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
