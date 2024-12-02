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
        white: '#fafafa',
        black: '#373737',
        darkGray: '#404040',
      },
      backgroundColor: {
        primary: '#FEE500',
        lightGray: '#E7E7E7',
        darkGray: '#404040',
      },
      borderColor: {
        lightGray: '#E7E7E7',
        darkGray: '#404040',
      },
      borderRadius: {},
      padding: {},
      margin: {},
    },
  },
  plugins: [],
};
