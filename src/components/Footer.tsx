export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page flex flex-col gap-3 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ankur Verma</p>
        <p>Built with React, TypeScript and Tailwind CSS.</p>
        <a href="#hero" className="self-start text-ink link-line sm:self-auto">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
