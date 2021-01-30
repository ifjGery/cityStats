import React from 'react';

import style from './Test.less';

const test = () => {
  const temp = 1;
  return (
    <span className={style.test}>
      {temp}
    </span>
  );
};

export default test;
