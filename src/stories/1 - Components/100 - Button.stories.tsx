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
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
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
};
