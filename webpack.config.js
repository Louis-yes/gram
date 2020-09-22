const path = require('path');

module.exports = {
  entry: './assets/scripts.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  }
};
