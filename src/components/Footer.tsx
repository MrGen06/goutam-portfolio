// ============================================================
// components/Footer.tsx
// ============================================================
// Minimal professional footer.
//
// Features:
//  • Name & role: Goutam Khandelwal · AI & Backend Developer
//  • Direct Email mailto link
//  • Dynamic copyright year calculation
//  • Conditional GitHub and LinkedIn links
//  • Accessible semantics and high-contrast styling
// ============================================================

import { Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Container, GithubIcon, LinkedinIcon } from '@/components/ui';

export default function Footer() {
  const year = new Date().getFullYear();
  const { name, role, contact } = personalInfo;

  const github = contact.social.find(s => s.icon === 'github');
  const linkedin = contact.social.find(s => s.icon === 'linkedin');

  const hasGithub = Boolean(github?.url && github.url.trim() !== '');
  const hasLinkedin = Boolean(linkedin?.url && linkedin.url.trim() !== '');

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/[0.08] bg-surface-950/80 py-10 sm:py-12"
    >
      <Container className="flex flex-col gap-6 sm:gap-8">
        {/* Upper Row: Identity & Quick Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-base font-bold text-slate-100 tracking-tight">
              {name}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {role}
            </p>
          </div>

          {/* Action & Social Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs font-medium text-slate-400">
            {/* Email link */}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Send email to ${contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-brand-300 transition-colors"
              >
                <Mail size={14} className="text-brand-400" aria-hidden="true" />
                <span>Email</span>
              </a>
            )}

            {/* GitHub link if available */}
            {hasGithub && (
              <a
                href={github!.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-slate-500" />
              </a>
            )}

            {/* LinkedIn link if available */}
            {hasLinkedin && (
              <a
                href={linkedin!.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="text-slate-500" />
              </a>
            )}
          </div>
        </div>

        {/* Lower Row: Dynamic Copyright Notice */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono text-center sm:text-left">
          <p>
            &copy; {year} {name}. All rights reserved.
          </p>
          <p className="text-slate-600">
            Mathematics &amp; Computing · NIT Kurukshetra
          </p>
        </div>
      </Container>
    </footer>
  );
}
