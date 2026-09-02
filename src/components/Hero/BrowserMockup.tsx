import React, { useState } from 'react';
import { Play, Code2, Layers, CheckCircle2, Cpu, Activity, LayoutGrid, Sliders } from 'lucide-react';

interface BrowserMockupProps {
  progress?: number;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [counter, setCounter] = useState(1280);
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl border border-indigo-500/20 bg-[#0C0E14]/90 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(99,102,241,0.15)] overflow-hidden">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#08090D]/80">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40"></div>
          <span className="ml-3 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ankurverma.dev/app/dashboard.tsx
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'preview'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Play className="w-3 h-3" /> Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3 h-3" /> Code
          </button>
        </div>
      </div>

      {/* Main Browser Content Area */}
      <div className="p-5 md:p-6 min-h-[380px] flex flex-col justify-between">
        {activeTab === 'preview' ? (
          <div className="space-y-6">
            {/* Dashboard Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white font-mono">Interactive Design Engine</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                    60 FPS REACT
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">Scroll-driven, component-driven UI architecture</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCounter((c) => c + 1)}
                  className="px-3 py-1.5 text-xs font-mono bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 rounded-lg border border-indigo-500/30 transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <Activity className="w-3.5 h-3.5" /> State Mutate ({counter})
                </button>
                <button
                  onClick={() => setIsLive(!isLive)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all flex items-center gap-1.5 ${
                    isLive
                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" /> {isLive ? 'Live Sync' : 'Paused'}
                </button>
              </div>
            </div>

            {/* Grid of UI widgets assembling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Widget 1: UI Component State */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Component Architecture
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                </div>
                <div className="text-2xl font-bold text-white font-mono">{counter} ops/s</div>
                <p className="text-[11px] text-zinc-400 mt-1">Zero layout shifts, memoized selectors</p>
                <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-3/4 rounded-full"></div>
                </div>
              </div>

              {/* Widget 2: Micro-Interaction Preview */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" /> Motion Parameters
                  </span>
                  <span className="text-[10px] text-cyan-300 font-mono">SPRING: 300</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-zinc-300">Physics Response</span>
                  <span className="px-2 py-0.5 text-[10px] bg-cyan-500/20 text-cyan-200 rounded font-mono">0.12s lerp</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="px-2.5 py-1 text-[11px] bg-white/10 text-white rounded-md border border-white/10 hover:bg-white/20 cursor-pointer">
                    Ease-Out
                  </span>
                  <span className="px-2.5 py-1 text-[11px] bg-indigo-500/30 text-indigo-200 rounded-md border border-indigo-500/30 cursor-pointer">
                    ScrollTrigger
                  </span>
                </div>
              </div>

              {/* Widget 3: Frontend Health */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Lighthouse score
                  </span>
                  <span className="text-xs font-mono text-emerald-300 font-bold">100/100</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>FCP (First Contentful):</span>
                    <span className="text-zinc-200">0.4s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>INP (Interaction to Paint):</span>
                    <span className="text-emerald-400">12ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Preview Bar */}
            <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-300 gap-2">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-indigo-400" />
                <span>Responsive viewports active: Desktop, Tablet, Mobile Breakpoints</span>
              </div>
              <span className="text-[11px] font-mono text-indigo-300">Ready for Interaction ↓</span>
            </div>
          </div>
        ) : (
          /* Code Tab View */
          <div className="font-mono text-xs text-zinc-300 space-y-2 bg-[#050608] p-4 rounded-lg border border-white/5 overflow-x-auto">
            <div className="text-zinc-500">// Ankur Verma - UI / React Engineer</div>
            <div>
              <span className="text-purple-400">import</span> React, {'{'} useState, useEffect {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;
            </div>
            <div>
              <span className="text-purple-400">import</span> {'{'} gsap, ScrollTrigger {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-300">'@animations/gsapSetup'</span>;
            </div>
            <br />
            <div>
              <span className="text-blue-400">export const</span> <span className="text-yellow-300">InteractiveExperience</span> = () {'=>'} {'{'}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> [isCrafted, setIsCrafted] = <span className="text-yellow-300">useState</span>(<span className="text-cyan-300">true</span>);
            </div>
            <div className="pl-4 text-zinc-400">
              {`// Scroll-driven animation sequence`}
            </div>
            <div className="pl-4">
              <span className="text-yellow-300">useEffect</span>(() {'=>'} {'{'}
            </div>
            <div className="pl-8">
              gsap.<span className="text-blue-300">to</span>(<span className="text-emerald-300">".ui-component"</span>, {'{'}
            </div>
            <div className="pl-12">
              scale: <span className="text-orange-300">1</span>, opacity: <span className="text-orange-300">1</span>, stagger: <span className="text-orange-300">0.1</span>, scrollTrigger: {'{'} scrub: <span className="text-orange-300">1</span> {'}'}
            </div>
            <div className="pl-8">{'}'});</div>
            <div className="pl-4">{'}'}, []);</div>
            <br />
            <div className="pl-4">
              <span className="text-purple-400">return</span> (
            </div>
            <div className="pl-8 text-cyan-200">
              {'<'}div className="experience-engine" initial="assembled"{'>'}
            </div>
            <div className="pl-12 text-zinc-300">
              {'<'}CraftsmanshipQuality fps={'{'}60{'}'} performance="100%" /{'>'}
            </div>
            <div className="pl-8 text-cyan-200">{'</'}div{'>'}</div>
            <div className="pl-4">);</div>
            <div>{'}'};</div>
          </div>
        )}
      </div>
    </div>
  );
};
