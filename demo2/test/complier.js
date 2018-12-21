import path from 'path';
import webpack from 'webpack';
import memoryfs from 'memory-fs';
import HelloWorldPlugin from '../src/HelloWorldPlugin';
import FileListPlugin from '../src/FileListPlugin';

export default (fixture, options = {}) => {
  const complier = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, '../src/loader.js'),
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
  });

  complier.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    complier.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err);
      resolve(stats);
    })
  })
}
