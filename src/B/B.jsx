import React from 'react';

import { A } from '../A';

export const B = () => {
  return (
    <div id="one">
      B
      <A name="some" />
      <label htmlFor="name">
        Name:
        <input type="text" id="name" />
      </label>
    </div>
  );
};
