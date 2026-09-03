import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ankurverma.dev@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-4 md:px-8 bg-[#050609] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 text-center relative z-10">
        {/* Large Typography Header */}
        <div className="space-y-4">
          <span className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
            START A CONVERSATION
          </span>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tight leading-none font-sans">
            LET'S BUILD <br />
            <span className="text-gradient bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">
              SOMETHING GREAT.
            </span>
          </h2>
        </div>

        {/* Email & Copy Button Box */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href={`mailto:${email}`}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-sm font-semibold transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Send An Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 font-mono text-sm transition-all flex items-center justify-center gap-2 backdrop-blur active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-6 pt-8 font-mono text-xs text-zinc-400 border-t border-white/5">
          <a
            href="https://github.com/vankur017"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:text-white transition-all group"
          >
            <Github className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
            <span>GitHub (vankur017)</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
          </a>

          <a
            href="https://www.linkedin.com/in/ankur-verma-6b80b416a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:text-white transition-all group"
          >
            <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
};
