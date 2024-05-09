import type { Meta, StoryObj } from '@storybook/react';

import Simple from './simple';
export default {
  title: 'Components/Others/Simple',
  component: Simple,
} as Meta<typeof Simple>;

type Story = StoryObj<typeof Simple>;

export const Default: Story = {};
