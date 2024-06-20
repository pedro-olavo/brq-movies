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
          '@modules': './src/modules',
          '@routes': './src/routes',
          '@stores': './src/stores',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@theme': './src/theme',
          '@helper': './src/helper',
        },
      },
    ],
    'module:react-native-dotenv',
  ],
};
