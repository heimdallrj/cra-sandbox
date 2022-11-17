import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Block } from '@jetpack/react';

export default {
  title: 'Layout/Block',
  component: Block,
  argTypes: {
    style: {
      control: { type: 'object' },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'aside',
        'article',
        'code',
        'details',
        'div',
        'figcaption',
        'figure',
        'footer',
        'header',
        'main',
        'mark',
        'nav',
        'pre',
        'section',
        'summary',
        'time',
      ],
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args: any) => {
  return (
    <Block {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus at
        mauris a hendrerit. Sed eu metus quis mauris pulvinar sagittis. Duis ac
        est quam. Nam quis pulvinar nisi. Cras maximus dui vitae rutrum feugiat.
        Nullam ac nisi sem. Maecenas consectetur consequat purus id aliquam.
        Nulla facilisi. Nam rhoncus mauris vitae erat dictum, sed sollicitudin
        sem laoreet. Sed ac vulputate enim, sit amet dignissim eros. Nulla non
        malesuada mauris. Duis ullamcorper consequat ultrices. Fusce ipsum est,
        condimentum et dolor eu, finibus suscipit ante.
      </p>
    </Block>
  );
};

export const Story = Template.bind({});
Story.args = {
  variant: 'div',
  style: { color: 'red' },
};
