import { Text } from 'react-native';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import type { Meta, StoryObj } from '@storybook/react';

import type Simple from './simple';

function SimpleLoadedBySkia() {
  return (
    <WithSkiaWeb
      getComponent={() => {
        return require('./simple');
      }}
      fallback={<Text>Loading Skia...</Text>}
    />
  );
}

export default {
  title: 'Components/Others/Simple',
  component: SimpleLoadedBySkia,
} as Meta<typeof Simple>;

type Story = StoryObj<typeof Simple>;

export const Default: Story = {
  args: {
    a: 'title',
  },
};
