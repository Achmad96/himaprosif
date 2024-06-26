import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  daisyui: {
    themes: [
      {
        Estungkara: {
          primary: '#01A54F',
          secondary: '#013B1D',
          accent: '#00ffff',
          neutral: '#01a54f',
          'base-100': '#011101',
          info: '#0108A5',
          success: '#00ff00',
          warning: '#A50101',
          error: '#A50101',
        },
      },
    ],
    prefix: '',
    base: true,
    utils: true,
    logs: true,
    themeRoot: ':root',
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'), require('tailwindcss-animate')],
};
export default config;
