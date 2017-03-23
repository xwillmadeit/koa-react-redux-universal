const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
const isomorphicConfig = require('./isomorphic-config')
const {
	vendors,
	getEntry,
	publicPath,
	jsRules,
	cssRulesOption
} = require('./wepback/base.config')

const appRoot = process.cwd()

const webpack_isomorphic_tools_plugin =
    new Webpack_isomorphic_tools_plugin(isomorphicConfig)
    .development()

const __DEV__ = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: Object.assign({}, { vendor: vendors }, getEntry()),
  output: {
    path: resolve(appRoot, 'server/public/build'),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash:8].js',
    publicPath: `${publicPath}build/`
  },
  module: {
    rules: [
      jsRules,
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract(cssRulesOption)
      },
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('images'),
        loader: 'url-loader?limit=10240'
      },
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('fonts'),
        loader: 'file-loader'
      },
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('svg'),
        loader: 'url-loader?limit=10240'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      disable: __DEV__
    }),
    webpack_isomorphic_tools_plugin
  ],
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'hidden-source-map'
}
