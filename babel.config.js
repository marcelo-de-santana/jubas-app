module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@domain': './src/domain',
          '@routes': './src/routes',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
