import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { Code2, Cpu, Database, Network, MousePointerClick, Layout, ArrowDown, ChevronRight, Check } from 'lucide-react';

interface TechNode {
  id: string;
  step: string;
  title: string;
  tech: string;
  description: string;
  codeSnippet: string;
  outputPreview: React.ReactNode;
}

export const TechStackSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const pipelineSteps: TechNode[] = [
    {
      id: 'react',
      step: '01',
      title: 'React Core & Architecture',
      tech: 'React 18 / TypeScript',
      description: 'Declarative component design, strict type safety, custom hooks, and concurrent rendering patterns.',
      codeSnippet: `// Type-safe Generic Component Hook
interface ComponentProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function DataGrid<T>({ data, renderItem }: ComponentProps<T>) {
  return <div className="grid grid-cols-2 gap-4">{data.map(renderItem)}</div>;
}`,
      outputPreview: (
        <div className="p-4 bg-indigo-950/40 rounded-lg border border-indigo-500/30 text-xs font-mono">
          <div className="text-indigo-300 font-semibold mb-2">React Component Tree Mounted</div>
          <div className="pl-3 border-l-2 border-indigo-500/40 space-y-1 text-zinc-300">
            <div>└─ &lt;DashboardLayout /&gt;</div>
            <div className="pl-3">└─ &lt;StateProvider /&gt;</div>
            <div className="pl-6">└─ &lt;VirtualizedList rows={1000} /&gt;</div>
          </div>
        </div>
      ),
    },
    {
      id: 'components',
      step: '02',
      title: 'Atomic Component Architecture',
      tech: 'TypeScript / Tailwind CSS',
      description: 'Modular, reusable design tokens, headless primitives, glassmorphism UI, and utility-first styling.',
      codeSnippet: `// Design System Token Preset
const buttonVariants = cva("px-4 py-2 rounded-lg font-mono text-xs transition-all", {
  variants: {
    intent: {
      primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md",
      glass: "bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-200"
    }
  }
});`,
      outputPreview: (
        <div className="flex gap-2 items-center p-3 bg-black/40 rounded-lg border border-white/10 text-xs font-mono">
          <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white">Primary Token</button>
          <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300">Glass Variant</button>
        </div>
      ),
    },
    {
      id: 'state',
      step: '03',
      title: 'Predictable State Management',
      tech: 'Redux Toolkit / JavaScript',
      description: 'Normalized store slices, RTK Query caching, optimistic UI updates, and immutability handlers.',
      codeSnippet: `// Redux Toolkit Slice
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: { assets: [], status: 'idle' },
  reducers: {
    updateAsset: (state, action) => {
      const index = state.assets.findIndex(a => a.id === action.payload.id);
      if (index !== -1) state.assets[index] = action.payload;
    }
  }
});`,
      outputPreview: (
        <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-xs font-mono space-y-1.5">
          <div className="flex justify-between text-zinc-400">
            <span>ACTION:</span>
            <span className="text-emerald-400">portfolio/updateAsset</span>
          </div>
          <div className="flex justify-between text-zinc-300">
            <span>PAYLOAD:</span>
            <span className="text-amber-300">{'{ asset: "BTC", qty: 2.5 }'}</span>
          </div>
        </div>
      ),
    },
    {
      id: 'api',
      step: '04',
      title: 'API Integration & Resilience',
      tech: 'REST API / Halstack',
      description: 'Debounced search hooks, async data hydration, error boundaries, and schedule integrations.',
      codeSnippet: `// Async Data Hydration Hook
export const useHydratedData = (endpoint: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(endpoint).then(res => res.json()).then(setData);
  }, [endpoint]);
  return data;
};`,
      outputPreview: (
        <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <Check className="w-3.5 h-3.5" /> <span>HTTP 200 OK — 120ms Latency</span>
          </div>
          <div className="text-zinc-400 text-[11px] mt-1">Payload: 24.2 KB (gzip compressed)</div>
        </div>
      ),
    },
    {
      id: 'interaction',
      step: '05',
      title: 'Physics & Micro-Interactions',
      tech: 'GSAP / Framer Motion',
      description: 'Hardware-accelerated transforms, layout animations, scroll-driven timelines, and gesture spring physics.',
      codeSnippet: `// Motion Spring Physics Definition
const springConfig = {
  stiffness: 400,
  damping: 30,
  mass: 0.8
};
<motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={springConfig} />`,
      outputPreview: (
        <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-xs font-mono text-center">
          <div className="text-cyan-400 animate-pulse">Spring Dampening: 0.12s</div>
          <div className="text-zinc-400 text-[11px] mt-1">GPU Accelerated (will-change: transform)</div>
        </div>
      ),
    },
    {
      id: 'production',
      step: '06',
      title: 'Production UI Delivery',
      tech: 'Vite / Production Quality',
      description: 'Lighthouse 100/100 performance, responsive across all breakpoints, WCAG accessible components.',
      codeSnippet: `// Lighthouse Verified Production Output
export default function App() {
  return <AccessibleErrorBoundary><ProductionUI /></AccessibleErrorBoundary>;
}`,
      outputPreview: (
        <div className="p-3 bg-emerald-950/40 rounded-lg border border-emerald-500/30 text-xs font-mono text-emerald-300 text-center font-bold">
          ✓ SHIP READY: PRODUCTION BUILD SUCCESS
        </div>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSteps = pipelineSteps.length;

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalSteps * 80}%`,
          scrub: 0.5,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              totalSteps - 1,
              Math.floor(progress * totalSteps)
            );
            setActiveStep(newIndex);
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pipelineSteps.length]);

  return (
    <section ref={containerRef} id="technology" className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-[#08090C] relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            HOW I IMPLEMENT SOFTWARE (SCROLL CONTROLLED)
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            THE FRONTEND PIPELINE
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
            Scroll to step through the frontend pipeline connecting architectural concepts into high-performance web applications.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 font-mono">
          {pipelineSteps.map((node, idx) => (
            <button
              key={node.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/20 scale-105'
                  : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
              }`}
            >
              <div className="flex justify-between items-center text-xs mb-2">
                <span className={activeStep === idx ? 'text-indigo-400 font-bold' : 'text-zinc-500'}>
                  {node.step}
                </span>
                {activeStep === idx && <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />}
              </div>
              <div className="text-xs font-semibold truncate">{node.title.split(' ')[0]}</div>
              <div className="text-[10px] text-zinc-500 truncate mt-0.5">{node.tech.split('/')[0]}</div>
            </button>
          ))}
        </div>

        {/* Active Node Detail Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#0D0F17] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Details & Description */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
              <Code2 className="w-3.5 h-3.5" /> STAGE {pipelineSteps[activeStep].step} — {pipelineSteps[activeStep].tech}
            </div>

            <h3 className="text-2xl font-bold text-white font-sans">
              {pipelineSteps[activeStep].title}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {pipelineSteps[activeStep].description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-400 mb-2 block">EXECUTABLE OUTPUT PREVIEW</span>
              {pipelineSteps[activeStep].outputPreview}
            </div>
          </div>

          {/* Right Column: Code Snippet View */}
          <div className="rounded-xl bg-[#050608] p-4 border border-white/10 font-mono text-xs text-zinc-300 overflow-x-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] text-zinc-500">
              <span>{pipelineSteps[activeStep].id}.ts</span>
              <span className="text-indigo-400">TypeScript Validated</span>
            </div>
            <pre className="text-zinc-300 leading-relaxed">
              <code>{pipelineSteps[activeStep].codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
