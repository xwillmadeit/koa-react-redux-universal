const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const appRoot = process.cwd()
const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')

const webpack_isomorphic_tools_plugin = 
  new Webpack_isomorphic_tools_plugin(require('./isomorphic-config'))
  .development()

const __DEV__ = process.env.NODE_ENV !== 'prod'

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'redux', 'react-redux'],
		home: './client/entries/home.js',
		dota: './client/entries/dota.js',
		lol: './client/entries/lol.js'
	},
	output: {
		path: resolve(appRoot, 'server', 'public', 'build'),
		filename: __DEV__ ? '[name].bundle.js' : '[name].[chunkhash:8].js',
		publicPath: __DEV__ ? 'http://localhost:4001/build/' : 'http://localhost:4000/build/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: resolve(__dirname, 'node_modules'),
				use: [
					'babel-loader',
					'eslint-loader'
				]
			},
	      	{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
	          		fallback: 'style-loader',
	          		use: 'css-loader'
		        })
	      	},
			{
		        test: webpack_isomorphic_tools_plugin.regular_expression('images'),
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
