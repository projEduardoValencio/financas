import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ared: "#db0000",
        ablue: '#1fb6ff',
        apurple: '#7e5bef',
        apink: '#ff49db',
        aorange: '#ff7849',
        agreen: '#13ce66',
        ayellow: '#ffc82c',
        'agray-dark': '#273444',
        agray: '#8492a6',
        'agray-light': '#d3dce6',
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-a(red|blue|purple|pink|orange|yellow|green|blue|gray-dark|gray|gray-light)/
  }]
}
export default config
