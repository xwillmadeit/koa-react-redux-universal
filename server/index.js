import path from 'path'
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackMiddleware from 'koa-webpack-dev-middleware'
import Home from '../components/home'
import Dota from '../components/dota'
import Lol from '../components/lol'
import { homeReducer } from '../reducers/home'
import { renderPage } from './util/htmlTemplate'

const router = new Router()

router.get('/', (ctx, next) => {
	ctx.body = renderPage(Home, 'home.bundle.js', homeReducer)
})

router.get('/home', (ctx, next) => {
	ctx.body = renderPage(Home, 'home.bundle.js', homeReducer)
})

router.get('/lol', (ctx, next) => {
	ctx.body = renderPage(Lol, 'lol.bundle.js')
})

router.get('/dota', (ctx, next) => {
	ctx.body = renderPage(Dota, 'dota.bundle.js')
})

//initialize app instance
const app = new Koa()

app.use(serve(path.resolve(__dirname + '/public')))
app.use(router.routes()).use(router.allowedMethods())

if (process.env.NODE_ENV === 'dev') {
	app.use(webpackMiddleware(webpack(webpackConfig), {
		publicPath: '/public/js',
		lazy: true
	}))
}

// fallback 404 page
app.use(async (ctx, next) => {
	ctx.body = 'Page not exists...'
})

app.listen(4000, () => {
	console.log('app is running at 4000...')
})
