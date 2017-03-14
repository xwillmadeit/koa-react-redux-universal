const webpack = require('webpack')
const { resolve } = require('path')
const appRoot = process.cwd()

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'redux', 'react-redux'],
		home: './client/home.js',
		dota: './client/dota.js',
		lol: './client/lol.js'
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
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}