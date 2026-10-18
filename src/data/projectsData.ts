export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'portfoliolens',
    title: 'PortfolioLens',
    tagline: 'Investment Portfolio Analytics Platform',
    description: 'A client-side investment portfolio analytics platform for Indian retail investors — covering portfolio valuation, ROI, XIRR, asset allocation, benchmark comparison, tax analysis, goal-based SIP planning, and portfolio health diagnostics.',
    category: 'Fintech / Dashboard',
    technologies: ['React 19', 'TypeScript', 'Redux Toolkit', 'Vite', 'Tailwind CSS', 'Recharts', 'TanStack Table'],
    metrics: ['Real-time Streaming Data', 'Dynamic Charting', 'High-Density Tables'],
    githubUrl: 'https://github.com/vankur017/PortfolioLens',
    liveUrl: 'https://portfolio-lens-sand.vercel.app/',
  },
  {
    id: 'bite-buddy',
    title: 'Bite Buddy Web App',
    tagline: 'Next-Gen Food Delivery & Cart Interaction System',
    description: 'A responsive food-ordering interface consuming live food-service API data, with Redux Toolkit cart management, dynamic restaurant data, and reusable React components for an interactive user experience.',
    category: 'E-Commerce / FoodTech',
    technologies: ['React 18', 'JavaScript', 'Redux Toolkit', 'Firebase'],
    metrics: ['Optimistic Cart UI', 'Category Sticky Filters', 'Micro-Interactions'],
    githubUrl: 'https://github.com/vankur017/Bite-Buddy',
    liveUrl: 'https://bitebuddy-39ffc.web.app/',
  },
  {
    id: 'job-portal',
    title: 'Job Application Portal',
    tagline: 'Intelligent Career Search & Application Platform',
    description: 'A job application platform built using React, Redux, and Firebase, focused on clean UI and persistent user workflows. Includes authentication, role-based access, and API-driven job and profile management.',
    category: 'Web App / HR Tech',
    technologies: ['React', 'Redux', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    metrics: ['Multi-Param Filtering', 'Interactive Drawer', 'Form Validation'],
    githubUrl: 'https://github.com/vankur017/jobportal',
    liveUrl: 'https://jobportal-fpet.vercel.app/',
  }
];
