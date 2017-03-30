const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
const isomorphicConfig = require('./isomorphic-config')
const {
	vendors,
	publicPath,
  hashLength,
  sizeLimit,
	jsRules,
	cssRulesOption
} = require('./wepback').basicConfig
const { getEntry } = require('./wepback').entryHandler

const appRoot = process.cwd()

const webpack_isomorphic_tools_plugin =
    new Webpack_isomorphic_tools_plugin(isomorphicConfig)
    .development()

const __DEV__ = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: Object.assign({}, { vendor: vendors }, getEntry()),
  output: {
    path: resolve(appRoot, 'server/public/build'),
    filename: __DEV__ ? '[name].js' : `[name].[chunkhash:${hashLength}].js`,
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
        loader: `url-loader?limit=${sizeLimit}`
      },
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('fonts'),
        loader: 'file-loader'
      },
      {
        test: webpack_isomorphic_tools_plugin.regular_expression('svg'),
        loader: `url-loader?limit=${sizeLimit}`
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin({
      filename: `[name].[contenthash:${hashLength}].css`,
      disable: __DEV__
    }),
    webpack_isomorphic_tools_plugin
  ],
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'hidden-source-map'
}
