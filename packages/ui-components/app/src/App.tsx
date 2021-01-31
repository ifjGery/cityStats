import React from 'react';

import style from './app.less';

const App = () => {
  const temp = 1;
  return (
    <span className={style.app}>
      {temp}
    </span>
  );
};

export default App;
