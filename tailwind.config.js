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
      },
      backgroundColor: {
        'color': '#7379ff'
      },
      textColor: {
        'color': '#7379ff'
      }
    },
  },
  plugins: [],
}