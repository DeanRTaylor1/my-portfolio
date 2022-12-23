/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './@modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'martel-sans',
        'Helvetica',
        'Arial',
        'sans-serif',
        'ui-sans-serif',
        'system-ui',
      ],
    },

    extend: {},
  },
  plugins: [],
};
