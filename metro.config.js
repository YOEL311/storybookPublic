// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    unstable_allowRequireContext: true,
  },

  resolver: {
    resolverMainFields: ['react-native', 'browser', 'main'],
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'd.ts'],
  },
};
module.exports = mergeConfig(defaultConfig, config);
