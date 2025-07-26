/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5DADE2',
        'primary-dark': '#3498DB',
        secondary: '#FFFFFF',
        accent: '#2E86C1',
        'text-primary': '#1C2833',
        'text-secondary': '#566573',
        background: '#FDFEFE',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 30px -10px rgba(93, 173, 226, 0.4)',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 10s ease infinite',
      },
    },
  },
  plugins: [],
};
