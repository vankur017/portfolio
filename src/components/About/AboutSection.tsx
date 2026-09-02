import React, { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { Sparkles, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const engineeringPillars = [
    'UI Engineering & Architecture',
    'React & Component-Driven Systems',
    'Responsive & Fluid Interfaces',
    'User Experience Micro-Interactions',
    'State Resilience & TypeScript Safety',
    'Production Quality Delivery',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      if (gridRef.current?.children) {
        gsap.fromTo(
          Array.from(gridRef.current.children),
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-24 px-4 md:px-8 bg-[#06070B] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> ABOUT MY APPROACH
        </div>

        <h2 ref={textRef} className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-sans tracking-tight">
          "I'm a UI-focused software engineer who enjoys turning complex requirements into intuitive, scalable interfaces."
        </h2>

        {/* Pillars Grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 font-mono text-xs">
          {engineeringPillars.map((pillar) => (
            <div
              key={pillar}
              className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-zinc-300 flex items-center justify-center gap-2 hover:border-indigo-500/30 transition-colors text-center"
            >
              <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>{pillar}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
