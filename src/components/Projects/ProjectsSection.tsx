import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { PROJECTS_DATA } from '../../data/projectsData';
import { PortfolioLensDemo } from './PortfolioLensDemo';
import { BiteBuddyDemo } from './BiteBuddyDemo';
import { JobPortalDemo } from './JobPortalDemo';
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expandedDemoId, setExpandedDemoId] = useState<string>('portfoliolens');

  const getDemoComponent = (id: string) => {
    switch (id) {
      case 'portfoliolens':
        return <PortfolioLensDemo />;
      case 'bite-buddy':
        return <BiteBuddyDemo />;
      case 'job-portal':
        return <JobPortalDemo />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current?.children) {
        const cards = Array.from(cardsRef.current.children);
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="py-24 px-4 md:px-8 bg-[#07080C] relative">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
            ENGINEERED PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans uppercase">
            SELECTED WORK
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto font-light">
            Interactive web applications built with performance, responsive layout precision, and atomic design system methodology.
          </p>
        </div>

        {/* Viewport Spanning Projects Stack */}
        <div ref={cardsRef} className="space-y-24">
          {PROJECTS_DATA.map((project, index) => {
            const isDemoExpanded = expandedDemoId === project.id;
            return (
              <div
                key={project.id}
                className="p-6 md:p-10 rounded-3xl bg-[#0C0E16]/90 border border-white/10 shadow-2xl space-y-8 backdrop-blur-xl hover:border-indigo-500/30 transition-all group"
              >
                {/* Project Top Meta Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                      <span>PROJECT 0{index + 1}</span>
                      <span>•</span>
                      <span className="text-zinc-400">{project.category}</span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-extrabold text-white font-sans group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Explicit Direct URL Subtitle */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 flex items-center gap-1.5"
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>{project.liveUrl}</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-200 underline underline-offset-4 flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{project.githubUrl.replace('https://github.com/', 'github/')}</span>
                      </a>
                    </div>

                    <p className="text-sm text-zinc-300 max-w-2xl font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                      {/* External Live Demo Link */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Live App ↗</span>
                      </a>

                      {/* External GitHub Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 backdrop-blur active:scale-95"
                      >
                        <Github className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Source Code ↗</span>
                      </a>
                    </div>

                    {/* Interactive Sandbox Toggle */}
                    <button
                      onClick={() => setExpandedDemoId(isDemoExpanded ? '' : project.id)}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/5 border border-white/5 text-indigo-300 text-xs font-mono transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{isDemoExpanded ? 'Hide Live Sandbox' : 'Try Live Sandbox'}</span>
                      {isDemoExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Embedded Interactive Sandbox UI */}
                {isDemoExpanded && (
                  <div className="transform-gpu transition-all animate-fadeIn pt-2">
                    <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>INTERACTIVE SANDBOX INSTANCE (TRY CLICKING CONTROLS BELOW)</span>
                    </div>
                    {getDemoComponent(project.id)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
