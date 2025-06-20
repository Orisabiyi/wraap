/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0C3A13',
        primaryLight: '#51BA34',
      },
    },
  },
  plugins: [],
};
