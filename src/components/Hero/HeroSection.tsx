import React, { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { BrowserMockup } from './BrowserMockup';
import { ArrowDown, Sparkles, Code, Terminal, Layers } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation sequence on load
      const tl = gsap.timeline();

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          mockupRef.current,
          { opacity: 0.2, scale: 0.75, y: 80, rotateX: 15 },
          { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        );

      // ScrollTrigger for assembly and morphing on scroll
      if (containerRef.current && mockupRef.current) {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
          .to(heroContentRef.current, {
            opacity: 0,
            y: -60,
            scale: 0.95,
            ease: 'none',
          })
          .to(
            mockupRef.current,
            {
              scale: 1.08,
              y: -80,
              boxShadow: '0 30px 90px rgba(99, 102, 241, 0.25)',
              ease: 'none',
            },
            '<'
          )
          .to(scrollIndicatorRef.current, { opacity: 0, ease: 'none' }, '<');
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-24 pb-12 px-4 md:px-8 bg-[#08090B] overflow-hidden selection:bg-indigo-500/30"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header Content */}
      <div
        ref={heroContentRef}
        className="text-center max-w-4xl mx-auto z-10 flex flex-col items-center space-y-6 pt-4"
      >
        {/* Status Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-mono text-indigo-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>AVAILABLE FOR UI ARCHITECTURE & REACT ROLES</span>
        </div>

        {/* Large Name & Title */}
        <div className="space-y-2">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans uppercase"
          >
            ANKUR VERMA
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>UI / REACT ENGINEER</span>
            <Terminal className="w-4 h-4 text-indigo-400" />
          </div>
        </div>

        {/* Primary Statement */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          "I build digital experiences that feel as good as they look."
        </p>

        {/* Decorative Floating Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-zinc-400">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" /> Micro-Interactions
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-indigo-400" /> Component Systems
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
            60 FPS Animations
          </span>
        </div>
      </div>

      {/* Morphing Browser UI Assembly Container */}
      <div
        ref={mockupRef}
        className="w-full z-20 my-auto transform-gpu transition-all duration-300"
      >
        <BrowserMockup />
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="z-10 flex flex-col items-center gap-2 text-xs font-mono text-zinc-400 tracking-widest pt-4"
      >
        <span className="animate-bounce flex items-center gap-1">
          SCROLL TO EXPLORE <ArrowDown className="w-3 h-3 text-indigo-400" />
        </span>
      </div>
    </section>
  );
};
