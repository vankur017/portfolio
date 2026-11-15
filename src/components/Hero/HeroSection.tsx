import { ArrowDown } from 'lucide-react';

const EMAIL = 'ankurverma.a739@gmail.com';

const FACTS = [
  { term: 'Currently', detail: 'Analyst I, Software Engineer at DXC Technology' },
  { term: 'Location', detail: 'Noida, India' },
  { term: 'Works with', detail: 'React, TypeScript, Redux Toolkit' },
  { term: 'Open to', detail: 'React and frontend roles' },
];

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="page pb-20 pt-16 md:pb-28 md:pt-24 lg:pt-28">
      <div className="grid-page gap-y-10">
        <p className="eyebrow col-span-12">Software Engineer · Frontend</p>

        <h1
          id="hero-title"
          className="col-span-12 -ml-[0.04em] font-display text-[clamp(3.75rem,12.5vw,10.5rem)] leading-[0.88] tracking-[-0.025em] text-ink"
        >
          Ankur Verma<span className="text-accent">.</span>
        </h1>

        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <p className="max-w-[40rem] text-[clamp(1.3rem,2.3vw,1.75rem)] leading-[1.35] tracking-[-0.01em] text-ink">
            I build React and TypeScript interfaces for enterprise insurance software: claim forms, data grids, and
            the authentication work underneath them.
          </p>
          <p className="mt-5 max-w-prose leading-relaxed text-ink-soft">
            I&rsquo;ve spent the last four years as a software engineer at DXC Technology. Outside work I build side
            projects like PortfolioLens, an investment analytics app, and Bite Buddy, a food-ordering interface.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              See selected work
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>

        <dl className="col-span-12 self-end border-t border-line text-sm md:col-span-4 md:col-start-9 lg:col-span-4 lg:col-start-9">
          {FACTS.map((fact) => (
            <div key={fact.term} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-3">
              <dt className="eyebrow pt-[3px]">{fact.term}</dt>
              <dd className="text-ink">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
