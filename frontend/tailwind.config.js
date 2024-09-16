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
    boxShadow: {
      DEFAULT: '2px 4px 0px 0px rgba(0, 0, 0, 1)',
    },
    extend: {
      fontFamily: {
        'sans': ['Lexend', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

