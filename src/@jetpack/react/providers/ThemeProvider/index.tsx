import React from 'react';
import {
  ThemeProvider as StyledProvider,
  createGlobalStyle,
} from 'styled-components';

import './normalize.css';

type Props = {
  children: React.ReactNode;
  config: any;
};

export default function ThemeProvider({ children, config }: Props) {
  // @todo: generate global stylesheet based on config, adding a prefix for style classes etc.
  const GlobalStyle = createGlobalStyle`${config.theme}`;

  return (
    <StyledProvider theme={{}}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledProvider>
  );
}
