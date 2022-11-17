import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Col } from '@jetpack/react';

export default {
  title: 'Layout/Col',
  component: Col,
  argTypes: {
    gap: {
      control: { type: 'range' },
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args: any) => {
  const Cell = ({ children }: any) => (
    <div
      style={{
        backgroundColor: '#ccc',
        height: '50px',
        width: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );

  return (
    <Col {...args}>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
    </Col>
  );
};

export const Story = Template.bind({});
Story.args = {
  gap: 0,
};
