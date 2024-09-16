/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem', 
    },
    extend: {
      fontFamily: {
        'sans': ['Lexend', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

