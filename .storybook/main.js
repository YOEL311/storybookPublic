/** @type { import('@storybook/react-vite').StorybookConfig } */
const path = require('path');
const config = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToAlias: {
          'react-native-linear-gradient': 'react-native-web-linear-gradient',
        },
        modulesToTranspile: ['react-native-reanimated', '@leumi/components'],
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@react-native-cookies/cookies'] = path.resolve(
      __dirname,
      '../mocks/cookies.js',
    );

    return config;
  },
};
export default config;
