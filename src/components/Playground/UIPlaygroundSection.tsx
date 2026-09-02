import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../animations/gsapSetup';
import {
  Sparkles,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowUpDown,
  X
} from 'lucide-react';

interface Toast {
  id: number;
  type: 'success' | 'error' | 'info';
  message: string;
}

export const UIPlaygroundSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'buttons' | 'forms' | 'toast' | 'data' | 'skeleton'>('buttons');

  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);

  // Toast State
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Skeleton Toggle
  const [showSkeleton, setShowSkeleton] = useState(false);

  // Table Sorting
  const [sortField, setSortField] = useState<'name' | 'fps'>('fps');
  const [sortAsc, setSortAsc] = useState(false);

  const tableData = [
    { id: 1, name: 'Glassmorphic Card', component: 'CSS Backdrop', fps: 60, status: 'Active' },
    { id: 2, name: 'GSAP ScrollTrigger', component: 'Canvas / DOM', fps: 120, status: 'Active' },
    { id: 3, name: 'Framer Motion Spring', component: 'Physics Engine', fps: 60, status: 'Active' },
    { id: 4, name: 'Virtualized List', component: 'DOM Recycling', fps: 60, status: 'Active' },
  ];

  const sortedData = [...tableData].sort((a, b) => {
    if (sortField === 'fps') return sortAsc ? a.fps - b.fps : b.fps - a.fps;
    return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const newToast: Toast = { id: Date.now(), type, message };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 3000);
  };

  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score += 33;
    if (/[A-Z]/.test(password)) score += 33;
    if (/[0-9!@#$%^&*]/.test(password)) score += 34;
    return score;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="playground" className="py-24 px-4 md:px-8 bg-[#06070A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={contentRef} className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" /> LIVE REACT COMPONENT LAB
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans uppercase">
            UI PLAYGROUND
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
            Interact with live UI micro-components demonstrating frontend craftsmanship, accessibility state handling, and motion physics.
          </p>
        </div>

        {/* Playground Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 max-w-3xl mx-auto font-mono text-xs">
          {[
            { id: 'buttons', label: 'Button States & Micro' },
            { id: 'forms', label: 'Validation & Focus' },
            { id: 'toast', label: 'Modals & Toasts' },
            { id: 'data', label: 'Data Tables' },
            { id: 'skeleton', label: 'Skeletons & Loaders' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Playground Active Demo Box */}
        <div className="p-6 md:p-10 rounded-3xl bg-[#0B0D14] border border-white/10 shadow-2xl min-h-[380px] flex flex-col justify-center">
          {/* TAB 1: BUTTON STATES */}
          {activeTab === 'buttons' && (
            <div className="space-y-8">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-white font-mono">Button Micro-Interactions</h3>
                <p className="text-xs text-zinc-400">Hover, active spring scaling, dynamic focus rings, and magnetic states.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {/* Magnetic Hover Button */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center space-y-3">
                  <span className="text-[11px] font-mono text-zinc-400">Magnetic Spring</span>
                  <button className="px-4 py-2 text-xs font-mono bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
                    Hover Scale
                  </button>
                </div>

                {/* Loading State Button */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center space-y-3">
                  <span className="text-[11px] font-mono text-zinc-400">Async Spinner</span>
                  <button className="px-4 py-2 text-xs font-mono bg-cyan-600 text-white rounded-lg flex items-center gap-2 opacity-90 cursor-wait">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Fetching...
                  </button>
                </div>

                {/* Focus State Ring Button */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center space-y-3">
                  <span className="text-[11px] font-mono text-zinc-400">Accessibility Focus</span>
                  <button className="px-4 py-2 text-xs font-mono bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#0B0D14]">
                    Click For Ring
                  </button>
                </div>

                {/* Pulse Glass Button */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center space-y-3">
                  <span className="text-[11px] font-mono text-zinc-400">Glass Glow</span>
                  <button className="px-4 py-2 text-xs font-mono bg-white/10 hover:bg-white/20 border border-white/20 text-indigo-300 rounded-lg backdrop-blur">
                    Glass Accent
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FORMS & VALIDATION */}
          {activeTab === 'forms' && (
            <div className="max-w-md mx-auto w-full space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-white font-mono">Real-Time Form Validation</h3>
                <p className="text-xs text-zinc-400">Accessible ARIA attributes, live feedback & password strength meter.</p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-zinc-300 block">Work Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ankur@dxctechnology.com"
                    className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-400"
                  />
                  {email && !email.includes('@') && (
                    <span className="text-[10px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> Valid email address required
                    </span>
                  )}
                </div>

                {/* Password Input with Strength Meter */}
                <div className="space-y-1">
                  <label className="text-zinc-300 block">Security Key</label>
                  <input
                    type="password"
                    value={password}
                    onFocus={() => setPasswordFocus(true)}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full bg-black/50 border border-white/15 rounded-lg px-3 py-2 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-400"
                  />
                  {passwordFocus && (
                    <div className="pt-2 space-y-1">
                      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            getPasswordStrength() < 50
                              ? 'bg-rose-500'
                              : getPasswordStrength() < 80
                              ? 'bg-amber-500'
                              : 'bg-emerald-500'
                          }`}
                          style={{ width: `${getPasswordStrength()}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-zinc-400">
                        <span>Entropy Rating</span>
                        <span>{getPasswordStrength()}% Safe</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TOAST & MODALS */}
          {activeTab === 'toast' && (
            <div className="space-y-8">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-white font-mono">Modals, Tooltips & Toast Queue</h3>
                <p className="text-xs text-zinc-400">Trigger accessible overlay components with smooth lifecycle management.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => addToast('success', 'Optimistic UI update synced in 8ms')}
                  className="px-4 py-2 text-xs font-mono bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 rounded-lg hover:bg-emerald-600/30"
                >
                  Trigger Success Toast
                </button>
                <button
                  onClick={() => addToast('error', 'Network boundary caught 500 error')}
                  className="px-4 py-2 text-xs font-mono bg-rose-600/20 text-rose-300 border border-rose-500/40 rounded-lg hover:bg-rose-600/30"
                >
                  Trigger Error Toast
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 text-xs font-mono bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 shadow-md"
                >
                  Open Dialog Modal
                </button>
              </div>

              {/* Toast Stack Preview */}
              <div className="fixed bottom-6 right-6 z-50 space-y-2 max-w-sm">
                {toasts.map((toast) => (
                  <div
                    key={toast.id}
                    className={`p-3 rounded-xl border backdrop-blur-xl font-mono text-xs flex items-center gap-2 shadow-2xl animate-slideUp ${
                      toast.type === 'success'
                        ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-200'
                        : 'bg-rose-950/80 border-rose-500/40 text-rose-200'
                    }`}
                  >
                    {toast.type === 'success' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                    <span>{toast.message}</span>
                  </div>
                ))}
              </div>

              {/* Modal Dialog */}
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
                  <div className="p-6 rounded-2xl bg-[#0D0F17] border border-white/20 max-w-md w-full space-y-4 shadow-2xl">
                    <div className="flex justify-between items-center">
                      <h4 className="text-base font-bold text-white font-mono">Accessible Modal Dialog</h4>
                      <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 hover:text-white">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      This modal captures focus, prevents background scrolling, and closes on Escape keypress or backdrop click.
                    </p>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-3 py-1.5 text-xs font-mono bg-white/10 text-white rounded-lg hover:bg-white/20"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DATA TABLE */}
          {activeTab === 'data' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">Sortable Data Grid</h3>
                  <p className="text-xs text-zinc-400">Click column headers to toggle sort direction.</p>
                </div>

                <button
                  onClick={() => {
                    setSortField(sortField === 'fps' ? 'name' : 'fps');
                    setSortAsc(!sortAsc);
                  }}
                  className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 text-indigo-300 rounded-lg flex items-center gap-1.5 hover:bg-white/10"
                >
                  <ArrowUpDown className="w-3.5 h-3.5" /> Sort: {sortField.toUpperCase()} ({sortAsc ? 'ASC' : 'DESC'})
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left font-mono text-xs text-zinc-300">
                  <thead className="bg-white/5 text-zinc-400 border-b border-white/10">
                    <tr>
                      <th className="p-3">Component Name</th>
                      <th className="p-3">Engine Layer</th>
                      <th className="p-3">FPS Rate</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {sortedData.map((row) => (
                      <tr key={row.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3 font-semibold text-white">{row.name}</td>
                        <td className="p-3 text-zinc-400">{row.component}</td>
                        <td className="p-3 text-emerald-400">{row.fps} FPS</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: SKELETON LOADERS */}
          {activeTab === 'skeleton' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">Skeleton Loading UI</h3>
                  <p className="text-xs text-zinc-400">Prevents Layout Shifts (CLS) during async payload fetch.</p>
                </div>

                <button
                  onClick={() => setShowSkeleton(!showSkeleton)}
                  className="px-4 py-2 text-xs font-mono bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                >
                  Toggle Skeleton State ({showSkeleton ? 'SKELETON' : 'LOADED'})
                </button>
              </div>

              {showSkeleton ? (
                <div className="p-5 rounded-xl border border-white/10 space-y-4 animate-pulse">
                  <div className="h-4 bg-zinc-800 rounded w-1/3"></div>
                  <div className="h-3 bg-zinc-800/60 rounded w-full"></div>
                  <div className="h-3 bg-zinc-800/60 rounded w-2/3"></div>
                  <div className="h-8 bg-zinc-800 rounded w-1/4"></div>
                </div>
              ) : (
                <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 space-y-2">
                  <div className="text-sm font-bold text-white font-mono">Component Hydrated</div>
                  <p className="text-xs text-zinc-300 font-sans">
                    Data successfully rendered without layout jump or flicker.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
