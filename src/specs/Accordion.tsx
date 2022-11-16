import {
  Block,
  Table,
  TableBody,
  TableCell,
  TableColHead,
  TableHeader,
  TableRow,
  Text,
} from '@jetpack/react';

export default function AccordionSpec() {
  return (
    <Block variant='section'>
      <Text variant='h2'>Accordion</Text>
      <Text>
        The <code>Block</code> component is to be used as a wrapper in html
        documents.
      </Text>

      <Block variant='code'>
        <pre>{`
<Accordion>
  <AccordionItem title='Item 1'>
    Item 1 Content
  </AccordionItem>
  <AccordionItem title='Item 2'>
    Item 2 Content
  </AccordionItem>
</Accordion>
        `}</pre>
      </Block>

      <Text variant='h3'>Props</Text>
      <Text variant='h4'>Accordion</Text>
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
        </TableBody>
      </Table>

      <Text variant='h4'>AccordionItem</Text>
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
              <code>title</code>
            </TableCell>
            <TableCell>
              <code>string</code>
            </TableCell>
            <TableCell>n/a</TableCell>
            <TableCell>Section Title</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Block>
  );
}
