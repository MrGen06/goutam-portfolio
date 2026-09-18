// ============================================================
// sections/Hero.tsx  —  Primary hero / introduction section
// ============================================================
//
// Layout:
//   Desktop (lg+) : left 55% content  ·  right 45% visual
//   Mobile        : stacked — content first, visual second
//
// Animation sequence (CSS, respects prefers-reduced-motion):
//   0  ms — eyebrow
//   90 ms — heading
//   180ms — role
//   270ms — description
//   380ms — CTA row
//   520ms — visual
//
// All content pulled from data model.
// GitHub CTA only rendered if URL is filled in portfolio data.
// ============================================================

import { ChevronDown, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Container, Button } from '@/components/ui';
import { HeroVisual } from '@/components/HeroVisual';

// Inline GitHub logo SVG — lucide-react doesn't include brand icons
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/** Returns inline style for a staggered animation delay. */
function delay(ms: number): React.CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export default function Hero() {
  const { name, role, tagline } = personalInfo;
  const github = personalInfo.contact.social.find(s => s.icon === 'github');
  const hasGithub = Boolean(github?.url);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-start lg:items-center pt-16 overflow-hidden"
    >
      <Container>
        <div
          className={[
            'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px]',
            'items-center gap-10 lg:gap-8 xl:gap-12',
            'py-20 sm:py-24 lg:py-0',
            'lg:min-h-[calc(100vh-4rem)]', // fill viewport on desktop
          ].join(' ')}
        >
          {/* ══════════════════════════════════════════════
              Left — Content
          ══════════════════════════════════════════════ */}
          <div className="flex flex-col justify-center">

            {/* ── Eyebrow status line ── */}
            <div
              className="animate-slide-up"
              style={delay(0)}
            >
              <div className="inline-flex items-center gap-2.5 mb-7">
                {/* Animated status dot */}
                <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
                </span>
                <span className="text-sm text-slate-400 font-medium tracking-wide">
                  B.Tech Mathematics &amp; Computing &middot; NIT Kurukshetra
                </span>
              </div>
            </div>

            {/* ── Primary heading (H1) ── */}
            <div
              className="animate-slide-up"
              style={delay(90)}
            >
              <h1 className="text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-slate-100 tracking-tight mb-4">
                {name}
              </h1>
            </div>

            {/* ── Role / professional headline ── */}
            <div
              className="animate-slide-up"
              style={delay(180)}
            >
              <p className="text-xl sm:text-2xl font-semibold text-brand-400 mb-6 tracking-tight">
                {role}
              </p>
            </div>

            {/* ── Supporting description ── */}
            <div
              className="animate-slide-up"
              style={delay(270)}
            >
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-9 max-w-[500px]">
                {tagline}
              </p>
            </div>

            {/* ── CTA row ── */}
            <div
              className="animate-slide-up"
              style={delay(380)}
            >
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary CTA — scroll to Projects */}
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                >
                  View Projects
                  <ArrowRight
                    size={16}
                    strokeWidth={2.2}
                    aria-hidden="true"
                    className="ml-1"
                  />
                </Button>

                {/* Secondary CTA — scroll to Contact */}
                <Button
                  href="#contact"
                  variant="secondary"
                  size="lg"
                >
                  Get in Touch
                </Button>

                {/* GitHub link — only rendered if URL is filled */}
                {hasGithub && github?.url && (
                  <Button
                    href={github.url}
                    external
                    variant="ghost"
                    size="lg"
                    className="gap-2"
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              Right — Technical visual
              Hidden on very small screens via opacity
              reduction; fully visible from sm+.
          ══════════════════════════════════════════════ */}
          <div
            className="animate-fade-in opacity-0 [animation-fill-mode:both] w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
            style={delay(520)}
            aria-hidden="true"
          >
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="group absolute bottom-7 inset-x-0 flex flex-col items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded transition-colors"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-500 group-hover:text-brand-400 transition-colors duration-200">
          Scroll
        </span>
        <ChevronDown
          size={14}
          className="text-slate-500 group-hover:text-brand-400 scroll-hint transition-colors duration-200"
          strokeWidth={2}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
