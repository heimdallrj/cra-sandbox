import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '@jetpack/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  children,
  ...args
}: any) => {
  return <Checkbox {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
