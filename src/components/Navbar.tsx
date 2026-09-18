// ============================================================
// components/Navbar.tsx  —  Primary navigation
// ============================================================
// Features:
//   • Fixed position with scroll-aware background opacity
//   • Desktop: logo left, nav links right with active highlighting
//   • Mobile: hamburger toggle → full-width slide-down panel
//   • Keyboard accessible (Escape to close, focus management)
//   • Scroll spy for active section detection
// ============================================================

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'education',
  'positions',
  'achievements',
  'contact',
];

interface NavbarProps {
  onThemeToggle?: () => void;
}

export default function Navbar({ onThemeToggle: _onThemeToggle }: NavbarProps) {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Escape key closes mobile menu ── */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  /* ── Lock body scroll while mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 inset-x-0 z-50',
        'transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-surface-950/85 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/20'
          : 'bg-transparent',
      )}
    >
      {/* ── Main bar ── */}
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          aria-label="Home — Goutam Khandelwal"
          onClick={closeMenu}
          className={cn(
            'flex items-baseline gap-0.5',
            'font-bold text-lg tracking-tight text-slate-100',
            'hover:text-white transition-colors duration-150',
          )}
        >
          <span>GK</span>
          <span className="text-brand-400 text-xl leading-none">.</span>
        </a>

        {/* ── Desktop navigation ── */}
        <nav aria-label="Primary navigation">
          <ul
            role="list"
            className="hidden lg:flex items-center gap-0.5"
          >
            {navItems.map(item => {
              const sectionId = item.href.replace('#', '');
              const isActive  = activeId === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'px-3 py-1.5 rounded-md text-sm font-medium',
                      'transition-colors duration-150',
                      isActive
                        ? 'text-brand-400 bg-brand-400/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(prev => !prev)}
          className={cn(
            'lg:hidden flex items-center justify-center',
            'w-9 h-9 rounded-md',
            'text-slate-400 hover:text-slate-100 hover:bg-white/5',
            'transition-colors duration-150',
          )}
        >
          {isOpen ? <X size={19} strokeWidth={2} /> : <Menu size={19} strokeWidth={2} />}
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <div
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={cn(
          'lg:hidden',
          'border-t border-white/[0.06]',
          'bg-surface-950/95 backdrop-blur-md',
          'transition-all duration-200 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        )}
      >
        <nav aria-label="Mobile primary navigation">
          <ul
            role="list"
            className="max-w-[72rem] mx-auto px-6 sm:px-8 py-4 flex flex-col gap-0.5"
          >
            {navItems.map(item => {
              const sectionId = item.href.replace('#', '');
              const isActive  = activeId === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'block px-4 py-2.5 rounded-md text-sm font-medium',
                      'transition-colors duration-150',
                      isActive
                        ? 'text-brand-400 bg-brand-400/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
