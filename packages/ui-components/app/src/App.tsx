import React from 'react';
import Button from './Button';

import style from './app.less';

const App = () => {
  const temp = 1;
  return (
    <span className={style.app}>
      {temp}
      <Button />
    </span>
  );
};

export default App;
