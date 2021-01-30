---
to: packages/ui-components/<%= name %>/src/index.d.ts
---
import React from 'react';

export default function <%= h.inflection.camelize(name) %>() : React.FunctionComponent;
