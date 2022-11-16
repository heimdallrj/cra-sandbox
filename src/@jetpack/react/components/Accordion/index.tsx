import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export default function Accordion({ children }: Props) {
  const { prefix } = useContext(ThemeContext);
  return <div className={`${prefix}-accordion`}>{children}</div>;
}

export function AccordionItem({ children, title }: any) {
  const { prefix } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${prefix}-accordion-item`}>
      <div
        className={`${prefix}-accordion-title`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className={`${prefix}-accordion-content`}>{children}</div>
      )}
    </div>
  );
}
