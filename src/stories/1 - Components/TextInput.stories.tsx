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
};
