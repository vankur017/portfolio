# Ankur Verma — Developer Portfolio

Personal portfolio of Ankur Verma, a frontend-focused software engineer. A single-page site with selected projects, experience, and contact details.

**Live:** https://portfolio-one-mocha-85.vercel.app/

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run lint     # ESLint
```

## Project structure

```
src/
├── App.tsx                  # page composition
├── index.css                # base styles and shared classes
├── data/projectsData.ts     # project content and screenshots
└── components/
    ├── Navigation/Navbar.tsx
    ├── Hero/HeroSection.tsx
    ├── Projects/ProjectsSection.tsx
    ├── Experience/ExperienceSection.tsx
    ├── About/AboutSection.tsx
    ├── Contact/ContactSection.tsx
    ├── Footer.tsx
    └── ui/SectionHeader.tsx
public/
├── projects/                # optimised project screenshots (.webp)
└── updateres.pdf            # résumé
```

## Theming

Colours and fonts live in `tailwind.config.js`. The palette uses semantic names: `paper` for backgrounds, `ink` for text, `line` for dividers, and `accent` for the single accent colour. Change the values there to re-theme the site.

## Adding a project screenshot

1. Save the image as `.webp` in `public/projects/`.
2. Add an `image` entry with `src`, `srcSet`, `width`, `height` and `alt` to the project in `src/data/projectsData.ts`.
