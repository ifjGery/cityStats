---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/src/index.d.ts
---
import React from 'react';

export default function <%= h.changeCase.pascalCase(name) %>() : React.FunctionComponentElement<any>;
