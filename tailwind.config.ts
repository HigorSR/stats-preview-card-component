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
        "Very-dark-blue(main-background)": "hsl(233, 47%, 7%)",
        "Dark-desaturated-blue(card-background)": "hsl(244, 38%, 16%)",
        "Soft-violet(accent)": "hsl(277, 64%, 61%)",

        "White(main-heading,-stats)": "hsl(0, 0%, 100%)",
        "Slightly-transparent-white(main-paragraph)": "hsla(0, 0%, 100%, 0.75)",
        "Slightly-transparent-white(stat-headings)": "hsla(0, 0%, 100%, 0.6)"
      }
    },
  },
  plugins: [],
}
export default config
