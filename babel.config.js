module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@stores': './src/stores',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
