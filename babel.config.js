//babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      ['nativewind/babel'],
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@apis': './src/apis',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@stackNav': './src/nav/stackNav',
            '@tabNav': './src/nav/tabNav',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@type': './src/types',
            '@config': './src/config',
          },
        },
      ],
    ],
  };
};
