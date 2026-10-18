import React, { useEffect, useRef } from 'react';
import { gsap } from '../../animations/gsapSetup';
import { ArrowDown, ArrowUpRight, Code, Terminal, Sparkles } from 'lucide-react';

const STATS = [
  { value: '4+', label: 'Years Experience' },
  { value: 'DXC', label: 'Technology' },
  { value: '3', label: 'Featured Projects' },
  { value: 'React', label: 'TypeScript · Redux' },
];

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          wordmarkRef.current,
          { opacity: 0, y: 40, filter: 'blur(14px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1 },
          '-=0.3'
        )
        .fromTo(roleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.6')
        .fromTo(taglineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.4)' },
          '-=0.3'
        )
        .fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');

      // Gentle parallax drift on the wordmark as the hero scrolls away.
      // Keep full opacity so the name is always visible when scrolling back.
      if (containerRef.current && wordmarkRef.current) {
        gsap.to(wordmarkRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient lighting blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[460px] h-[460px] bg-cyan-500/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-lines opacity-[0.5] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Availability badge */}
        <div
          ref={badgeRef}
          className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-indigo-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          <span>AVAILABLE FOR REACT &amp; FRONTEND ROLES</span>
        </div>

        {/* Giant wordmark */}
        <h1
          ref={wordmarkRef}
          className="mt-8 font-display font-bold uppercase leading-[0.82] tracking-tight text-wordmark text-[clamp(3.2rem,15vw,12rem)]"
        >
          Ankur
          <br />
          Verma
        </h1>

        {/* Role line */}
        <div
          ref={roleRef}
          className="mt-6 flex items-center justify-center gap-3 text-sm md:text-base font-mono tracking-[0.3em] text-indigo-300 uppercase font-semibold"
        >
          <Code className="w-4 h-4 text-cyan-400" />
          <span>Software Engineer</span>
          <Terminal className="w-4 h-4 text-indigo-400" />
        </div>

        {/* Tagline in a glass panel */}
        <div
          ref={taglineRef}
          className="glass glass-hover mt-8 max-w-2xl rounded-2xl px-6 py-5"
        >
          <p className="text-base md:text-lg font-light text-zinc-200 leading-relaxed">
            I build digital experiences that feel as good as they look — crafting
            scalable, component-driven interfaces with motion, precision, and polish.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => scrollTo('projects')}
            className="group px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm font-semibold transition-all flex items-center gap-2 shadow-xl shadow-indigo-600/25 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>View Selected Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="glass glass-hover px-7 py-3.5 rounded-2xl text-zinc-100 font-mono text-sm font-medium flex items-center gap-2 active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Glass stat cards */}
        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass glass-hover rounded-2xl px-4 py-5 flex flex-col items-center gap-1"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient-accent">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-zinc-400 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs font-mono text-zinc-400 tracking-widest"
      >
        <span className="animate-bounce flex items-center gap-1">
          SCROLL TO EXPLORE <ArrowDown className="w-3 h-3 text-indigo-400" />
        </span>
      </div>
    </section>
  );
};
