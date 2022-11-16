import {
  Block,
  Button,
  Table,
  TableBody,
  TableCell,
  TableColHead,
  TableHeader,
  TableRow,
  Text,
  Row,
} from '@jetpack/react';

const tableData = [
  { name: 'children', type: 'node', defaultValue: 'n/a', desc: '' },
  {
    name: 'type?',
    type: "'button' | 'reset' | 'submit'",
    defaultValue: 'button',
    desc: '',
  },
  {
    name: 'variant?',
    type: "'contained' | 'outlined' | 'text'",
    defaultValue: 'contained',
    desc: '',
  },
  {
    name: 'size?',
    type: "'default' | 'large' | 'small'",
    defaultValue: 'default',
    desc: '',
  },
  {
    name: 'color?',
    type: "'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",
    defaultValue: 'primary',
    desc: '',
  },
  {
    name: 'calssName?',
    type: 'string',
    defaultValue: 'n/a',
    desc: '',
  },
];

export default function ButtonSpec() {
  return (
    <Block variant='section'>
      <Text variant='h2'>Button</Text>

      <div>
        <strong>color</strong>
        <Row gap={5}>
          <Button color='primary'>primary</Button>
          <Button color='secondary'>secondary</Button>
          <Button color='success'>success</Button>
          <Button color='error'>error</Button>
          <Button color='info'>info</Button>
          <Button color='warning'>warning</Button>
        </Row>
      </div>

      <Block variant='code'>
        <pre>{`
<Button
  type="button"
  variant="contained"
  size="button"
  color="primary"
  calssName="custom-class"
>Hello</Button>
        `}</pre>
      </Block>

      <strong>HTML Markup</strong>
      <code>
        <pre>{`
<button
  type="button"
  class="
    {$prefix}-btn
    {$prefix}-btn--default
    {$prefix}-btn--primary
    {$prefix}-btn--contained"
>Hello</button>
        `}</pre>
      </code>

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
          {tableData.map(({ name, type, defaultValue, desc }) => (
            <TableRow key={name}>
              <TableCell>
                <code>{name}</code>
              </TableCell>
              <TableCell>
                <code>{type}</code>
              </TableCell>
              <TableCell>
                <code>{defaultValue}</code>
              </TableCell>
              <TableCell>{desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Block>
  );
}
