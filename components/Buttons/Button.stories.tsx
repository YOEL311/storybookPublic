import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

export const BasicButton: StoryObj<typeof Button> = {
  args: {
    text: 'text',
  },
};
