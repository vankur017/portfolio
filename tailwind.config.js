/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      /*
       * Dark editorial palette.
       * Token names are semantic, not literal:
       *   paper = page / surface background (dark)
       *   ink   = foreground text (light)
       * Swap the values here to re-theme the whole site.
       * All text/background pairs below pass WCAG AA (≥ 4.5:1).
       */
      colors: {
        // Warm near-black surfaces
        paper: {
          DEFAULT: '#121210', // page background
          deep: '#1B1B18', // raised surface (screenshot frames, plates)
          shade: '#242320', // hover surface
        },
        // Warm off-white text scale
        ink: {
          DEFAULT: '#EDEAE2', // 15.6:1 on paper
          soft: '#BDB9AF', // 9.6:1
          muted: '#8E8A81', // 5.5:1
        },
        line: '#2E2D29',
        // Single restrained accent: burnt orange, lifted for dark backgrounds
        accent: {
          DEFAULT: '#E5763F', // 6.3:1 on paper
          hover: '#F29361',
        },
      },
      maxWidth: {
        page: '78rem',
        prose: '38rem',
      },
    },
  },
  plugins: [],
};
