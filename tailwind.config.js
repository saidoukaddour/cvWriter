/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#0f172a',
        'primary': '#00ff87',
        'secondary': '#60efff',
        'bg-card': 'rgb(17, 25, 45)',
        'bg-input': 'rgb(30, 41, 59)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, 20px)' },
        }
      },
      animation: {
        float: 'float 10s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}

