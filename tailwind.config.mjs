/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent',
      'orange': {
        '50': '#FFF4F1',
        '500': '#F4501C',
        '600': '#d9401a',
      },
      'green': {
        '50': '#EDFAF5',
        '600': '#12A97B',
      },
      'purple': '#6E3FF3',
      'amber': {
        '50': '#FFF8E6',
        '600': '#E09000',
      },
      'blue': {
        '50': '#EEF4FF',
        'DEFAULT': '#1A6CF4',
      },
      'red': {
        '50': '#FEE2E2',
        '400': '#F87171',
      },
      'gray': {
        '50': '#F9FAFB',
        '100': '#F3F4F6',
        '200': '#E5E7EB',
        '300': '#D1D5DB',
        '400': '#9CA3AF',
        '500': '#6B7280',
        '600': '#4B5563',
        '700': '#374151',
      },
      'zinc': {
        '900': '#111118',
      },
      'sky': {
        '100': '#E0F2FE',
        '50': '#F0F9FF',
      },
      'ink': '#111118',
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      width: {
        13: '3.25rem',
      },
      height: {
        13: '3.25rem',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
    },
  },
  plugins: [],
};
