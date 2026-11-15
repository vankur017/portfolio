import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const RESUME_URL = '/updateres.pdf';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Hairline under the header once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track the section in the middle of the viewport
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const ids = ['hero', ...NAV_ITEMS.map((item) => item.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `transition-colors duration-200 ${
      active === id
        ? 'text-ink underline decoration-accent decoration-[1.5px] underline-offset-[6px]'
        : 'text-ink-muted hover:text-ink'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper transition-colors duration-200 ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <div className="page flex h-16 items-center justify-between">
        <a href="#hero" className="font-display text-[1.45rem] leading-none tracking-tight text-ink">
          Ankur Verma
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  className={linkClass(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-l border-line pl-8">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-accent"
              >
                Résumé
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 px-2 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-line md:hidden">
        <ul className="page py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? 'location' : undefined}
                className="flex items-baseline justify-between py-4 font-display text-3xl text-ink"
              >
                {item.label}
                <span aria-hidden="true" className="font-mono text-xs text-ink-muted">
                  ↓
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between py-4 font-display text-3xl text-ink"
            >
              Résumé
              <span aria-hidden="true" className="font-mono text-xs text-ink-muted">
                PDF ↗
              </span>
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
