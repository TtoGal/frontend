/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        l: 'Pretendard-Light',
        r: 'Pretendard-Regular',
        m: 'Pretendard-Medium',
        sb: 'WantedSans-SemiBold',
        b: 'Pretendard-Bold',
      },
      textColor: {
        // Semantic
        primary: '#fbd341',
        secondary: '#370600',
        tertiary: '#FF6F61',
        positive: '#4CAF50',
        warning: '#E53935',
        delay: '#FB8C00',

        // Black/White
        white: '#FFFFFF',
        black: '#191919',

        // Color palette
        primary50: '#fef8df',
        primary100: '#fdebaf',
        primary200: '#fcde7a',
        primary400: '#fbc700',
        primary500: '#fabe00',
        primary600: '#fbb000',
        primary700: '#fc9c00',
        primary800: '#fc8b00',
        primary900: '#fd6900',

        secondary50: '#ffe0d0',
        secondary100: '#e8bbae',
        secondary200: '#c59386',
        secondary300: '#a26c5d',
        secondary400: '#894f40',
        secondary500: '#703424',
        secondary600: '#642c1f',
        secondary700: '#552117',
        secondary800: '#461410',

        // Character
        highlight: '#F0915F',

        // Grayscale
        gray50: '#f8f8f8',
        gray100: '#f1f1f1',
        gray200: '#e7e7e7',
        gray300: '#d7d7d7',
        gray400: '#b3b3b3',
        gray500: '#939393',
        gray600: '#6b6b6b',
        gray700: '#575757',
        gray800: '#393939',
        gray900: '#191919',
      },
      backgroundColor: {
        primary: '#fbd341',
        primary500: '#fabe00',
        gray300: '#d7d7d7',
        secondary: '#370600',
        secondary700: '#552117',
        tertiary: '#FF6F61',
      },
      borderColor: {
        primary: '#fbd341',
        gray300: '#d7d7d7',
        gray500: '#939393',
        positive: '#4CAF50',
        warning: '#E53935',
        delay: '#FB8C00',
      },
      borderRadius: {
        brand: 16,
      },
      padding: {},
      margin: {},
    },
  },
  plugins: [],
};
