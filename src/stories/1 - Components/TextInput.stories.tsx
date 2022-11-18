import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '@jetpack/react';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: [
        'color',
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
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
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({
  children,
  ...args
}: any) => {
  return <TextInput {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  disabled: false,
  type: 'text',
};
