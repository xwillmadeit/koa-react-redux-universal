const { resolve } = require('path')

module.exports = {
	entry: {
		home: './public/src/js/home.js',
		dota: './public/src/js/dota.js',
		lol: './public/src/js/lol.js'
	},
	output: {
		path: resolve(__dirname, 'public/dist'),
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
	}
}