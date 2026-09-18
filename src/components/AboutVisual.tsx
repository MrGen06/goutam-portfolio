// ============================================================
// components/AboutVisual.tsx
// ============================================================
// Subtle technical visual element reinforcing the Mathematics &
// Computing identity of Goutam Khandelwal.
//
// Design rationale:
//  • Combines authentic mathematical notation with discrete graph
//    structures and vector space representations.
//  • Pure SVG + typography — zero stock photos, zero fake stats.
//  • Dark slate theme with subtle brand-400/cyan accents.
//  • Respects prefers-reduced-motion via CSS transitions.
// ============================================================

import { Sigma, Binary, Network, Sparkles } from 'lucide-react';

export function AboutVisual() {
  return (
    <div
      className="relative rounded-2xl bg-surface-800/90 border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden backdrop-blur-sm"
      aria-label="Mathematics and Computing Technical Overview"
    >
      {/* ── Ambient gradient glow ── */}
      <div
        className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-brand-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Technical header / IDE bar ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-surface-900/60">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" aria-hidden="true" />
          <span className="ml-2 font-mono text-xs text-slate-400 font-medium">
            math_computing_core.ts
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20 text-[11px] font-mono text-brand-300">
          <Sigma size={12} aria-hidden="true" />
          <span>NIT KKR</span>
        </div>
      </div>

      {/* ── Interactive / Visual Graphic Canvas ── */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Subtle geometric SVG: Coordinate Vector Space & Discrete Graph */}
        <div className="relative rounded-xl bg-surface-950/70 border border-white/[0.06] p-4 overflow-hidden">
          <svg
            viewBox="0 0 400 180"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Subtle grid pattern */}
              <pattern
                id="math-grid"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 24 0 L 0 0 0 24"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.04)"
                  strokeWidth="0.75"
                />
              </pattern>
              {/* Radial glow for hub node */}
              <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </radialGradient>
              {/* Linear gradient for vector */}
              <linearGradient id="vector-grad" x1="60" y1="130" x2="160" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>

            {/* Background grid */}
            <rect width="400" height="180" fill="url(#math-grid)" />

            {/* ── Coordinate Axes (Left half) ── */}
            <line x1="40" y1="140" x2="180" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="140" x2="40" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="185" y="143" fill="#64748b" fontSize="9" fontFamily="monospace">x₁</text>
            <text x="37" y="24" fill="#64748b" fontSize="9" fontFamily="monospace">x₂</text>

            {/* Vector Arrow: Transformation v = A · x */}
            <line x1="40" y1="140" x2="140" y2="54" stroke="url(#vector-grad)" strokeWidth="2" />
            <polygon points="144,50 135,53 139,61" fill="#38bdf8" />
            <text x="110" y="46" fill="#a5b4fc" fontSize="10" fontFamily="monospace" fontWeight="600">v = Ax</text>

            {/* Angle arc */}
            <path d="M 70 140 A 30 30 0 0 0 65 119" stroke="#818cf8" strokeWidth="1" fill="none" strokeOpacity="0.6" />
            <text x="74" y="128" fill="#818cf8" fontSize="8" fontFamily="monospace">θ</text>

            {/* ── Discrete Graph Structure (Right half) ── */}
            {/* Hub glow */}
            <circle cx="280" cy="85" r="36" fill="url(#hub-glow)" />

            {/* Graph edges */}
            <line x1="280" y1="85" x2="230" y2="50" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" />
            <line x1="280" y1="85" x2="330" y2="45" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" />
            <line x1="280" y1="85" x2="240" y2="135" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" />
            <line x1="280" y1="85" x2="335" y2="130" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" />
            <line x1="230" y1="50" x2="330" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="330" y1="45" x2="335" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="240" y1="135" x2="335" y2="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />

            {/* Peripheral nodes */}
            <circle cx="230" cy="50" r="4" fill="#1e293b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="214" y="45" fill="#94a3b8" fontSize="8" fontFamily="monospace">v₁</text>

            <circle cx="330" cy="45" r="4" fill="#1e293b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="338" y="45" fill="#94a3b8" fontSize="8" fontFamily="monospace">v₂</text>

            <circle cx="240" cy="135" r="4" fill="#1e293b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="224" y="142" fill="#94a3b8" fontSize="8" fontFamily="monospace">v₃</text>

            <circle cx="335" cy="130" r="4" fill="#1e293b" stroke="#818cf8" strokeWidth="1.5" />
            <text x="343" y="135" fill="#94a3b8" fontSize="8" fontFamily="monospace">v₄</text>

            {/* Central hub node (GraphRAG / Knowledge representation) */}
            <circle cx="280" cy="85" r="8" fill="#4f46e5" stroke="#c7d2fe" strokeWidth="1.5" />
            <text x="277" y="88" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">G</text>
            <text x="260" y="106" fill="#818cf8" fontSize="9" fontFamily="monospace">G=(V,E)</text>
          </svg>
        </div>

        {/* ── Mathematical & Algorithmic Formulations ── */}
        <div className="space-y-2.5 font-mono text-xs">
          <div className="flex items-start justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles size={13} className="text-brand-400 shrink-0" aria-hidden="true" />
              <span className="text-slate-400">Optimization:</span>
            </div>
            <span className="text-brand-300 font-medium tracking-tight">
              min<sub>θ</sub> L(f<sub>θ</sub>(x), y) + λ‖θ‖²
            </span>
          </div>

          <div className="flex items-start justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-slate-300">
              <Network size={13} className="text-brand-400 shrink-0" aria-hidden="true" />
              <span className="text-slate-400">GraphRAG:</span>
            </div>
            <span className="text-slate-200 font-medium tracking-tight">
              sim(q, v) = cos(e<sub>q</sub>, e<sub>v</sub>) · W<sub>r</sub>
            </span>
          </div>

          <div className="flex items-start justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 text-slate-300">
              <Binary size={13} className="text-brand-400 shrink-0" aria-hidden="true" />
              <span className="text-slate-400">Probability:</span>
            </div>
            <span className="text-slate-300 font-medium tracking-tight">
              P(X|Y) = [P(Y|X)P(X)] / P(Y)
            </span>
          </div>
        </div>

        {/* ── Core Quantitative Pillars (From Coursework) ── */}
        <div className="pt-2 border-t border-white/[0.06]">
          <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 mb-2.5">
            Quantitative & Computing Foundations
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-brand-500/10 text-brand-300 border border-brand-500/20">
              Linear Algebra
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-brand-500/10 text-brand-300 border border-brand-500/20">
              Probability & Statistics
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]">
              Discrete Structures
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]">
              Optimization Techniques
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]">
              Data Structures & Algorithms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
