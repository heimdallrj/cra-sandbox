import React from 'react';
import ReactSelect, { Props } from 'react-select';

import useConfig from '../hooks/useConfig';

export default function Select({ options }: Props) {
  const { prefix } = useConfig();

  return <ReactSelect classNamePrefix={prefix} options={options} />;
}
