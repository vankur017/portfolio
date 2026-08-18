import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, FileText, ArrowUpRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vankur017', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ankur-verma-6b80b416a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vankur017@gmail.com', label: 'Email' }
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`w-full max-w-6xl pointer-events-auto transition-all duration-300 rounded-2xl px-5 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0E1117]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Developer Monogram Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-decoration-none focus:outline-none"
          aria-label="Ankur Verma Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-sm text-indigo-400 group-hover:border-indigo-400 group-hover:text-indigo-300 transition-all duration-300 shadow-glow-sm">
            &lt;AV/&gt;
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              Ankur Verma
            </span>
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase">
              Frontend Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/20 border border-indigo-500/40 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>

          <a
            href="/updateres.pdf"
            download
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-xl border border-indigo-400/30 shadow-glow-sm hover:shadow-glow-md transition-all duration-200 group"
          >
            <FileText size={13} className="text-indigo-200" />
            <span>Resume</span>
            <ArrowUpRight size={13} className="text-indigo-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-300 hover:text-white focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Slide-In Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#0E1117]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-6 shadow-2xl md:hidden z-50"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  <span className="text-xs font-mono text-zinc-500">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-4">
                <a
                  href="/updateres.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-glow-sm transition-all"
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                </a>

                <div className="flex justify-center items-center gap-4 pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;

