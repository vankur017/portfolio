import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../../data/projectsData';
import { SectionHeader } from '../ui/SectionHeader';

const hostOf = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

const pad = (n: number) => String(n).padStart(2, '0');

function ProjectLinks({ project }: { project: ProjectItem }) {
  const links = [
    { href: project.liveUrl, label: 'Live site' },
    { href: project.githubUrl, label: 'Source code' },
  ].filter((link) => Boolean(link.href));

  return (
    <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-ink link-line"
          >
            {link.label}
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">
              {' '}
              for {project.title} (opens in a new tab)
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectText({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <>
      <p className="eyebrow flex flex-wrap gap-x-3 gap-y-1">
        <span className="text-ink">{pad(index + 1)}</span>
        <span>{project.category}</span>
      </p>
      <h3 className="mt-4 font-display text-[clamp(2.1rem,3.8vw,3.25rem)] leading-none tracking-[-0.01em] text-ink">
        {project.title}
      </h3>
      <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">{project.summary}</p>
      <p className="mt-5 font-mono text-xs leading-relaxed text-ink-muted">
        <span className="sr-only">Built with: </span>
        {project.technologies.join(' · ')}
      </p>
      <ProjectLinks project={project} />
    </>
  );
}

/** Real screenshot inside a minimal browser frame */
function Screenshot({
  project,
  sizes = '(min-width: 1024px) 60vw, 100vw',
}: {
  project: ProjectItem;
  sizes?: string;
}) {
  if (!project.image) return null;
  const { src, srcSet, width, height, alt } = project.image;
  return (
    <figure className="border border-ink/15 bg-paper-deep transition-colors duration-300 group-hover/project:border-ink/40">
      <div aria-hidden="true" className="flex items-center gap-3 border-b border-ink/10 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 bg-ink/20" />
          <span className="h-2 w-2 bg-ink/20" />
          <span className="h-2 w-2 bg-ink/20" />
        </span>
        <span className="truncate font-mono text-[11px] text-ink-muted">{hostOf(project.liveUrl)}</span>
      </div>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </figure>
  );
}

/** Typographic stand-in for projects without a screenshot yet */
function Plate({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/3] flex-col justify-between border border-ink/15 bg-paper-deep p-6 transition-colors duration-300 group-hover/project:bg-paper-shade md:p-8"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{project.category}</span>
      <span className="self-end font-display text-[clamp(6rem,14vw,11rem)] leading-[0.8] text-ink">
        {pad(index + 1)}
      </span>
      <span className="font-mono text-[11px] text-ink-muted">{hostOf(project.liveUrl)}</span>
    </div>
  );
}

export function ProjectsSection() {
  const [featured, ...rest] = PROJECTS_DATA;

  return (
    <section id="projects" aria-labelledby="projects-title" className="page py-24 md:py-32">
      <SectionHeader
        index="01"
        label="Work"
        title="Selected projects"
        titleId="projects-title"
        lede="Side projects built with React and Redux. Each one links to the live app and its source."
      />

      {featured && (
        <article className="group/project mt-16 grid-page items-end gap-y-8 md:mt-20">
          <div className="col-span-12 lg:col-span-8">
            {featured.image ? <Screenshot project={featured} /> : <Plate project={featured} index={0} />}
          </div>
          <div className="col-span-12 lg:col-span-4">
            <ProjectText project={featured} index={0} />
          </div>
        </article>
      )}

      <div className="mt-20 grid grid-cols-1 gap-y-20 md:mt-28 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
        {rest.map((project, i) => {
          const index = i + 1;
          return (
            <article key={project.id} className={`group/project ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
              {project.image ? (
                <Screenshot project={project} sizes="(min-width: 768px) 45vw, 100vw" />
              ) : (
                <Plate project={project} index={index} />
              )}
              <div className="mt-7">
                <ProjectText project={project} index={index} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
