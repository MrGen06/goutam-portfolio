// ============================================================
// sections/About.tsx  —  About & Technical Background
// ============================================================
//
// Layout:
//   Desktop (lg+): Balanced two-column layout
//     • Left (7 cols) : Natural rewritten prose + Quick Facts
//     • Right (5 cols): Mathematics & Computing Visual Element
//   Tablet / Mobile: Graceful vertical stack, preventing overflow
//
// All factual statements strictly aligned with resume:
//   • B.Tech Mathematics & Computing at NIT Kurukshetra
//   • CGPA: 9.08 through 5th semester
//   • Focus: AI/ML, Generative AI, NLP, GraphRAG, Backend
//   • Practical ML/LLM-powered systems
//   • 1750+ LeetCode rating
// ============================================================

import { personalInfo } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui';
import { QuickFacts } from '@/components/QuickFacts';
import { AboutVisual } from '@/components/AboutVisual';

export default function About() {
  const { aboutParagraphs, quickFacts } = personalInfo;

  return (
    <Section id="about" aria-label="About Me">
      <SectionHeading
        eyebrow="Background"
        title="About Me"
        subtitle="Bridging mathematical rigor and software engineering to develop practical, high-impact AI systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ── Left Column: Natural Portfolio Prose & Quick Facts ── */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Compact Quick Facts Highlights */}
          <div className="pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3.5">
              Academic & Problem-Solving Highlights
            </h3>
            <QuickFacts facts={quickFacts} />
          </div>
        </div>

        {/* ── Right Column: Mathematics & Computing Technical Visual ── */}
        <div className="lg:col-span-5 w-full">
          <AboutVisual />
        </div>
      </div>
    </Section>
  );
}
