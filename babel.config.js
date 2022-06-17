module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@shared': './src/shared',
          '@styles': './src/shared/styles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
