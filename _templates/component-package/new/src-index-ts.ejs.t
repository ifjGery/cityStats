---
to: packages/ui-components/<%= name %>/src/index.ts
---

import <%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name) %>';

export default <%= h.inflection.camelize(name) %>;
