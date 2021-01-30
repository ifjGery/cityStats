---
to: packages/ui-components/<%= name %>/src/<%= h.inflection.camelize(name) %>.tsx
---
import React from 'react';

import style from './<%= h.inflection.camelize(name) %>.less';

const <%= h.inflection.camelize(name, true) %> = () => {
  return (
    <span className={style.<%= h.inflection.camelize(name, true) %>}>
      // TODO: add content
    </span>
  );
};

export default <%= h.inflection.camelize(name, true) %>;
