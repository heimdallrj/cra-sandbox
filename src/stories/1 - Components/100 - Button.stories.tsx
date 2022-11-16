import React from 'react';

import { Button } from '@jetpack/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
  //👇 Creates specific argTypes with options
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'reset', 'submit'],
      control: { type: 'select' },
    },
  },
};

const Template = (args: any) => {
  return <Button {...args}>Hello</Button>;
};

export const Story: any = Template.bind({});
Story.args = {
  color: 'primary',
  type: 'button',
};
