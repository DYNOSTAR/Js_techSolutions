/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { blue: '#0B6BDC', cyan: '#14C1F5', red: '#E10600', navy: '#0A1628', ink: '#0F172A', mist: '#F7FAFF' },
      },
      fontFamily: {
        display: ['Rajdhani', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
