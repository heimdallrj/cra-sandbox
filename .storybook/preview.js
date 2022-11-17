import React from 'react';
import { ThemeProvider } from '@jetpack/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider config={{ prefix: 'jp', theme: {} }}>
      <Story />
    </ThemeProvider>
  ),
];
