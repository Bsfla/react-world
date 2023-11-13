/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    colors: {
      green: '#5CB85C',
      gray: 'rgb(203 213 225)',
    },
    extend: {
      width: {
        1080: '1080px',
      },
      height: {
        72: '72px',
      },
      borderColor: {
        gray: '#ebeaec;',
      },
    },
  },
};
