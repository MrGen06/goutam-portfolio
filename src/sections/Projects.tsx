// ============================================================
// sections/Projects.tsx  —  Featured Work & Projects Section
// ============================================================
//
// Order of display:
//   1. Omniplant.AI (Featured horizontal card with GraphRAG visual)
//   2. AI Support Ticket Intelligence & Response Assistant
//   3. Image Colorizer
//
// Layout:
//   • Desktop (lg+):
//       - Omniplant.AI: Prominent horizontal feature card
//       - Supporting: Clean 2-column grid underneath
//   • Tablet (md+):
//       - Stacked featured card, 2-column grid underneath
//   • Mobile:
//       - Clean vertical stack, zero horizontal overflow
//
// Key principles:
//   • Zero duplicate data — sourced 100% from portfolio.ts
//   • Validated links — no broken anchor tags or invented URLs
//   • Semantic <article> cards with clear heading hierarchy
// ============================================================

import { projects } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui';
import { FeaturedProjectCard } from '@/components/FeaturedProjectCard';
import { ProjectCard } from '@/components/ProjectCard';

export default function Projects() {
  // Ordered project lookup
  const omniplant = projects.find(p => p.id === 'omniplant-ai');
  const ticketAssistant = projects.find(p => p.id === 'ai-support-ticket');
  const colorizer = projects.find(p => p.id === 'image-colorizer');

  // Fallback in case ID changes, maintain exact order
  const featured = omniplant || projects[0];
  const supporting = [
    ticketAssistant || projects[1],
    colorizer || projects[2],
  ].filter((p): p is NonNullable<typeof p> => Boolean(p) && p.id !== featured.id);

  return (
    <Section id="projects" aria-label="Selected Projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Projects"
        subtitle="Production-grade AI systems, GraphRAG architectures, and machine learning deployments solving practical, high-impact challenges."
      />

      <div className="space-y-8">
        {/* ── 1. Featured Project: Omniplant.AI ── */}
        {featured && <FeaturedProjectCard project={featured} />}

        {/* ── 2 & 3. Supporting Projects: AI Ticket Assistant & Image Colorizer ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {supporting.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
