import type { Meta, StoryObj } from '@storybook/react';

import { MyButtonLess } from './ButtonLess';

export default {
  title: 'Buttons',
  component: MyButtonLess,
} as Meta<typeof MyButtonLess>;

export const BasicButtonLess: StoryObj<typeof MyButtonLess> = {
  args: {
    text: 'לינק',
  },
};
