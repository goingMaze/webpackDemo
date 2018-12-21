class FileListPlugin {
  apply(complier) {
    complier.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      var filelist = '本次构建生成的文件列表:\n\n';

      for(var filename in compilation.assets) {
        filelist += ('- ' + filename + '\n');
      }

      console.log(filelist);

      compilation.assets['filelist.md'] = {
        source() {
          return filelist;
        },
        size() {
          return filelist.length;
        }
      }

      callback();
    });
  }
}

module.exports = FileListPlugin;
