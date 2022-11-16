import { Block, Text } from '@jetpack/react';
import Accordion, { AccordionItem } from '@jetpack/react/components/Accordion';

import AccordionSpec from 'specs/Accordion';
import BlockSpec from 'specs/Block';
import ButtonSpec from 'specs/Button';
import TableSpec from 'specs/Table';
import TextSpec from 'specs/Text';

function App() {
  return (
    <Block>
      <Block variant='header'>
        <Text variant='h1'>@jetpack/react UIKit</Text>
        <Text>
          An opinionated, but loosely coupled toolkit for efficient React.js
          development.
        </Text>
      </Block>

      <Block variant='main'>
        <Accordion>
          <AccordionItem title='Accordion'>
            <AccordionSpec />
          </AccordionItem>
          <AccordionItem title='Block'>
            <BlockSpec />
          </AccordionItem>
          <AccordionItem title='Button'>
            <ButtonSpec />
          </AccordionItem>
          <AccordionItem title='Table'>
            <TableSpec />
          </AccordionItem>
          <AccordionItem title='Text'>
            <TextSpec />
          </AccordionItem>
        </Accordion>
      </Block>
    </Block>
  );
}

export default App;
