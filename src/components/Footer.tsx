import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/vankur017', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ankur-verma-6b80b416a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vankur017@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#08090B] py-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-xs text-indigo-400">
              &lt;AV/&gt;
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                Ankur Verma
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                Frontend Developer • Analyst I Software Engineer
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
              >
                <link.icon size={16} />
              </a>
            ))}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-indigo-300 transition-all ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} Ankur Verma. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Engineered with React 18 & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;