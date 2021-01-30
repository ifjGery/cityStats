---
to: packages/ui-components/<%= name %>/dist/index.js
---
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./commonjs/<%= name %>.min.js');
}
else {
  module.exports = require('./commonjs/<%= name %>.js');
}
