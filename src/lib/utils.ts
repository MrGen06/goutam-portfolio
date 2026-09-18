// ============================================================
// lib/utils.ts  —  General-purpose utility helpers
// ============================================================

/**
 * Merges class names, filtering out falsy values.
 * A lightweight alternative to `clsx` for this project.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scrolls to an element by ID.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
