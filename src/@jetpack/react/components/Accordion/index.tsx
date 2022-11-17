import React, { useState } from 'react';
import useConfig from '../../hooks/useConfig';

type Props = {
  children: React.ReactNode;
};

export function Accordion({ children }: Props) {
  const { prefix } = useConfig();
  return <div className={`${prefix}-accordion`}>{children}</div>;
}

export function AccordionItem({ children, title }: any) {
  const { prefix } = useConfig();
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

export default Accordion;
