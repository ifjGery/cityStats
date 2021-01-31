import React from 'react';

import style from './infoTable.less';

const infoTable = () => {
  const temp = 1;
  return (
    <span className={style['info-table']}>
      {temp}
    </span>
  );
};

export default infoTable;
