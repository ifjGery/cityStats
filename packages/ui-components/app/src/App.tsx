import React from 'react';
import Button from './Button';
import Table from '@ui-component/info-table';

import style from './app.less';

const App = () => {
  const temp = 1;
  return (
    <span className={style.app}>
      {temp}
      <Button />
      <Table />
    </span>
  );
};

export default App;
