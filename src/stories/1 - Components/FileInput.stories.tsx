import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileInput } from '@jetpack/react';

export default {
  title: 'Components/FileInput',
  component: FileInput,
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
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args: any) => {
  return <FileInput {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  disabled: false,
};
