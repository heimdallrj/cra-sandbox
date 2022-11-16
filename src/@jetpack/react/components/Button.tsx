import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'default' | 'large' | 'small';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'text';
  calssName?: string;
  // Globals
  accessKey?: string;
  autoCapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
  autoFocus?: boolean;
  contentEditable?: boolean;
  contextMenu?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
  draggable?: boolean;
  enterKeyHint?: string;
  hidden?: boolean;
  id?: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
};

export default function Button({
  children,
  type = 'button',
  color = 'primary',
  ...restProps
}: Props) {
  const { prefix } = useContext(ThemeContext);
  return (
    <button
      {...restProps}
      type={type}
      className={`${prefix}-btn ${prefix}-btn--default ${prefix}-btn--${color} ${prefix}-btn--contained`}
    >
      {children}
    </button>
  );
}
