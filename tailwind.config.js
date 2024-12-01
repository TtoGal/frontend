/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        r: 'Pretendard-Regular',
        m: 'Pretendard-Medium',
        sb: 'WantedSans-SemiBold',
        b: 'Pretendard-Bold',
      },
      textColor: {
        white: '#fafafa',
        black: '#373737',
      },
      backgroundColor: {},
      borderColor: {},
      borderRadius: {},
      padding: {},
      margin: {},
    },
  },
  plugins: [],
};
