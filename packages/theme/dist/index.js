if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/theme.min.js.js');
} else {
  module.exports = require('./cjs/theme.js.js');
}
