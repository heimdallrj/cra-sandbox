import React from 'react';
import {
  ThemeProvider as StyledProvider,
  createGlobalStyle,
} from 'styled-components';
import replace from 'lodash/replace';

import { masterStylesheet } from './theme';

import './normalize.css';

type Props = {
  children: React.ReactNode;
  config: any;
};

export default function ThemeProvider({ children, config }: Props) {
  // @todo: compose for all occurances
  const masterStylesheetParsed = replace(
    masterStylesheet,
    /{prefix}/g,
    config.prefix
  );
  const GlobalStyle = createGlobalStyle`${masterStylesheetParsed}`;

  return (
    <StyledProvider theme={{ prefix: config.prefix }}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  );
}
