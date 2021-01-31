import React from 'react';

import style from './atomic.less';

const atomic = () => {
  const temp = 1;
  return (
    <span className={style['atomic']}>
      {temp}
    </span>
  );
};

export default atomic;
