/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF6B35',
        'secondary-red': '#D62246',
        'neutral-cream': '#FFF7EB'
      }
    },
  },
  plugins: [],
}