import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs, Tab } from '@jetpack/react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = ({ children, ...args }: any) => {
  return (
    <Tabs>
      <Tab label='Gator'>
        See ya later, <em>Alligator</em>!
      </Tab>
      <Tab label='Croc'>
        After 'while, <em>Crocodile</em>!
      </Tab>
      <Tab label='Sarcosuchus'>
        Nothing to see here, this tab is <em>extinct</em>!
      </Tab>
    </Tabs>
  );
};

export const Story = Template.bind({});
Story.args = {};
