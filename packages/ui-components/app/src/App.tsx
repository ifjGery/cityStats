import React from 'react';

import style from './App.less';

const App = () => {
  const temp = 1;
  return (
    <span className={style.app}>
      {temp}
    </span>
  );
};

export default App;
