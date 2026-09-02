import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { Sparkles, Check, ChevronRight, BarChart2, Bell, Search, Filter, ShieldCheck, ToggleRight, Layers } from 'lucide-react';

export const InterfacesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const interfacesWordRef = useRef<HTMLSpanElement>(null);
  const experiencesWordRef = useRef<HTMLSpanElement>(null);
  const widgetsContainerRef = useRef<HTMLDivElement>(null);

  const [buttonState, setButtonState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [toggleActive, setToggleActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState('React Server Components');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        },
      });

      // Animate word morphing from "INTERFACES" to "EXPERIENCES"
      tl.to(interfacesWordRef.current, {
        opacity: 0,
        y: -30,
        filter: 'blur(10px)',
        duration: 0.5,
      })
        .fromTo(
          experiencesWordRef.current,
          { opacity: 0, y: 30, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5 },
          '<'
        )
        // Reveal UI components floating around text
        .fromTo(
          widgetsContainerRef.current?.children ? Array.from(widgetsContainerRef.current.children) : [],
          { opacity: 0, scale: 0.8, y: 40 },
          { opacity: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.4)' },
          '-=0.2'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    setButtonState('loading');
    setTimeout(() => {
      setButtonState('success');
      setTimeout(() => setButtonState('idle'), 2000);
    }, 1000);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-[#07080B] overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Typography Header */}
      <div className="text-center z-10 max-w-5xl mx-auto space-y-4">
        <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
          PHILOSOPHY & EXECUTION
        </span>

        <h2
          ref={textRef}
          className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-tight uppercase font-sans"
        >
          I BUILD{' '}
          <span className="inline-block relative">
            <span
              ref={interfacesWordRef}
              className="text-gradient bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500"
            >
              INTERFACES.
            </span>
            <span
              ref={experiencesWordRef}
              className="absolute left-0 top-0 text-gradient-accent opacity-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"
            >
              EXPERIENCES.
            </span>
          </span>
        </h2>

        <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
          Real production UI engineered with state resilience, fluid physics, accessible keyboard controls, and sub-frame rendering speed.
        </p>
      </div>

      {/* Floating Production UI Components Grid */}
      <div
        ref={widgetsContainerRef}
        className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 z-20"
      >
        {/* Widget 1: Interactive Button & State Component */}
        <div className="p-5 rounded-xl bg-[#0D0F17]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-indigo-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Interactive State Trigger
            </span>
            <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              BUTTON
            </span>
          </div>

          <div className="p-4 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-300">Action Callback</span>
            <button
              onClick={handleButtonClick}
              disabled={buttonState === 'loading'}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 font-mono ${
                buttonState === 'idle'
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 active:scale-95'
                  : buttonState === 'loading'
                  ? 'bg-indigo-800 text-indigo-200 cursor-wait'
                  : 'bg-emerald-600 text-white'
              }`}
            >
              {buttonState === 'idle' && (
                <>
                  <span>Execute Sync</span> <ChevronRight className="w-3.5 h-3.5" />
                </>
              )}
              {buttonState === 'loading' && (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              )}
              {buttonState === 'success' && (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Success!</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Widget 2: Search & Filter Input Bar */}
        <div className="p-5 rounded-xl bg-[#0D0F17]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-cyan-400" /> Accessible Form Control
            </span>
            <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              FORM
            </span>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 font-mono"
            />
            <Filter className="w-3.5 h-3.5 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Widget 3: Live Component Chart */}
        <div className="p-5 rounded-xl bg-[#0D0F17]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-purple-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5 text-purple-400" /> Dynamic Data Visualization
            </span>
            <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              CHART
            </span>
          </div>

          <div className="h-16 flex items-end gap-2 bg-black/30 p-3 rounded-lg border border-white/5">
            {[40, 75, 55, 90, 65, 85, 100].map((height, i) => (
              <div key={i} className="flex-1 bg-zinc-800 rounded-t overflow-hidden relative group">
                <div
                  className="bg-gradient-to-t from-indigo-600 to-cyan-400 w-full transition-all duration-500 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Widget 4: Real-time Notification Modal Banner */}
        <div className="p-5 rounded-xl bg-[#0D0F17]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-500/30 transition-all md:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white font-mono">Modal & Toast Notification Protocol</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              NOTIFICATION
            </span>
          </div>

          <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-lg flex items-center justify-between text-xs font-mono text-emerald-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Optimistic mutation verified. Server response time: 14ms</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">DISMISS</span>
          </div>
        </div>

        {/* Widget 5: Responsive Layout Switcher Card */}
        <div className="p-5 rounded-xl bg-[#0D0F17]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-amber-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" /> Responsive Toggle
            </span>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              LAYOUT
            </span>
          </div>

          <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/5 text-xs">
            <span className="text-zinc-300 font-mono">Fluid Grid Layout</span>
            <button
              onClick={() => setToggleActive(!toggleActive)}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <ToggleRight className={`w-6 h-6 transition-transform ${toggleActive ? 'text-indigo-500' : 'text-zinc-600 rotate-180'}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
