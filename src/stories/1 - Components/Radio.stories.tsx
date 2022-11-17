import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '@jetpack/react';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {},
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
Story.args = {};
