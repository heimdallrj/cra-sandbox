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

export default function BlockSpec() {
  return (
    <Block variant='section'>
      <Text variant='h2'>Block</Text>
      <Text>
        The <code>Block</code> component is to be used as a wrapper in html
        documents.
      </Text>

      <Block variant='code'>
        <pre>{`<Block variant="div">...</Block>`}</pre>
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
                'aside' | 'article' | 'code' | 'details' | 'div' | 'figcaption'
                | 'figure' | 'footer' | 'header' | 'main' | 'mark' | 'nav' |
                'pre' | 'section' | 'summary' | 'time'
              </code>
            </TableCell>
            <TableCell>
              <code>div</code>
            </TableCell>
            <TableCell>The element type</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Block>
  );
}
