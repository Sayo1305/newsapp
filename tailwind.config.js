/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'yellow-sp' : '#FFC017',
        'pink-sp' : '#FD4E62',
        'og':'#EF8172'
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/image.png')",
      }
    },
  },
  plugins: [],
}
