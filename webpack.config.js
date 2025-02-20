const path = require('path');
const { library } = require('webpack');
module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 输入配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',  // 支持多种模块加载方式
    library: 'state-management-store',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js'],  // 解析 .ts 和 .js 文件
  },
  // 模式设置
  mode: 'production', // 使用生产模式进行优化

  // 配置模块解析规则
  module: {
    rules: [
      {
        test: /\.js$/, // 处理所有的js文件
        exclude: /node_modules/, // 排除node_modules
        use: {
          loader: 'babel-loader', // 使用Babel转译
          options: {
            presets: ['@babel/preset-env'], // 使用Babel预设来支持ES6+
          },
        },
      },
      {
        test: /\.ts$/,            // 处理 TypeScript 文件
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // 配置插件
  plugins: [],

  // 外部依赖
  externals: {
    react: 'React'
  }
}