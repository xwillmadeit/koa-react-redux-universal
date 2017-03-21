import Koa from 'koa'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.babel'
import webpackMiddleware from 'koa-webpack-dev-middleware'

const app = new Koa()
const compiler = webpack(webpackConfig)

const serverOptions = {
	contentBase: 'http://localhost:4000',
	quiet: true,
	noInfo: true,
	hot: true,
	inline: true,
	lazy: false,
	publicPath: webpackConfig.output.publicPath,
	headers: { 'Access-Control-Allow-Origin': '*' },
	stats: { colors: true }
}

app.use(webpackMiddleware(compiler, serverOptions))

app.listen(4001, () => {
	console.log('webpack dev server is running at 4001...')
})
