import React, { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { Building2, Calendar, Code2, Database, ShieldCheck, GitBranch } from 'lucide-react';

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
            4+ years building enterprise frontend applications at DXC Technology with React, TypeScript, and Redux Toolkit.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div ref={cardRef} className="glass-strong glass-hover p-8 md:p-10 rounded-3xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-1">
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-white text-base">DXC Technology</span>
                <span className="text-zinc-500">\u2022 Noida, India</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-sans">
                Analyst I &mdash; Software Engineer
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Jun 2022 &ndash; Present
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                REACT &bull; TYPESCRIPT &bull; MUI
              </span>
            </div>
          </div>

          {/* Key Work */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              KEY WORK AT DXC TECHNOLOGY
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass glass-hover p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300">
                  <Code2 className="w-4 h-4 text-indigo-400" /> Claims Assistant (React 19 + MUI)
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Built the frontend for an enterprise claims application integrating with ServiceNow APIs &mdash; a reusable multi-step claim form supporting both AI-assisted (prefilled) and manual claim creation, with lifecycle actions like Save Draft, Send for Review, and Discard.
                </p>
              </div>

              <div className="glass glass-hover p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                  <Database className="w-4 h-4 text-cyan-400" /> PDL Application (React + Halstack)
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Designed reusable DataGrid components supporting filtering, sorting, searching, and pagination, improving consistency and maintainability across the PDL insurance application.
                </p>
              </div>

              <div className="glass glass-hover p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-purple-300">
                  <ShieldCheck className="w-4 h-4 text-purple-400" /> Auth &amp; API Integration
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Integrated REST APIs and built a reusable authentication hook for access-token lifecycle management and automatic renewal, and contributed to the OpenAM &rarr; Keycloak authentication migration.
                </p>
              </div>

              <div className="glass glass-hover p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-300">
                  <GitBranch className="w-4 h-4 text-emerald-400" /> Agile Delivery &amp; Quality
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Collaborated with development, QA, DevOps, and business teams in Agile sprints &mdash; contributing to code reviews, Git-based releases, defect resolution, SAST remediation, and production deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
