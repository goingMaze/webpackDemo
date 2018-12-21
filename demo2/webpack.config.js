const path = require('path');
const HelloWorldPlugin = require('./src/HelloWorldPlugin');
const FileListPlugin = require('./src/FileListPlugin');

module.exports = {
  // context: path.resolve(__dirname, './test'),
  entry: `./test/example.txt`,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: {
        loader: path.resolve(__dirname, './src/loader.js'),
        options: {
          name: 'Alice',
        }
      }
    }]
  },
  plugins: [
    new HelloWorldPlugin({ setting: true }),
    new FileListPlugin(),
  ]
}
