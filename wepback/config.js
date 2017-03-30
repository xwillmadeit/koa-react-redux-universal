const { resolve } = require('path')

const appRoot = process.cwd()

const __PROD__ = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT

// 基本配置
const basicConfig = {
  hashLength: 8,
  sizeLimit: 10240,
  vendors: [
    'react',
    'react-dom',
    'redux',
    'react-redux'
  ],
  entryPath: 'client/entries',
  publicPath: `http://localhost:${PORT}/`,
  jsRules: {
    test: /\.js$/,
    exclude: resolve(appRoot, 'node_modules'),
    use: [
      'babel-loader',
      'eslint-loader'
    ]
  },
  cssRulesOption: {
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      'postcss-loader',
      'sass-loader'
    ]
  }
}

module.exports = basicConfig
