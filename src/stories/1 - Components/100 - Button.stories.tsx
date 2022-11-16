import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@jetpack/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  children,
  ...args
}: any) => {
  return <Button {...args}>{children}</Button>;
};

export const Story = Template.bind({});
Story.args = {
  children: 'Hello',
  type: 'button',
  variant: 'contained',
  disabled: false,
};
