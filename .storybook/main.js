const path = require('path');
const fs = require('fs');
const { sources, webpack } = require('webpack'); // Ensure webpack is imported to use its native objects and functions.
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
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
    autodocs: true,
  },
  webpackFinal: async (webpackConfig) => {
    // CopyPlugin for canvaskit.wasm
    webpackConfig.plugins.push(new NodePolyfillPlugin());

    // CopyPlugin for canvaskit.wasm
    class CopySkiaPlugin {
      apply(compiler) {
        compiler.hooks.thisCompilation.tap('AddSkiaPlugin', (compilation) => {
          compilation.hooks.processAssets.tapPromise(
            {
              name: 'copy-skia',
              stage:
                compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
            },
            async () => {
              const src = require.resolve(
                'canvaskit-wasm/bin/full/canvaskit.wasm',
              );
              if (!compilation.getAsset(src)) {
                compilation.emitAsset(
                  'canvaskit.wasm',
                  new sources.RawSource(await fs.promises.readFile(src)),
                );
              }
            },
          );
        });
      }
    }

    webpackConfig.plugins.push(new CopySkiaPlugin());

    // Alias updates for react-native-reanimated
    webpackConfig.resolve.alias['react-native-reanimated'] = require.resolve(
      'react-native-reanimated',
    );

    webpackConfig.resolve.alias[
      'react-native/Libraries/Image/AssetRegistry'
    ] = false;

    return webpackConfig;
  },
};
