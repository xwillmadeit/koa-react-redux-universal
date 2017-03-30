const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  vendors,
  publicPath,
  jsRules
} = require('./index').basicConfig
const {
  getEntry,
  getEntryModule
} = require('./index').entryHandler

const { sortPackage } = require('./utils')

const appRoot = process.cwd()

const getHtmlWebpackPlugins = () => {
  return getEntryModule().map(module => {
    return new HtmlWebpackPlugin({
      chunks: ['vendor', module],
      chunksSortMode: sortPackage(['vendor', module]),
      template: resolve(appRoot, 'index.html'),
      filename: `${module}.html`,
      title: `${module} page`
    })
  })
}

module.exports = {
  entry: {
    vendor: vendors,
    ...getEntry('hot')
  },
  output: {
    filename: '[name].js',
    publicPath: publicPath
  },
  module: {
    rules: [
      jsRules,
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: 'url-loader?limit=10240'
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    ...getHtmlWebpackPlugins()
  ],
  devtool: 'cheap-module-eval-source-map'
}
