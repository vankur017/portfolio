import React, { useState } from 'react';
import { Briefcase, MapPin, Search, Filter, CheckCircle2, Building2, Send } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
}

export const JobPortalDemo: React.FC = () => {
  const [filterTag, setFilterTag] = useState('All');
  const [appliedJobId, setAppliedJobId] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior React UI Engineer',
      company: 'Vercel Ecosystem Labs',
      location: 'Remote',
      salary: '$140k - $175k',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Frontend Performance Lead',
      company: 'Fintech Velocity Core',
      location: 'New York / Hybrid',
      salary: '$160k - $190k',
      tags: ['React', 'Redux', 'WebSockets'],
    },
    {
      id: 3,
      title: 'Design System Architect',
      company: 'Stripe Product UI',
      location: 'Remote',
      salary: '$150k - $185k',
      tags: ['Design Systems', 'TypeScript', 'WCAG'],
    },
  ];

  const handleApply = (id: number) => {
    setAppliedJobId(id);
    setTimeout(() => {
      // Keep state applied
    }, 500);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090C12] border border-white/10 p-6 font-sans text-zinc-100 shadow-2xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-purple-400" />
          <h4 className="text-lg font-bold font-mono text-white">JOB PORTAL EXPERIENCE ENGINE</h4>
        </div>

        <div className="flex items-center gap-2">
          {['All', 'React', 'Remote', 'TypeScript'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-full border text-xs font-mono transition-all ${
                filterTag === tag
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 font-semibold'
                  : 'bg-white/5 text-zinc-400 border-white/5 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs Listing Grid */}
      <div className="space-y-3">
        {jobs
          .filter((job) => filterTag === 'All' || job.tags.includes(filterTag) || job.location.includes(filterTag))
          .map((job) => {
            const isApplied = appliedJobId === job.id;
            return (
              <div
                key={job.id}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-purple-500/40 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-white font-mono">{job.title}</h5>
                    <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-zinc-500" /> {job.location}</span>
                  </div>
                  <div className="flex gap-1.5 pt-1">
                    {job.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleApply(job.id)}
                  disabled={isApplied}
                  className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isApplied
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                      : 'bg-purple-600 hover:bg-purple-500 text-white shadow-md active:scale-95'
                  }`}
                >
                  {isApplied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> APPLICATION SUBMITTED
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> APPLY NOW
                    </>
                  )}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
