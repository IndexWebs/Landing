const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#B53359',
        primary50: '#D74763',
        primarylight: '#FA7790',
        secondary: '#4042E2',
        secondarydark: '#2B3582',
        secondary50: '#A3BFFB',
        secondary60: '#DCE4FE',
        secondarylight: '#E9F0FE',
        tertiary: '#090056',
        tertiaryligth: '#3F4D6C',

      },
      spacing: {
        '128': '49rem',
      },
      screens: {
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1536px',
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '4xl': '6rem',
      '3xl': '3rem',
    }
  },
  plugins: [],
}
