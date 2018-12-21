const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const devMode = process.env.NODE_ENV !== 'production';
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;
const addPlugins = devMode ? [] : [new BundleAnalyzerPlugin()];
const publicPath = devMode ? '' : './';

module.exports = {
  context: SRC_PATH,
  entry: {
    index: './index.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    publicPath,
    path: BUILD_PATH,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  resolve: {
    modules: ['node_modules', 'common'],
    alias: {
      common: path.resolve(SRC_PATH, 'common'),
    }
  },
  module: {
    rules: [{
      // 处理js|jsx文件
      test: /\.(js|jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
      include: SRC_PATH,
      exclude: /node_modules/,
    },
    // {
    //   // 处理html
    //   test: /\.html$/,
    //   use: [{
    //     loader: 'html-loader',
    //   }]
    // },
    {
      // 处理业务中的全局样式
      test: /\.less$/,
      exclude: [
        path.resolve(SRC_PATH, 'sys'),
        path.resolve(ROOT_PATH, 'node_modules/antd'),
      ],
      use: [styleLoader, 'css-loader', 'postcss-loader', 'less-loader'],
    },
    {
      // 处理业务样式，开启css module
      test: /\.less$/,
      use: [styleLoader, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]_[hash:base64:8]',
        },
      }, 'postcss-loader', 'less-loader'],
      include: path.resolve(SRC_PATH, 'sys'),
      exclude: /node_modules/,
    }, {
      // 处理antd样式
      test: /\.less$/,
      include: path.resolve(ROOT_PATH, 'node_modules/antd'),
      use: [styleLoader, 'css-loader', 'less-loader'],
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]',
          limit: 8192,
          publicPath: '../',
        },
      }],
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'iconfont/[name].[ext]',
        },
      }],
    },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
    }),
  ].concat(addPlugins),
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          // chunks: 'all',
          chunks: 'initial',
          minChunks: 2,
        },
        styles: {
          name: 'styles',
          test: /\.(less|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  // devtool: "source-map",
  devServer: {
    port: 2333,
    open: true,
    historyApiFallback: true,
    overlay: true,
    proxy: {
      '/api/*': {
        target: 'http://espotms.hhtcex.com',
        secure: false,
        changeOrigin: true,
      },
    }
  },
}
