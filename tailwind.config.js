const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      colors: {
        'true-gray': colors.trueGray,
        'mihas-orange': '#EB5C37',
        'mihas-blue': '#1C2442',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xs': '.65rem',
        '3xs': '.55rem',
      },
      letterSpacing: {
        '2widest': '.25em',
      },
      height: {
        'screen-80': '80vh',
        'screen-60': '60vh',
      },
      width: {
        'screen-60': '60vw',
      },
      maxWidth: {
        56: '14rem',
      },
      zIndex: {
        '-1': '-1',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
}
