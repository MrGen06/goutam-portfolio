// ============================================================
// sections/Achievements.tsx  —  Honors & Recognition
// ============================================================
//
// Displayed achievements (exact items from resume):
//   1. NxtWave Coding Premier League — AIR 13, April 2026
//   2. LeetCode rating: 1750+
//   3. Reliance Foundation Undergraduate Scholar (2023–Present)
//   4. JEE Mains Percentile: 99.11 (2023)
//   5. Qualified JEE Advanced 2023
//
// Layout:
//   • Desktop (lg+):
//       - Tier 1 (Top Competitive & Scholarship Honors): 3-column grid
//       - Tier 2 (National Examinations): 2-column grid
//   • Tablet (md+): Balanced 2-column grid
//   • Mobile: Clean vertical stack, zero horizontal overflow
//
// Key principles:
//   • Sourced 100% from portfolio.ts — zero invented ranks or stats.
//   • Restrained, scannable visual emphasis without oversized stats.
//   • No progress bars.
// ============================================================

import { Trophy, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { achievements } from '@/data/portfolio';
import type { AchievementType } from '@/types';
import { Section, SectionHeading, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';

const typeLabels: Record<AchievementType, string> = {
  competitive: 'Competitive',
  scholarship: 'Scholarship',
  academic:    'Academic',
};

const typeVariants: Record<AchievementType, 'accent' | 'default' | 'outline'> = {
  competitive: 'accent',
  scholarship: 'default',
  academic:    'outline',
};

function getAchievementIcon(id: string, type: AchievementType) {
  if (id.includes('nxtwave') || id.includes('leetcode')) {
    return <Trophy size={18} className="text-brand-400" aria-hidden="true" />;
  }
  if (type === 'scholarship') {
    return <Award size={18} className="text-brand-400" aria-hidden="true" />;
  }
  if (id.includes('advanced')) {
    return <CheckCircle2 size={18} className="text-slate-400" aria-hidden="true" />;
  }
  return <GraduationCap size={18} className="text-slate-400" aria-hidden="true" />;
}

export default function Achievements() {
  const premierAchievements = achievements.filter(
    a => a.type === 'competitive' || a.type === 'scholarship',
  );
  const examAchievements = achievements.filter(a => a.type === 'academic');

  return (
    <Section id="achievements" aria-label="Achievements and Recognition">
      <SectionHeading
        eyebrow="Honors & Recognition"
        title="Achievements"
        subtitle="Competitive programming ranks, national scholarships, and engineering entrance examination percentiles."
      />

      <div className="space-y-5 max-w-6xl mx-auto">
        {/* ── Tier 1: Competitive & Scholarship Honors (3 Columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {premierAchievements.map(achievement => (
            <article
              key={achievement.id}
              className={cn(
                'group flex flex-col justify-between p-6 rounded-2xl',
                'bg-surface-800/85 border border-white/[0.08]',
                'transition-all duration-200 hover:border-brand-500/35 hover:bg-surface-700/90 hover:-translate-y-0.5',
              )}
              aria-label={achievement.title}
            >
              <div>
                {/* Header: Icon + Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 transition-colors group-hover:bg-brand-500/15 group-hover:border-brand-500/30"
                    aria-hidden="true"
                  >
                    {getAchievementIcon(achievement.id, achievement.type)}
                  </div>

                  <div className="flex items-center gap-2">
                    {achievement.year && (
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={11} className="text-slate-500" aria-hidden="true" />
                        <time>{achievement.year}</time>
                      </span>
                    )}
                    <Badge variant={typeVariants[achievement.type]}>
                      {typeLabels[achievement.type]}
                    </Badge>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-100 tracking-tight leading-snug">
                  {achievement.title}
                </h3>
                {achievement.description && (
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ── Tier 2: Academic & Entrance Examination Milestones (2 Columns) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {examAchievements.map(achievement => (
            <article
              key={achievement.id}
              className={cn(
                'group flex flex-col justify-between p-5 sm:p-6 rounded-2xl',
                'bg-surface-800/70 border border-white/[0.06]',
                'transition-all duration-200 hover:border-white/[0.14] hover:bg-surface-700/80 hover:-translate-y-0.5',
              )}
              aria-label={achievement.title}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className="flex items-center justify-center shrink-0 w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 mt-0.5"
                    aria-hidden="true"
                  >
                    {getAchievementIcon(achievement.id, achievement.type)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100 tracking-tight">
                      {achievement.title}
                    </h3>
                    {achievement.description ? (
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-snug">
                        {achievement.description}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-500 mt-1">
                        National Level Examination
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {achievement.year && (
                    <span className="text-xs font-mono text-slate-400">
                      {achievement.year}
                    </span>
                  )}
                  <Badge variant={typeVariants[achievement.type]}>
                    {typeLabels[achievement.type]}
                  </Badge>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
