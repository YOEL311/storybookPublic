module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToAlias: {
          'react-native-linear-gradient': 'react-native-web-linear-gradient',
        },
        modulesToTranspile: [
          'react-native-reanimated',
          'test-package-yoel-test',
        ],
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
