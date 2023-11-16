import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withReactContext } from 'storybook-react-context';
import { ThemeContext, defaultTheme } from '@leumi/theme';

defaultTheme.colors.black = 'pink';

export const decorators = [
  withBackgrounds,
  withReactContext({
    Context: ThemeContext,
    initialState: defaultTheme,
  }),
];
export const parameters = {
  backgrounds: {
    default: 'plain',
    values: [
      { name: 'plain', value: 'white' },
      { name: 'warm', value: 'hotpink' },
      { name: 'cool', value: 'deepskyblue' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
