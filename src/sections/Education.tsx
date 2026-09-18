// ============================================================
// sections/Education.tsx  —  Academic Background & Timeline
// ============================================================
//
// Layout:
//   • Elegant vertical timeline connecting the 3 academic milestones.
//   • B.Tech in Mathematics & Computing receives prominent visual
//     emphasis (accent border, current degree pill, larger typography).
//   • Senior Secondary and Matriculation styled as clean supporting
//     milestones.
//   • Clearly separated dates and easy-to-scan score badges.
//   • Zero progress bars or misleading percentages.
//   • Responsive: Gracefully stacks on mobile with no text collisions.
// ============================================================

import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function Education() {
  return (
    <Section id="education" aria-label="Education">
      <SectionHeading
        eyebrow="Academic Background"
        title="Education"
        subtitle="Formal academic foundations in mathematics, computing, and quantitative problem solving."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Timeline Track */}
        <div
          className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-500/50 via-white/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="space-y-6 sm:space-y-8">
          {education.map(item => {
            const isBTech = item.id === 'nit-kkr';

            return (
              <div
                key={item.id}
                className="relative pl-10 sm:pl-16 group"
              >
                {/* Timeline Dot Node */}
                <div
                  className={cn(
                    'absolute left-4 sm:left-6 -translate-x-1/2 top-6 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110',
                    isBTech
                      ? 'w-6 h-6 bg-brand-500 ring-4 ring-brand-500/20 text-white shadow-lg shadow-brand-500/30'
                      : 'w-4 h-4 bg-surface-700 border-2 border-slate-500 ring-2 ring-surface-950',
                  )}
                  aria-hidden="true"
                >
                  {isBTech && <GraduationCap size={13} className="text-white" />}
                </div>

                {/* Milestone Card */}
                <article
                  className={cn(
                    'rounded-2xl transition-all duration-200',
                    isBTech
                      ? 'p-6 sm:p-8 bg-surface-800/95 border border-brand-500/30 shadow-xl shadow-black/20 hover:border-brand-500/50 hover:bg-surface-700/90'
                      : 'p-5 sm:p-6 bg-surface-800/80 border border-white/[0.07] hover:border-white/[0.14] hover:bg-surface-700/80',
                  )}
                  aria-label={`${item.degree} at ${item.institution}`}
                >
                  {/* Top Bar: Dates & Status Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-400">
                        <Calendar size={13} className="text-slate-500" aria-hidden="true" />
                        <time>{item.period}</time>
                      </div>

                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                          Current Degree
                        </span>
                      )}
                    </div>

                    {item.board && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {item.board}
                      </span>
                    )}
                  </div>

                  {/* Institution & Degree Title */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3
                        className={cn(
                          'font-bold text-slate-100 tracking-tight leading-snug',
                          isBTech ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl',
                        )}
                      >
                        {item.degree}
                        {item.field && ` in ${item.field}`}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-slate-300 text-sm sm:text-base">
                        <Building2 size={15} className="text-brand-400 shrink-0" aria-hidden="true" />
                        <span>{item.institution}</span>
                      </div>
                    </div>

                    {/* Score / Academic Metric Pill */}
                    <div className="shrink-0 self-start sm:self-center">
                      <div
                        className={cn(
                          'inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-sm sm:text-base',
                          isBTech
                            ? 'bg-brand-500/15 border border-brand-500/30 text-brand-200 font-semibold shadow-sm'
                            : 'bg-white/[0.04] border border-white/[0.08] text-slate-200 font-medium',
                        )}
                      >
                        <Award
                          size={16}
                          className={cn('shrink-0', isBTech ? 'text-brand-400' : 'text-slate-400')}
                          aria-hidden="true"
                        />
                        <span>
                          {item.scoreLabel}: <strong>{item.score}</strong>
                          {isBTech && (
                            <span className="text-xs font-normal text-brand-300/80 ml-1.5">
                              (Till 5th Sem)
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
