const path = require('path');
const { library } = require('webpack');
module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 输入配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'TStore.js', // 打包后的文件名
    library: 'TStore', // 可以通过全局变量访问
    libraryTarget: 'umd', // 使用这个库可以通过不同方式导入（CommonJS, AMD, global）
    globalObject: 'this', // 支持浏览器和Node.js环境
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
        test: /\.css$/, // 处理样式文件
        use: ['style-loader', 'css-loader'],
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