const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
	entry: {
		vendor: ['react', 'react-dom'],
		home: './client/home.js',
		dota: './client/dota.js',
		lol: './client/lol.js'
	},
	output: {
		path: resolve(__dirname, 'public/js'),
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