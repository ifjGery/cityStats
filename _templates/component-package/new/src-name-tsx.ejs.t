---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React from 'react';

import style from './<%= h.changeCase.camelCase(name) %>.less';

const <%= h.changeCase.pascalCase(name) %> = () => {
  const temp = 1;
  return (
    <span className={style['<%= h.changeCase.paramCase(name) %>']}>
      {temp}
    </span>
  );
};

export default <%= h.changeCase.pascalCase(name) %>;
