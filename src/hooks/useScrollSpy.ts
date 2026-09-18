// ============================================================
// useScrollSpy Hook
// ============================================================
// Tracks which navigation section is currently in the viewport
// for active nav-link highlighting.
// ============================================================

import { useState, useEffect } from 'react';

/**
 * Returns the ID of the section currently in the viewport.
 * @param sectionIds  Array of element IDs to observe.
 * @param rootMargin  IntersectionObserver rootMargin string.
 */
export function useScrollSpy(
  sectionIds: string[],
  rootMargin = '-30% 0px -65% 0px',
): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin },
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
