/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pry: '#d6e6d5',
        grey: '#F7F7F7',
        sec: '#466443',
        ter: '#26E8C6',
        darkRed: '#ED7777',
      },
    },
  },
  plugins: [],
}
