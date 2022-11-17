import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Row } from '@jetpack/react';

export default {
  title: 'Layout/Row',
  component: Row,
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
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args: any) => {
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
    <Row {...args}>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
    </Row>
  );
};

export const Story = Template.bind({});
Story.args = {
  gap: 0,
};
