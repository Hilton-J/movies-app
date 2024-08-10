/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4-col': '1fr 1fr 1fr 1fr'
      },
      backgroundImage: {
        'bgimage': "url('./src/assets/images/series/only-murders.png')"
      }
    },
  },
  plugins: [],
}