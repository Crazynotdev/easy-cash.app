module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./srx'],
          extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@': './src',
            '@components': './srx/components',
            '@screens': './srx/screens',
            '@services': './srx/services',
            '@hooks': './srx/hooks',
            '@context': './srx/context',
            '@utils': './srx/utils',
            '@types': './srx/types',
            '@config': './srx/config',
            '@navigation': './srx/navigation',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
