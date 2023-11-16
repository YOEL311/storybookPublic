import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyButtonLess } from './ButtonLess';

export default {
  title: 'components/MyButton',
  component: MyButtonLess,
} as ComponentMeta<typeof MyButtonLess>;

export const BasicButtonLess: ComponentStory<typeof MyButtonLess> = (args) => (
  <MyButtonLess {...args} />
);

BasicButtonLess.args = {
  text: 'לינק',
  color: 'black',
};
