import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?:
    | 'aside' // Defines content aside from the page content
    | 'article' // Defines independent, self-contained content
    | 'code' // Define a piece of computer code
    | 'details' // Defines additional details that the user can view or hide
    | 'div' // Default element type
    | 'figcaption' // Defines a caption for a <figure> element
    | 'figure' // Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
    | 'footer' // Defines a footer for a document or section
    | 'header' // Specifies a header for a document or section
    | 'main' // Specifies the main content of a document
    | 'mark' // Defines marked/highlighted text
    | 'nav' // Defines navigation links
    | 'pre' // Defines preformatted text.
    | 'section' // Defines a section in a document
    | 'summary' // Defines a visible heading for a <details> element
    | 'time'; // Defines a date/time
};

export default function Block({ children, variant = 'div', ...props }: Props) {
  return React.createElement(variant, props, children);
}
