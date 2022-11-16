import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export default function useConfig() {
  return useContext(ThemeContext);
}
