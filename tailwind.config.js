/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'nav-header': '3rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
