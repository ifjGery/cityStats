---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/src/index.ts
---

import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

export default <%= h.changeCase.pascalCase(name) %>;
