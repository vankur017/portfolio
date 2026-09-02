import React from 'react';
import { Code2, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-[#040507] border-t border-white/5 font-mono text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-bold">ANKUR VERMA</span>
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <span>UI / REACT ENGINEER</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <Code2 className="w-3.5 h-3.5 text-indigo-400" />
          <span>REACT • TYPESCRIPT • GSAP • LENIS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;