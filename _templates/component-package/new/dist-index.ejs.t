---
to: packages/ui-components/<%= h.changeCase.paramCase(name) %>/dist/index.js
---
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/<%= h.changeCase.camelCase(name) %>.min.js');
} else {
  module.exports = require('./cjs/<%= h.changeCase.camelCase(name) %>.js');
}
