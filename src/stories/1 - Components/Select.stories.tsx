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
  return <Select />;
};

export const Story = Template.bind({});
Story.args = {};
