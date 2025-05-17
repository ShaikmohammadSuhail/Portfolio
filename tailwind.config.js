/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000',
          secondary: '#111111',
          accent: '#1f1f1f',
          hover: '#2d2d2d',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
        }
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 