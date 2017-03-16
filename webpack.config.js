const webpack = require('webpack')
const { resolve } = require('path')
const appRoot = process.cwd()

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'redux', 'react-redux'],
		home: './client/entries/home.js',
		dota: './client/entries/dota.js',
		lol: './client/entries/lol.js'
	},
	output: {
		path: resolve(appRoot, 'public/js'),
		filename: '[name].bundle.js'
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
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}