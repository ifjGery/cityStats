'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./commonjs/app.min.js');
}
else {
  module.exports = require('./commonjs/app.js');
}
