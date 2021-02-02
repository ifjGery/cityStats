import React from 'react';
import { Icon } from '@ui-component/atomic';

import style from './app.less';

const App = () => {
  const temp = 1;
  return (
    <span className={style.app}>
      {temp}
      <Icon type="info" />
    </span>
  );
};

export default App;
