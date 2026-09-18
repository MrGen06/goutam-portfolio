// ============================================================
// components/ProjectVisual.tsx
// ============================================================
// Custom technical illustrations for each portfolio project.
//
// Design Guidelines:
//  • Pure SVG + typography — zero stock photos, zero fake screenshots.
//  • Clearly decorative and representational of the underlying
//    system architecture, algorithms, and pipelines.
//  • Project 1 (Omniplant.AI): Knowledge graph & hybrid vector retrieval.
//  • Project 2 (AI Ticket Assistant): Multi-task classification & LLM pipeline.
//  • Project 3 (Image Colorizer): Grayscale-to-color deep learning LAB split.
// ============================================================

import { Network, Brain, Palette, Layers, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectVisualProps {
  projectId: string;
  className?: string;
  isFeatured?: boolean;
}

/** ── Visual 1: Omniplant.AI GraphRAG Pipeline ── */
function OmniplantVisual({ isFeatured }: { isFeatured?: boolean }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between rounded-xl bg-surface-950/80 border border-white/[0.08] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.06] bg-surface-900/70">
        <div className="flex items-center gap-2">
          <Terminal size={13} className="text-brand-400" aria-hidden="true" />
          <span className="font-mono text-xs text-slate-300 font-medium">
            graphrag_retrieval.cypher
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
          Neo4j + BAAI/bge
        </span>
      </div>

      {/* SVG Canvas */}
      <div className={cn('relative p-4 flex items-center justify-center', isFeatured ? 'py-6 lg:py-8' : 'py-5')}>
        <svg
          viewBox="0 0 460 220"
          className="w-full h-auto max-h-56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="query-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="edge-vector" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Background Grid Accent */}
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
            <line x1="0" y1="55" x2="460" y2="55" />
            <line x1="0" y1="110" x2="460" y2="110" />
            <line x1="0" y1="165" x2="460" y2="165" />
            <line x1="115" y1="0" x2="115" y2="220" />
            <line x1="230" y1="0" x2="230" y2="220" />
            <line x1="345" y1="0" x2="345" y2="220" />
          </g>

          {/* Central Query Glow */}
          <circle cx="230" cy="110" r="50" fill="url(#query-glow)" />

          {/* Knowledge Graph Edges */}
          <line x1="230" y1="110" x2="100" y2="60" stroke="url(#edge-vector)" strokeWidth="1.5" />
          <line x1="230" y1="110" x2="360" y2="60" stroke="url(#edge-vector)" strokeWidth="1.5" />
          <line x1="230" y1="110" x2="110" y2="165" stroke="url(#edge-vector)" strokeWidth="1.5" />
          <line x1="230" y1="110" x2="350" y2="165" stroke="url(#edge-vector)" strokeWidth="1.5" />
          <line x1="100" y1="60" x2="110" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="360" y1="60" x2="350" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Subgraph Nodes */}
          {/* Node 1: Industrial Manual */}
          <g>
            <circle cx="100" cy="60" r="16" fill="#1e1b4b" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="63" textAnchor="middle" fill="#c7d2fe" fontSize="8" fontFamily="monospace" fontWeight="bold">PDF</text>
            <text x="100" y="90" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Manual P-102</text>
          </g>

          {/* Node 2: Equipment Component */}
          <g>
            <circle cx="360" cy="60" r="16" fill="#0f2b38" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="360" y="63" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontFamily="monospace" fontWeight="bold">NODE</text>
            <text x="360" y="90" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Hydraulic Valve</text>
          </g>

          {/* Node 3: Fault / Symptom */}
          <g>
            <circle cx="110" cy="165" r="16" fill="#3b1219" stroke="#fb7185" strokeWidth="1.5" />
            <text x="110" y="168" textAnchor="middle" fill="#fda4af" fontSize="8" fontFamily="monospace" fontWeight="bold">FAULT</text>
            <text x="110" y="195" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Pressure Drop</text>
          </g>

          {/* Node 4: Resolution SOP */}
          <g>
            <circle cx="350" cy="165" r="16" fill="#063529" stroke="#34d399" strokeWidth="1.5" />
            <text x="350" y="168" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace" fontWeight="bold">SOP</text>
            <text x="350" y="195" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Seal Replacement</text>
          </g>

          {/* Central Hub Node: Query Match */}
          <g>
            <circle cx="230" cy="110" r="22" fill="#312e81" stroke="#818cf8" strokeWidth="2" />
            <text x="230" y="108" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">GraphRAG</text>
            <text x="230" y="120" textAnchor="middle" fill="#a5b4fc" fontSize="7" fontFamily="monospace">Vector+Cypher</text>
          </g>

          {/* Edge labels */}
          <text x="160" y="80" fill="#64748b" fontSize="8" fontFamily="monospace">PARSES</text>
          <text x="290" y="80" fill="#64748b" fontSize="8" fontFamily="monospace">RELATION</text>
          <text x="155" y="145" fill="#64748b" fontSize="8" fontFamily="monospace">CAUSES</text>
          <text x="300" y="145" fill="#64748b" fontSize="8" fontFamily="monospace">RESOLVES</text>
        </svg>
      </div>

      {/* Footer architecture tags */}
      <div className="flex items-center justify-between px-3.5 py-2 border-t border-white/[0.06] bg-surface-900/50 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1">
          <Network size={12} className="text-brand-400" />
          <span>200+ Nodes · 500+ Edges</span>
        </span>
        <span className="text-slate-500">10+ Industrial Manuals</span>
      </div>
    </div>
  );
}

/** ── Visual 2: AI Support Ticket Assistant Triage Pipeline ── */
function TicketAssistantVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between rounded-xl bg-surface-950/80 border border-white/[0.08] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.06] bg-surface-900/70">
        <div className="flex items-center gap-2">
          <Brain size={13} className="text-brand-400" aria-hidden="true" />
          <span className="font-mono text-xs text-slate-300 font-medium">
            ticket_triage_pipeline.py
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
          DistilBERT + Azure
        </span>
      </div>

      {/* Pipeline Diagram */}
      <div className="p-4 sm:p-5 flex flex-col justify-center gap-3">
        {/* Step 1: Input Ticket */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-surface-900/80 border border-white/[0.05] text-[11px] font-mono">
          <span className="text-slate-400 truncate">Ticket #1042: SLA breach on auth microservice</span>
          <span className="text-amber-400 shrink-0 ml-2">Inbound</span>
        </div>

        {/* Step 2: DistilBERT NLP Multi-Output Triage */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
            <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-mono">Queue</span>
            <span className="block text-[11px] font-semibold text-brand-300 font-mono mt-0.5">Platform</span>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
            <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-mono">Priority</span>
            <span className="block text-[11px] font-semibold text-rose-400 font-mono mt-0.5">P1 - High</span>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-center">
            <span className="block text-[9px] uppercase tracking-wider text-slate-500 font-mono">SLA Target</span>
            <span className="block text-[11px] font-semibold text-emerald-400 font-mono mt-0.5">&lt; 2 Hours</span>
          </div>
        </div>

        {/* Step 3: LLM Auto-Draft Output */}
        <div className="p-2.5 rounded-lg bg-brand-500/[0.07] border border-brand-500/20 text-[11px] font-mono text-slate-300 flex items-center justify-between">
          <span className="truncate">LLM Draft: Root cause mitigation steps generated</span>
          <span className="text-brand-300 shrink-0 text-[10px] font-semibold">Ready</span>
        </div>
      </div>

      {/* Footer tags */}
      <div className="flex items-center justify-between px-3.5 py-2 border-t border-white/[0.06] bg-surface-900/50 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1">
          <Layers size={12} className="text-brand-400" />
          <span>Multi-Task Classification</span>
        </span>
        <span className="text-slate-500">Human-in-the-Loop</span>
      </div>
    </div>
  );
}

/** ── Visual 3: Image Colorizer LAB Transformation ── */
function ColorizerVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between rounded-xl bg-surface-950/80 border border-white/[0.08] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/[0.06] bg-surface-900/70">
        <div className="flex items-center gap-2">
          <Palette size={13} className="text-brand-400" aria-hidden="true" />
          <span className="font-mono text-xs text-slate-300 font-medium">
            caffe_dnn_colorizer.py
          </span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20">
          OpenCV DNN + Caffe
        </span>
      </div>

      {/* Split Comparison Canvas */}
      <div className="p-4 sm:p-5 flex flex-col justify-center">
        <div className="relative h-28 rounded-lg overflow-hidden border border-white/[0.08] flex">
          {/* Left: Grayscale Luminance (L) */}
          <div className="w-1/2 h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 flex flex-col justify-between p-2.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Input: L Channel
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              Grayscale 1×H×W
            </span>
          </div>

          {/* Split line indicator */}
          <div className="w-0.5 h-full bg-brand-400 shadow-[0_0_8px_#818cf8] relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-500 border border-white flex items-center justify-center text-[7px] text-white font-bold">
              ⇄
            </div>
          </div>

          {/* Right: Predicted Chrominance (ab) & Color Reconstruction */}
          <div className="w-1/2 h-full bg-gradient-to-r from-amber-600/70 via-rose-600/70 to-indigo-600/70 flex flex-col justify-between p-2.5 items-end">
            <span className="text-[10px] font-mono text-white/90 uppercase tracking-wider">
              Output: Full RGB
            </span>
            <span className="text-[10px] font-mono text-amber-200">
              Predicted ab 2×H×W
            </span>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="flex items-center justify-between px-3.5 py-2 border-t border-white/[0.06] bg-surface-900/50 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1">
          <Layers size={12} className="text-brand-400" />
          <span>LAB Color Space Reconstruct</span>
        </span>
        <span className="text-slate-500">Hugging Face Spaces</span>
      </div>
    </div>
  );
}

/** Master selector component */
export function ProjectVisual({ projectId, className, isFeatured }: ProjectVisualProps) {
  return (
    <div className={cn('w-full h-full min-h-[220px]', className)}>
      {projectId === 'omniplant-ai' && <OmniplantVisual isFeatured={isFeatured} />}
      {projectId === 'ai-support-ticket' && <TicketAssistantVisual />}
      {projectId === 'image-colorizer' && <ColorizerVisual />}
    </div>
  );
}
