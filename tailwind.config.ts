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
          DEFAULT: '#0061ff',
          '100': '#0061ff',
          '200': '#0061ff',
          '300': '#0061ff',
          '400': '#0061ff',
          '500': '#0061ff',
          '600': '#0061ff',
          '700': '#0061ff',
        },
        white: '#ffffff',
        secondary: {
          DEFAULT: '#020817',
          '100': '#060c18',
          '200': '#020817',
          '300': '#020817',
          '400': '#020817',
          '500': '#020817',
          '600': '#020817',
        },
        background: '#081322',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};

export default config;
