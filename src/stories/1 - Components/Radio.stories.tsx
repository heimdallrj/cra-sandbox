import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '@jetpack/react';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({ children, ...args }: any) => {
  return <Radio {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  checked: false,
  disabled: false,
  label: '',
  value: 'someValue',
};
