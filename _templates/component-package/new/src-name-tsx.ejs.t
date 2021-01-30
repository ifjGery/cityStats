---
to: packages/ui-components/<%= name %>/src/<%= h.inflection.camelize(name) %>.tsx
---
import React from 'react';

import style from './<%= h.inflection.camelize(name) %>.less';

function <%= h.inflection.camelize(name) %>() {
  const temp = 1;
  return (
    <span className={style.<%= h.inflection.camelize(name, true) %>}>
      {temp}
    </span>
  );
}

export default <%= h.inflection.camelize(name) %>;
