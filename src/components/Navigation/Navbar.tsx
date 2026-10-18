import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'projects', label: 'Work' },
  { id: 'playground', label: 'Playground' },
  { id: 'technology', label: 'Pipeline' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = ['hero', ...NAV_ITEMS.map((n) => n.id)];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-white/10 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ───────────── Left vertical rail (desktop) ───────────── */}
      <nav className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-4">
        {['hero', ...NAV_ITEMS.map((n) => n.id)].map((id) => {
          const item = NAV_ITEMS.find((n) => n.id === id);
          const label = id === 'hero' ? 'Top' : item?.label ?? id;
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group flex items-center gap-3"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-indigo-400' : 'w-2 bg-white/25 group-hover:bg-white/60'
                }`}
              />
              <span
                className={`font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'text-indigo-200 opacity-100'
                    : 'text-zinc-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* ───────────── Top floating bar ───────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="glass-nav px-4 py-2 rounded-full text-white font-display text-sm font-bold tracking-widest flex items-center gap-2 hover:border-indigo-500/50 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.6)]" />
            <span>ANKUR</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass-nav font-mono text-xs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeSection === item.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden glass-nav p-2.5 rounded-full text-zinc-200 hover:text-white"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ───────────── Fullscreen glass overlay menu ───────────── */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 glass-strong" onClick={() => setMobileMenuOpen(false)} />

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 glass-nav p-2.5 rounded-full text-zinc-200 hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        <nav className="relative flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-display text-4xl sm:text-5xl font-bold tracking-tight transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-gradient-accent'
                  : 'text-zinc-300 hover:text-white'
              } ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
