// ============================================================
// sections/Contact.tsx  —  Contact & Connect Section
// ============================================================
//
// Section heading:
//   "Let's Connect"
//
// Supporting copy communicates openness to:
//   • Opportunities
//   • Technical discussions
//   • Collaborations
//
// Actions:
//   1. Primary Email: Visible mailto link + Copy-to-clipboard
//   2. GitHub: From portfolio data (disabled state if empty)
//   3. LinkedIn: From portfolio data (disabled state if empty)
//
// Rules followed:
//   • Pure frontend — zero fake backend forms or pretend submits.
//   • Uses exact email from portfolio data (no modifications).
//   • Accessible labels and keyboard support.
// ============================================================

import { useState } from 'react';
import { Mail, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Section, SectionHeading, Button, GithubIcon, LinkedinIcon } from '@/components/ui';

export default function Contact() {
  const { contact } = personalInfo;
  const [copied, setCopied] = useState(false);

  const github = contact.social.find(s => s.icon === 'github');
  const linkedin = contact.social.find(s => s.icon === 'linkedin');

  const hasGithub = Boolean(github?.url && github.url.trim() !== '');
  const hasLinkedin = Boolean(linkedin?.url && linkedin.url.trim() !== '');

  const handleCopyEmail = async () => {
    if (!contact.email) return;
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is blocked
      const textArea = document.createElement('textarea');
      textArea.value = contact.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Section id="contact" aria-label="Contact">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Connect"
          subtitle="I am open to new opportunities, technical discussions on AI/ML and backend systems, and collaborative engineering projects."
          align="center"
          className="mb-8 sm:mb-10"
        />

        {/* ── Main Contact Card ── */}
        <div className="relative rounded-2xl bg-surface-800/90 border border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-black/30 backdrop-blur-sm overflow-hidden text-center">
          {/* Subtle ambient gradient glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Mail Icon Hub */}
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/25 text-brand-400 mx-auto mb-4"
            aria-hidden="true"
          >
            <Mail size={26} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Direct Email
          </p>

          {/* Email Display & Mailto Link */}
          <div className="mb-6">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Send email to ${contact.email}`}
              className="inline-block text-xl sm:text-2xl md:text-3xl font-mono font-bold text-slate-100 hover:text-brand-300 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>

          {/* Primary Action Row: Send Email + Copy Email */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Button
              href={`mailto:${contact.email}`}
              variant="primary"
              size="lg"
              className="gap-2 w-full sm:w-auto"
              aria-label={`Open email client to message ${contact.email}`}
            >
              <Mail size={18} aria-hidden="true" />
              <span>Send Email</span>
            </Button>

            <Button
              type="button"
              onClick={handleCopyEmail}
              variant="secondary"
              size="lg"
              className="gap-2 w-full sm:w-auto"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-emerald-400" aria-hidden="true" />
                  <span className="text-emerald-300 font-medium">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={18} aria-hidden="true" />
                  <span>Copy Email</span>
                </>
              )}
            </Button>
          </div>

          {/* ── Secondary Profiles & Location ── */}
          <div className="pt-6 border-t border-white/[0.07] flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {/* GitHub */}
            {hasGithub ? (
              <Button
                href={github!.url}
                external
                variant="ghost"
                size="sm"
                className="gap-1.5 text-slate-300 hover:text-white"
                aria-label="Visit Goutam Khandelwal on GitHub"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </Button>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-slate-500 cursor-not-allowed"
                aria-label="GitHub profile available upon request"
              >
                <GithubIcon size={14} className="opacity-60" />
                <span>GitHub (Available on Request)</span>
              </span>
            )}

            {/* LinkedIn */}
            {hasLinkedin ? (
              <Button
                href={linkedin!.url}
                external
                variant="ghost"
                size="sm"
                className="gap-1.5 text-slate-300 hover:text-white"
                aria-label="Visit Goutam Khandelwal on LinkedIn"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-slate-500" />
              </Button>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-slate-500 cursor-not-allowed"
                aria-label="LinkedIn profile available upon request"
              >
                <LinkedinIcon size={14} className="opacity-60" />
                <span>LinkedIn (Available on Request)</span>
              </span>
            )}

            {/* Location indicator */}
            {contact.location && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-slate-400">
                <MapPin size={13} className="text-brand-400" aria-hidden="true" />
                <span>{contact.location}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
