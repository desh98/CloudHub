/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FB432C',
      'secondary': '#000000df',
      'white40': 'rgba(255, 255, 255, 0.4)',
      'lightblack': 'rgba(34, 34, 34, 0.4)',
      'gray': 'rgba(78, 89, 112, 0.4)',
      'white': '#fff',
      'black': '#000',
      
    },
    gradientColors: {
      'red-orange': ['#FB432C', '#FF591E'],
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}