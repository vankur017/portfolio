export interface ProjectImage {
  /** Default (largest) source */
  src: string;
  /** Responsive candidates, e.g. "/a-960.webp 960w, /a-1600.webp 1600w" */
  srcSet: string;
  /** Intrinsic size of `src` — prevents layout shift */
  width: number;
  height: number;
  alt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  /** One-sentence explanation shown on the portfolio */
  summary: string;
  description: string;
  category: string;
  technologies: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl: string;
  /** Real screenshot. Projects without one get a typographic plate. */
  image?: ProjectImage;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'mintline',
    title: 'Mintline',
    tagline: 'Play-Money Casino Arcade',
    summary:
      'Full-stack play-money arcade with four games (Crash, Plinko, Mines and Dice), all using virtual coins. Animated with Phaser 3, with outcomes decided by an Express API.',
    description:
      'A play-money casino arcade with four original games: Crash, Plinko, Mines and Dice. React owns the stake forms, wallet and history. Phaser 3 scenes only replay results the server has already decided. The Express 5 API owns all game rules and the wallet ledger, and every bet request needs an idempotency key. Amounts are stored as integers in minor units. Mines uses real buttons so it works with a keyboard and screen readers. The frontend is on Vercel and the API runs on Google Cloud Run with continuous deployment.',
    category: 'Gaming / Full-Stack',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Phaser 3',
      'React Router 7',
      'Node.js',
      'Express 5',
      'Vitest',
      'Google Cloud Run',
    ],
    metrics: ['Server-Decided Outcomes', 'Idempotent Bet API', 'Canvas-Rendered Game Scenes'],
    githubUrl: 'https://github.com/vankur017/betting-app-frontend',
    liveUrl: 'https://betting-app-frontend-alpha.vercel.app/',
    image: {
      src: '/projects/mintline-1600.webp',
      srcSet: '/projects/mintline-960.webp 960w, /projects/mintline-1600.webp 1600w',
      width: 1600,
      height: 873,
      alt: 'Screenshot of the Mintline game lobby',
    },
  },
  {
    id: 'portfoliolens',
    title: 'PortfolioLens',
    tagline: 'Investment Portfolio Analytics Platform',
    summary:
      'Client-side portfolio analytics for Indian retail investors: valuation, ROI and XIRR, asset allocation, benchmark comparison, tax analysis and goal-based SIP planning.',
    description: 'A client-side investment portfolio analytics platform for Indian retail investors — covering portfolio valuation, ROI, XIRR, asset allocation, benchmark comparison, tax analysis, goal-based SIP planning, and portfolio health diagnostics.',
    category: 'Fintech / Dashboard',
    technologies: ['React 19', 'TypeScript', 'Redux Toolkit', 'Vite', 'Tailwind CSS', 'Recharts', 'TanStack Table'],
    metrics: ['Real-time Streaming Data', 'Dynamic Charting', 'High-Density Tables'],
    githubUrl: 'https://github.com/vankur017/PortfolioLens',
    liveUrl: 'https://portfolio-lens-sand.vercel.app/',
    image: {
      src: '/projects/portfoliolens-1600.webp',
      srcSet: '/projects/portfoliolens-960.webp 960w, /projects/portfoliolens-1600.webp 1600w',
      width: 1600,
      height: 873,
      alt: 'Screenshot of the PortfolioLens interface',
    },
  },
  {
    id: 'bite-buddy',
    title: 'Bite Buddy',
    tagline: 'Next-Gen Food Delivery & Cart Interaction System',
    summary:
      'A responsive food-ordering interface built on live food-service API data, with Redux Toolkit managing the cart and reusable React components throughout.',
    description: 'A responsive food-ordering interface consuming live food-service API data, with Redux Toolkit cart management, dynamic restaurant data, and reusable React components for an interactive user experience.',
    category: 'E-Commerce / FoodTech',
    technologies: ['React 18', 'JavaScript', 'Redux Toolkit', 'Firebase'],
    metrics: ['Optimistic Cart UI', 'Category Sticky Filters', 'Micro-Interactions'],
    githubUrl: 'https://github.com/vankur017/Bite-Buddy',
    liveUrl: 'https://bitebuddy-39ffc.web.app/',
    image: {
      src: '/projects/bitebuddy-1600.webp',
      srcSet: '/projects/bitebuddy-960.webp 960w, /projects/bitebuddy-1600.webp 1600w',
      width: 1600,
      height: 873,
      alt: 'Screenshot of the Bite Buddy restaurant listing page',
    },
  },
  {
    id: 'job-portal',
    title: 'Job Application Portal',
    tagline: 'Intelligent Career Search & Application Platform',
    summary:
      'A job application platform with authentication, role-based access, and API-driven job and profile management, built on React, Redux and Firebase.',
    description: 'A job application platform built using React, Redux, and Firebase, focused on clean UI and persistent user workflows. Includes authentication, role-based access, and API-driven job and profile management.',
    category: 'Web App / HR Tech',
    technologies: ['React', 'Redux', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    metrics: ['Multi-Param Filtering', 'Interactive Drawer', 'Form Validation'],
    githubUrl: 'https://github.com/vankur017/jobportal',
    liveUrl: 'https://jobportal-fpet.vercel.app/',
    image: {
      src: '/projects/jobportal-1600.webp',
      srcSet: '/projects/jobportal-960.webp 960w, /projects/jobportal-1600.webp 1600w',
      width: 1600,
      height: 873,
      alt: 'Screenshot of the Job Application Portal home page with resume upload and job search',
    },
  },
];
