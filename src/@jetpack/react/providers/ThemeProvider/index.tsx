import React from 'react';
import {
  ThemeProvider as StyledProvider,
  createGlobalStyle,
} from 'styled-components';
import replace from 'lodash/replace';

import { masterStylesheet } from './theme';

import './normalize.css';

const style = {
  '--primary-color': '#233142',
  '--secondary-color': '#455D79',
  '--tertiary-color': '#F95959',
  '--quaternary-color': '#E3E3E3',
  '--success-color': 'blue',
  '--error-color': 'red',
  '--info-color': 'green',
  '--warning-color': 'yellow',
} as React.CSSProperties;

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
    <div style={style}>
      <StyledProvider theme={{ prefix: config.prefix }}>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </div>
  );
}
