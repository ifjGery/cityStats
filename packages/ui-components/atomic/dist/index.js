if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/atomic.min.js');
} else {
  module.exports = require('./cjs/atomic.js');
}
