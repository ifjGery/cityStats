'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/test.min.js');
}
else {
  module.exports = require('./cjs/test.js');
}
