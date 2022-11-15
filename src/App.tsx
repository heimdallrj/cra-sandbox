import { Block, Text } from '@jetpack/react/components';

import BlockSpec from 'specs/Block';
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
        <BlockSpec />
        <TextSpec />
        <TableSpec />
      </Block>
    </Block>
  );
}

export default App;
