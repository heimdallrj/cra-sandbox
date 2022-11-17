import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion, AccordionItem } from '@jetpack/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ children }: any) => {
  return (
    <Accordion>
      <AccordionItem title='Item 1'>Item 1 Contents</AccordionItem>
      <AccordionItem title='Item 2'>Item 2 Contents</AccordionItem>
      <AccordionItem title='Item 3'>Item 3 Contents</AccordionItem>
    </Accordion>
  );
};

export const Story = Template.bind({});
