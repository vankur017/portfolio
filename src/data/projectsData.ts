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
    tagline: 'Institutional-grade Portfolio Analytics Dashboard',
    description: 'A React-based portfolio analysis dashboard designed to provide users with a clear view of their investment portfolio. Supports portfolio data ingestion, normalization, allocation analysis, performance insights, and interactive visualizations through a clean and responsive interface.',
    category: 'Fintech / Dashboard',
    technologies: ['React', 'JavaScript', 'Data Visualization', 'CSV Processing', 'Tailwind CSS', 'Responsive UI'],
    metrics: ['Real-time Streaming Data', 'Dynamic Charting', 'High-Density Tables'],
    githubUrl: 'https://github.com/vankur017/PortfolioLens',
    liveUrl: 'https://portfolio-lens-sand.vercel.app/',
  },
  {
    id: 'bite-buddy',
    title: 'Bite Buddy Web App',
    tagline: 'Next-Gen Food Delivery & Cart Interaction System',
    description: 'A React-based food ordering web application featuring dynamic restaurant listings, menu rendering, and optimized state management. Built with a reusable component architecture and performance-focused rendering strategies.',
    category: 'E-Commerce / FoodTech',
    technologies: ['React', 'Redux', 'JavaScript', 'Firebase', 'REST APIs', 'Lazy Loading'],
    metrics: ['Optimistic Cart UI', 'Category Sticky Filters', 'Micro-Interactions'],
    githubUrl: 'https://github.com/vankur017/Bite-Buddy',
    liveUrl: 'https://bitebuddy-39ffc.web.app/',
  },
  {
    id: 'job-portal',
    title: 'Job Application Portal',
    tagline: 'Intelligent Career Search & Application Platform',
    description: 'A scalable job application platform built using React, Redux, and Firebase, focused on clean UI architecture and persistent user workflows. Includes authentication, role-based access, and API-driven job and profile management.',
    category: 'Enterprise / HR Tech',
    technologies: ['React', 'Redux', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    metrics: ['Multi-Param Filtering', 'Interactive Drawer', 'Form Validation'],
    githubUrl: 'https://github.com/vankur017/jobportal',
    liveUrl: 'https://jobportal-fpet.vercel.app/',
  }
];
