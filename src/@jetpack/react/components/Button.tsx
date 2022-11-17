import clsx from 'clsx';
import React from 'react';

import useConfig from '../hooks/useConfig';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'reset' | 'submit';
  variant?: 'contained' | 'outlined' | 'text';
}

export default function Button({
  children,
  className,
  size = 'medium',
  type = 'button',
  variant = 'contained',
  ...restProps
}: IProps) {
  // @todo: avoid multiple uses
  const { prefix } = useConfig();

  return (
    <button
      {...restProps}
      type={type}
      className={clsx(
        `${prefix}-btn`,
        `${prefix}-btn--${variant}`,
        `${prefix}-btn--${variant}-${size}`,
        className
      )}
    >
      {children}
    </button>
  );
}
