import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?:
    | 'b' // format: Bold text
    | 'del' // format: Deleted text
    | 'div' // defines a division or a section
    | 'em' // foramt: Emphasized text
    | 'h1' // Heading 1
    | 'h2' // Heading 2
    | 'h3' // Heading 3
    | 'h4' // Heading 4
    | 'h5' // Heading 5
    | 'h6' // Heading 6
    | 'i' // format: Italic text
    | 'ins' // Inserted text
    | 'mark' // format: Marked text
    | 'p' // Paragraph
    | 'span' // Inline container
    | 'sub' // format: Subscript text
    | 'sup' // format: Superscript text
    | 'small' // format: Smaller text
    | 'strong'; // format: Important text
};

export default function Text({ children, variant = 'p', ...props }: Props) {
  return React.createElement(variant, props, children);
}
