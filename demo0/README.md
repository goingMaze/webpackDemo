# webpack 零配置演示

- 演示1：普通js
- 演示2：react和react-router

注意：由于webpack默认无法解析jsx，react演示部分需要通过babel转码成js文件后使用

Tips: 可能用到的命令
```
# 安装依赖
$ npm install

# 启动服务
$ npx http-server

# jsx转换成js
$ npx babel ./src --out-dir ./src --ignore ".src/*.js"

# 构建
$ npm run build
```
