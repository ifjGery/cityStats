'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/app.min.js');
}
else {
  module.exports = require('./cjs/app.js');
}
