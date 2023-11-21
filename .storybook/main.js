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
        modulesToTranspile: ['react-native-reanimated'],
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

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [{ loader: '@svgr/webpack' }],
    });

    return config;
  },

  webpackFinal: (config) => {
    return config;
  },
};
export default config;
