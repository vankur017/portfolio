import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { Layout, Layers, Cpu, Network, ShieldCheck, Eye, CheckCircle2, ChevronRight } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
}

export const PipelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const stages: Stage[] = [
    {
      id: 'design',
      name: 'DESIGN',
      subtitle: 'Figma Tokens & Wireframes',
      icon: <Layout className="w-4 h-4 text-indigo-400" />,
      description: 'Wireframing layouts, defining pixel grid rules, color palettes, and typographic hierarchies.',
    },
    {
      id: 'components',
      name: 'COMPONENTS',
      subtitle: 'React & TypeScript Struct',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      description: 'Extracting modular components, establishing clean prop interfaces and reusable primitives.',
    },
    {
      id: 'state',
      name: 'STATE',
      subtitle: 'State Management & Hooks',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      description: 'Connecting local React state, Redux Toolkit slices, and optimistic state updates.',
    },
    {
      id: 'api',
      name: 'API',
      subtitle: 'Async Hydration & Sockets',
      icon: <Network className="w-4 h-4 text-amber-400" />,
      description: 'Hydrating component models with async endpoints, error boundaries, and loading fallbacks.',
    },
    {
      id: 'validation',
      name: 'VALIDATION',
      subtitle: 'Schema & Edge Cases',
      icon: <ShieldCheck className="w-4 h-4 text-rose-400" />,
      description: 'Handling null states, invalid input inputs, and edge-case error recovery.',
    },
    {
      id: 'accessibility',
      name: 'ACCESSIBILITY',
      subtitle: 'WCAG 2.1 & ARIA Roles',
      icon: <Eye className="w-4 h-4 text-emerald-400" />,
      description: 'Enforcing semantic HTML5 markup, screen-reader labels, keyboard trap prevention, and focus indicators.',
    },
    {
      id: 'production',
      name: 'PRODUCTION',
      subtitle: '60 FPS Optimized Bundle',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      description: 'Production-ready build delivering sub-frame render times, zero CLS, and 100/100 Lighthouse score.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven pinned timeline that steps through all 7 stages on scroll
      const totalStages = stages.length;

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${totalStages * 100}%`,
          scrub: 0.5,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              totalStages - 1,
              Math.floor(progress * totalStages)
            );
            setActiveStageIndex(newIndex);
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stages.length]);

  return (
    <section ref={containerRef} id="pipeline" className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-[#08090E] relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            END-TO-END METHODOLOGY (SCROLL CONTROLLED)
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans uppercase">
            DESIGN → PRODUCTION
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
            Scroll down to watch how a raw blueprint concept progressively transforms into an enterprise production component.
          </p>
        </div>

        {/* Horizontal Timeline Step Tracker */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none font-mono text-xs">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              onClick={() => setActiveStageIndex(index)}
              className={`px-4 py-3 rounded-xl border shrink-0 text-left transition-all flex flex-col justify-between min-w-[140px] ${
                activeStageIndex === index
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/20 scale-105'
                  : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-zinc-500">0{index + 1}</span>
                {stage.icon}
              </div>
              <div className="font-bold">{stage.name}</div>
            </button>
          ))}
        </div>

        {/* The Live Interactive Transforming Target Component */}
        <div ref={cardRef} className="p-6 md:p-10 rounded-3xl bg-[#0D0F18] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Stage Explanation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-300">
              {stages[activeStageIndex].icon} STAGE 0{activeStageIndex + 1}: {stages[activeStageIndex].name}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white font-sans">
                {stages[activeStageIndex].subtitle}
              </h3>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed font-sans">
                {stages[activeStageIndex].description}
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 pt-4 border-t border-white/5">
              <span>Next phase:</span>
              <span className="text-indigo-400 font-semibold">
                {stages[(activeStageIndex + 1) % stages.length].name}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-indigo-400" />
            </div>
          </div>

          {/* Right Column: Visual Stage Morphing Component Box */}
          <div className="p-6 rounded-2xl bg-[#05060A] border border-white/10 min-h-[300px] flex flex-col justify-center transition-all duration-500 transform-gpu">
            {/* Visual stage morphing based on activeStageIndex */}
            {activeStageIndex === 0 && (
              /* DESIGN: Wireframe / Blueprint mode */
              <div className="p-6 border-2 border-dashed border-zinc-600 rounded-xl space-y-3 font-mono text-xs text-zinc-500 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-zinc-600 mx-auto"></div>
                <div className="h-3 bg-zinc-800 rounded w-2/3 mx-auto"></div>
                <div className="h-3 bg-zinc-800 rounded w-1/2 mx-auto"></div>
                <span className="text-[10px] block text-indigo-400">[FIGMA LAYOUT GRID: 12 COL]</span>
              </div>
            )}

            {activeStageIndex === 1 && (
              /* COMPONENTS: Typed React component structure */
              <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="text-cyan-400 font-bold">&lt;UserProfileCard /&gt;</div>
                <div className="text-zinc-400 pl-4 border-l border-white/10 space-y-1 text-[11px]">
                  <div>props: {'{ name: string, status: "Active" }'}</div>
                  <div>return: &lt;CardContainer /&gt;</div>
                </div>
              </div>
            )}

            {activeStageIndex === 2 && (
              /* STATE: React state hooks attached */
              <div className="p-6 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="flex justify-between items-center text-purple-300 font-bold">
                  <span>useReducer() Mutator</span>
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                </div>
                <div className="text-zinc-300 text-[11px]">state.isOnline = true</div>
                <div className="text-zinc-400 text-[10px]">Optimistic state update applied instantly</div>
              </div>
            )}

            {activeStageIndex === 3 && (
              /* API: Data response bound */
              <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Network className="w-4 h-4" /> <span>REST Payload Hydrated</span>
                </div>
                <div className="p-2 bg-black/40 rounded text-[11px] text-zinc-300">
                  {'{ id: "usr_992", name: "Ankur Verma", role: "UI Engineer" }'}
                </div>
              </div>
            )}

            {activeStageIndex === 4 && (
              /* VALIDATION: Schema validation checked */
              <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3 font-mono text-xs animate-fadeIn">
                <div className="flex items-center gap-2 text-rose-300 font-bold">
                  <ShieldCheck className="w-4 h-4" /> <span>Zod Schema Passed</span>
                </div>
                <div className="text-zinc-300 text-[11px]">✓ No missing parameters</div>
                <div className="text-zinc-400 text-[10px]">Fallback ErrorBoundary initialized</div>
              </div>
            )}

            {activeStageIndex === 5 && (
              /* ACCESSIBILITY: ARIA tags & focus ring */
              <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/40 space-y-3 font-mono text-xs ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#05060A] animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-300 font-bold">
                  <Eye className="w-4 h-4" /> <span>ARIA & Keyboard Nav Verified</span>
                </div>
                <div className="text-zinc-300 text-[11px]">aria-label="User Profile" tabIndex="0"</div>
              </div>
            )}

            {activeStageIndex === 6 && (
              /* PRODUCTION: Final polished production result! */
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 border border-indigo-500/50 shadow-2xl space-y-4 font-sans animate-fadeIn">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-base font-bold text-white">Ankur Verma</h4>
                    <p className="text-xs text-indigo-300 font-mono">UI / React Engineer</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">
                    60 FPS PRODUCTION
                  </span>
                </div>
                <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-zinc-300 border border-white/5">
                  ✓ Lighthouse Score: 100/100
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
