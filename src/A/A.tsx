import React from 'react';

import classes from './man.module.css';

export const A: React.FC<{ isAdmin: boolean }> = () => {
  return (
    <div id="one" className={classes.box}>
      <input data-testId="a-input" type="text" />
    </div>
  );
};
