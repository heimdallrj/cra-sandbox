import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, Col } from '@jetpack/react';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'b',
        'del',
        'div',
        'em',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'i',
        'ins',
        'mark',
        'p',
        'span',
        'sub',
        'sup',
        'small',
        'strong',
      ],
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }: any) => {
  return (
    <>
      <Text {...args}>{children}</Text>
      <hr />

      <Col>
        <Text variant='b'>Bold text</Text>
        <Text variant='del'>Deleted text</Text>
        <Text variant='div'>defines a division or a section</Text>
        <Text variant='em'>Emphasized text</Text>
      </Col>

      <>
        <Text variant='h1'>Hello World!</Text>
        <Text variant='h2'>Hello World!</Text>
        <Text variant='h3'>Hello World!</Text>
        <Text variant='h4'>Hello World!</Text>
        <Text variant='h5'>Hello World!</Text>
        <Text variant='h6'>Hello World!</Text>
      </>

      <Col>
        <Text variant='i'>Italic text</Text>
        <Text variant='ins'>Inserted text</Text>
        <Text variant='mark'>Marked text</Text>
        <Text variant='p'>Paragraph</Text>
        <Text variant='span'>Inline container</Text>
      </Col>

      <Col gap={10}>
        <div>
          This is a <Text variant='sub'>Subscript</Text> text
        </div>
        <div>
          This is a <Text variant='sup'>Superscript</Text> text
        </div>
      </Col>

      <Col>
        <Text variant='small'>Smaller text</Text>
        <Text variant='strong'>Important text</Text>
      </Col>
    </>
  );
};

export const Story = Template.bind({});
Story.args = {
  children: 'Hello World!',
  variant: 'p',
};
