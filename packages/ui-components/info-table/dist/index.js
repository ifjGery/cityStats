if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/infoTable.min.js');
} else {
  module.exports = require('./cjs/infoTable.js');
}
