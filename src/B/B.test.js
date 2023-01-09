import React from 'react';
import { screen, render } from '@testing-library/react';

import { B } from './B';

test('renders learn react link', () => {
  const inputLabel = /Name/i;
  render(<B />);
  const inputEl = screen.getByLabelText(inputLabel);
  expect(inputEl).toBeInTheDocument();
});
