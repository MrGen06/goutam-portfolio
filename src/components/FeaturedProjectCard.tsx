// ============================================================
// components/FeaturedProjectCard.tsx
// ============================================================
// High-impact horizontal feature card for Omniplant.AI.
//
// Features:
//  • Desktop: 2-column layout (content left, technical visual right)
//  • Tablet / Mobile: Graceful vertical stack
//  • Semantic <article> with <h3> heading
//  • Metadata: Duration, Team, Production Deployment
//  • Accessible action links with no broken URLs
//  • Subtle hover elevation and border transition
// ============================================================

import {
  Sparkles,
  Calendar,
  Users,
  Cloud,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import type { Project } from '@/types';
import { Button, Badge, GithubIcon } from '@/components/ui';
import { ProjectVisual } from './ProjectVisual';

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '');

  return (
    <article
      className="group relative rounded-2xl bg-surface-800/90 border border-white/[0.08] p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:border-brand-500/40 hover:bg-surface-700/90 hover:shadow-2xl hover:shadow-black/40"
      aria-label={`Featured Project: ${project.title}`}
    >
      {/* ── Top Eyebrow & Metadata Header ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-white/[0.07]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/25 text-xs font-semibold text-brand-300">
          <Sparkles size={13} className="text-brand-400" aria-hidden="true" />
          <span>Featured System</span>
        </div>

        {/* Factual Context Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-slate-500" aria-hidden="true" />
            <time>{project.duration}</time>
          </div>
          {project.team && (
            <>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Users size={13} className="text-slate-500" aria-hidden="true" />
                <span>{project.team}</span>
              </div>
            </>
          )}
          {project.deployment && (
            <>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Cloud size={13} aria-hidden="true" />
                <span>{project.deployment}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Two-Column Body: Content + Visual ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left / Content Area (7 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-brand-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Technical Architecture
            </h4>
            <ul className="space-y-2.5" aria-label="Project technical highlights">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <CheckCircle2
                    size={16}
                    className="text-brand-400 shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {hasLiveUrl ? (
              <Button
                href={project.liveUrl!}
                external
                variant="primary"
                size="md"
                className="gap-2"
                aria-label={`Open live deployment for ${project.title}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            ) : null}

            {hasGithub ? (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                size="md"
                className="gap-2"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="md"
                disabled
                className="gap-2 text-slate-500 border border-white/[0.08] bg-white/[0.02] cursor-not-allowed"
                aria-label={`Source repository for ${project.title} is available upon request`}
              >
                <GithubIcon size={16} />
                <span>Source on Request</span>
              </Button>
            )}
          </div>
        </div>

        {/* Right / Visual Area (5 columns) */}
        <div className="lg:col-span-5 w-full h-full flex items-center justify-center">
          <ProjectVisual projectId={project.id} isFeatured />
        </div>
      </div>
    </article>
  );
}
