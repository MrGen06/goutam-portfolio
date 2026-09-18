// ============================================================
// sections/Skills.tsx  —  Technical Skills & Competencies
// ============================================================
//
// Layout:
//   Desktop (lg+): Balanced responsive grid
//     • Row 1: AI & ML Core — Machine Learning (2 cols) + Generative AI (1 col)
//     • Row 2: Backend & Systems — Programming, Databases, Frameworks & APIs (3 cols)
//     • Row 3: Deployment & Tooling — Cloud & Deployment + Developer Tools (2 cols)
//   Tablet (sm+): Balanced 2-column grid
//   Mobile: Clean 1-column stack, zero horizontal overflow
//
// Rules followed:
//   • Pure data from portfolio.ts — zero duplicate data definitions
//   • Categorized visually with small icons and clean tags
//   • Subtle hover effects
//   • NO arbitrary percentage numbers or proficiency bars
//   • NO colorful skill bars
// ============================================================

import { skillCategories } from '@/data/portfolio';
import { Section, SectionHeading } from '@/components/ui';
import { SkillCategoryCard } from '@/components/SkillCategoryCard';

export default function Skills() {
  const mlCategory = skillCategories.find(c => c.id === 'ml-dl');
  const genAiCategory = skillCategories.find(c => c.id === 'gen-ai');
  const progCategory = skillCategories.find(c => c.id === 'programming');
  const dbCategory = skillCategories.find(c => c.id === 'databases');
  const fwCategory = skillCategories.find(c => c.id === 'frameworks');
  const cloudCategory = skillCategories.find(c => c.id === 'cloud');
  const toolsCategory = skillCategories.find(c => c.id === 'tools');

  return (
    <Section id="skills" aria-label="Skills and Technologies">
      <SectionHeading
        eyebrow="Technical Expertise"
        title="Skills & Technologies"
        subtitle="Core proficiencies across machine learning, generative AI, backend systems, and developer tooling."
      />

      <div className="space-y-5">
        {/* ── Tier 1: Machine Learning & Generative AI ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mlCategory && (
            <SkillCategoryCard
              category={mlCategory}
              className="sm:col-span-2 lg:col-span-2"
            />
          )}
          {genAiCategory && (
            <SkillCategoryCard
              category={genAiCategory}
              className="sm:col-span-2 lg:col-span-1"
            />
          )}
        </div>

        {/* ── Tier 2: Programming, Databases, Frameworks & APIs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {progCategory && <SkillCategoryCard category={progCategory} />}
          {dbCategory && <SkillCategoryCard category={dbCategory} />}
          {fwCategory && (
            <SkillCategoryCard
              category={fwCategory}
              className="sm:col-span-2 lg:col-span-1"
            />
          )}
        </div>

        {/* ── Tier 3: Cloud & Deployment + Developer Tools ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cloudCategory && <SkillCategoryCard category={cloudCategory} />}
          {toolsCategory && <SkillCategoryCard category={toolsCategory} />}
        </div>
      </div>
    </Section>
  );
}
