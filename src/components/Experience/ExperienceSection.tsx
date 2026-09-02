import React, { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { Building2, Calendar, Code2, Layers, Cpu, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-24 px-4 md:px-8 bg-[#07080B] relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
            CAREER HISTORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans uppercase">
            PROFESSIONAL EXPERIENCE
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
            UI engineering experience building enterprise web applications with React & modern frontend technologies.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div ref={cardRef} className="p-8 md:p-10 rounded-3xl bg-[#0D0F18]/90 border border-white/10 shadow-2xl space-y-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-1">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-white text-base">DXC Technology</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">
                UI / React Engineer
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Full-Time Role
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                UI & REACT DEVELOPMENT
              </span>
            </div>
          </div>

          {/* Key Frontend Responsibilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              CORE UI ENGINEERING RESPONSIBILITIES
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300">
                  <Code2 className="w-4 h-4 text-indigo-400" /> React Component Architecture
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Developed modular, reusable React UI components using TypeScript, ensuring clean separation of presentation and state.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                  <Layers className="w-4 h-4 text-cyan-400" /> Responsive Interface Engineering
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Built cross-browser, responsive layouts utilizing CSS and modern design patterns to deliver consistent user experiences across devices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-300">
                  <Cpu className="w-4 h-4 text-purple-400" /> State & Data Flow Integration
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Managed application state and integrated RESTful APIs, focusing on seamless data rendering and state predictability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Frontend Quality & Craftsmanship
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Collaborated on frontend implementation workflows, debugging UI issues, and refining micro-interactions for production releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
