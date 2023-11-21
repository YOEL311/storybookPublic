module.exports = {
  root: true,
  plugins: [
    'import',
    '@typescript-eslint',
    'justinanastos',
    'simple-import-sort',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
    'import/prefer-default-export': 'off',
    'justinanastos/switch-braces': 'error',
    'no-bitwise': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-restricted-imports': 'off',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAnimatedStyle|useDerivedValue|useAnimatedProps)',
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['useDispatch'],
            message: 'Please use useDispatch from `~/store` instead.',
          },
          {
            name: 'react-i18next',
            importNames: ['useTranslation'],
            message: 'Please use useTranslation from `~/i18n` instead.',
          },
          {
            name: 'lodash',
            message: 'Use lodash/fp instead.',
          },
          {
            name: 'react',
            importNames: ['default'],
            message: 'No need to import this.',
          },
          {
            name: '~/theme/theme',
            importNames: ['default'],
            message: 'Import useTheme() from ~/theme instead.',
          },
        ],
      },
    ],
    'no-shadow': 'off',
    'no-spaced-func': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-native/no-inline-styles': 'off',
    'react/jsx-closing-bracket-location': [
      'warn',
      { selfClosing: 'line-aligned', nonEmpty: 'after-props' },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    curly: 'error',
    eqeqeq: 'error',
    'simple-import-sort/imports': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    __DEV__: true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // packages first
              ['^react', '^@?\\w'],
              // types
              ['^~/@types'],
              // src
              // components
              ['^~/components'],
              // parent files
              ['^\\.\\.'],
              // local files
              ['^\\.'],
              // local components
              ['^\\./components'],
            ],
          },
        ],
      },
    },
  ],
};
