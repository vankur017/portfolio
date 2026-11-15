interface SectionHeaderProps {
  /** Two-digit section number, e.g. "01" */
  index: string;
  /** Short label next to the number */
  label: string;
  /** Heading text */
  title: string;
  /** id for the <h2>, used by aria-labelledby on the section */
  titleId: string;
  lede?: string;
  /** "lg" for short headings, "md" for sentence-length headings */
  size?: 'lg' | 'md';
}

const TITLE_SIZE = {
  lg: 'text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.95]',
  md: 'text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]',
};

export function SectionHeader({ index, label, title, titleId, lede, size = 'lg' }: SectionHeaderProps) {
  return (
    <header className="grid-page gap-y-5 border-t border-ink pt-5">
      <p className="eyebrow col-span-12 md:col-span-3 md:pt-3">
        <span className="text-ink">{index}</span>
        <span aria-hidden="true"> — </span>
        {label}
      </p>
      <div className="col-span-12 md:col-span-9">
        <h2 id={titleId} className={`font-display tracking-[-0.015em] text-ink ${TITLE_SIZE[size]}`}>
          {title}
        </h2>
        {lede && <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">{lede}</p>}
      </div>
    </header>
  );
}
