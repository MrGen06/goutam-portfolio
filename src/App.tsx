// ============================================================
// App.tsx  —  Root application shell
// ============================================================

import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Education from '@/sections/Education';
import Positions from '@/sections/Positions';
import Achievements from '@/sections/Achievements';
import Contact from '@/sections/Contact';
import { BackToTop } from '@/components/BackToTop';

export default function App() {
  const [, toggleTheme] = useTheme();

  return (
    <div className="relative min-h-screen">
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:bg-brand-500 focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar onThemeToggle={toggleTheme} />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Positions />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
