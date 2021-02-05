import React from 'react';
import Icon, { IconType } from 'Component/icon'

import style from './spinner.less';

const Spinner = () => (
  <span className={style.spinner}>
    <Icon type={IconType.spinner} />
  </span>
);

export default Spinner;
