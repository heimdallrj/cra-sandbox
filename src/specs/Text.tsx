import {
  Block,
  Table,
  TableBody,
  TableCell,
  TableColHead,
  TableHeader,
  TableRow,
  Text,
} from '@jetpack/react/components';

export default function TextSpec() {
  return (
    <Block variant='section'>
      <Text variant='h2'>Text</Text>
      <Text>The Typography component.</Text>

      <Block variant='code'>
        <pre>{`<Text variant="p">Hello World!</Text>`}</pre>
      </Block>

      <Text variant='h3'>Props</Text>
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
    </Block>
  );
}
