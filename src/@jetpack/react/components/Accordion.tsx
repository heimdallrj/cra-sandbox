import React, { useState } from 'react';
import useConfig from '../hooks/useConfig';

type AccordionProps = {
  children: React.ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  const { prefix } = useConfig();
  return <div className={`${prefix}-accordion`}>{children}</div>;
}

type AccordionItemProps = {
  children: React.ReactNode;
  title: string;
};

export function AccordionItem({ children, title }: AccordionItemProps) {
  const { prefix } = useConfig();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${prefix}-accordion__item`}>
      <div
        className={`${prefix}-accordion__title`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className={`${prefix}-accordion__content`}>{children}</div>
      )}
    </div>
  );
}

export default Accordion;
