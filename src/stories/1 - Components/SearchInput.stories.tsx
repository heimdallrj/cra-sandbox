import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from '@jetpack/react';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
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
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args: any) => {
  return <SearchInput {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  disabled: false,
  value: '',
};
