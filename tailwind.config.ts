// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          '100': 'var(--primary)',
          '200': 'var(--primary)',
          '300': 'var(--primary)',
          '400': 'var(--primary)',
          '500': 'var(--primary)',
          '600': 'var(--primary)',
          '700': 'var(--primary)',
        },
        white: '#ffffff',
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          '100': 'var(--secondary)',
          '200': 'var(--secondary)',
          '300': 'var(--secondary)',
          '400': 'var(--secondary)',
          '500': 'var(--secondary)',
          '600': 'var(--secondary)',
        },
        background: '#081322',
      },
      width: {
        container: '1440px',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
