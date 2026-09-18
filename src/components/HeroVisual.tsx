// ============================================================
// components/HeroVisual.tsx
// ============================================================
// Abstract knowledge-graph visualization for the hero section.
//
// Design rationale:
//   - Represents an interconnected knowledge graph — directly
//     relevant to GraphRAG, ML, and mathematical background.
//   - Purely SVG — no images, no external assets.
//   - Brand colors at low opacity: part of the design system.
//   - Central hub node with pulsing glow; restrained peripheral
//     nodes. The text remains the primary focus.
//   - A subtle float animation on the wrapper reinforces the
//     "live" technical feel without distracting the eye.
//
// Accessibility: aria-hidden + role="presentation" — purely
// decorative; conveys no information.
// ============================================================

// Node types determine visual treatment
type NodeTier = 'hub' | 'primary' | 'secondary' | 'tertiary';

interface Node {
  cx: number;
  cy: number;
  r:  number;
  tier: NodeTier;
}

interface Edge {
  x1: number; y1: number;
  x2: number; y2: number;
  active?: boolean; // renders with higher opacity
}

// ── Graph data ───────────────────────────────────────────────
// 11 nodes arranged to evoke a knowledge graph topology.
// Coordinates: viewBox 0 0 440 390.

const NODES: Node[] = [
  //   cx    cy    r   tier
  { cx:  62, cy:  90, r: 4.5, tier: 'tertiary'  }, // 0
  { cx: 196, cy:  46, r: 8,   tier: 'primary'   }, // 1
  { cx: 350, cy:  74, r: 4.5, tier: 'tertiary'  }, // 2
  { cx: 418, cy: 183, r: 6.5, tier: 'secondary' }, // 3
  { cx: 372, cy: 318, r: 4.5, tier: 'tertiary'  }, // 4
  { cx: 220, cy: 372, r: 8,   tier: 'primary'   }, // 5
  { cx:  72, cy: 318, r: 5.5, tier: 'secondary' }, // 6
  { cx:  28, cy: 192, r: 4,   tier: 'tertiary'  }, // 7
  { cx: 218, cy: 194, r: 14,  tier: 'hub'       }, // 8 — main hub
  { cx: 316, cy: 194, r: 7,   tier: 'secondary' }, // 9
  { cx: 144, cy: 166, r: 6,   tier: 'secondary' }, // 10
];

const EDGES: Edge[] = [
  // Regular edges (between peripheral nodes)
  { x1: 62,  y1: 90,  x2: 196, y2: 46  },
  { x1: 62,  y1: 90,  x2: 144, y2: 166 },
  { x1: 196, y1: 46,  x2: 350, y2: 74  },
  { x1: 350, y1: 74,  x2: 418, y2: 183 },
  { x1: 350, y1: 74,  x2: 316, y2: 194 },
  { x1: 418, y1: 183, x2: 316, y2: 194 },
  { x1: 372, y1: 318, x2: 220, y2: 372 },
  { x1: 372, y1: 318, x2: 316, y2: 194 },
  { x1: 220, y1: 372, x2:  72, y2: 318 },
  { x1:  72, y1: 318, x2:  28, y2: 192 },
  { x1:  28, y1: 192, x2: 144, y2: 166 },
  // Active edges — connected directly to hub node 8
  { x1: 196, y1: 46,  x2: 218, y2: 194, active: true },
  { x1: 144, y1: 166, x2: 218, y2: 194, active: true },
  { x1: 218, y1: 194, x2: 316, y2: 194, active: true },
  { x1: 218, y1: 194, x2: 220, y2: 372, active: true },
  { x1:  72, y1: 318, x2: 218, y2: 194, active: true },
];

// ── Node visual map ─────────────────────────────────────────
const nodeFill: Record<NodeTier, string> = {
  hub:       '#1e1b4b',
  primary:   '#1e1b4b',
  secondary: '#1a1d28',
  tertiary:  '#12141c',
};

const nodeStroke: Record<NodeTier, string> = {
  hub:       '#818cf8',
  primary:   '#818cf8',
  secondary: 'rgba(129,140,248,0.30)',
  tertiary:  'rgba(129,140,248,0.18)',
};

const nodeStrokeWidth: Record<NodeTier, number> = {
  hub:       2,
  primary:   1.5,
  secondary: 1.2,
  tertiary:  1,
};

const nodeStrokeOpacity: Record<NodeTier, number> = {
  hub:       0.8,
  primary:   0.55,
  secondary: 1,
  tertiary:  1,
};

// ── Component ───────────────────────────────────────────────

export function HeroVisual() {
  return (
    /*
     * hero-float: subtle 6-second vertical oscillation.
     * aria-hidden: decorative only.
     */
    <div className="hero-float w-full" aria-hidden="true">
      <svg
        viewBox="0 0 440 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="presentation"
      >
        <defs>
          {/* ── Grid background ── */}
          <pattern
            id="hv-grid"
            width="38"
            height="38"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 38 0 L 0 0 0 38"
              fill="none"
              stroke="rgba(255,255,255,0.022)"
              strokeWidth="1"
            />
          </pattern>

          {/* ── Glow filter: hub node ── */}
          <filter id="hv-hub-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="9" result="blur" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Glow filter: primary nodes ── */}
          <filter id="hv-node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4.5" result="blur" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Vignette: blend edges into bg ── */}
          <radialGradient id="hv-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="52%" stopColor="#07080e" stopOpacity="0" />
            <stop offset="100%" stopColor="#07080e" stopOpacity="0.85" />
          </radialGradient>
        </defs>

        {/* ── Grid ── */}
        <rect width="440" height="390" fill="url(#hv-grid)" />

        {/* ── Edges: regular ── */}
        <g
          stroke="rgba(129,140,248,0.11)"
          strokeWidth="1"
          strokeLinecap="round"
        >
          {EDGES.filter(e => !e.active).map((e, i) => (
            <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
          ))}
        </g>

        {/* ── Edges: active (connected to hub) ── */}
        <g
          stroke="rgba(129,140,248,0.24)"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {EDGES.filter(e => e.active).map((e, i) => (
            <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
          ))}
        </g>

        {/* ── Hub pulse rings (animated) ── */}
        <circle
          cx="218" cy="194" r="30"
          fill="rgba(99,102,241,0.06)"
          className="hero-pulse"
        />
        <circle
          cx="218" cy="194" r="21"
          fill="rgba(99,102,241,0.09)"
          className="hero-pulse"
          style={{ animationDelay: '0.8s' }}
        />

        {/* ── Primary node glows ── */}
        <circle cx="196" cy="46"  r="18" fill="rgba(99,102,241,0.05)" />
        <circle cx="220" cy="372" r="18" fill="rgba(99,102,241,0.05)" />

        {/* ── All nodes ── */}
        {NODES.map((n, i) => {
          const isHub     = n.tier === 'hub';
          const isPrimary = n.tier === 'primary';

          return (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={nodeFill[n.tier]}
              stroke={nodeStroke[n.tier]}
              strokeWidth={nodeStrokeWidth[n.tier]}
              strokeOpacity={nodeStrokeOpacity[n.tier]}
              filter={
                isHub     ? 'url(#hv-hub-glow)'  :
                isPrimary ? 'url(#hv-node-glow)'  :
                undefined
              }
            />
          );
        })}

        {/* ── Hub inner accent dot ── */}
        <circle cx="218" cy="194" r="4" fill="#818cf8" fillOpacity="0.65" />

        {/* ── Vignette overlay ── */}
        <rect width="440" height="390" fill="url(#hv-vignette)" />
      </svg>
    </div>
  );
}
