const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      primary: '#FF5C00',
      secondary:'#343F56',
      background:'#F5F5F5',
      blue:"#7861E6",
      yellow:"#FB9300",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
