/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'lightss',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Themess',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['lightss', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
