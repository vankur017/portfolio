import { SectionHeader } from '../ui/SectionHeader';

const KEY_WORK = [
  {
    title: 'Claims Assistant',
    stack: 'React 19 · MUI',
    body: 'Built the frontend for an enterprise claims application integrating with ServiceNow APIs — a reusable multi-step claim form supporting both AI-assisted (prefilled) and manual claim creation, with lifecycle actions like Save Draft, Send for Review, and Discard.',
  },
  {
    title: 'PDL application',
    stack: 'React · Halstack',
    body: 'Designed reusable DataGrid components supporting filtering, sorting, searching, and pagination, improving consistency and maintainability across the PDL insurance application.',
  },
  {
    title: 'Authentication & API integration',
    stack: 'REST · Keycloak',
    body: 'Integrated REST APIs and built a reusable authentication hook for access-token lifecycle management and automatic renewal, and contributed to the OpenAM → Keycloak authentication migration.',
  },
  {
    title: 'Agile delivery & quality',
    stack: 'Git · SAST',
    body: 'Collaborated with development, QA, DevOps, and business teams in Agile sprints — contributing to code reviews, Git-based releases, defect resolution, SAST remediation, and production deployments.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="page py-24 md:py-32">
      <SectionHeader index="02" label="Experience" title="Four years at DXC Technology" titleId="experience-title" />

      <div className="mt-14 grid-page gap-y-8 md:mt-20">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-sm text-ink">
            <time dateTime="2022-06">Jun 2022</time> — Present
          </p>
          <p className="mt-1 text-sm text-ink-muted">Noida, India</p>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h3 className="text-2xl font-medium tracking-tight text-ink md:text-[1.75rem]">
            Analyst I — Software Engineer
          </h3>
          <p className="mt-1 text-lg text-ink-soft">DXC Technology</p>
          <p className="mt-5 max-w-prose leading-relaxed text-ink-soft">
            Building enterprise frontend applications with React, TypeScript and Redux Toolkit.
          </p>

          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {KEY_WORK.map((item, i) => (
              <li key={item.title} className="border-t border-line pt-5">
                <p className="font-mono text-xs text-ink-muted">
                  <span className="text-ink">{String(i + 1).padStart(2, '0')}</span>
                  <span aria-hidden="true"> · </span>
                  {item.stack}
                </p>
                <h4 className="mt-3 text-lg font-medium text-ink">{item.title}</h4>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
