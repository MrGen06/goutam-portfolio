// ============================================================
// sections/Contact.tsx  —  Design system applied
// Full contact form/layout in Phase 4.
// ============================================================

import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Section, SectionHeading, Card, Button } from '@/components/ui';

export default function Contact() {
  const { contact } = personalInfo;

  return (
    <Section id="contact" aria-label="Contact">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Contact"
        subtitle="Open to opportunities in software engineering, AI/ML, and backend development."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Location */}
        <Card className="flex items-center gap-3">
          <MapPin size={16} className="text-brand-400 shrink-0" aria-hidden />
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
              Location
            </p>
            <p className="text-sm text-slate-300">{contact.location}</p>
          </div>
        </Card>

        {/* Email */}
        <Card className="flex items-center gap-3">
          <Mail size={16} className="text-brand-400 shrink-0" aria-hidden />
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
              Email
            </p>
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-slate-300 hover:text-brand-400 transition-colors duration-150"
              >
                {contact.email}
              </a>
            ) : (
              <span className="text-sm text-slate-600 italic">TODO — add email</span>
            )}
          </div>
        </Card>

        {/* Social links */}
        {contact.social.map(link => (
          <Card key={link.label} className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-slate-300">{link.label}</p>
            {link.url ? (
              <Button
                href={link.url}
                external
                variant="ghost"
                size="sm"
                className="shrink-0"
              >
                <ExternalLink size={13} aria-hidden />
                Visit
              </Button>
            ) : (
              <span className="text-xs text-slate-600 italic">TODO</span>
            )}
          </Card>
        ))}

        {/* Resume */}
        <Card className="flex items-center justify-between gap-3 sm:col-span-2 lg:col-span-3">
          <div>
            <p className="text-sm font-medium text-slate-200">Resume</p>
            <p className="text-xs text-slate-500 mt-0.5">Download my full CV</p>
          </div>
          {contact.resumeUrl ? (
            <Button href={contact.resumeUrl} external size="sm">
              <ExternalLink size={13} aria-hidden />
              Download
            </Button>
          ) : (
            <span className="text-xs text-slate-600 italic">TODO — add resume URL</span>
          )}
        </Card>
      </div>
    </Section>
  );
}
