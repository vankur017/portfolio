import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';

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

      // Check current section
      const sections = ['hero', 'projects', 'playground', 'technology', 'experience', 'about', 'contact'];
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'WORK' },
    { id: 'playground', label: 'PLAYGROUND' },
    { id: 'technology', label: 'PIPELINE' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-8 pointer-events-none">
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="px-4 py-2 rounded-full bg-[#08090D]/80 backdrop-blur-xl border border-white/10 text-white font-mono text-xs font-bold tracking-widest flex items-center gap-2 hover:border-indigo-500/50 transition-all shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>ANKUR</span>
        </button>

        {/* Desktop Navbar Menu */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#08090D]/80 backdrop-blur-xl border border-white/10 shadow-xl font-mono text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeSection === item.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full bg-[#08090D]/80 backdrop-blur-xl border border-white/10 text-zinc-300 hover:text-white shadow-xl"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-2xl bg-[#0B0D14] border border-white/15 shadow-2xl backdrop-blur-2xl pointer-events-auto space-y-4 font-mono text-sm">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-xl text-left transition-all ${
                  activeSection === item.id
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
