// ============================================================
// src/types/index.ts  —  Portfolio Type System
// ============================================================
// All shared TypeScript interfaces and types live here.
// Data files import from this module; components import both.
// ============================================================

// ── App / Navigation ────────────────────────────────────────

export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  /** anchor href, e.g. "#about" */
  href: string;
}

// ── Contact & Social ────────────────────────────────────────

/**
 * A single social/contact link.
 * icon: key used to look up the SVG icon component (e.g. "github", "linkedin")
 * url: empty string = TODO (do not render as a link until filled)
 */
export interface SocialLink {
  label: string;
  url: string;   // TODO: fill before publishing
  icon: string;
}

export interface ContactInfo {
  email: string;      // TODO: fill before publishing
  location: string;
  resumeUrl: string;  // TODO: fill before publishing
  social: SocialLink[];
}

// ── Profile ─────────────────────────────────────────────────

export interface QuickFact {
  id: string;
  label: string;
  value: string;
  detail?: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  aboutParagraphs: string[];
  quickFacts: QuickFact[];
  location: string;
  contact: ContactInfo;
}

// ── Education ───────────────────────────────────────────────

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  score: string;        // e.g. "CGPA: 9.08" or "94.2%"
  scoreLabel: string;   // e.g. "CGPA" | "Percentage"
  period: string;       // e.g. "2023 – 2027"
  location?: string;
  board?: string;       // e.g. "CBSE"
  isCurrent?: boolean;
}

// ── Skills ──────────────────────────────────────────────────

export interface SkillCategory {
  id: string;
  label: string;
  icon?: string;
  /** Ordered list of skill names within this category */
  skills: string[];
}

// ── Projects ────────────────────────────────────────────────

export interface ProjectHighlight {
  text: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  /** e.g. "Solo" or "2-member team" */
  team?: string;
  technologies: string[];
  highlights: ProjectHighlight[];
  deployment?: string;
  githubUrl: string;    // TODO: fill before publishing
  liveUrl?: string;     // TODO: fill before publishing (optional)
  imageUrl?: string;    // optional thumbnail — Phase 3
  /** Set to true to feature this project prominently */
  featured?: boolean;
}

// ── Positions of Responsibility ─────────────────────────────

export interface Position {
  id: string;
  role: string;
  organization: string;
  period: string;
  /** Optional sub-detail (e.g. event date range) */
  detail?: string;
}

// ── Achievements ────────────────────────────────────────────

export type AchievementType =
  | 'competitive'   // rankings, ratings
  | 'scholarship'   // fellowships, scholarships
  | 'academic';     // exam scores, qualifications

export interface Achievement {
  id: string;
  title: string;
  /** Supporting detail/date/context */
  description?: string;
  type: AchievementType;
  /** Year or period for display */
  year?: string;
}

// ── Courses ─────────────────────────────────────────────────

export interface CourseCategory {
  id: string;
  label: string;
  courses: string[];
}
