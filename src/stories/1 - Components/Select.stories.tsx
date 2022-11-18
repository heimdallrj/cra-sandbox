import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '@jetpack/react';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  children,
  ...args
}: any) => {
  return <Select {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};
