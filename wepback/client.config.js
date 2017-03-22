const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appRoot = process.cwd()

module.exports = {
	entry: {
		home: [
			'webpack-hot-middleware/client?reload=true',
	  	'react-hot-loader/patch',
			resolve(appRoot, './client/entries/home.js')
		],
    dota: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      resolve(appRoot, './client/entries/dota.js')
    ],
    lol: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      resolve(appRoot, './client/entries/lol.js')
    ]
	},
	output: {
		filename: '[name].js',
    publicPath: 'http://localhost:4001/'
	},
	module: {
      rules: [
        {
            test: /\.js$/,
            exclude: resolve(appRoot, 'node_modules'),
            use: [
                'babel-loader',
                'eslint-loader'
            ]
        }, 
        {
            test: /\.s?css$/,
            use:  [
            	'style-loader',
            	'css-loader',
            	'sass-loader'
            ]
        },
        {
        	test: /\.(jpe?g|png|gif)/,
        	use: 'url-loader'
        }
      ]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['home'],
      template: resolve(appRoot, './index.html'),
      filename: 'home.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['dota'],
      template: resolve(appRoot, './index.html'),
      filename: 'dota.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['lol'],
      template: resolve(appRoot, './index.html'),
      filename: 'lol.html'
    })
  ]
}