const webpack = require('webpack')
const { resolve } = require('path')
const appRoot = process.cwd()
const Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')

const webpack_isomorphic_tools_plugin = 
  new Webpack_isomorphic_tools_plugin(require('./isomorphic-config'))
  .development()

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'redux', 'react-redux'],
		home: './client/entries/home.js',
		dota: './client/entries/dota.js',
		lol: './client/entries/lol.js'
	},
	output: {
		path: resolve(appRoot, 'public/js'),
		filename: '[name].bundle.js',
		publicPath: `http://localhost:4001/public/js/`
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
				exclude: resolve(__dirname, 'node_modules'),
				use: [
					'style-loader',
					'css-loader'
				]
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
		webpack_isomorphic_tools_plugin
	]
}