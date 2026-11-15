import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const EMAIL = 'ankurverma.a739@gmail.com';

const LINKS = [
  { label: 'GitHub', detail: 'github.com/vankur017', href: 'https://github.com/vankur017' },
  { label: 'LinkedIn', detail: 'in/ankur-verma', href: 'https://www.linkedin.com/in/ankur-verma-6b80b416a/' },
  { label: 'Résumé', detail: 'PDF', href: '/updateres.pdf' },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — fall back to mail client
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="page pb-24 pt-24 md:pb-32 md:pt-32">
      <SectionHeader index="04" label="Contact" title="Have a frontend role or project in mind?" titleId="contact-title" />

      <div className="mt-14 grid-page md:mt-20">
        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
            Email is the quickest way to reach me. I&rsquo;m open to React and frontend roles.
          </p>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-[clamp(1.75rem,4.6vw,3.5rem)] leading-tight text-ink underline decoration-ink/30 decoration-1 underline-offset-[0.18em] transition-colors [overflow-wrap:anywhere] hover:text-accent hover:decoration-accent"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink"
            >
              {copied ? 'Copied' : 'Copy address'}
            </button>
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>

          <ul className="mt-14 grid border-t border-line sm:grid-cols-3">
            {LINKS.map((link) => (
              <li key={link.label} className="border-b border-line sm:border-b-0 sm:border-r sm:last:border-r-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-5 sm:px-5 sm:first:pl-0"
                >
                  <span>
                    <span className="block font-medium text-ink transition-colors group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="mt-1 block font-mono text-xs text-ink-muted">{link.detail}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
