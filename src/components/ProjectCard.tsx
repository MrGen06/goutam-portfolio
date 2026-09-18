// ============================================================
// components/ProjectCard.tsx
// ============================================================
// Reusable standard project card for AI Support Ticket Assistant
// and Image Colorizer.
//
// Features:
//  • Top technical visual panel
//  • Semantic <article> with <h3> heading
//  • One-line description + duration + deployment metadata
//  • Readable key technical highlights
//  • Secondary technology tags
//  • Accessible action buttons (handles empty/TODO URLs cleanly)
//  • Subtle hover elevation and border transitions
// ============================================================

import {
  Calendar,
  Cloud,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import type { Project } from '@/types';
import { Button, Badge, GithubIcon } from '@/components/ui';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim() !== '');

  return (
    <article
      className="group flex flex-col justify-between rounded-2xl bg-surface-800/90 border border-white/[0.08] overflow-hidden transition-all duration-200 hover:border-brand-500/35 hover:bg-surface-700/90 hover:shadow-xl hover:shadow-black/30"
      aria-label={`Project: ${project.title}`}
    >
      <div>
        {/* ── Top Project Visual ── */}
        <div className="p-4 sm:p-5 bg-surface-900/60 border-b border-white/[0.06]">
          <ProjectVisual projectId={project.id} />
        </div>

        {/* ── Card Content ── */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={13} className="text-slate-500" aria-hidden="true" />
              <time>{project.duration}</time>
            </div>
            {project.deployment && (
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Cloud size={13} aria-hidden="true" />
                <span className="truncate">{project.deployment}</span>
              </div>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl font-bold text-slate-100 tracking-tight leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-brand-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Technical Implementation
            </h4>
            <ul className="space-y-2" aria-label="Project technical highlights">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2
                    size={14}
                    className="text-brand-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(tech => (
                <Badge key={tech} variant="default" className="text-[11px] py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Card Footer Action Links ── */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex flex-wrap items-center gap-3">
        {hasLiveUrl ? (
          <Button
            href={project.liveUrl!}
            external
            variant="primary"
            size="sm"
            className="gap-1.5"
            aria-label={`Open live demo for ${project.title}`}
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </Button>
        ) : null}

        {hasGithub ? (
          <Button
            href={project.githubUrl}
            external
            variant="secondary"
            size="sm"
            className="gap-1.5"
            aria-label={`View GitHub source code for ${project.title}`}
          >
            <GithubIcon size={14} />
            <span>Code</span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="gap-1.5 text-slate-500 border border-white/[0.08] bg-white/[0.02] cursor-not-allowed"
            aria-label={`Source repository for ${project.title} is available upon request`}
          >
            <GithubIcon size={14} />
            <span>Source on Request</span>
          </Button>
        )}
      </div>
    </article>
  );
}
