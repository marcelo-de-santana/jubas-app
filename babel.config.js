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
          '@contexts': './src/contexts',
          '@domain': './src/domain',
          '@repositories': './src/repositories',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
