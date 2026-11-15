import { SectionHeader } from '../ui/SectionHeader';

// Drawn from the experience and project work described elsewhere on the site.
const FOCUS = [
  'Multi-step forms, validation and draft/review workflows',
  'Reusable data grids — filtering, sorting, search, pagination',
  'Token-based authentication and API integration',
  'Responsive, component-driven React interfaces',
  'Code review, Git-based releases and SAST remediation',
];

const TOOLS = [
  { group: 'Languages', items: 'TypeScript, JavaScript' },
  { group: 'UI', items: 'React, Redux Toolkit, MUI, Halstack, Tailwind CSS' },
  { group: 'Data display', items: 'Recharts, TanStack Table' },
  { group: 'Services & auth', items: 'REST APIs, ServiceNow APIs, Firebase, Keycloak' },
  { group: 'Tooling', items: 'Vite, Git, GSAP, Framer Motion' },
];

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="page py-24 md:py-32">
      <SectionHeader
        index="03"
        label="About"
        size="md"
        title="A UI-focused software engineer who enjoys turning complex requirements into intuitive, scalable interfaces."
        titleId="about-title"
      />

      <div className="mt-14 grid-page gap-y-14 md:mt-20">
        <div className="col-span-12 md:col-span-5 md:col-start-4">
          <h3 className="eyebrow">Where I spend my time</h3>
          <ul className="mt-5 border-t border-line">
            {FOCUS.map((item) => (
              <li key={item} className="border-b border-line py-3 leading-relaxed text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4">
          <h3 className="eyebrow">Tools</h3>
          <dl className="mt-5 border-t border-line">
            {TOOLS.map((tool) => (
              <div key={tool.group} className="border-b border-line py-3">
                <dt className="font-mono text-xs text-ink-muted">{tool.group}</dt>
                <dd className="mt-1 leading-relaxed text-ink">{tool.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
