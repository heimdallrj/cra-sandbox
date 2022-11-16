import { Block, Text } from '@jetpack/react';

export default function TableSpec() {
  return (
    <Block variant='section'>
      <Text variant='h2'>Table</Text>
      <Text>The Table component.</Text>

      <Block variant='code'>
        <pre>{`
<Table>
  <TableHeader>
    <TableRow>
      <TableColHead>Name</TableColHead>
      <TableColHead>Type</TableColHead>
      <TableColHead>Default</TableColHead>
      <TableColHead>Description</TableColHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <code>children</code>
      </TableCell>
      <TableCell>
        <code>node</code>
      </TableCell>
      <TableCell>n/a</TableCell>
      <TableCell>The content of the component.</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <code>variant</code>
      </TableCell>
      <TableCell>
        <code>
          'b' | 'del' | 'div' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' |
          'h6' | 'i' | 'ins' | 'mark' | 'p' | 'span' | 'sub' | 'sup' |
          'small' | 'strong'
        </code>
      </TableCell>
      <TableCell>
        <code>p</code>
      </TableCell>
      <TableCell>The element type</TableCell>
    </TableRow>
  </TableBody>
</Table>
      `}</pre>
      </Block>

      <Text variant='h3'>Props</Text>
      <Text>TODO</Text>
    </Block>
  );
}
