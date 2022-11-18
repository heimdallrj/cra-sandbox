import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RangeInput } from '@jetpack/react';

export default {
  title: 'Components/RangeInput',
  component: RangeInput,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    max: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'range' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof RangeInput>;

const Template: ComponentStory<typeof RangeInput> = (args: any) => {
  return <RangeInput {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  disabled: false,
  max: 0,
  min: 100,
  step: 3,
};
